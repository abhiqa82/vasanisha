# 🧪 Local Testing Guide

## Quick Testing Options

### Option 1: Direct File Path (Simplest)
Just open the HTML files directly in your browser:

**Homepage:**
```
file:///C:/Users/abhis/Website_dev/Vasanisha_website/index.html
```

**Or simply:**
1. Navigate to: `C:\Users\abhis\Website_dev\Vasanisha_website\`
2. Double-click `index.html` to open in your default browser

**Other Pages:**
- Contact: `index.html` → Click "Contact" link, or open `contact.html` directly
- Import Export: `import-export.html`
- H1B Visa: `h1b-visa.html`
- Use Cases: `usecases.html`
- Work With Us: `work-with-us.html`

---

### Option 2: Local HTTP Server (Recommended)
Using a local server is better for testing because it:
- Handles relative paths correctly
- Avoids CORS issues
- Mimics production environment

#### Using Python (if installed):
```powershell
# Navigate to project folder
cd C:\Users\abhis\Website_dev\Vasanisha_website

# Python 3
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```

Then open in browser:
```
http://localhost:8000
```

#### Using Node.js (if installed):
```powershell
# Install http-server globally (one time)
npm install -g http-server

# Run server
cd C:\Users\abhis\Website_dev\Vasanisha_website
http-server -p 8000
```

Then open in browser:
```
http://localhost:8000
```

#### Using VS Code Live Server:
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser will open automatically at: `http://127.0.0.1:5500` (or similar port)

---

## 🎯 Recommended Testing URLs

### If using Local Server:
- **Homepage:** `http://localhost:8000/index.html` or `http://localhost:8000/`
- **Contact:** `http://localhost:8000/contact.html`
- **Import Export:** `http://localhost:8000/import-export.html`
- **H1B Visa:** `http://localhost:8000/h1b-visa.html`
- **Use Cases:** `http://localhost:8000/usecases.html`
- **Work With Us:** `http://localhost:8000/work-with-us.html`

### If opening directly:
- **Homepage:** `file:///C:/Users/abhis/Website_dev/Vasanisha_website/index.html`
- **Contact:** `file:///C:/Users/abhis/Website_dev/Vasanisha_website/contact.html`
- **Import Export:** `file:///C:/Users/abhis/Website_dev/Vasanisha_website/import-export.html`
- **H1B Visa:** `file:///C:/Users/abhis/Website_dev/Vasanisha_website/h1b-visa.html`
- **Use Cases:** `file:///C:/Users/abhis/Website_dev/Vasanisha_website/usecases.html`
- **Work With Us:** `file:///C:/Users/abhis/Website_dev/Vasanisha_website/work-with-us.html`

---

## ✅ What to Check

1. **Banner Images:** Verify all 6 pages show banner images correctly
2. **Text Readability:** Ensure white text is visible on dark overlay
3. **Navigation:** Test all links work properly
4. **Responsive Design:** Resize browser window to test mobile view
5. **Image Loading:** Check that all banner images load quickly

---

## 🚀 Quick Start Command

If you have Python installed, run this in PowerShell:

```powershell
cd C:\Users\abhis\Website_dev\Vasanisha_website; python -m http.server 8000
```

Then open: **http://localhost:8000**

