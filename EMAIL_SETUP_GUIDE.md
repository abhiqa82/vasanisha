# EmailJS Setup Guide for Vasanisha Website

## Overview
This guide will help you configure EmailJS to send emails from your contact forms directly to your Gmail account.

## Step 1: Create EmailJS Account

1. **Sign up at EmailJS**: Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account
2. **Verify your email**: Check your inbox and verify your email address

## Step 2: Add Email Service

1. **Login to EmailJS Dashboard**
2. **Go to "Email Services"** in the left sidebar
3. **Click "Add New Service"**
4. **Select "Gmail"** from the list
5. **Connect your Gmail account**:
   - Click "Connect Account"
   - Authorize EmailJS to access your Gmail
   - Give your service a name (e.g., "Vasanisha Gmail")
6. **Copy the Service ID** (you'll need this later)

## Step 3: Create Email Templates

### Contact Form Template
1. **Go to "Email Templates"** in the left sidebar
2. **Click "Create New Template"**
3. **Name it**: "Contact Form Template"
4. **Subject**: `New Contact Form Submission - Vasanisha`
5. **HTML Content**:
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
    <hr>
    <p><em>This email was sent from the Vasanisha website contact form.</em></p>
</body>
</html>
```
6. **Copy the Template ID**

### Job Application Template
1. **Create another template**: "Job Application Template"
2. **Subject**: `New Job Application - Vasanisha`
3. **HTML Content**:
```html
<!DOCTYPE html>
<html>
<head>
    <title>New Job Application</title>
</head>
<body>
    <h2>New Job Application</h2>
    <p><strong>Applicant:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Phone:</strong> {{phone}}</p>
    <p><strong>Position:</strong> {{position}}</p>
    <p><strong>Experience:</strong> {{experience}}</p>
    <p><strong>Skills:</strong></p>
    <p>{{skills}}</p>
    <p><strong>Cover Letter:</strong></p>
    <p>{{cover_letter}}</p>
    <hr>
    <p><em>This application was submitted through the Vasanisha website.</em></p>
</body>
</html>
```
4. **Copy the Template ID**

## Step 4: Get Your Public Key

1. **Go to "Account"** in the left sidebar
2. **Click "API Keys"**
3. **Copy your Public Key**

## Step 5: Update Your Website Code

Replace the placeholder values in your `script.js` file:

```javascript
// Replace these values in script.js:

// Line 2: Replace YOUR_PUBLIC_KEY
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// In submitContactForm function: Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_CONTACT_TEMPLATE_ID', templateParams)

// In submitWorkWithUsForm function: Replace YOUR_SERVICE_ID and YOUR_JOB_TEMPLATE_ID  
emailjs.send('YOUR_SERVICE_ID', 'YOUR_JOB_TEMPLATE_ID', templateParams)
```

## Step 6: Test Your Setup

1. **Open your website** in a browser
2. **Go to the Contact Us page**
3. **Fill out the form** with test data
4. **Submit the form**
5. **Check your Gmail inbox** for the test email

## Troubleshooting

### Common Issues:

1. **"EmailJS is not defined"**
   - Make sure the EmailJS CDN is loaded in all HTML files
   - Check browser console for errors

2. **"Service ID not found"**
   - Verify your Service ID is correct
   - Make sure your Gmail service is properly connected

3. **"Template ID not found"**
   - Verify your Template IDs are correct
   - Check that templates are published (not drafts)

4. **Emails not received**
   - Check your Gmail spam folder
   - Verify your Gmail account is properly connected
   - Check EmailJS dashboard for delivery status

## Security Notes

- **Public Key**: This is safe to expose in frontend code
- **Service ID & Template ID**: These are also safe to expose
- **Rate Limiting**: Free plan has limits (200 emails/month)
- **Spam Protection**: EmailJS handles spam protection automatically

## Alternative Solutions

If EmailJS doesn't work for you, consider:

1. **Formspree**: [https://formspree.io/](https://formspree.io/)
2. **Netlify Forms**: If hosting on Netlify
3. **Google Forms**: Embed Google Forms
4. **Server-side solution**: PHP, Node.js, etc.

## Support

- **EmailJS Documentation**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **EmailJS Support**: Available through their dashboard
- **Community**: Stack Overflow and GitHub issues

---

**Note**: The free plan of EmailJS allows 200 emails per month. For higher volume, consider upgrading to a paid plan. 