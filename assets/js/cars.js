/**
 * BAM Auto — Cars Inventory Module
 * Fetches data/cars.json and renders the car grid + detail modal.
 */

const WHATSAPP_NUMBER = '16144002014';
const SMS_NUMBER = '+16144002014';
const PHONE_NUMBER = '+16144002014';

let carsData = [];

/**
 * Fetch car inventory from JSON.
 */
async function loadCars() {
    try {
        const response = await fetch('data/cars.json');
        if (!response.ok) throw new Error('Failed to load inventory');
        carsData = await response.json();
        renderCarGrid(carsData);
    } catch (err) {
        console.error('Error loading cars:', err);
        showEmptyState();
    }
}

/**
 * Render the car grid.
 */
function renderCarGrid(cars) {
    const grid = document.getElementById('cars-grid');
    if (!grid) return;

    if (!cars || cars.length === 0) {
        showEmptyState();
        return;
    }

    grid.innerHTML = '';
    cars.forEach((car, index) => {
        const card = createCarCard(car, index);
        grid.appendChild(card);
    });
}

/**
 * Create a car card element.
 */
function createCarCard(car, index) {
    const lang = getLang();
    const carName = `${car.year} ${car.make} ${car.model}`;
    const price = car.price ? `$${car.price.toLocaleString()}` : t('cars.contactPrice');

    const card = document.createElement('article');
    card.className = 'car-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', carName);
    card.style.animationDelay = `${index * 0.1}s`;

    const coverImage = car.images && car.images.length > 0 ? car.images[0] : '';

    card.innerHTML = `
    <div class="car-card__image">
      ${coverImage
            ? `<img src="${coverImage}" alt="${carName}" loading="lazy" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'car-card__placeholder\\'>🚗</div>'">`
            : '<div class="car-card__placeholder">🚗</div>'
        }
      ${car.titleStatus ? `<span class="car-card__badge">${car.titleStatus}</span>` : ''}
    </div>
    <div class="car-card__body">
      <h3 class="car-card__title">${carName}</h3>
      <div class="car-card__meta">
        <span class="car-card__mileage">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ${car.mileageDisplay} mi
        </span>
        <span class="car-card__price">${price}</span>
      </div>
      <button class="btn btn--primary btn--sm car-card__cta" data-car-index="${index}">
        ${t('cars.details')}
      </button>
    </div>
  `;

    card.addEventListener('click', () => openCarModal(car));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openCarModal(car);
        }
    });

    // Prevent button from double-triggering
    const btn = card.querySelector('.car-card__cta');
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openCarModal(car);
    });

    return card;
}

/**
 * Show the empty state when no cars are available.
 */
function showEmptyState() {
    const grid = document.getElementById('cars-grid');
    if (!grid) return;

    grid.innerHTML = `
    <div class="cars-empty">
      <div class="cars-empty__icon">🚗</div>
      <p class="cars-empty__text" data-i18n="cars.empty">${t('cars.empty')}</p>
      <a href="sms:${SMS_NUMBER}" class="btn btn--primary" data-i18n="cars.emptyBtn">${t('cars.emptyBtn')}</a>
    </div>
  `;
}

/**
 * Open the car detail modal.
 */
function openCarModal(car) {
    const lang = getLang();
    const carName = `${car.year} ${car.make} ${car.model}`;
    const price = car.price ? `$${car.price.toLocaleString()}` : t('cars.contactPrice');
    const waMsg = t('cars.whatsappTemplate').replace('{car}', carName);
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;
    const smsMsg = waMsg;
    const smsLink = `sms:${SMS_NUMBER}?body=${encodeURIComponent(smsMsg)}`;

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal modal--active';
    modal.id = 'car-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', carName);

    const imagesHtml = car.images && car.images.length > 0
        ? car.images.map((img, i) => `
        <div class="modal__slide ${i === 0 ? 'modal__slide--active' : ''}">
          <img src="${img}" alt="${carName} - Photo ${i + 1}" loading="lazy"
            onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'car-card__placeholder\\'>🚗</div>'">
        </div>
      `).join('')
        : '<div class="modal__slide modal__slide--active"><div class="car-card__placeholder" style="height:300px">🚗</div></div>';

    const totalImages = car.images ? car.images.length : 0;

    modal.innerHTML = `
    <div class="modal__backdrop"></div>
    <div class="modal__content">
      <button class="modal__close" aria-label="${t('cars.modal.close')}">✕</button>

      <div class="modal__gallery">
        <div class="modal__slides">
          ${imagesHtml}
        </div>
        ${totalImages > 1 ? `
          <button class="modal__nav modal__nav--prev" aria-label="Previous">‹</button>
          <button class="modal__nav modal__nav--next" aria-label="Next">›</button>
          <div class="modal__counter">1 / ${totalImages}</div>
        ` : ''}
      </div>

      <div class="modal__details">
        <h2 class="modal__title">${carName}</h2>
        <div class="modal__info-grid">
          <div class="modal__info-item">
            <span class="modal__info-label" data-i18n="cars.mileage">${t('cars.mileage')}</span>
            <span class="modal__info-value">${car.mileageDisplay} mi</span>
          </div>
          ${car.titleStatus ? `
            <div class="modal__info-item">
              <span class="modal__info-label" data-i18n="cars.titleStatus">${t('cars.titleStatus')}</span>
              <span class="modal__info-value">${car.titleStatus}</span>
            </div>
          ` : ''}
          <div class="modal__info-item">
            <span class="modal__info-label">Price</span>
            <span class="modal__info-value modal__info-value--price">${price}</span>
          </div>
          ${car.note ? `
            <div class="modal__info-item modal__info-item--full">
              <span class="modal__info-label" data-i18n="cars.note">${t('cars.note')}</span>
              <span class="modal__info-value">${car.note}</span>
            </div>
          ` : ''}
        </div>

        <div class="modal__actions">
          <a href="${waLink}" target="_blank" rel="noopener" class="btn btn--whatsapp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.111.553 4.095 1.516 5.817L.05 23.5l5.8-1.42A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.88 0-3.63-.52-5.13-1.42l-.36-.22-3.45.85.89-3.37-.24-.38A9.79 9.79 0 012.18 12c0-5.42 4.4-9.82 9.82-9.82 5.42 0 9.82 4.4 9.82 9.82 0 5.42-4.4 9.82-9.82 9.82z"/></svg>
            <span data-i18n="cars.modal.whatsapp">${t('cars.modal.whatsapp')}</span>
          </a>
          <a href="${smsLink}" class="btn btn--primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span data-i18n="cars.modal.textUs">${t('cars.modal.textUs')}</span>
          </a>
          <a href="tel:${PHONE_NUMBER}" class="btn btn--outline">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span data-i18n="cars.modal.callUs">${t('cars.modal.callUs')}</span>
          </a>
        </div>
      </div>
    </div>
  `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Set up event listeners
    let currentSlide = 0;

    // Close modal
    const closeModal = () => {
        modal.classList.remove('modal--active');
        document.body.style.overflow = '';
        setTimeout(() => modal.remove(), 300);
    };

    modal.querySelector('.modal__backdrop').addEventListener('click', closeModal);
    modal.querySelector('.modal__close').addEventListener('click', closeModal);
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    });

    // Image navigation
    if (totalImages > 1) {
        const slides = modal.querySelectorAll('.modal__slide');
        const counter = modal.querySelector('.modal__counter');

        const showSlide = (n) => {
            slides[currentSlide].classList.remove('modal__slide--active');
            currentSlide = (n + totalImages) % totalImages;
            slides[currentSlide].classList.add('modal__slide--active');
            counter.textContent = `${currentSlide + 1} / ${totalImages}`;
        };

        modal.querySelector('.modal__nav--prev').addEventListener('click', (e) => {
            e.stopPropagation();
            showSlide(currentSlide - 1);
        });
        modal.querySelector('.modal__nav--next').addEventListener('click', (e) => {
            e.stopPropagation();
            showSlide(currentSlide + 1);
        });

        // Swipe support for mobile
        let touchStartX = 0;
        const gallery = modal.querySelector('.modal__gallery');
        gallery.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        gallery.addEventListener('touchend', (e) => {
            const diff = touchStartX - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 50) {
                showSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
            }
        }, { passive: true });
    }

    // Focus trap
    modal.querySelector('.modal__close').focus();
}

/**
 * Re-render car grid when language changes.
 */
window.addEventListener('languageChanged', () => {
    if (carsData.length > 0) {
        renderCarGrid(carsData);
    } else {
        showEmptyState();
    }
});

// Load cars on DOM ready
document.addEventListener('DOMContentLoaded', loadCars);
