# BAM Auto — Company Website

Static, bilingual (EN/ES) website for **BAM Auto LLC** (BAM Towing LLC), deployable to GitHub Pages at [bamautollc.com](https://bamautollc.com).

## 🚀 Deployment to GitHub Pages

1. **Create a GitHub repo** (e.g., `bamautollc.github.io` or any repo name).
2. **Push all files** in this folder to the repo's `main` branch.
3. Go to **Settings → Pages** in your repo.
4. Under **Source**, select `Deploy from a branch` → `main` → `/ (root)` → **Save**.
5. Your site will be live at `https://<username>.github.io/<repo-name>/` within a few minutes.

### Custom Domain (`bamautollc.com`)

1. In **Settings → Pages → Custom domain**, enter `bamautollc.com` and click **Save**.
2. At your domain registrar, add these DNS records:
   - **A records** pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **CNAME record**: `www` → `<username>.github.io`
3. Check **Enforce HTTPS** once DNS propagates.
4. Optionally create a `CNAME` file in the repo root containing: `bamautollc.com`

---

## 🚗 Managing Car Inventory

The car inventory is powered by a single JSON file: **`data/cars.json`**.

### Adding a New Car

1. Open `data/cars.json`.
2. Add a new object to the JSON array:

```json
{
  "id": "2015-honda-civic",
  "year": 2015,
  "make": "Honda",
  "model": "Civic",
  "mileage": 98000,
  "mileageDisplay": "98k",
  "titleStatus": "Clean title",
  "price": 8500,
  "images": [
    "assets/cars/2015-honda-civic/front.jpg",
    "assets/cars/2015-honda-civic/interior.jpg"
  ]
}
```

3. If `price` is `null`, the site will show "Contact for price".
4. Commit and push to GitHub.

### Adding Car Images Locally (Recommended)

1. Create a folder: `assets/cars/<vehicle-id>/` (e.g., `assets/cars/2015-honda-civic/`).
2. Place image files inside (`.jpg`, `.png`, `.webp`).
3. Reference them in `data/cars.json`:
   ```json
   "images": [
     "assets/cars/2015-honda-civic/front.jpg",
     "assets/cars/2015-honda-civic/side.jpg"
   ]
   ```

### Using Remote Image URLs

You can also use direct image URLs:
```json
"images": [
  "https://example.com/my-car-photo.jpg"
]
```

> ⚠️ **Note about Google Drive**: Google Drive `/preview` links do **not** work as direct `<img>` sources. The current inventory uses Google Drive `thumbnail` URLs which may have limited access. For best reliability, **download images into the repo** under `assets/cars/` or use a proper image hosting service (Imgur, Cloudflare R2, etc.).

### Editing a Car

Find the car entry in `data/cars.json` by its `id` and update any fields. Push changes to GitHub.

### Removing a Car

Delete the car's JSON object from the array in `data/cars.json`. Optionally delete its images from `assets/cars/<vehicle-id>/`. Push changes.

---

## 📁 Project Structure

```
├── index.html          # Language selection splash
├── choose.html         # Split choice: Towing / Cars
├── towing.html         # Towing & roadside assistance
├── cars.html           # Used car inventory
├── assets/
│   ├── css/
│   │   └── styles.css  # Complete design system
│   ├── js/
│   │   ├── i18n.js     # Internationalization (EN/ES)
│   │   └── cars.js     # Car grid & modal logic
│   └── cars/           # Local car images (by vehicle ID)
├── data/
│   └── cars.json       # Car inventory data
└── README.md           # This file
```

## 🌐 Bilingual Support

- Language preference is stored in `localStorage` and persists across pages.
- Every page (except `index.html`) has a language toggle button (EN ↔ ES).
- All UI text is driven by the `translations` object in `assets/js/i18n.js`.
- To add/edit translations, modify the `en` and `es` objects in `i18n.js`.

## 📞 Contact Information

- **Phone**: 614-400-2014
- **Email**: info@bamautollc.com
- **Address**: 1820 Worthington Run Dr, Columbus, OH 43235
- **Facebook**: [BAM Auto](https://www.facebook.com/share/14T9Eok62kC/)
