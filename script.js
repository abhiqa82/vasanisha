// Initialize EmailJS
(function() {
    emailjs.init("Dwue1D8bMDZ2SMl3p"); // EmailJS public key
})();

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--background-white)';
        navbar.style.backdropFilter = 'none';
    }
});

// CAPTCHA Generation
function generateCaptcha() {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
}

function displayCaptcha() {
    const captchaImage = document.querySelector('.captcha-image');
    if (captchaImage) {
        const captcha = generateCaptcha();
        captchaImage.textContent = captcha;
        captchaImage.dataset.captcha = captcha;
    }
}

// Initialize CAPTCHA on page load
document.addEventListener('DOMContentLoaded', () => {
    displayCaptcha();
    
    // Refresh CAPTCHA on click
    const captchaImage = document.querySelector('.captcha-image');
    if (captchaImage) {
        captchaImage.addEventListener('click', displayCaptcha);
    }
});

// Form Validation Functions
function validateEmail(email) {
    // RFC 5322 compliant email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
}

function validateName(name) {
    // Only letters, spaces, hyphens, and apostrophes allowed
    const nameRegex = /^[a-zA-Z\s\-']+$/;
    return nameRegex.test(name) && name.trim().length >= 2;
}

function validatePhone(phone) {
    // If empty, it's valid (field is optional)
    if (!phone || phone.trim() === '') {
        return true;
    }
    
    // Flexible international phone format
    // Allows: +1234567890, (123) 456-7890, 123-456-7890, +1-234-567-8900
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,4}$/;
    
    // Count actual digits
    const digitsOnly = phone.replace(/[\s\-\(\)\.+]/g, '');
    const digitCount = digitsOnly.length;
    
    // Must have between 10 and 15 digits
    if (digitCount < 10 || digitCount > 15) {
        return false;
    }
    
    // Must match pattern
    return phoneRegex.test(phone);
}

function validateDescription(description) {
    // Check if description contains only allowed characters
    const allowedChars = /^[a-zA-Z0-9\s.\-;@:?!,\s]+$/;
    return allowedChars.test(description) && description.length <= 200;
}

function validateSkills(skills) {
    // Only alphanumeric characters, spaces, and common punctuation
    const skillsRegex = /^[a-zA-Z0-9\s.,\-()]+$/;
    return skillsRegex.test(skills) && skills.trim().length <= 100;
}

function validateCoverLetter(coverLetter) {
    // Allow alphanumeric characters, spaces, and special characters: . - ; @ : ? ! ,
    const coverLetterRegex = /^[a-zA-Z0-9\s.\-;@:?!,]+$/;
    return coverLetterRegex.test(coverLetter) && coverLetter.length <= 350;
}

function validateCaptcha(userInput, correctCaptcha) {
    return userInput.toUpperCase() === correctCaptcha.toUpperCase();
}

// Function to highlight error fields
function highlightErrorField(fieldId, hasError) {
    const field = document.getElementById(fieldId);
    if (field) {
        if (hasError) {
            field.style.borderColor = '#d32f2f';
            field.style.boxShadow = '0 0 0 2px rgba(211, 47, 47, 0.2)';
        } else {
            field.style.borderColor = '';
            field.style.boxShadow = '';
        }
    }
}

