# Detailed EmailJS Template Setup Guide

## 🎯 **Complete Step-by-Step Instructions**

### **Step 1: Access EmailJS Dashboard**

1. **Open your web browser**
2. **Go to**: [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
3. **Login** with your EmailJS account credentials
4. **Wait for the dashboard to load**

### **Step 2: Navigate to Email Templates**

1. **Look for the left sidebar** on the dashboard
2. **Find and click** on **"Email Templates"** in the navigation menu
3. **You should see a list of your existing templates** (if any)

### **Step 3: Create New Template**

1. **Look for a button** that says **"Create New Template"** or **"+"** or **"Add Template"**
2. **Click on it** to start creating a new template
3. **A new template form will appear**

### **Step 4: Configure Template Settings**

#### **4.1 Basic Information**
1. **Template Name**: Enter `Job Application Template`
2. **Template ID**: This will be auto-generated (usually something like `template_xxxxx`)
3. **Service**: Select your existing EmailJS service (the same one you use for contact form)

#### **4.2 Email Subject**
1. **Find the "Subject" field**
2. **Enter exactly**: `Job Application - {{from_name}} | {{position}} | {{timestamp}}`

#### **4.3 Email Content**
1. **Find the HTML content area** (usually a large text box)
2. **Delete any existing content**
3. **Copy and paste the HTML template below**

### **Step 5: HTML Template Content**

Copy this entire HTML code and paste it into your EmailJS template:

```html
<!DOCTYPE html>
<html>
<head>
    <title>New Job Application - Vasanisha</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            margin: 0; 
            padding: 0; 
        }
        .header { 
            background-color: #1976d2; 
            color: white; 
            padding: 20px; 
            text-align: center; 
        }
        .content { 
            padding: 20px; 
            max-width: 600px; 
            margin: 0 auto; 
        }
        .section { 
            margin-bottom: 20px; 
            border-bottom: 1px solid #eee; 
            padding-bottom: 15px; 
        }
        .section:last-child { 
            border-bottom: none; 
        }
        .label { 
            font-weight: bold; 
            color: #1976d2; 
            display: inline-block; 
            width: 150px; 
        }
        .value { 
            margin-left: 10px; 
            color: #555; 
        }
        .file-info { 
            background-color: #f5f5f5; 
            padding: 15px; 
            border-radius: 5px; 
            border-left: 4px solid #1976d2; 
        }
        .cover-letter { 
            background-color: #f9f9f9; 
            padding: 15px; 
            border-left: 4px solid #1976d2; 
            border-radius: 5px; 
        }
        .footer { 
            background-color: #f5f5f5; 
            padding: 15px; 
            text-align: center; 
            font-size: 12px; 
            color: #666; 
            margin-top: 20px; 
        }
        h1 { 
            margin: 0; 
            font-size: 24px; 
        }
        h2 { 
            color: #1976d2; 
            font-size: 18px; 
            margin-bottom: 10px; 
        }
        .highlight { 
            background-color: #e3f2fd; 
            padding: 10px; 
            border-radius: 5px; 
            margin: 10px 0; 
        }
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
                <div class="highlight">
                    <strong>Note:</strong> The actual file is not attached to this email due to EmailJS limitations. 
                    Please contact the applicant to request the CV file directly.
                </div>
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
        <p><strong>This job application was submitted through the Vasanisha website.</strong></p>
        <p>Please review the application and respond to the candidate within 3-5 business days.</p>
        <p>To request the CV file, please contact the applicant directly at: {{from_email}}</p>
    </div>
</body>
</html>
```

### **Step 6: Save the Template**

1. **Look for a "Save" button** (usually at the bottom or top of the form)
2. **Click "Save"** to save your template
3. **Wait for confirmation** that the template has been saved

### **Step 7: Get Template ID**

1. **After saving**, you'll be redirected to the template list or template details
2. **Look for the Template ID** - it will be something like `template_abc123` or `template_job_application`
3. **Copy this Template ID** - you'll need it for the JavaScript

### **Step 8: Update JavaScript (if needed)**

If the template ID is different from `template_job_application`, update your JavaScript:

1. **Open your `script.js` file**
2. **Find this line**:
   ```javascript
   emailjs.send('service_abc123', 'template_job_application', templateParams)
   ```
3. **Replace `template_job_application`** with your actual template ID

### **Step 9: Test the Template**

#### **9.1 Manual Test in EmailJS**
1. **Go back to your template** in EmailJS dashboard
2. **Look for a "Test" or "Send Test" button**
3. **Click it** to send a test email
4. **Check your email** to see how it looks

#### **9.2 Test from Your Website**
1. **Go to your website**: [https://abhiqa82.github.io/vasanisha/work-with-us.html](https://abhiqa82.github.io/vasanisha/work-with-us.html)
2. **Fill out the form** with test data:
   - Name: "Test Applicant"
   - Email: "test@example.com"
   - Position: "Mobile App Developer"
   - Experience: "3-5 years"
   - Skills: "React Native, Flutter"
   - Cover Letter: "This is a test application..."
   - Upload any PDF file
3. **Submit the form**
4. **Check your email** for the job application

## 🔧 **Troubleshooting**

### **If Template Doesn't Save:**
- Make sure all required fields are filled
- Check your internet connection
- Try refreshing the page and starting over

### **If Email Doesn't Send:**
- Verify your EmailJS service is active
- Check that the template ID is correct in JavaScript
- Ensure your EmailJS account has available email credits

### **If Template Variables Don't Work:**
- Make sure the variable names match exactly: `{{from_name}}`, `{{from_email}}`, etc.
- Check that the JavaScript is sending the correct parameter names

## 📞 **Need Help?**

If you encounter any issues:
1. **Check EmailJS documentation**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. **Contact EmailJS support** through their dashboard
3. **Verify your service settings** in the EmailJS dashboard

## ✅ **Expected Result**

After completing these steps, you should receive professional job application emails that look like this:

**Subject**: `Job Application - John Doe | Mobile App Developer | December 15, 2024, 02:30:45 PM`

**Email Content**: A beautifully formatted email with all applicant information, skills, cover letter, and file details.

---

**Template ID to use**: The ID you get from Step 7
**Service ID**: Your existing EmailJS service ID 