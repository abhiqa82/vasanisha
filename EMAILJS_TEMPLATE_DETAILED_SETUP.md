# EmailJS Template Setup Guide

## Contact Form Email Template

### Template Details:
- **Template Name**: Contact Form Template
- **Template ID**: `template_contact123`
- **Subject Line**: `Contact Form - {{from_name}} | {{service}} | {{timestamp}}`

### HTML Email Body:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .email-container {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #2196F3, #1976D2);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }
        .header p {
            margin: 10px 0 0 0;
            opacity: 0.9;
            font-size: 14px;
        }
        .content {
            padding: 30px 20px;
        }
        .section {
            margin-bottom: 25px;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 6px;
            border-left: 4px solid #2196F3;
        }
        .section h2 {
            margin: 0 0 15px 0;
            color: #1976D2;
            font-size: 18px;
            font-weight: 600;
        }
        .field-group {
            margin-bottom: 15px;
        }
        .field-label {
            font-weight: 600;
            color: #555;
            margin-bottom: 5px;
            display: block;
            font-size: 14px;
        }
        .field-value {
            background-color: white;
            padding: 10px 12px;
            border-radius: 4px;
            border: 1px solid #e0e0e0;
            font-size: 14px;
            color: #333;
            word-wrap: break-word;
        }
        .field-value.empty {
            color: #999;
            font-style: italic;
        }
        .message-section {
            background-color: #e3f2fd;
            border-left-color: #2196F3;
        }
        .contact-section {
            background-color: #f3e5f5;
            border-left-color: #9c27b0;
        }
        .service-section {
            background-color: #e8f5e8;
            border-left-color: #4caf50;
        }
        .timestamp {
            text-align: center;
            padding: 15px;
            background-color: #f5f5f5;
            border-radius: 6px;
            margin-top: 20px;
            font-size: 12px;
            color: #666;
        }
        .footer {
            background-color: #f5f5f5;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
        }
        .highlight {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 10px;
            border-radius: 4px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1>📧 New Contact Form Submission</h1>
            <p>You have received a new message from your website</p>
        </div>

        <!-- Content -->
        <div class="content">
            <!-- Contact Information Section -->
            <div class="section contact-section">
                <h2>👤 Contact Information</h2>
                
                <div class="field-group">
                    <span class="field-label">Name:</span>
                    <div class="field-value">{{from_name}}</div>
                </div>

                <div class="field-group">
                    <span class="field-label">Email Address:</span>
                    <div class="field-value">{{from_email}}</div>
                </div>

                <div class="field-group">
                    <span class="field-label">Phone Number:</span>
                    <div class="field-value">{{phone}}</div>
                </div>
            </div>

            <!-- Service Information Section -->
            <div class="section service-section">
                <h2>🛠️ Service Request</h2>
                
                <div class="field-group">
                    <span class="field-label">Service of Interest:</span>
                    <div class="field-value">{{service}}</div>
                </div>
            </div>

            <!-- Message Section -->
            <div class="section message-section">
                <h2>💬 Message Details</h2>
                
                <div class="field-group">
                    <span class="field-label">Message:</span>
                    <div class="field-value">{{message}}</div>
                </div>
            </div>

            <!-- Submission Details -->
            <div class="timestamp">
                <strong>📅 Submitted on:</strong> {{timestamp}}
            </div>

            <!-- Action Items -->
            <div class="highlight">
                <strong>📋 Action Required:</strong><br>
                • Review the message above<br>
                • Respond to {{from_email}} within 24 hours<br>
                • Follow up on service request: {{service}}
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>This email was sent from your website contact form at {{timestamp}}</p>
            <p>© 2024 Vasanisha - Professional App Development & Digital Transformation Services</p>
        </div>
    </div>
</body>
</html>
```

### Template Variables Used:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email address
- `{{phone}}` - User's phone number
- `{{service}}` - Selected service
- `{{message}}` - User's message/description
- `{{timestamp}}` - Submission timestamp

### Features of this Email Template:
1. **Professional Design**: Clean, modern layout with gradient header
2. **Color-Coded Sections**: Different colors for different types of information
3. **Clear Data Display**: Each field is clearly labeled and formatted
4. **Responsive Design**: Works well on both desktop and mobile
5. **Action Items**: Includes a highlighted section with next steps
6. **Branding**: Includes Vasanisha branding and contact information

### How to Set Up:
1. Go to EmailJS Dashboard
2. Create a new template
3. Set the template name to "Contact Form Template"
4. Set the subject to: `Contact Form - {{from_name}} | {{service}} | {{timestamp}}`
5. Copy the HTML above into the template body
6. Save the template
7. Note the template ID (should be something like `template_contact123`)

### Template Variables Explanation:
- **from_name**: The name entered by the user (defaults to "Anonymous" if empty)
- **from_email**: The email address entered by the user
- **phone**: The phone number (shows "Not provided" if empty)
- **service**: The selected service (shows "Not specified" if empty)
- **message**: The description/message entered by the user
- **timestamp**: The exact date and time when the form was submitted

This template will create a professional, easy-to-read email that clearly displays all the information submitted through your contact form. 