// Contact Form Validation
function validateContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('description').value;
    const captchaInput = document.getElementById('captcha').value;
    const captchaImage = document.querySelector('.captcha-image');
    const correctCaptcha = captchaImage.dataset.captcha;

    let isValid = true;

    // Clear previous error messages and highlighting
    document.querySelectorAll('.form-error').forEach(error => error.remove());
    document.querySelectorAll('.form-input, .form-textarea').forEach(field => {
        field.style.borderColor = '';
        field.style.boxShadow = '';
    });

    // Validate name (REQUIRED)
    if (!name || !name.trim()) {
        showFieldError('name', 'Name is required');
        highlightErrorField('name', true);
        isValid = false;
    } else if (!validateName(name)) {
        showFieldError('name', 'Name can only contain letters, spaces, hyphens, and apostrophes (min 2 characters)');
        highlightErrorField('name', true);
        isValid = false;
    } else {
        highlightErrorField('name', false);
    }

    // Validate email
    if (!email) {
        showFieldError('email', 'Email is required');
        highlightErrorField('email', true);
        isValid = false;
    } else if (!validateEmail(email)) {
        showFieldError('email', 'Please enter a valid email address');
        highlightErrorField('email', true);
        isValid = false;
    } else {
        highlightErrorField('email', false);
    }

    // Validate phone (optional but must be valid if provided)
    if (phone && !validatePhone(phone)) {
        showFieldError('phone', 'Please enter a valid phone number (10-15 digits, e.g., +1 555-123-4567)');
        highlightErrorField('phone', true);
        isValid = false;
    } else {
        highlightErrorField('phone', false);
    }

    // Validate description
    if (!description) {
        showFieldError('description', 'Description is required');
        highlightErrorField('description', true);
        isValid = false;
    } else if (!validateDescription(description)) {
        showFieldError('description', 'Description can only contain letters, numbers, and special characters: . - ; @ : ? ! , (max 200 characters)');
        highlightErrorField('description', true);
        isValid = false;
    } else {
        highlightErrorField('description', false);
    }

    // Validate CAPTCHA
    if (!captchaInput) {
        showFieldError('captcha', 'Please enter the CAPTCHA');
        highlightErrorField('captcha', true);
        isValid = false;
    } else if (!validateCaptcha(captchaInput, correctCaptcha)) {
        showFieldError('captcha', 'CAPTCHA is incorrect');
        highlightErrorField('captcha', true);
        isValid = false;
    } else {
        highlightErrorField('captcha', false);
    }

    return isValid;
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

// Work With Us Form Validation
function validateWorkWithUsForm() {
    const form = document.getElementById('workWithUsForm');
    if (!form) return;

    const email = document.getElementById('workEmail').value;
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const coverLetter = document.getElementById('coverLetter').value;
    const cvFile = document.getElementById('cv').files[0];
    const captchaInput = document.getElementById('workCaptcha').value;
    const captchaImage = document.querySelector('.captcha-image');
    const correctCaptcha = captchaImage.dataset.captcha;

    let isValid = true;

    // Clear previous error messages and highlighting
    document.querySelectorAll('.form-error').forEach(error => error.remove());
    document.querySelectorAll('.form-input, .form-textarea, select').forEach(field => {
        field.style.borderColor = '';
        field.style.boxShadow = '';
    });

    // Validate name (characters only)
    if (!name.trim()) {
        showFieldError('name', 'Name is required');
        highlightErrorField('name', true);
        isValid = false;
    } else if (!validateName(name)) {
        showFieldError('name', 'Name can only contain letters, spaces, hyphens, and apostrophes');
        highlightErrorField('name', true);
        isValid = false;
    } else {
        highlightErrorField('name', false);
    }

    // Validate email (global standards)
    if (!email) {
        showFieldError('workEmail', 'Email is required');
        highlightErrorField('workEmail', true);
        isValid = false;
    } else if (!validateEmail(email)) {
        showFieldError('workEmail', 'Please enter a valid email address');
        highlightErrorField('workEmail', true);
        isValid = false;
    } else {
        highlightErrorField('workEmail', false);
    }

    // Validate position (now mandatory)
    if (!position) {
        showFieldError('position', 'Please select a position of interest');
        highlightErrorField('position', true);
        isValid = false;
    } else {
        highlightErrorField('position', false);
    }

    // Validate experience (now mandatory)
    if (!experience) {
        showFieldError('experience', 'Please select your years of experience');
        highlightErrorField('experience', true);
        isValid = false;
    } else {
        highlightErrorField('experience', false);
    }

    // Validate skills (alphanumeric, max 100 chars)
    if (!skills.trim()) {
        showFieldError('skills', 'Key skills are required');
        highlightErrorField('skills', true);
        isValid = false;
    } else if (!validateSkills(skills)) {
        showFieldError('skills', 'Skills can only contain letters, numbers, spaces, commas, hyphens, and parentheses (max 100 characters)');
        highlightErrorField('skills', true);
        isValid = false;
    } else {
        highlightErrorField('skills', false);
    }

    // Validate cover letter (alphanumeric and special characters)
    if (coverLetter && !validateCoverLetter(coverLetter)) {
        showFieldError('coverLetter', 'Cover letter can only contain letters, numbers, spaces, and special characters: . - ; @ : ? ! ,');
        highlightErrorField('coverLetter', true);
        isValid = false;
    } else if (coverLetter && coverLetter.length > 350) {
        showFieldError('coverLetter', 'Cover letter must be 350 characters or less');
        highlightErrorField('coverLetter', true);
        isValid = false;
    } else {
        highlightErrorField('coverLetter', false);
    }

    // Validate CV file (now optional)
    if (cvFile) {
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!allowedTypes.includes(cvFile.type)) {
            showFieldError('cv', 'Please upload a PDF or Word document (.pdf, .doc, .docx)');
            isValid = false;
        } else if (cvFile.size > maxSize) {
            showFieldError('cv', 'File size must be less than 5MB');
            isValid = false;
        } else {
            // Show success message for valid file
            const fileLabel = document.querySelector('.file-upload-label');
            if (fileLabel) {
                fileLabel.style.color = 'var(--primary-color)';
            }
        }
    }

    // Validate CAPTCHA
    if (!captchaInput) {
        showFieldError('workCaptcha', 'Please enter the CAPTCHA');
        highlightErrorField('workCaptcha', true);
        isValid = false;
    } else if (!validateCaptcha(captchaInput, correctCaptcha)) {
        showFieldError('workCaptcha', 'CAPTCHA is incorrect. Please try again.');
        highlightErrorField('workCaptcha', true);
        isValid = false;
    } else {
        highlightErrorField('workCaptcha', false);
    }

    return isValid;
}

