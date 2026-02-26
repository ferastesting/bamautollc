/**
 * BAM Auto — i18n (Internationalization) Module
 * Supports English (en) and Spanish (es).
 * Language preference is stored in localStorage.
 */

const translations = {
  en: {
    // Navigation / Global
    "nav.home": "Home",
    "nav.towing": "Towing",
    "nav.cars": "Used Cars",
    "nav.back": "← Back",
    "lang.toggle": "ES",
    "lang.current": "EN",

    // Index page
    "index.welcome": "Welcome to",
    "index.brand": "BAM Auto",
    "index.tagline": "Towing & Used Cars in Columbus, Ohio",
    "index.chooseLanguage": "Choose your language",
    "index.english": "English",
    "index.spanish": "Español",

    // Choose page
    "choose.title": "What are you looking for?",
    "choose.towing": "Towing & Roadside Assistance",
    "choose.towingDesc": "24/7 towing, jump starts, tire changes & more across Ohio",
    "choose.cars": "Buy Used Cars",
    "choose.carsDesc": "Affordable, quality pre-owned vehicles in Columbus",

    // Towing page
    "towing.hero.title": "Towing & Roadside Assistance",
    "towing.hero.subtitle": "Fast, reliable service across all of Ohio",
    "towing.coverage.title": "Coverage Area",
    "towing.coverage.text": "We serve all of Ohio. Long-distance towing outside of Ohio is available — just schedule in advance!",
    "towing.coverage.based": "Based in Columbus, Ohio",
    "towing.services.title": "Our Services",
    "towing.service.towing": "Towing",
    "towing.service.towingDesc": "Local and long-distance towing for cars, trucks, and SUVs",
    "towing.service.winch": "Winch Out",
    "towing.service.winchDesc": "Stuck in a ditch or mud? We'll get you out safely",
    "towing.service.motorcycle": "Motorcycle Towing",
    "towing.service.motorcycleDesc": "Safe, specialized transport for your motorcycle",
    "towing.service.impound": "Impound Release & Towing",
    "towing.service.impoundDesc": "We help you retrieve and transport impounded vehicles",
    "towing.service.tire": "Tire Replacement",
    "towing.service.tireDesc": "Flat tire? We'll swap it for your spare on the spot",
    "towing.service.battery": "Battery Jump Starts",
    "towing.service.batteryDesc": "Dead battery? We'll get you running again fast",
    "towing.contact.title": "Contact Us",
    "towing.contact.call": "Call Us",
    "towing.contact.text": "Text Us",
    "towing.contact.whatsapp": "WhatsApp",
    "towing.contact.email": "Email Us",
    "towing.contact.facebook": "Facebook",
    "towing.contact.address": "Address",
    "towing.contact.addressValue": "1820 Worthington Run Dr, Columbus, OH 43235",
    "towing.request.title": "Request Service",
    "towing.request.name": "Your Name",
    "towing.request.location": "Your Location",
    "towing.request.vehicle": "Vehicle (Year, Make, Model)",
    "towing.request.issue": "Issue / Service Needed",
    "towing.request.sendWhatsapp": "Send via WhatsApp",
    "towing.request.sendEmail": "Send via Email",
    "towing.request.messageTemplate": "Hi BAM Auto, I need roadside assistance.\nName: {name}\nLocation: {location}\nVehicle: {vehicle}\nIssue: {issue}",

    // Cars page
    "cars.title": "Used Cars for Sale",
    "cars.subtitle": "Quality pre-owned vehicles at affordable prices",
    "cars.mileage": "Mileage",
    "cars.titleStatus": "Title",
    "cars.contactPrice": "Contact for price",
    "cars.messageUs": "Message Us",
    "cars.details": "View Details",
    "cars.empty": "No vehicles listed right now — text us!",
    "cars.emptyBtn": "Text Us",
    "cars.modal.close": "Close",
    "cars.modal.photos": "Photos",
    "cars.modal.info": "Vehicle Info",
    "cars.modal.interested": "Interested? Contact Us",
    "cars.modal.whatsapp": "WhatsApp",
    "cars.modal.textUs": "Text Us",
    "cars.modal.callUs": "Call Us",
    "cars.whatsappTemplate": "Hi BAM Auto, I'm interested in the {car}. Is it available? Can you share price and details?",
    "cars.note": "Note",

    // Footer
    "footer.rights": "© 2025 BAM Auto LLC. All rights reserved.",
    "footer.phone": "614-400-2014",
    "footer.email": "info@bamautollc.com"
  },

  es: {
    // Navigation / Global
    "nav.home": "Inicio",
    "nav.towing": "Grúa",
    "nav.cars": "Autos Usados",
    "nav.back": "← Atrás",
    "lang.toggle": "EN",
    "lang.current": "ES",

    // Index page
    "index.welcome": "Bienvenido a",
    "index.brand": "BAM Auto",
    "index.tagline": "Grúa y Autos Usados en Columbus, Ohio",
    "index.chooseLanguage": "Elige tu idioma",
    "index.english": "English",
    "index.spanish": "Español",

    // Choose page
    "choose.title": "¿Qué estás buscando?",
    "choose.towing": "Grúa y Asistencia en Carretera",
    "choose.towingDesc": "Grúa 24/7, arranques, cambios de llanta y más en todo Ohio",
    "choose.cars": "Comprar Autos Usados",
    "choose.carsDesc": "Vehículos usados de calidad a precios accesibles en Columbus",

    // Towing page
    "towing.hero.title": "Grúa y Asistencia en Carretera",
    "towing.hero.subtitle": "Servicio rápido y confiable en todo Ohio",
    "towing.coverage.title": "Área de Cobertura",
    "towing.coverage.text": "Servimos a todo Ohio. Grúa de larga distancia fuera de Ohio disponible — ¡solo agenda con anticipación!",
    "towing.coverage.based": "Ubicados en Columbus, Ohio",
    "towing.services.title": "Nuestros Servicios",
    "towing.service.towing": "Grúa",
    "towing.service.towingDesc": "Grúa local y de larga distancia para autos, camionetas y SUVs",
    "towing.service.winch": "Rescate con Winche",
    "towing.service.winchDesc": "¿Atascado en una zanja o lodo? Te sacamos de forma segura",
    "towing.service.motorcycle": "Grúa para Motocicletas",
    "towing.service.motorcycleDesc": "Transporte seguro y especializado para tu motocicleta",
    "towing.service.impound": "Liberación y Grúa de Corralón",
    "towing.service.impoundDesc": "Te ayudamos a recuperar y transportar vehículos del corralón",
    "towing.service.tire": "Cambio de Llanta",
    "towing.service.tireDesc": "¿Llanta ponchada? La cambiamos por tu refacción en el momento",
    "towing.service.battery": "Arranque de Batería",
    "towing.service.batteryDesc": "¿Batería muerta? Te ponemos en marcha rápidamente",
    "towing.contact.title": "Contáctanos",
    "towing.contact.call": "Llamar",
    "towing.contact.text": "Mensaje de Texto",
    "towing.contact.whatsapp": "WhatsApp",
    "towing.contact.email": "Correo",
    "towing.contact.facebook": "Facebook",
    "towing.contact.address": "Dirección",
    "towing.contact.addressValue": "1820 Worthington Run Dr, Columbus, OH 43235",
    "towing.request.title": "Solicitar Servicio",
    "towing.request.name": "Tu Nombre",
    "towing.request.location": "Tu Ubicación",
    "towing.request.vehicle": "Vehículo (Año, Marca, Modelo)",
    "towing.request.issue": "Problema / Servicio Necesario",
    "towing.request.sendWhatsapp": "Enviar por WhatsApp",
    "towing.request.sendEmail": "Enviar por Correo",
    "towing.request.messageTemplate": "Hola BAM Auto, necesito asistencia en la carretera.\nNombre: {name}\nUbicación: {location}\nVehículo: {vehicle}\nProblema: {issue}",

    // Cars page
    "cars.title": "Autos Usados en Venta",
    "cars.subtitle": "Vehículos usados de calidad a precios accesibles",
    "cars.mileage": "Millaje",
    "cars.titleStatus": "Título",
    "cars.contactPrice": "Contactar por precio",
    "cars.messageUs": "Contáctanos",
    "cars.details": "Ver Detalles",
    "cars.empty": "No hay vehículos listados en este momento — ¡escríbenos!",
    "cars.emptyBtn": "Escríbenos",
    "cars.modal.close": "Cerrar",
    "cars.modal.photos": "Fotos",
    "cars.modal.info": "Información del Vehículo",
    "cars.modal.interested": "¿Interesado? Contáctanos",
    "cars.modal.whatsapp": "WhatsApp",
    "cars.modal.textUs": "Escríbenos",
    "cars.modal.callUs": "Llámanos",
    "cars.whatsappTemplate": "Hola BAM Auto, me interesa el {car}. ¿Sigue disponible? ¿Me puede compartir el precio y detalles?",
    "cars.note": "Nota",

    // Footer
    "footer.rights": "© 2025 BAM Auto LLC. Todos los derechos reservados.",
    "footer.phone": "614-400-2014",
    "footer.email": "info@bamautollc.com"
  }
};

