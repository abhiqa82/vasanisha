# EmailJS Template Update Guide

## 🔧 **Fix Email Subject Line Issue**

The email subject line is not showing the detailed format because the EmailJS template needs to be updated. Here's how to fix it:

## 📧 **Current Issue:**
- Email subject shows: "Contact Us:"
- Should show: "Contact Form - [Name] | [Service] | [Timestamp]"

## ✅ **Solution: Update EmailJS Template**

### **Step 1: Login to EmailJS Dashboard**
1. Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Login to your account

### **Step 2: Edit Contact Form Template**
1. Go to **"Email Templates"**
2. Click on your **"Contact Form Template"**
3. Click **"Edit"**

### **Step 3: Update Template Subject**
1. **Find the Subject field**
2. **Replace the current subject** with:
   ```
   Contact Form - {{from_name}} | {{service}} | {{custom_subject}}
   ```
   OR
   ```
   Contact Form - {{from_name}} | {{service}} | {{timestamp}}
   ```

### **Step 4: Update Template Content**
Make sure your template includes these variables:

```html
<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body>
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
    <p><strong>Phone:</strong> {{phone}}</p>
    <p><strong>Service Interest:</strong> {{service}}</p>
    <p><strong>Message:</strong></p>
    <p>{{message}}</p>
    <p><strong>Timestamp:</strong> {{timestamp}}</p>
    <hr>
    <p><em>This email was sent from the Vasanisha website contact form.</em></p>
</body>
</html>
```

### **Step 5: Save Template**
1. Click **"Save"**
2. Test the form again

## 🧪 **Test the Updated Template**

### **Test Steps:**
1. **Fill out the contact form** with:
   - Name: "Test User"
   - Email: "test@example.com"
   - Service: "App Development"
   - Description: "Testing new subject line format"

2. **Expected Email Subject:**
   ```
   Contact Form - Test User | App Development | December 15, 2024, 02:30:45 PM
   ```

## 🔄 **Alternative Solution: Use Template Variables**

If the above doesn't work, try this approach:

### **Step 1: Update Template Subject**
Set the subject to use template variables:
```
Contact Form - {{from_name}} | {{service}} | {{timestamp}}
```

### **Step 2: Update JavaScript**
The JavaScript is already sending the timestamp, so the template should pick it up.

## 📋 **Template Variables Available**

Your EmailJS template can use these variables:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{phone}}` - User's phone
- `{{service}}` - Selected service
- `{{message}}` - User's message
- `{{timestamp}}` - Current timestamp (FIXED)
- `{{custom_subject}}` - Custom subject line

## 🎯 **Expected Result**

After updating the template, your email subject should show:
```
Contact Form - John Doe | App Development | December 15, 2024, 02:30:45 PM
```

Instead of just:
```
Contact Us:
```

## 📞 **Need Help?**

If you're still having issues:
1. **Check EmailJS dashboard** for template settings
2. **Verify template variables** are correctly named
3. **Test with a simple subject** first
4. **Contact EmailJS support** if needed

## ✅ **Quick Fix Summary**

1. **Login to EmailJS Dashboard**
2. **Edit Contact Form Template**
3. **Update Subject field** to use template variables
4. **Save template**
5. **Test the form**

The key is updating the EmailJS template's subject line to use the variables we're sending from the JavaScript code. 