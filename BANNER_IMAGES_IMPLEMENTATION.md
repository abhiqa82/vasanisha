# Banner Images Implementation Preview

## 📸 Recommended Images for Each Page

### 1. **Homepage (index.html)**
**Page:** `index.html`  
**Section:** `.hero` (lines 228-237)  
**Current:** Gradient background  
**Recommended Image:** Modern business technology / app development workspace

**Free Image Sources:**
- **Unsplash:** https://unsplash.com/s/photos/business-technology-app-development
- **Pexels:** https://www.pexels.com/search/business%20technology/
- **Pixabay:** https://pixabay.com/images/search/business%20technology/

**Suggested Search Terms:**
- "modern office technology"
- "app development workspace"
- "digital transformation business"
- "professional tech team"

**Image Preview Location:** Will replace gradient background in hero section

---

### 2. **Import Export Page (import-export.html)**
**Page:** `import-export.html`  
**Section:** `.hero.import-export-hero` (line 133)  
**Current:** Gradient background  
**Recommended Image:** Shipping containers at port / global trade logistics

**Free Image Sources:**
- **Unsplash:** https://unsplash.com/s/photos/shipping-containers-port
- **Pexels:** https://www.pexels.com/search/shipping%20containers/
- **Pixabay:** https://pixabay.com/images/search/shipping%20containers/

**Suggested Search Terms:**
- "shipping containers port"
- "cargo ship containers"
- "global trade logistics"
- "international commerce"

**Image Preview Location:** Will replace gradient background in hero section

---

### 3. **Use Cases Page (usecases.html)**
**Page:** `usecases.html`  
**Section:** `.hero.usecase-hero` (line 76)  
**Current:** Gradient background  
**Recommended Image:** Business success / team collaboration / growth analytics

**Free Image Sources:**
- **Unsplash:** https://unsplash.com/s/photos/business-success-growth
- **Pexels:** https://www.pexels.com/search/business%20success/
- **Pixabay:** https://pixabay.com/images/search/business%20growth/

**Suggested Search Terms:**
- "business team success"
- "digital transformation success"
- "business growth analytics"
- "professional collaboration"

**Image Preview Location:** Will replace gradient background in hero section

---

### 4. **Contact Page (contact.html)**
**Page:** `contact.html`  
**Section:** `.contact-header` (line 137)  
**Current:** Gradient background  
**Recommended Image:** Customer service / business communication / support team

**Free Image Sources:**
- **Unsplash:** https://unsplash.com/s/photos/customer-service-business
- **Pexels:** https://www.pexels.com/search/customer%20service/
- **Pixabay:** https://pixabay.com/images/search/business%20communication/

**Suggested Search Terms:**
- "customer service professional"
- "business communication team"
- "contact support"
- "professional consultation"

**Image Preview Location:** Will replace gradient background in contact-header section

---

### 5. **Work With Us Page (work-with-us.html)**
**Page:** `work-with-us.html`  
**Section:** `.work-header` (line 179)  
**Current:** Gradient background  
**Recommended Image:** Diverse professional team / workplace collaboration / career opportunities

**Free Image Sources:**
- **Unsplash:** https://unsplash.com/s/photos/diverse-team-workplace
- **Pexels:** https://www.pexels.com/search/diverse%20team/
- **Pixabay:** https://pixabay.com/images/search/team%20collaboration/

**Suggested Search Terms:**
- "diverse professional team"
- "workplace collaboration"
- "career opportunities"
- "modern office team"

**Image Preview Location:** Will replace gradient background in work-header section

---

### 6. **H1B Visa Page (h1b-visa.html)**
**Page:** `h1b-visa.html`  
**Section:** `.hero` (line 135)  
**Current:** Gradient background with floating cards  
**Recommended Image:** Professional work USA / immigration career / USA business

**Free Image Sources:**
- **Unsplash:** https://unsplash.com/s/photos/professional-work-usa
- **Pexels:** https://www.pexels.com/search/professional%20work/
- **Pixabay:** https://pixabay.com/images/search/professional%20career/

**Suggested Search Terms:**
- "professional work USA"
- "USA business career"
- "immigration professional"
- "career success"

**Image Preview Location:** Will replace gradient background in hero section (floating cards will remain on top)

---

## 🎨 CSS Implementation Preview

### Current CSS (Gradient Background):
```css
.hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
}
```

### New CSS (With Background Image):
```css
.hero {
    background: linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                url('images/banners/homepage-banner.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed; /* Optional: parallax effect */
}
```

### Overlay for Text Readability:
```css
.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4); /* Dark overlay */
    z-index: 0;
}

.hero-content {
    position: relative;
    z-index: 1; /* Content above overlay */
}
```

---

## 📁 File Structure After Implementation

```
Vasanisha_website/
├── images/
│   └── banners/
│       ├── homepage-banner.jpg
│       ├── import-export-banner.jpg
│       ├── usecases-banner.jpg
│       ├── contact-banner.jpg
│       ├── work-with-us-banner.jpg
│       └── h1b-visa-banner.jpg
├── index.html
├── import-export.html
├── usecases.html
├── contact.html
├── work-with-us.html
├── h1b-visa.html
└── styles.css
```

---

## ✅ Implementation Steps

1. **Download Images:**
   - Visit the free image sources listed above
   - Download high-quality images (1920x600px to 1920x800px)
   - Optimize images (compress to < 300KB using TinyPNG or similar)
   - Save to `images/banners/` directory

2. **Update CSS:**
   - Add background-image properties to each hero section
   - Add dark overlay for text readability
   - Ensure responsive design maintained

3. **Test:**
   - Check all pages on desktop
   - Test mobile responsiveness
   - Verify text readability on all images
   - Check page load speed

---

## 🔍 Image Requirements

- **Format:** JPG (optimized) or WebP
- **Dimensions:** 1920x600px to 1920x800px
- **File Size:** < 300KB per image
- **License:** Free for commercial use (Unsplash, Pexels, Pixabay)
- **Aspect Ratio:** 16:9 or 3:1 (wide banner format)

---

## 📋 Next Steps

1. **Review this plan** - Confirm image themes are appropriate
2. **Download images** - From free sources or provide your own
3. **Place images** - Save to `images/banners/` folder
4. **Approve implementation** - I'll update CSS and HTML
5. **Test & Deploy** - Verify on all devices before deployment

---

**Ready to proceed?** Once you approve the image themes and provide/download the images, I'll implement them across all pages!

