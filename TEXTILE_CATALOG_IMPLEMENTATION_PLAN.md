# Textile Catalog Page - Implementation Plan

**Date:** December 2025  
**Objective:** Create a textile catalog sub-page of import-export.html using existing Vasanisha design system

---

## 📋 **Requirements Analysis**

### **Source File Analysis:**
- **File:** `C:\Users\abhis\Downloads\exim-textile-catalog.html`
- **Content:** Premium home textiles catalog with product categories, certifications, and inquiry form
- **Sections:**
  1. Hero section with statistics
  2. Certifications banner
  3. Product catalog (6 products)
  4. Why Choose Us (6 features)
  5. Contact/Inquiry form

### **Integration Requirements:**
- ✅ Sub-page of import-export.html
- ✅ Use current layout and color structure
- ✅ Maintain existing UI consistency
- ✅ Use Vasanisha branding
- ✅ Integrate with existing form handling

---

## 🎯 **Implementation Strategy**

### **1. Page Structure**
- **File Name:** `textile-catalog.html`
- **URL:** `/textile-catalog.html`
- **Link From:** import-export.html (Textiles & Apparel section)

### **2. Design System Integration**
- **Colors:** Use existing CSS variables
  - Primary: `var(--primary-color)` (#1976d2)
  - Secondary: `var(--secondary-color)` (#ff9800)
  - Background: `var(--background-white)`, `var(--background-light)`
  
- **Typography:** Roboto font (existing)
- **Icons:** Material Icons (existing)
- **Layout:** Existing `.container`, `.section`, `.hero` classes

### **3. Reusable Components**
- ✅ Navigation (existing structure)
- ✅ Footer (existing structure)
- ✅ Form validation (existing script.js)
- ✅ EmailJS integration (existing)
- ✅ CSS classes: `.service-card`, `.benefit-card`, `.stat-card`

### **4. New Elements Needed**
- Hero section with stats (can use existing `.hero` class)
- Certifications banner (simple banner section)
- Product cards (can adapt `.service-card` styling)
- Inquiry form (adapt existing contact form structure)

---

## 🏗️ **Page Structure**

### **Sections:**

1. **Navigation** - Use existing navbar structure
2. **Hero Section** - Textile catalog hero with stats
3. **Certifications Banner** - Quality standards badges
4. **Product Catalog** - 6 product categories
5. **Why Choose Us** - 6 benefit cards
6. **Inquiry Form** - Contact form for samples/pricing
7. **Footer** - Use existing footer structure

---

## 🔧 **Technical Implementation**

### **CSS Classes to Use:**
- `.container` - Page container
- `.section` - Section wrapper
- `.hero` - Hero section
- `.service-card` - For product cards
- `.benefit-card` - For Why Choose Us cards
- `.stat` - For hero statistics
- `.form-container` - For form
- `.form-group` - Form fields
- `.btn`, `.btn-primary` - Buttons

### **JavaScript Integration:**
- Use existing form validation functions
- Add new form handler for textile inquiry
- Integrate with EmailJS (use existing service/template)

### **Form Fields:**
- Name * (required)
- Company Name * (required)
- Email * (required)
- Phone/WhatsApp * (required)
- Country * (required - dropdown)
- Product Interest * (required - dropdown)
- Estimated Monthly Order Quantity (optional)
- Message (optional)

---

## 🔗 **Integration Points**

### **1. Link from import-export.html:**
- Add link in Textiles & Apparel section
- Can be a button or "View Catalog" link

### **2. Navigation:**
- Keep existing navigation structure
- No new menu item needed (it's a sub-page)

### **3. Sitemap:**
- Add new page to sitemap.xml

---

## ✅ **Implementation Checklist**

- [ ] Create textile-catalog.html with Vasanisha structure
- [ ] Adapt content from source file
- [ ] Use existing CSS classes
- [ ] Integrate form with EmailJS
- [ ] Add link from import-export.html
- [ ] Update sitemap.xml
- [ ] Test form submission
- [ ] Test responsive design
- [ ] Verify EmailJS integration

---

## 📝 **Content Mapping**

### **From Source to Vasanisha:**
- Hero stats → Use existing stat card structure
- Product cards → Use `.service-card` class
- Benefit cards → Use `.benefit-card` class
- Certifications → Simple banner section
- Form → Adapt existing contact form structure

---

**Status:** Ready for implementation

