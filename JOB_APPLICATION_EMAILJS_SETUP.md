# Job Application EmailJS Setup Guide

## 🎯 **Overview**
This guide will help you set up a dedicated EmailJS template for job applications from the "Work With Us" form. The form includes CV file uploads and comprehensive application details.

## 📧 **Step 1: Create New EmailJS Template**

### **1.1 Login to EmailJS Dashboard**
1. Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Login to your account

### **1.2 Create New Template**
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Name it: **"Job Application Template"**

## 📋 **Step 2: Configure Template Settings**

### **2.1 Template Information**
- **Template Name**: `Job Application Template`
- **Template ID**: `template_job_application` (this will be auto-generated)
- **Service**: Use your existing EmailJS service

### **2.2 Email Subject**
Set the subject to:
```
Job Application - {{from_name}} | {{position}} | {{timestamp}}
```

## 📝 **Step 3: Template HTML Content**

Copy and paste this HTML into your EmailJS template:

```html
<!DOCTYPE html>
<html>
<head>
    <title>New Job Application - Vasanisha</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background-color: #1976d2; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .section { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1976d2; }
        .value { margin-left: 10px; }
        .file-info { background-color: #f5f5f5; padding: 10px; border-radius: 5px; }
        .cover-letter { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #1976d2; }
        .footer { background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎯 New Job Application</h1>
        <p>Vasanisha - Digital Transformation & App Development</p>
    </div>
    
    <div class="content">
        <div class="section">
            <h2>📋 Applicant Information</h2>
            <p><span class="label">Name:</span> <span class="value">{{from_name}}</span></p>
            <p><span class="label">Email:</span> <span class="value">{{from_email}}</span></p>
            <p><span class="label">Phone:</span> <span class="value">{{phone}}</span></p>
            <p><span class="label">Position Applied:</span> <span class="value">{{position}}</span></p>
            <p><span class="label">Years of Experience:</span> <span class="value">{{experience}}</span></p>
        </div>
        
        <div class="section">
            <h2>📁 CV/Resume Information</h2>
            <div class="file-info">
                <p><span class="label">File Name:</span> <span class="value">{{cv_file_name}}</span></p>
                <p><span class="label">File Size:</span> <span class="value">{{cv_file_size}}</span></p>
                <p><em>Note: The actual file will be attached to this email if EmailJS supports file attachments.</em></p>
            </div>
        </div>
        
        <div class="section">
            <h2>💼 Key Skills</h2>
            <p>{{skills}}</p>
        </div>
        
        <div class="section">
            <h2>📝 Cover Letter</h2>
            <div class="cover-letter">
                <p>{{cover_letter}}</p>
            </div>
        </div>
        
        <div class="section">
            <h2>⏰ Application Details</h2>
            <p><span class="label">Submitted:</span> <span class="value">{{timestamp}}</span></p>
            <p><span class="label">Reply To:</span> <span class="value">{{from_email}}</span></p>
        </div>
    </div>
    
    <div class="footer">
        <p>This job application was submitted through the Vasanisha website.</p>
        <p>Please review the application and respond to the candidate within 3-5 business days.</p>
    </div>
</body>
</html>
```

## 🔧 **Step 4: Template Variables**

Your template uses these variables:
- `{{from_name}}` - Applicant's full name
- `{{from_email}}` - Applicant's email address
- `{{phone}}` - Applicant's phone number
- `{{position}}` - Position they're applying for
- `{{experience}}` - Years of experience
- `{{skills}}` - Key skills and technologies
- `{{cover_letter}}` - Cover letter content
- `{{cv_file_name}}` - Name of uploaded CV file
- `{{cv_file_size}}` - Size of uploaded CV file
- `{{timestamp}}` - Application submission timestamp

## 📤 **Step 5: Test the Template**

### **5.1 Test Steps:**
1. **Fill out the "Work With Us" form** with:
   - Name: "John Doe"
   - Email: "john.doe@example.com"
   - Phone: "+1 (555) 123-4567"
   - Position: "Mobile App Developer"
   - Experience: "3-5 years"
   - Skills: "React Native, Flutter, iOS, Android"
   - Cover Letter: "I'm passionate about mobile development..."
   - Upload a test CV file

2. **Expected Email Subject:**
   ```
   Job Application - John Doe | Mobile App Developer | December 15, 2024, 02:30:45 PM
   ```

## ⚠️ **Important Notes**

### **File Attachments:**
- EmailJS has limitations with file attachments
- The template includes file information (name, size) but not the actual file
- Consider using a service like Formspree or Netlify Forms for file uploads

### **Alternative Solutions for File Uploads:**

#### **Option 1: Formspree (Recommended)**
1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form action in `work-with-us.html`
4. Formspree handles file uploads automatically

#### **Option 2: Netlify Forms**
1. Deploy to Netlify
2. Add `netlify` attribute to form
3. Netlify handles file uploads

#### **Option 3: Google Drive Integration**
1. Use Google Apps Script
2. Upload files to Google Drive
3. Send email with Drive links

## 🎯 **Current Implementation**

The current setup:
- ✅ Sends detailed job application emails
- ✅ Includes all form data
- ✅ Shows file information (name, size)
- ✅ Professional email template
- ⚠️ File attachments need alternative solution

## 🔄 **Next Steps**

1. **Create the EmailJS template** using the HTML above
2. **Test the form** to ensure emails are received
3. **Consider file upload solution** (Formspree recommended)
4. **Monitor applications** and respond to candidates

## 📞 **Support**

If you need help with:
- EmailJS setup: Check their documentation
- File uploads: Consider Formspree
- Template customization: Modify the HTML above
- Testing: Use the test data provided

---

**Template ID to use in JavaScript**: `template_job_application`
**Service ID**: Use your existing EmailJS service ID 