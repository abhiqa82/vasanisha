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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateDescription(description) {
    // Check if description contains only allowed characters
    const allowedChars = /^[a-zA-Z0-9\s.\-;@:?!,\s]+$/;
    return allowedChars.test(description) && description.length <= 200;
}

function validateCaptcha(userInput, correctCaptcha) {
    return userInput.toUpperCase() === correctCaptcha.toUpperCase();
}

// Contact Form Validation
function validateContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;
    const captchaInput = document.getElementById('captcha').value;
    const captchaImage = document.querySelector('.captcha-image');
    const correctCaptcha = captchaImage.dataset.captcha;

    let isValid = true;
    let errorMessage = '';

    // Clear previous error messages
    document.querySelectorAll('.form-error').forEach(error => error.remove());

    // Validate email
    if (!email) {
        showFieldError('email', 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate description
    if (!description) {
        showFieldError('description', 'Description is required');
        isValid = false;
    } else if (!validateDescription(description)) {
        showFieldError('description', 'Description can only contain letters, numbers, and special characters: . - ; @ : ? ! , (max 200 characters)');
        isValid = false;
    }

    // Validate CAPTCHA
    if (!captchaInput) {
        showFieldError('captcha', 'Please enter the CAPTCHA');
        isValid = false;
    } else if (!validateCaptcha(captchaInput, correctCaptcha)) {
        showFieldError('captcha', 'CAPTCHA is incorrect');
        isValid = false;
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
    const cvFile = document.getElementById('cv').files[0];
    const captchaInput = document.getElementById('workCaptcha').value;
    const captchaImage = document.querySelector('.captcha-image');
    const correctCaptcha = captchaImage.dataset.captcha;

    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.form-error').forEach(error => error.remove());

    // Validate name
    if (!name.trim()) {
        showFieldError('name', 'Name is required');
        isValid = false;
    }

    // Validate email
    if (!email) {
        showFieldError('workEmail', 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showFieldError('workEmail', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate CV file
    if (!cvFile) {
        showFieldError('cv', 'Please upload your CV');
        isValid = false;
    } else {
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!allowedTypes.includes(cvFile.type)) {
            showFieldError('cv', 'Please upload a PDF or Word document');
            isValid = false;
        } else if (cvFile.size > maxSize) {
            showFieldError('cv', 'File size must be less than 5MB');
            isValid = false;
        }
    }

    // Validate CAPTCHA
    if (!captchaInput) {
        showFieldError('workCaptcha', 'Please enter the CAPTCHA');
        isValid = false;
    } else if (!validateCaptcha(captchaInput, correctCaptcha)) {
        showFieldError('workCaptcha', 'CAPTCHA is incorrect');
        isValid = false;
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
        to_email: 'abhishek.agawane@gmail.com',
        from_name: formData.get('name') || 'Anonymous',
        from_email: formData.get('email'),
        phone: formData.get('phone') || 'Not provided',
        service: formData.get('service') || 'Not specified',
        message: formData.get('description'),
        timestamp: timestamp,
        subject: `Contact Form - ${formData.get('name') || 'Anonymous'} | ${formData.get('service') || 'General'} | ${timestamp}`,
        reply_to: formData.get('email'),
        custom_subject: `Contact Form - ${formData.get('name') || 'Anonymous'} | ${formData.get('service') || 'General'} | ${timestamp}`
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
    submitBtn.innerHTML = '<span class="loading"></span> Submitting...';
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
    
    // Prepare email template parameters for job application
    const templateParams = {
        to_email: 'abhishek.agawane@gmail.com',
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        phone: formData.get('phone') || 'Not provided',
        position: formData.get('position') || 'Not specified',
        experience: formData.get('experience') || 'Not specified',
        skills: formData.get('skills') || 'Not provided',
        cover_letter: formData.get('coverLetter') || 'Not provided',
        subject: `Job Application - ${formData.get('name')} | ${formData.get('position') || 'General'} | ${timestamp}`,
        reply_to: formData.get('email'),
        custom_subject: `Job Application - ${formData.get('name')} | ${formData.get('position') || 'General'} | ${timestamp}`
    };

    // Send email using EmailJS
    emailjs.send('service_abc123', 'template_contact123', templateParams) // Job application template (using same template for now)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showMessage('Thank you for your application! We will review your CV and get back to you soon.', 'success');
            document.getElementById('workWithUsForm').reset();
            displayCaptcha();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, function(error) {
            console.log('FAILED...', error);
            showMessage('Sorry, there was an error submitting your application. Please try again or contact us directly.', 'error');
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
}); 