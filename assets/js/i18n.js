/**
 * i18n - Internationalization System for Vasanisha Website
 * 
 * This lightweight translation system enables multi-language support
 * without requiring duplicate HTML files. All content is stored in
 * JSON files and dynamically loaded based on user's language preference.
 * 
 * Supported Languages: English (en), German (de), Dutch (nl), Italian (it)
 * 
 * @version 1.0.0
 * @date December 2025
 */

const i18n = {
    // Current active language
    currentLang: 'en',
    
    // Loaded translations for current language
    translations: {},
    
    // Supported languages
    supportedLanguages: ['en', 'de', 'nl', 'it'],
    
    // Debug mode (set to false in production)
    debug: false,
    
    /**
     * Initialize i18n system
     * Detects user's preferred language and loads translations
     */
    async init() {
        console.log('🌍 i18n: Initializing translation system...');
        
        // Get language preference (priority order)
        const lang = this.detectLanguage();
        
        console.log(`🌍 i18n: Detected language: ${lang}`);
        
        // Load translations
        await this.loadLanguage(lang);
    },
    
    /**
     * Detect user's preferred language
     * Priority: URL param > localStorage > Browser language > Default (en)
     * @returns {string} Language code (en, de, nl, it)
     */
    detectLanguage() {
        // 1. Check URL parameter (?lang=de)
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang && this.supportedLanguages.includes(urlLang)) {
            console.log(`🌍 i18n: Language from URL: ${urlLang}`);
            return urlLang;
        }
        
        // 2. Check localStorage (user's saved preference)
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && this.supportedLanguages.includes(savedLang)) {
            console.log(`🌍 i18n: Language from localStorage: ${savedLang}`);
            return savedLang;
        }
        
        // 3. Check browser language
        const browserLang = navigator.language.split('-')[0]; // 'en-US' -> 'en'
        if (this.supportedLanguages.includes(browserLang)) {
            console.log(`🌍 i18n: Language from browser: ${browserLang}`);
            return browserLang;
        }
        
        // 4. Default to English
        console.log('🌍 i18n: Using default language: en');
        return 'en';
    },
    
    /**
     * Load translation file for specified language
     * @param {string} lang - Language code (en, de, nl, it)
     * @returns {Promise<boolean>} Success status
     */
    async loadLanguage(lang) {
        console.log(`🌍 i18n: Loading translations for: ${lang}`);
        
        // Validate language code
        if (!this.supportedLanguages.includes(lang)) {
            console.error(`❌ i18n: Unsupported language: ${lang}. Falling back to English.`);
            lang = 'en';
        }
        
        try {
            // Fetch translation file from server
            const response = await fetch(`/translations/${lang}.json`);
            
            // Check if file exists
            if (!response.ok) {
                throw new Error(`Failed to load translations: ${response.status} ${response.statusText}`);
            }
            
            // Parse JSON
            this.translations = await response.json();
            this.currentLang = lang;
            
            console.log(`✅ i18n: Translations loaded successfully for ${lang}`);
            console.log(`📊 i18n: Total translation keys: ${this.countKeys(this.translations)}`);
            
            // Apply translations to page
            this.applyTranslations();
            
            // Update language switcher UI
            this.updateLanguageSwitcher(lang);
            
            // Save preference
            localStorage.setItem('preferredLanguage', lang);
            console.log(`💾 i18n: Language preference saved: ${lang}`);
            
            return true;
            
        } catch (error) {
            console.error('❌ i18n: Failed to load translations:', error);
            console.error('📍 i18n: Error details:', error.message);
            
            // Fallback to English if not already trying English
            if (lang !== 'en') {
                console.log('🔄 i18n: Attempting fallback to English...');
                return await this.loadLanguage('en');
            }
            
            return false;
        }
    },
    
    /**
     * Apply translations to all elements with data-i18n attribute
     */
    applyTranslations() {
        console.log('🔄 i18n: Applying translations to page elements...');
        
        let translatedCount = 0;
        let missingCount = 0;
        
        // Translate all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (translation) {
                element.textContent = translation;
                translatedCount++;
                
                if (this.debug) {
                    console.log(`  ✅ Translated: "${key}" -> "${translation.substring(0, 50)}..."`);
                }
            } else {
                missingCount++;
                console.warn(`  ⚠️ Missing translation for key: "${key}"`);
            }
        });
        
        // Translate placeholders (form inputs)
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.t(key);
            
            if (translation) {
                element.placeholder = translation;
                translatedCount++;
                
                if (this.debug) {
                    console.log(`  ✅ Translated placeholder: "${key}"`);
                }
            } else {
                missingCount++;
                console.warn(`  ⚠️ Missing placeholder translation: "${key}"`);
            }
        });
        
        // Update page title
        const titleKey = document.querySelector('[data-i18n-title]');
        if (titleKey) {
            const key = titleKey.getAttribute('data-i18n-title');
            const translation = this.t(key);
            if (translation) {
                document.title = translation;
                console.log(`  ✅ Updated page title: "${translation}"`);
            }
        }
        
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        const metaDescKey = metaDesc?.getAttribute('data-i18n-meta');
        if (metaDescKey) {
            const translation = this.t(metaDescKey);
            if (translation && metaDesc) {
                metaDesc.content = translation;
                console.log(`  ✅ Updated meta description`);
            }
        }
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
        console.log(`  ✅ Updated <html lang="${this.currentLang}">`);
        
        console.log(`✅ i18n: Translation complete! Translated: ${translatedCount}, Missing: ${missingCount}`);
    },
    
    /**
     * Get translation for a specific key
     * @param {string} key - Translation key (e.g., "hero.title")
     * @returns {string|null} Translated text or null if not found
     */
    t(key) {
        // Navigate nested object using dot notation
        const keys = key.split('.');
        let value = this.translations;
        
        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                if (this.debug) {
                    console.warn(`⚠️ i18n: Translation key not found: "${key}"`);
                }
                return null;
            }
        }
        
        return value || null;
    },
    
    /**
     * Update language switcher UI to show current language
     * @param {string} lang - Current language code
     */
    updateLanguageSwitcher(lang) {
        const switcher = document.getElementById('languageSelect');
        if (switcher) {
            switcher.value = lang;
            console.log(`✅ i18n: Language switcher updated to: ${lang}`);
        }
    },
    
    /**
     * Change language (called by user action)
     * @param {string} lang - Target language code
     */
    async changeLanguage(lang) {
        console.log(`🔄 i18n: Changing language to: ${lang}`);
        
        // Show loading indicator (optional)
        document.body.style.cursor = 'wait';
        
        // Load new language
        const success = await this.loadLanguage(lang);
        
        // Remove loading indicator
        document.body.style.cursor = 'default';
        
        if (success) {
            console.log(`✅ i18n: Language changed successfully to: ${lang}`);
        } else {
            console.error(`❌ i18n: Failed to change language to: ${lang}`);
        }
    },
    
    /**
     * Count total translation keys (for debugging)
     * @param {object} obj - Translation object
     * @returns {number} Total key count
     */
    countKeys(obj) {
        let count = 0;
        for (const key in obj) {
            if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                count += this.countKeys(obj[key]);
            } else {
                count++;
            }
        }
        return count;
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌍 i18n: DOM loaded, initializing...');
    i18n.init();
});

console.log('✅ i18n.js loaded successfully');