// Form Submission
function submitContactForm(event) {
    event.preventDefault();
    
    if (!validateContactForm()) {
        return;
    }

    const submitBtn = document.querySelector('#contactForm .btn-primary');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;

    // Get form data
    const formData = new FormData(event.target);
    
    // Get current timestamp and date
    const now = new Date();
    const timestamp = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    
    // Prepare email template parameters
    const templateParams = {
        to_email: 'vasanisha.tech@gmail.com',
        from_name: (formData.get('name') || 'Anonymous').trim(),
        from_email: formData.get('email'),
        phone: formData.get('phone') || 'Not provided',
        service: formData.get('service') || 'Not specified',
        message: formData.get('description'),
        timestamp: timestamp,
        subject: `Contact Form - ${(formData.get('name') || 'Anonymous').trim()} | ${formData.get('service') || 'General'} | ${timestamp}`,
        reply_to: formData.get('email'),
        custom_subject: `Contact Form - ${(formData.get('name') || 'Anonymous').trim()} | ${formData.get('service') || 'General'} | ${timestamp}`
    };

    // Send email using EmailJS
    emailjs.send('service_abc123', 'template_contact123', templateParams) // Contact form template
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showMessage('Thank you for your message! We will get back to you within 24 hours.', 'success');
            document.getElementById('contactForm').reset();
            displayCaptcha();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Scroll to thank you message
            setTimeout(() => {
                const messageElement = document.querySelector('.message.success');
                if (messageElement) {
                    messageElement.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }
            }, 100);
        }, function(error) {
            console.log('FAILED...', error);
            showMessage('Sorry, there was an error sending your message. Please try again or contact us directly.', 'error');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
}