/**
 * Get the current language from localStorage, defaulting to 'en'.
 */
function getLang() {
  return localStorage.getItem('lang') || 'en';
}

/**
 * Set the language in localStorage and apply translations.
 */
function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

/**
 * Get a translation string by key.
 */
function t(key) {
  const lang = getLang();
  return (translations[lang] && translations[lang][key]) || (translations['en'] && translations['en'][key]) || key;
}

/**
 * Apply translations to all elements with [data-i18n] attribute.
 * Also updates html lang, placeholder attributes, and toggle button.
 */
function applyTranslations(lang) {
  if (!lang) lang = getLang();
  const dict = translations[lang] || translations['en'];

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Update all data-i18n-placeholder elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // Update all data-i18n-aria elements
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) {
      el.setAttribute('aria-label', dict[key]);
    }
  });

  // Update language toggle button
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = dict['lang.toggle'];
    toggleBtn.setAttribute('aria-label', lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés');
  }
}

/**
 * Initialize the language toggle button behavior.
 */
function initLangToggle() {
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = getLang();
      const next = current === 'en' ? 'es' : 'en';
      setLanguage(next);
      // Dispatch event for dynamic content (e.g., cars page)
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: next } }));
    });
  }
}

/**
 * Initialize i18n on page load.
 */
function initI18n() {
  const lang = getLang();
  applyTranslations(lang);
  initLangToggle();
}

// Auto-init when DOM is ready
document.addEventListener('DOMContentLoaded', initI18n);
