# Banner Images Plan for Vasanisha Website

## Overview
This document outlines the recommended banner images for each page header, sourced from free stock photo sites (Unsplash, Pexels, Pixabay).

---

## 1. **Homepage (index.html)**
**Current Hero Section:** Gradient background with floating cards
**Recommended Image Theme:** Modern app development, digital transformation, business technology

**Suggested Image:**
- **Source:** Unsplash/Pexels
- **Keywords:** "business technology", "app development", "digital transformation", "modern office technology"
- **Image Description:** Professional workspace with multiple devices (laptop, tablet, smartphone) showing app interfaces, or a modern business team collaborating with technology
- **Dimensions:** 1920x800px (recommended for hero sections)
- **Placement:** Background image for `.hero` section with overlay for text readability

**Example URLs (Free Sources):**
- Unsplash: `https://unsplash.com/s/photos/business-technology-app-development`
- Pexels: `https://www.pexels.com/search/business%20technology/`
- Pixabay: `https://pixabay.com/images/search/business%20technology/`

---

## 2. **Import Export Page (import-export.html)**
**Current Hero Section:** Gradient background
**Recommended Image Theme:** Global trade, shipping containers, logistics, international commerce

**Suggested Image:**
- **Source:** Unsplash/Pexels
- **Keywords:** "shipping containers port", "global trade logistics", "cargo ship", "international trade"
- **Image Description:** Aerial view of shipping containers at a port, or cargo ship with containers, or world map with trade routes
- **Dimensions:** 1920x600px
- **Placement:** Background image for `.hero.import-export-hero` section

**Example URLs (Free Sources):**
- Unsplash: `https://unsplash.com/s/photos/shipping-containers-port`
- Pexels: `https://www.pexels.com/search/shipping%20containers/`
- Pixabay: `https://pixabay.com/images/search/shipping%20containers/`

---

## 3. **Use Cases Page (usecases.html)**
**Current Hero Section:** Gradient background
**Recommended Image Theme:** Business success, digital growth, transformation, analytics

**Suggested Image:**
- **Source:** Unsplash/Pexels
- **Keywords:** "business growth", "digital success", "business analytics", "team success"
- **Image Description:** Business team celebrating success, or growth chart/analytics dashboard, or handshake representing business partnerships
- **Dimensions:** 1920x600px
- **Placement:** Background image for `.hero.usecase-hero` section

**Example URLs (Free Sources):**
- Unsplash: `https://unsplash.com/s/photos/business-success-growth`
- Pexels: `https://www.pexels.com/search/business%20success/`
- Pixabay: `https://pixabay.com/images/search/business%20growth/`

---

## 4. **Contact Page (contact.html)**
**Current Hero Section:** Gradient background
**Recommended Image Theme:** Communication, customer service, support, connection

**Suggested Image:**
- **Source:** Unsplash/Pexels
- **Keywords:** "customer service", "business communication", "contact support", "team communication"
- **Image Description:** Professional customer service representative, or business team in meeting, or modern communication devices
- **Dimensions:** 1920x600px
- **Placement:** Background image for `.contact-header` section

**Example URLs (Free Sources):**
- Unsplash: `https://unsplash.com/s/photos/customer-service-business`
- Pexels: `https://www.pexels.com/search/customer%20service/`
- Pixabay: `https://pixabay.com/images/search/business%20communication/`

---

## 5. **Work With Us Page (work-with-us.html)**
**Current Hero Section:** Gradient background
**Recommended Image Theme:** Team collaboration, workplace culture, career opportunities, diverse team

**Suggested Image:**
- **Source:** Unsplash/Pexels
- **Keywords:** "diverse team", "workplace collaboration", "career opportunities", "professional team"
- **Image Description:** Diverse professional team working together, or modern office workspace, or team collaboration meeting
- **Dimensions:** 1920x600px
- **Placement:** Background image for `.work-header` section

**Example URLs (Free Sources):**
- Unsplash: `https://unsplash.com/s/photos/diverse-team-workplace`
- Pexels: `https://www.pexels.com/search/diverse%20team/`
- Pixabay: `https://pixabay.com/images/search/team%20collaboration/`

---

## 6. **H1B Visa Page (h1b-visa.html)**
**Current Hero Section:** Gradient background with floating cards
**Recommended Image Theme:** Immigration, professional work, USA landmarks, career growth

**Suggested Image:**
- **Source:** Unsplash/Pexels
- **Keywords:** "professional work USA", "immigration career", "USA business", "professional success"
- **Image Description:** Professional working in modern office, or USA city skyline (NYC, San Francisco), or professional handshake representing career opportunities
- **Dimensions:** 1920x800px
- **Placement:** Background image for `.hero` section with overlay

**Example URLs (Free Sources):**
- Unsplash: `https://unsplash.com/s/photos/professional-work-usa`
- Pexels: `https://www.pexels.com/search/professional%20work/`
- Pixabay: `https://pixabay.com/images/search/professional%20career/`

---

## Implementation Notes

### Image Requirements:
- **Format:** JPG or WebP (for better compression)
- **Dimensions:** 1920x600px to 1920x800px (responsive)
- **File Size:** Optimized to < 300KB for fast loading
- **License:** Free for commercial use (Unsplash, Pexels, Pixabay)

### CSS Implementation:
- Add `background-image` property to hero sections
- Add dark overlay (`rgba(0,0,0,0.4)`) for text readability
- Use `background-size: cover` and `background-position: center`
- Maintain responsive design with media queries

### File Structure:
- Create `/images/banners/` directory
- Save images as:
  - `homepage-banner.jpg`
  - `import-export-banner.jpg`
  - `usecases-banner.jpg`
  - `contact-banner.jpg`
  - `work-with-us-banner.jpg`
  - `h1b-visa-banner.jpg`

---

## Next Steps:
1. Review and approve image recommendations
2. Download images from free sources (or provide your own)
3. Optimize images for web (compress, resize)
4. Implement CSS changes to add background images
5. Test on all devices and browsers

