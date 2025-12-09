# GitHub Push Steps - Manual Guide

**Date:** December 2025  
**Repository:** https://github.com/abhiqa82/vasanisha.git  
**Branch:** master

---

## 📋 **Step-by-Step Instructions**

### **Step 1: Open PowerShell/Terminal**
1. Open PowerShell or Command Prompt
2. Navigate to project directory:
   ```powershell
   cd C:\Users\abhis\Website_dev\Vasanisha_website
   ```

---

### **Step 2: Check Current Status**
```powershell
git status
```

**Expected Output:** You should see modified files listed.

---

### **Step 3: Review Changed Files**
```powershell
git status --short
```

**Expected Files to See:**
- `M assets/js/i18n.js`
- `M import-export.html`
- `M styles.css`
- `M translations/en.json`
- `M translations/de.json`
- `M translations/nl.json`
- `M contact.html`

---

### **Step 4: Stage All Changes**
```powershell
git add assets/js/i18n.js
git add import-export.html
git add styles.css
git add translations/en.json
git add translations/de.json
git add translations/nl.json
git add contact.html
```

**OR Stage All Modified Files at Once:**
```powershell
git add .
```

---

### **Step 5: Verify Staged Files**
```powershell
git status
```

**Expected:** Files should show as "Changes to be committed" (green)

---

### **Step 6: Create Commit**
```powershell
git commit -m "Update import-export page: Remove service cards, replace Engineering with Electronics Goods, hide H1B Visa menu, reduce navigation spacing, disable i18n debug mode

- Removed Trade Consulting, Trade Documentation, and Customs Clearance service cards
- Replaced Engineering Goods with Electronics Goods in Industries section
- Updated icon from precision_manufacturing to devices
- Hidden H1B Visa menu item from navigation (CSS)
- Reduced navigation spacing (gap: 0.25rem → 0.1rem)
- Moved navigation menu closer to language dropdown
- Disabled debug mode in i18n.js
- Updated all translation files (EN/DE/NL) for Electronics Goods
- Updated meta descriptions in translation files
- Removed inline styles from language switcher"
```

---

### **Step 7: Check Remote Repository**
```powershell
git remote -v
```

**Expected Output:**
```
origin  https://github.com/abhiqa82/vasanisha.git (fetch)
origin  https://github.com/abhiqa82/vasanisha.git (push)
```

---

### **Step 8: Check Current Branch**
```powershell
git branch
```

**Expected:** Should show `* master` (or `* main`)

---

### **Step 9: Push to GitHub**
```powershell
git push origin master
```

**OR if your branch is `main`:**
```powershell
git push origin main
```

---

## 🔧 **Troubleshooting Common Issues**

### **Issue 1: Authentication Required**

**Error:** `fatal: Authentication failed` or `remote: Support for password authentication was removed`

**Solution:**
1. Use Personal Access Token (PAT) instead of password
2. Generate token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
3. Use token as password when prompted

**OR Use SSH:**
```powershell
# Check if SSH key exists
ls ~/.ssh

# If no SSH key, generate one
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add SSH key to GitHub account
# Copy public key: cat ~/.ssh/id_ed25519.pub
# Add to GitHub → Settings → SSH and GPG keys
```

---

### **Issue 2: Branch Name Mismatch**

**Error:** `error: failed to push some refs`

**Solution:**
```powershell
# Check which branch you're on
git branch

# If on 'main' but remote is 'master'
git push origin main

# OR if on 'master' but remote is 'main'
git push origin master

# OR set upstream
git push -u origin master
```

---

### **Issue 3: Remote Not Configured**

**Error:** `fatal: No configured push destination`

**Solution:**
```powershell
# Add remote if missing
git remote add origin https://github.com/abhiqa82/vasanisha.git

# Verify
git remote -v
```

---

### **Issue 4: Need to Pull First**

**Error:** `Updates were rejected because the remote contains work`

**Solution:**
```powershell
# Pull latest changes first
git pull origin master

# Resolve any conflicts if they occur
# Then push again
git push origin master
```

---

### **Issue 5: Network/Connection Issues**

**Error:** `Failed to connect` or timeout

**Solution:**
1. Check internet connection
2. Try again after a few seconds
3. Check if GitHub is accessible: `ping github.com`
4. Use VPN if GitHub is blocked in your region

---

## 📝 **Complete Command Sequence (Copy-Paste Ready)**

```powershell
# Navigate to project
cd C:\Users\abhis\Website_dev\Vasanisha_website

# Check status
git status

# Stage all changes
git add .

# Verify staged files
git status

# Commit changes
git commit -m "Update import-export page: Remove service cards, replace Engineering with Electronics Goods, hide H1B Visa menu, reduce navigation spacing, disable i18n debug mode"

# Check remote
git remote -v

# Check branch
git branch

# Push to GitHub
git push origin master
```

---

## 🔍 **Verification After Push**

### **Check if Push Was Successful:**
```powershell
git log --oneline -1
```

**Expected:** Should show your commit message

### **Check Remote Status:**
```powershell
git status
```

**Expected:** Should show "Your branch is up to date with 'origin/master'"

---

## 📊 **Files Changed Summary**

| File | Changes |
|------|---------|
| `assets/js/i18n.js` | Debug mode disabled |
| `import-export.html` | Removed 3 service cards, replaced Engineering→Electronics |
| `styles.css` | Hidden H1B Visa, reduced spacing |
| `translations/en.json` | Updated Electronics Goods |
| `translations/de.json` | Updated Electronics Goods |
| `translations/nl.json` | Updated Electronics Goods |
| `contact.html` | Removed inline styles |

---

## ⚠️ **Important Notes**

1. **Always check `git status` before committing** to see what will be committed
2. **Review changes** with `git diff` if you want to see what changed
3. **Test locally** before pushing to production
4. **GitHub Pages** will auto-deploy after push (takes 1-3 minutes)
5. **Verify deployment** at: https://www.vasanisha.com

---

## 🚀 **Quick Push (If Everything is Ready)**

```powershell
cd C:\Users\abhis\Website_dev\Vasanisha_website
git add .
git commit -m "Update import-export page: Remove service cards, replace Engineering with Electronics Goods, hide H1B Visa menu, reduce navigation spacing"
git push origin master
```

---

**If you encounter any errors, share the error message and I'll help troubleshoot!**

