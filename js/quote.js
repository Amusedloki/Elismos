/* ============================================
   ELISMOS INTERNATIONAL - QUOTE MODULE
   Advanced Quote Form System
   ============================================ */

(function() {
    'use strict';
    
    // ============================================
    // QUOTE FORM CLASS
    // ============================================
    class ElismosQuoteForm {
        constructor() {
            this.form = document.querySelector('.quote-form');
            this.submitBtn = document.querySelector('.quote-submit-btn');
            this.fileUpload = document.querySelector('.file-upload');
            this.fileInput = document.querySelector('.file-input');
            this.fileList = document.querySelector('.file-list');
            
            this.files = [];
            this.maxFileSize = 10 * 1024 * 1024; // 10MB
            this.allowedFileTypes = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.ms-excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'image/jpeg',
                'image/png',
                'image/gif'
            ];
            
            this.init();
        }
        
        init() {
            if (!this.form) return;
            
            this.bindEvents();
            this.initFormSections();
        }
        
        bindEvents() {
            // Form submission
            this.form.addEventListener('submit', this.handleSubmit.bind(this));
            
            // File upload
            if (this.fileUpload && this.fileInput) {
                this.fileUpload.addEventListener('click', () => this.fileInput.click());
                this.fileInput.addEventListener('change', this.handleFileSelect.bind(this));
                
                // Drag and drop
                this.fileUpload.addEventListener('dragover', this.handleDragOver.bind(this));
                this.fileUpload.addEventListener('dragleave', this.handleDragLeave.bind(this));
                this.fileUpload.addEventListener('drop', this.handleDrop.bind(this));
            }
            
            // Real-time validation
            const inputs = this.form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => this.clearFieldError(input));
            });
            
            // Phone number formatting
            const phoneInputs = this.form.querySelectorAll('input[type="tel"]');
            phoneInputs.forEach(input => {
                input.addEventListener('input', this.formatPhoneNumber.bind(this));
            });
        }
        
        // ============================================
        // FORM SUBMISSION
        // ============================================
        async handleSubmit(e) {
            e.preventDefault();
            
            // Validate all fields
            if (!this.validateForm()) {
                this.scrollToFirstError();
                return;
            }
            
            // Show loading state
            this.setLoadingState(true);
            
            try {
                // Prepare form data
                const formData = this.prepareFormData();
                
                // Simulate API call (replace with actual endpoint)
                await this.submitForm(formData);
                
                // Show success message
                this.showSuccessMessage();
                
                // Reset form
                this.form.reset();
                this.files = [];
                this.updateFileList();
                
            } catch (error) {
                console.error('Form submission error:', error);
                this.showErrorMessage('An error occurred while submitting your request. Please try again or contact us directly.');
            } finally {
                this.setLoadingState(false);
            }
        }
        
        prepareFormData() {
            const formData = new FormData(this.form);
            
            // Add files
            this.files.forEach((file, index) => {
                formData.append(`files[${index}]`, file);
            });
            
            // Convert to object for easy access
            const data = {};
            formData.forEach((value, key) => {
                if (key.startsWith('files[')) {
                    if (!data.files) data.files = [];
                    data.files.push(value);
                } else {
                    data[key] = value;
                }
            });
            
            return data;
        }
        
        async submitForm(data) {
            // Simulate API call - replace with actual endpoint
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Simulate success (90% of the time)
                    if (Math.random() > 0.1) {
                        console.log('Form data:', data);
                        resolve({ success: true, message: 'Quote request submitted successfully' });
                    } else {
                        reject(new Error('Simulated server error'));
                    }
                }, 1500);
            });
            
            // Actual implementation would be:
            // const response = await fetch('/api/quote', {
            //     method: 'POST',
            //     body: data
            // });
            // 
            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }
            // 
            // return response.json();
        }
        
        // ============================================
        // FORM VALIDATION
        // ============================================
        validateForm() {
            let isValid = true;
            const requiredFields = this.form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!this.validateField(field)) {
                    isValid = false;
                }
            });
            
            // Validate email fields
            const emailFields = this.form.querySelectorAll('input[type="email"]');
            emailFields.forEach(field => {
                if (field.value && !this.validateEmail(field.value)) {
                    this.showFieldError(field, 'Please enter a valid email address');
                    isValid = false;
                }
            });
            
            // Validate phone fields
            const phoneFields = this.form.querySelectorAll('input[type="tel"]');
            phoneFields.forEach(field => {
                if (field.value && !this.validatePhone(field.value)) {
                    this.showFieldError(field, 'Please enter a valid phone number');
                    isValid = false;
                }
            });
            
            return isValid;
        }
        
        validateField(field) {
            const value = field.value.trim();
            const isRequired = field.hasAttribute('required');
            
            // Clear previous error
            this.clearFieldError(field);
            
            // Check required
            if (isRequired && !value) {
                this.showFieldError(field, 'This field is required');
                return false;
            }
            
            // Check email format
            if (field.type === 'email' && value && !this.validateEmail(value)) {
                this.showFieldError(field, 'Please enter a valid email address');
                return false;
            }
            
            // Check phone format
            if (field.type === 'tel' && value && !this.validatePhone(value)) {
                this.showFieldError(field, 'Please enter a valid phone number');
                return false;
            }
            
            return true;
        }
        
        showFieldError(field, message) {
            field.classList.add('error');
            
            let errorElement = field.parentNode.querySelector('.field-error');
            if (!errorElement) {
                errorElement = document.createElement('span');
                errorElement.className = 'field-error';
                field.parentNode.appendChild(errorElement);
            }
            
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
        
        clearFieldError(field) {
            field.classList.remove('error');
            
            const errorElement = field.parentNode.querySelector('.field-error');
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        }
        
        scrollToFirstError() {
            const firstError = this.form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
        }
        
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
        
        validatePhone(phone) {
            const re = /^[\d\s\-\+\(\)]{10,}$/;
            return re.test(phone);
        }
        
        // ============================================
        // FILE UPLOAD
        // ============================================
        handleFileSelect(e) {
            const files = Array.from(e.target.files);
            this.addFiles(files);
        }
        
        handleDragOver(e) {
            e.preventDefault();
            e.stopPropagation();
            this.fileUpload.classList.add('dragover');
        }
        
        handleDragLeave(e) {
            e.preventDefault();
            e.stopPropagation();
            this.fileUpload.classList.remove('dragover');
        }
        
        handleDrop(e) {
            e.preventDefault();
            e.stopPropagation();
            this.fileUpload.classList.remove('dragover');
            
            const files = Array.from(e.dataTransfer.files);
            this.addFiles(files);
        }
        
        addFiles(newFiles) {
            newFiles.forEach(file => {
                // Check file size
                if (file.size > this.maxFileSize) {
                    this.showErrorMessage(`File "${file.name}" is too large. Maximum size is 10MB.`);
                    return;
                }
                
                // Check file type
                if (!this.allowedFileTypes.includes(file.type)) {
                    this.showErrorMessage(`File type "${file.type}" is not allowed. Please upload PDF, Word, Excel, or image files.`);
                    return;
                }
                
                // Check for duplicates
                const isDuplicate = this.files.some(existingFile => 
                    existingFile.name === file.name && 
                    existingFile.size === file.size
                );
                
                if (!isDuplicate) {
                    this.files.push(file);
                }
            });
            
            this.updateFileList();
        }
        
        removeFile(index) {
            this.files.splice(index, 1);
            this.updateFileList();
        }
        
        updateFileList() {
            if (!this.fileList) return;
            
            if (this.files.length === 0) {
                this.fileList.innerHTML = '';
                return;
            }
            
            this.fileList.innerHTML = this.files.map((file, index) => `
                <div class="file-item">
                    <span class="file-item-name">${this.sanitizeHTML(file.name)} (${this.formatFileSize(file.size)})</span>
                    <button type="button" class="file-item-remove" onclick="window.ElismosQuoteForm.removeFile(${index})">×</button>
                </div>
            `).join('');
        }
        
        formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }
        
        // ============================================
        // PHONE NUMBER FORMATTING
        // ============================================
        formatPhoneNumber(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = value;
                } else if (value.length <= 6) {
                    value = value.slice(0, 3) + ' ' + value.slice(3);
                } else {
                    value = value.slice(0, 3) + ' ' + value.slice(3, 7) + ' ' + value.slice(7, 11);
                }
            }
            
            e.target.value = value;
        }
        
        // ============================================
        // UI STATE
        // ============================================
        setLoadingState(isLoading) {
            if (!this.submitBtn) return;
            
            if (isLoading) {
                this.submitBtn.disabled = true;
                this.submitBtn.innerHTML = '<span class="spinner"></span> Submitting...';
            } else {
                this.submitBtn.disabled = false;
                this.submitBtn.innerHTML = 'Submit Project Request';
            }
        }
        
        showSuccessMessage() {
            this.showMessage('Your quote request has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.', 'success');
        }
        
        showErrorMessage(message) {
            this.showMessage(message || 'An error occurred. Please try again.', 'error');
        }
        
        showMessage(message, type) {
            // Remove existing message
            const existingMessage = this.form.querySelector('.form-message');
            if (existingMessage) {
                existingMessage.remove();
            }
            
            // Create message element
            const messageElement = document.createElement('div');
            messageElement.className = `form-message form-message-${type}`;
            messageElement.innerHTML = `
                <span class="message-icon">${type === 'success' ? '✓' : '!'}</span>
                <span class="message-text">${this.sanitizeHTML(message)}</span>
                <button type="button" class="message-close" onclick="this.parentElement.remove()">×</button>
            `;
            
            // Insert at top of form
            this.form.insertBefore(messageElement, this.form.firstChild);
            
            // Auto-remove after 10 seconds
            setTimeout(() => {
                if (messageElement.parentNode) {
                    messageElement.remove();
                }
            }, 10000);
        }
        
        // ============================================
        // FORM SECTIONS (Accordion)
        // ============================================
        initFormSections() {
            const sectionHeaders = this.form.querySelectorAll('.quote-section-title');
            
            sectionHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const section = header.parentElement;
                    section.classList.toggle('collapsed');
                });
            });
        }
        
        // ============================================
        // UTILITIES
        // ============================================
        sanitizeHTML(str) {
            const temp = document.createElement('div');
            temp.textContent = str;
            return temp.innerHTML;
        }
    }
    
    // ============================================
    // CONTACT FORM CLASS
    // ============================================
    class ElismosContactForm {
        constructor() {
            this.form = document.querySelector('.contact-form');
            this.submitBtn = document.querySelector('.contact-submit-btn');
            
            this.init();
        }
        
        init() {
            if (!this.form) return;
            
            this.form.addEventListener('submit', this.handleSubmit.bind(this));
            
            // Real-time validation
            const inputs = this.form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => this.clearFieldError(input));
            });
        }
        
        async handleSubmit(e) {
            e.preventDefault();
            
            if (!this.validateForm()) {
                return;
            }
            
            this.setLoadingState(true);
            
            try {
                const formData = new FormData(this.form);
                const data = Object.fromEntries(formData.entries());
                
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                console.log('Contact form data:', data);
                this.showSuccessMessage();
                this.form.reset();
                
            } catch (error) {
                console.error('Contact form error:', error);
                this.showErrorMessage('An error occurred. Please try again.');
            } finally {
                this.setLoadingState(false);
            }
        }
        
        validateForm() {
            let isValid = true;
            const requiredFields = this.form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!this.validateField(field)) {
                    isValid = false;
                }
            });
            
            return isValid;
        }
        
        validateField(field) {
            const value = field.value.trim();
            const isRequired = field.hasAttribute('required');
            
            this.clearFieldError(field);
            
            if (isRequired && !value) {
                this.showFieldError(field, 'This field is required');
                return false;
            }
            
            if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                this.showFieldError(field, 'Please enter a valid email');
                return false;
            }
            
            return true;
        }
        
        showFieldError(field, message) {
            field.classList.add('error');
            let errorElement = field.parentNode.querySelector('.field-error');
            if (!errorElement) {
                errorElement = document.createElement('span');
                errorElement.className = 'field-error';
                field.parentNode.appendChild(errorElement);
            }
            errorElement.textContent = message;
        }
        
        clearFieldError(field) {
            field.classList.remove('error');
            const errorElement = field.parentNode.querySelector('.field-error');
            if (errorElement) errorElement.remove();
        }
        
        setLoadingState(isLoading) {
            if (!this.submitBtn) return;
            this.submitBtn.disabled = isLoading;
            this.submitBtn.textContent = isLoading ? 'Sending...' : 'Send Message';
        }
        
        showSuccessMessage() {
            this.showMessage('Your message has been sent successfully. We will get back to you soon.', 'success');
        }
        
        showErrorMessage(message) {
            this.showMessage(message, 'error');
        }
        
        showMessage(message, type) {
            const existingMessage = this.form.querySelector('.form-message');
            if (existingMessage) existingMessage.remove();
            
            const messageElement = document.createElement('div');
            messageElement.className = `form-message form-message-${type}`;
            messageElement.textContent = message;
            
            this.form.insertBefore(messageElement, this.form.firstChild);
            
            setTimeout(() => messageElement.remove(), 10000);
        }
    }
    
    // ============================================
    // INITIALIZE
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        window.ElismosQuoteForm = new ElismosQuoteForm();
        window.ElismosContactForm = new ElismosContactForm();
    });
    
})();