function submitWorkWithUsForm(event) {
    event.preventDefault();
    
    if (!validateWorkWithUsForm()) {
        return;
    }

    const submitBtn = document.querySelector('#workWithUsForm .btn-primary');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Submitting Application...';
    submitBtn.disabled = true;

    // Get form data
    const formData = new FormData(event.target);
    
    // Get current timestamp and date
    const now = new Date();
    const timestamp = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    
    // Get CV file information
    const cvFile = document.getElementById('cv').files[0];
    const cvFileName = cvFile ? cvFile.name : 'No file uploaded';
    const cvFileSize = cvFile ? `${(cvFile.size / 1024 / 1024).toFixed(2)} MB` : 'N/A';
    
    // Prepare email template parameters for job application
    const templateParams = {
        to_email: 'vasanisha.tech@gmail.com',
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        phone: formData.get('phone') || 'Not provided',
        position: formData.get('position') || 'Not specified',
        experience: formData.get('experience') || 'Not specified',
        skills: formData.get('skills') || 'Not provided',
        cover_letter: formData.get('coverLetter') || 'Not provided',
        cv_file_name: cvFileName,
        cv_file_size: cvFileSize,
        timestamp: timestamp,
        subject: `Job Application - ${formData.get('name')} | ${formData.get('position') || 'General Position'} | ${timestamp}`,
        reply_to: formData.get('email'),
        custom_subject: `Job Application - ${formData.get('name')} | ${formData.get('position') || 'General Position'} | ${timestamp}`
    };

    // Send email using EmailJS with job application template
    emailjs.send('service_abc123', 'template_tuu2v8y', templateParams) // Job Application Template
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showMessage('Thank you for your application! We have received your CV and will review it carefully. We will get back to you within 3-5 business days.', 'success');
            document.getElementById('workWithUsForm').reset();
            displayCaptcha();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Reset file upload label
            const fileLabel = document.querySelector('.file-upload-label');
            if (fileLabel) {
                fileLabel.innerHTML = '<i class="material-icons">upload_file</i>Choose CV file (PDF, DOC, DOCX)';
                fileLabel.style.color = 'var(--text-secondary)';
            }
            
            // Scroll to thank you message
            setTimeout(() => {
                const messageElement = document.querySelector('.message.success');
                if (messageElement) {
                    messageElement.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }
            }, 100);
        }, function(error) {
            console.log('FAILED...', error);
            showMessage('Sorry, there was an error submitting your application. Please try again or contact us directly at vasanisha.tech@gmail.com', 'error');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
}

function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;

    const form = document.querySelector('.form-container');
    form.insertBefore(messageDiv, form.firstChild);

    // Auto-remove message after 12 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 12000);
}

// File upload preview
function updateFileName(input) {
    const label = input.nextElementSibling;
    if (input.files.length > 0) {
        label.textContent = input.files[0].name;
        label.style.color = 'var(--primary-color)';
    } else {
        label.textContent = 'Choose CV file (PDF, DOC, DOCX)';
        label.style.color = 'var(--text-secondary)';
    }
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', submitContactForm);
    }

    // Work with us form submission
    const workWithUsForm = document.getElementById('workWithUsForm');
    if (workWithUsForm) {
        workWithUsForm.addEventListener('submit', submitWorkWithUsForm);
    }

    // File upload change event
    const cvInput = document.getElementById('cv');
    if (cvInput) {
        cvInput.addEventListener('change', () => updateFileName(cvInput));
    }

    // Real-time validation for description field
    const descriptionField = document.getElementById('description');
    if (descriptionField) {
        descriptionField.addEventListener('input', function() {
            const value = this.value;
            const remaining = 200 - value.length;
            
            // Update character count if element exists
            const charCount = document.getElementById('charCount');
            if (charCount) {
                charCount.textContent = `${remaining} characters remaining`;
                charCount.style.color = remaining < 20 ? '#d32f2f' : 'var(--text-secondary)';
            }
        });
    }

    // Real-time validation for cover letter field
    const coverLetterField = document.getElementById('coverLetter');
    if (coverLetterField) {
        coverLetterField.addEventListener('input', function() {
            const value = this.value;
            const remaining = 350 - value.length;
            
            // Update character count if element exists
            const charCount = document.getElementById('coverLetterCount');
            if (charCount) {
                charCount.textContent = `${remaining} characters remaining`;
                charCount.style.color = remaining < 50 ? '#d32f2f' : 'var(--text-secondary)';
            }
        });
    }

    // Real-time validation for skills field
    const skillsField = document.getElementById('skills');
    if (skillsField) {
        skillsField.addEventListener('input', function() {
            const value = this.value;
            const remaining = 100 - value.length;
            
            // Update character count if element exists
            const charCount = document.getElementById('skillsCount');
            if (charCount) {
                charCount.textContent = `${remaining} characters remaining`;
                charCount.style.color = remaining < 20 ? '#d32f2f' : 'var(--text-secondary)';
            }
        });
    }
});

// Performance optimization: Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Security: Prevent XSS in form inputs
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Add input sanitization to all form inputs
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.value = sanitizeInput(this.value);
        });
    });
    
    // Update copyright year dynamically
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}); 