/* ============================================
   ELISMOS INTERNATIONAL - NAVIGATION MODULE
   Advanced Navigation System
   ============================================ */

(function() {
    'use strict';
    
    // ============================================
    // NAVIGATION CLASS
    // ============================================
    class ElismosNavigation {
        constructor() {
            this.navbar = document.querySelector('.navbar');
            this.navbarToggle = document.querySelector('.navbar-toggle');
            this.mobileMenu = document.querySelector('.mobile-menu');
            this.mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
            this.navLinks = document.querySelectorAll('.navbar-link');
            this.ctaButtons = document.querySelectorAll('.navbar-cta .btn');
            
            this.lastScroll = 0;
            this.scrollThreshold = 100;
            this.isMenuOpen = false;
            
            this.init();
        }
        
        init() {
            if (!this.navbar) return;
            
            this.bindEvents();
            this.setActiveLink();
            this.initDropdowns();
        }
        
        bindEvents() {
            // Scroll events
            window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 10));
            
            // Mobile menu toggle
            if (this.navbarToggle) {
                this.navbarToggle.addEventListener('click', this.toggleMobileMenu.bind(this));
            }
            
            // Mobile menu links
            this.mobileMenuLinks.forEach(link => {
                link.addEventListener('click', this.closeMobileMenu.bind(this));
            });
            
            // Escape key
            document.addEventListener('keydown', this.handleKeydown.bind(this));
            
            // Click outside to close
            document.addEventListener('click', this.handleClickOutside.bind(this));
            
            // Window resize
            window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
        }
        
        // ============================================
        // SCROLL HANDLING
        // ============================================
        handleScroll() {
            const currentScroll = window.pageYOffset;
            
            // Add/remove scrolled class
            if (currentScroll > this.scrollThreshold) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
            
            // Hide/show on scroll direction
            if (currentScroll > this.lastScroll && currentScroll > 200) {
                this.navbar.style.transform = 'translateY(-100%)';
                this.closeAllDropdowns();
            } else {
                this.navbar.style.transform = 'translateY(0)';
            }
            
            this.lastScroll = currentScroll;
            
            // Update active link based on scroll position
            this.updateActiveLinkOnScroll();
        }
        
        // ============================================
        // MOBILE MENU
        // ============================================
        toggleMobileMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            
            this.navbarToggle.classList.toggle('active', this.isMenuOpen);
            this.mobileMenu.classList.toggle('active', this.isMenuOpen);
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
            
            // Animate menu links
            if (this.isMenuOpen) {
                this.animateMobileMenuLinks();
            }
        }
        
        closeMobileMenu() {
            if (!this.isMenuOpen) return;
            
            this.isMenuOpen = false;
            this.navbarToggle.classList.remove('active');
            this.mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        animateMobileMenuLinks() {
            this.mobileMenuLinks.forEach((link, index) => {
                link.style.transitionDelay = `${0.1 + index * 0.05}s`;
            });
        }
        
        // ============================================
        // DROPDOWN MENUS
        // ============================================
        initDropdowns() {
            const dropdowns = document.querySelectorAll('.navbar-dropdown');
            
            dropdowns.forEach(dropdown => {
                const trigger = dropdown.querySelector('.navbar-link');
                const menu = dropdown.querySelector('.dropdown-menu');
                
                if (!trigger || !menu) return;
                
                // Mouse events
                dropdown.addEventListener('mouseenter', () => {
                    this.openDropdown(dropdown);
                });
                
                dropdown.addEventListener('mouseleave', () => {
                    this.closeDropdown(dropdown);
                });
                
                // Keyboard events
                trigger.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.toggleDropdown(dropdown);
                    }
                });
            });
        }
        
        openDropdown(dropdown) {
            dropdown.classList.add('active');
            const menu = dropdown.querySelector('.dropdown-menu');
            if (menu) {
                menu.style.opacity = '1';
                menu.style.visibility = 'visible';
                menu.style.transform = 'translateY(0)';
            }
        }
        
        closeDropdown(dropdown) {
            dropdown.classList.remove('active');
            const menu = dropdown.querySelector('.dropdown-menu');
            if (menu) {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.transform = 'translateY(-10px)';
            }
        }
        
        toggleDropdown(dropdown) {
            if (dropdown.classList.contains('active')) {
                this.closeDropdown(dropdown);
            } else {
                this.closeAllDropdowns();
                this.openDropdown(dropdown);
            }
        }
        
        closeAllDropdowns() {
            const dropdowns = document.querySelectorAll('.navbar-dropdown');
            dropdowns.forEach(dropdown => {
                this.closeDropdown(dropdown);
            });
        }
        
        // ============================================
        // ACTIVE LINK MANAGEMENT
        // ============================================
        setActiveLink() {
            const currentPage = this.getCurrentPage();
            
            this.navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (this.isCurrentPage(href, currentPage)) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
        
        updateActiveLinkOnScroll() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.pageYOffset + 150;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    this.navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }
        
        getCurrentPage() {
            const path = window.location.pathname;
            const page = path.split('/').pop();
            return page || 'index.html';
        }
        
        isCurrentPage(href, currentPage) {
            if (href === currentPage) return true;
            if (currentPage === '' && href === 'index.html') return true;
            if (currentPage === 'index.html' && href === '/') return true;
            return false;
        }
        
        // ============================================
        // EVENT HANDLERS
        // ============================================
        handleKeydown(e) {
            if (e.key === 'Escape') {
                this.closeMobileMenu();
                this.closeAllDropdowns();
            }
        }
        
        handleClickOutside(e) {
            if (!this.navbar.contains(e.target)) {
                this.closeMobileMenu();
                this.closeAllDropdowns();
            }
        }
        
        handleResize() {
            if (window.innerWidth > 768) {
                this.closeMobileMenu();
            }
        }
        
        // ============================================
        // UTILITY FUNCTIONS
        // ============================================
        throttle(func, limit) {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(function() {
                        inThrottle = false;
                    }, limit);
                }
            };
        }
        
        debounce(func, wait) {
            let timeout;
            return function executedFunction() {
                const context = this;
                const args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    func.apply(context, args);
                }, wait);
            };
        }
    }
    
    // ============================================
    // INITIALIZE
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        window.ElismosNav = new ElismosNavigation();
    });
    
})();