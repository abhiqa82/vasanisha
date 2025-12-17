# Textile Catalog Banner Image Requirement

## Image Specification

**File Path:** `images/banners/textile-banner.jpg`

**Description:** 
- Soft white fabric
- Multiple kitchen napkins placed and neatly folded
- Clean, professional appearance suitable for textile catalog hero section
- White/cream color scheme

**Image Requirements:**
- **Dimensions:** 1920x1080 pixels (or higher resolution for retina displays)
- **Format:** JPG/JPEG (optimized for web)
- **File Size:** Under 500KB (optimized)
- **Background:** White/cream fabric texture with folded kitchen napkins
- **Style:** Professional product photography, clean and well-lit

## Current Status

The CSS is configured to use `images/banners/textile-banner.jpg` as the hero background image. 

**CSS Location:** `textile-catalog.html` line ~91
```css
.textile-hero {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
                url('images/banners/textile-banner.jpg');
    ...
}
```

## Action Required

1. Create or source the image of white fabric with folded kitchen napkins
2. Save the image as `images/banners/textile-banner.jpg`
3. Ensure the image meets the specifications above
4. Test the page to verify the image displays correctly

## Image Sources

Possible sources for the image:
- Professional photography
- Stock photo services (Unsplash, Pexels, etc.)
- Custom image generation tools
- Product photography

## Notes

- The image will have a dark overlay (40% opacity) applied for better text readability
- The image uses `background-attachment: fixed` for parallax effect on scroll
- Image should be optimized for web to ensure fast loading times

