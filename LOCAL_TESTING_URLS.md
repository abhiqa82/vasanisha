# Local Testing URLs - Vasanisha Website

**Project Path:** `C:\Users\abhis\Website_dev\Vasanisha_website`  
**Last Updated:** December 2025

---

## 🚀 Quick Start - Choose Your Server

### **Option 1: Python HTTP Server (Port 8000) - Recommended**

**Start Server:**
```powershell
cd C:\Users\abhis\Website_dev\Vasanisha_website
python -m http.server 8000
```

**Testing URLs:**

| Page | URL |
|------|-----|
| **Homepage** | `http://localhost:8000/` or `http://localhost:8000/index.html` |
| **Contact** | `http://localhost:8000/contact.html` |
| **Work With Us** | `http://localhost:8000/work-with-us.html` |
| **Use Cases** | `http://localhost:8000/usecases.html` |
| **H1B Visa** | `http://localhost:8000/h1b-visa.html` |
| **Import Export** | `http://localhost:8000/import-export.html` |
| **Textile Catalog** | `http://localhost:8000/textile-catalog.html` |

---

### **Option 2: Apache Server (Port 80) - Already Running**

**Note:** Apache is currently running on port 80 (PID: 18608, 25024)

**If using XAMPP:**
- Copy project to: `C:\xampp\htdocs\Vasanisha_website\`
- Or create symlink/shortcut

**If using Laragon:**
- Copy project to: `C:\laragon\www\Vasanisha_website\`
- Or create symlink/shortcut

**Testing URLs:**

| Page | URL |
|------|-----|
| **Homepage** | `http://localhost/Vasanisha_website/` or `http://localhost/Vasanisha_website/index.html` |
| **Contact** | `http://localhost/Vasanisha_website/contact.html` |
| **Work With Us** | `http://localhost/Vasanisha_website/work-with-us.html` |
| **Use Cases** | `http://localhost/Vasanisha_website/usecases.html` |
| **H1B Visa** | `http://localhost/Vasanisha_website/h1b-visa.html` |
| **Import Export** | `http://localhost/Vasanisha_website/import-export.html` |
| **Textile Catalog** | `http://localhost/Vasanisha_website/textile-catalog.html` |

**If Laragon Virtual Host configured:**
- `http://vasanisha.test/` (homepage)
- `http://vasanisha.test/contact.html`
- `http://vasanisha.test/import-export.html`
- etc.

---

### **Option 3: Alternative Port (If 8000 is blocked)**

**Start Server:**
```powershell
cd C:\Users\abhis\Website_dev\Vasanisha_website
python -m http.server 8080
```

**Testing URLs:**

| Page | URL |
|------|-----|
| **Homepage** | `http://localhost:8080/` or `http://localhost:8080/index.html` |
| **Contact** | `http://localhost:8080/contact.html` |
| **Work With Us** | `http://localhost:8080/work-with-us.html` |
| **Use Cases** | `http://localhost:8080/usecases.html` |
| **H1B Visa** | `http://localhost:8080/h1b-visa.html` |
| **Import Export** | `http://localhost:8080/import-export.html` |
| **Textile Catalog** | `http://localhost:8080/textile-catalog.html` |

---

## 📋 Complete URL List (Python Server - Port 8000)

### **Main Pages:**
- 🏠 **Homepage:** `http://localhost:8000/`
- 📧 **Contact:** `http://localhost:8000/contact.html`
- 💼 **Work With Us:** `http://localhost:8000/work-with-us.html`
- 📊 **Use Cases:** `http://localhost:8000/usecases.html`
- 🛂 **H1B Visa:** `http://localhost:8000/h1b-visa.html`
- 🌍 **Import Export:** `http://localhost:8000/import-export.html`
- 👕 **Textile Catalog:** `http://localhost:8000/textile-catalog.html`

### **Anchor Links (from Homepage):**
- 🔧 **Services Section:** `http://localhost:8000/#services`
- ℹ️ **About Section:** `http://localhost:8000/#about`

---

## 🔧 Troubleshooting

### **If `http://localhost:8000` doesn't work:**

1. **Check if server is running:**
   ```powershell
   netstat -ano | findstr :8000
   ```
   - If no output, server is not running
   - Start server: `python -m http.server 8000`

2. **Check if Python is installed:**
   ```powershell
   python --version
   ```
   - Should show: `Python 3.13.5` (or similar)

3. **Try different port:**
   ```powershell
   python -m http.server 8080
   ```
   - Then use: `http://localhost:8080`

4. **Check firewall:**
   - Windows Firewall may block port 8000
   - Allow Python through firewall if prompted

### **If `http://localhost/Vasanisha_website/` doesn't work:**

1. **Check if Apache is running:**
   ```powershell
   netstat -ano | findstr :80
   ```
   - Should show LISTENING status

2. **Verify project location:**
   - XAMPP: `C:\xampp\htdocs\Vasanisha_website\`
   - Laragon: `C:\laragon\www\Vasanisha_website\`

3. **Check Apache error logs:**
   - XAMPP: `C:\xampp\apache\logs\error.log`
   - Laragon: `C:\laragon\bin\apache\logs\error.log`

---

## ✅ Recommended Testing Workflow

### **Step 1: Start Python Server**
```powershell
cd C:\Users\abhis\Website_dev\Vasanisha_website
python -m http.server 8000
```

### **Step 2: Open Browser**
- Open your browser (Chrome, Firefox, Edge)
- Navigate to: `http://localhost:8000`

### **Step 3: Test All Pages**
1. ✅ Homepage loads correctly
2. ✅ Navigation links work
3. ✅ All pages accessible
4. ✅ Forms functional
5. ✅ Images load properly
6. ✅ Responsive design works

---

## 📝 Quick Reference

**Current Working Directory:**
```
C:\Users\abhis\Website_dev\Vasanisha_website
```

**Start Server Command:**
```powershell
python -m http.server 8000
```

**Primary Testing URL:**
```
http://localhost:8000
```

**All Pages Base URL:**
```
http://localhost:8000/[page-name].html
```

---

**Last Updated:** December 2025  
**Status:** ✅ Ready for Testing

