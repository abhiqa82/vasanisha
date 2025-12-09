# Local Server Setup Guide - XAMPP vs Laragon vs Python

## 🎯 Current Status

The documentation mentions Python's `http.server`, but if you were using **XAMPP** or **Laragon** previously, here's how to set it up:

---

## 🟢 Option 1: Laragon (Recommended for Windows)

### If Using Laragon:

1. **Start Laragon**
   - Open Laragon application
   - Click "Start All" button

2. **Copy Project to Laragon**
   - Copy your project folder to: `C:\laragon\www\`
   - Or create a symlink/shortcut

3. **Access URL:**
   ```
   http://localhost/Vasanisha_website/
   ```
   or
   ```
   http://vasanisha.test/
   ```
   (if you configured a virtual host)

4. **Full URLs:**
   - Homepage: `http://localhost/Vasanisha_website/` or `http://localhost/Vasanisha_website/index.html`
   - Contact: `http://localhost/Vasanisha_website/contact.html`
   - Import Export: `http://localhost/Vasanisha_website/import-export.html`

---

## 🟡 Option 2: XAMPP

### If Using XAMPP:

1. **Start XAMPP**
   - Open XAMPP Control Panel
   - Start **Apache** service

2. **Copy Project to XAMPP**
   - Copy project to: `C:\xampp\htdocs\Vasanisha_website\`

3. **Access URL:**
   ```
   http://localhost/Vasanisha_website/
   ```

4. **Full URLs:**
   - Homepage: `http://localhost/Vasanisha_website/`
   - Contact: `http://localhost/Vasanisha_website/contact.html`
   - Import Export: `http://localhost/Vasanisha_website/import-export.html`

---

## 🔵 Option 3: Python HTTP Server (Current Documentation)

### If Using Python:

1. **Open PowerShell/Command Prompt**
2. **Navigate to project:**
   ```powershell
   cd C:\Users\abhis\Website_dev\Vasanisha_website
   ```

3. **Start server:**
   ```powershell
   python -m http.server 8000
   ```

4. **Access URL:**
   ```
   http://localhost:8000
   ```

---

## 🔍 How to Check Which Server You're Using

### Check if XAMPP is Running:
```powershell
Get-Service | Where-Object {$_.Name -like "*xampp*" -or $_.DisplayName -like "*xampp*"}
```

### Check if Laragon is Running:
- Look for Laragon icon in system tray
- Check if `C:\laragon\www\` exists

### Check if Python Server is Running:
```powershell
netstat -ano | findstr :8000
```

### Check if Apache (XAMPP/Laragon) is Running:
```powershell
netstat -ano | findstr :80
```

---

## 📋 Quick Decision Guide

**Use Laragon if:**
- ✅ You have it installed
- ✅ You need PHP/MySQL support (future)
- ✅ You prefer GUI-based server management

**Use XAMPP if:**
- ✅ You have it installed
- ✅ You need full Apache/PHP/MySQL stack
- ✅ You're familiar with it

**Use Python if:**
- ✅ You just need a simple static file server
- ✅ You don't need PHP/MySQL
- ✅ You prefer command-line tools

---

## 🚀 Recommended Setup for This Project

Since this is a **static HTML/CSS/JS website** (no PHP required), any of these work:

1. **Laragon** (easiest if already installed)
2. **Python HTTP Server** (simplest, no installation needed if Python exists)
3. **XAMPP** (if already using it)

**For this project specifically:**
- All three will work equally well
- No server-side processing needed
- Just needs to serve static files

---

## 🔧 Troubleshooting

### If `http://localhost:8000` is not working:

1. **Check if port 8000 is in use:**
   ```powershell
   netstat -ano | findstr :8000
   ```

2. **Try a different port:**
   ```powershell
   python -m http.server 8080
   ```
   Then access: `http://localhost:8080`

3. **Check if Python is installed:**
   ```powershell
   python --version
   ```

4. **If using Laragon/XAMPP, check Apache is running**

---

## 📝 Quick Start Commands

### Laragon/XAMPP:
1. Start server from GUI
2. Access: `http://localhost/Vasanisha_website/`

### Python:
```powershell
cd C:\Users\abhis\Website_dev\Vasanisha_website
python -m http.server 8000
```
Then access: `http://localhost:8000`

---

**Which server were you using? Let me know and I can provide specific setup instructions!**

