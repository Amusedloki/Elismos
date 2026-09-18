/* ============================================
   ELISMOS INTERNATIONAL - ANIMATIONS MODULE
   Scroll Reveal & Interactive Effects
   ============================================ */

(function() {
    'use strict';
    
    // ============================================
    // ANIMATION CLASS
    // ============================================
    class ElismosAnimations {
        constructor() {
            this.revealElements = [];
            this.observers = [];
            this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            this.init();
        }
        
        init() {
            if (this.prefersReducedMotion) {
                this.revealAllImmediate();
                return;
            }
            
            this.initScrollReveal();
            this.initStaggerReveal();
            this.initParallax();
            this.initCounterAnimation();
            this.initTypingEffect();
            this.initDiagramAnimation();
        }
        
        // ============================================
        // SCROLL REVEAL
        // ============================================
        initScrollReveal() {
            const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-fade, .reveal-slide-up, .reveal-slide-left, .reveal-slide-right, .reveal-scale');
            
            if (!elements.length) return;
            
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.revealElement(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            elements.forEach(el => {
                observer.observe(el);
            });
            
            this.observers.push(observer);
        }
        
        revealElement(element) {
            element.classList.add('visible');
            
            // Trigger any child animations
            const animatedChildren = element.querySelectorAll('[data-animate]');
            animatedChildren.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('animate');
                }, index * 100);
            });
        }
        
        revealAllImmediate() {
            const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-fade, .reveal-slide-up, .reveal-slide-left, .reveal-slide-right, .reveal-scale, .stagger-reveal');
            elements.forEach(el => {
                el.classList.add('visible');
            });
        }
        
        // ============================================
        // STAGGER REVEAL
        // ============================================
        initStaggerReveal() {
            const staggerContainers = document.querySelectorAll('.stagger-reveal');
            
            if (!staggerContainers.length) return;
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateStaggerChildren(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            staggerContainers.forEach(container => {
                observer.observe(container);
            });
            
            this.observers.push(observer);
        }
        
        animateStaggerChildren(container) {
            const children = container.children;
            
            Array.from(children).forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, 100 + index * 100);
            });
        }
        
        // ============================================
        // PARALLAX EFFECT
        // ============================================
        initParallax() {
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            
            if (!parallaxElements.length) return;
            
            window.addEventListener('scroll', this.throttle(() => {
                this.updateParallax(parallaxElements);
            }, 16));
        }
        
        updateParallax(elements) {
            const scrollTop = window.pageYOffset;
            
            elements.forEach(el => {
                const speed = parseFloat(el.dataset.parallax) || 0.5;
                const rect = el.getBoundingClientRect();
                const elementTop = rect.top + scrollTop;
                const elementHeight = rect.height;
                const windowHeight = window.innerHeight;
                
                if (scrollTop + windowHeight > elementTop && scrollTop < elementTop + elementHeight) {
                    const yPos = -(scrollTop - elementTop) * speed;
                    el.style.transform = `translateY(${yPos}px)`;
                }
            });
        }
        
        // ============================================
        // COUNTER ANIMATION
        // ============================================
        initCounterAnimation() {
            const counters = document.querySelectorAll('[data-count]');
            
            if (!counters.length) return;
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            counters.forEach(counter => {
                observer.observe(counter);
            });
            
            this.observers.push(observer);
        }
        
        animateCounter(element) {
            const target = parseInt(element.dataset.count);
            const duration = parseInt(element.dataset.duration) || 2000;
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const updateCounter = () => {
                current += increment;
                
                if (current < target) {
                    element.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target;
                }
            };
            
            updateCounter();
        }
        
        // ============================================
        // TYPING EFFECT
        // ============================================
        initTypingEffect() {
            const typingElements = document.querySelectorAll('[data-typing]');
            
            if (!typingElements.length) return;
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.startTyping(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            typingElements.forEach(el => {
                observer.observe(el);
            });
            
            this.observers.push(observer);
        }
        
        startTyping(element) {
            const text = element.dataset.typing;
            const speed = parseInt(element.dataset.speed) || 50;
            let index = 0;
            
            element.textContent = '';
            element.style.borderRight = '2px solid var(--elismos-blue)';
            
            const type = () => {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, speed);
                } else {
                    // Blinking cursor
                    setInterval(() => {
                        element.style.borderRight = element.style.borderRight === 'none' 
                            ? '2px solid var(--elismos-blue)' 
                            : 'none';
                    }, 500);
                }
            };
            
            type();
        }
        
        // ============================================
        // DIAGRAM ANIMATION
        // ============================================
        initDiagramAnimation() {
            const diagrams = document.querySelectorAll('.diagram-animated');
            
            if (!diagrams.length) return;
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.3
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateDiagram(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            diagrams.forEach(diagram => {
                observer.observe(diagram);
            });
            
            this.observers.push(observer);
        }
        
        animateDiagram(diagram) {
            const nodes = diagram.querySelectorAll('.diagram-node');
            const arrows = diagram.querySelectorAll('.diagram-arrow');
            
            // Animate nodes sequentially
            nodes.forEach((node, index) => {
                setTimeout(() => {
                    node.style.opacity = '1';
                    node.style.transform = 'translateY(0) scale(1)';
                }, index * 200);
            });
            
            // Animate arrows
            arrows.forEach((arrow, index) => {
                setTimeout(() => {
                    arrow.style.opacity = '1';
                    arrow.style.transform = 'scaleX(1)';
                }, 300 + index * 200);
            });
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
        
        // Cleanup observers
        destroy() {
            this.observers.forEach(observer => {
                observer.disconnect();
            });
            this.observers = [];
        }
    }
    
    // ============================================
    // SERVICE CARD INTERACTIONS
    // ============================================
    class ServiceCardInteractions {
        constructor() {
            this.serviceCards = document.querySelectorAll('.service-card');
            this.serviceDetail = document.querySelector('.service-detail');
            
            this.init();
        }
        
        init() {
            if (!this.serviceCards.length) return;
            
            this.serviceCards.forEach(card => {
                card.addEventListener('click', () => this.handleCardClick(card));
                card.addEventListener('mouseenter', () => this.handleCardHover(card));
                card.addEventListener('mouseleave', () => this.handleCardLeave(card));
            });
        }
        
        handleCardClick(card) {
            // Remove active from all cards
            this.serviceCards.forEach(c => c.classList.remove('active'));
            
            // Add active to clicked card
            card.classList.add('active');
            
            // Update detail panel if exists
            if (this.serviceDetail) {
                this.updateServiceDetail(card.dataset.service);
            }
        }
        
        handleCardHover(card) {
            // Add subtle scale effect
            card.style.transform = 'translateY(-4px) scale(1.02)';
        }
        
        handleCardLeave(card) {
            // Reset transform
            card.style.transform = '';
        }
        
        updateServiceDetail(serviceId) {
            // This would be implemented to show detailed service information
            console.log('Service selected:', serviceId);
        }
    }
    
    // ============================================
    // PROJECT CARD INTERACTIONS
    // ============================================
    class ProjectCardInteractions {
        constructor() {
            this.projectCards = document.querySelectorAll('.project-card');
            
            this.init();
        }
        
        init() {
            if (!this.projectCards.length) return;
            
            this.projectCards.forEach(card => {
                card.addEventListener('mouseenter', () => this.handleCardHover(card));
                card.addEventListener('mouseleave', () => this.handleCardLeave(card));
            });
        }
        
        handleCardHover(card) {
            const image = card.querySelector('.project-image img');
            if (image) {
                image.style.transform = 'scale(1.05)';
            }
        }
        
        handleCardLeave(card) {
            const image = card.querySelector('.project-image img');
            if (image) {
                image.style.transform = '';
            }
        }
    }
    
    // ============================================
    // INITIALIZE
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        window.ElismosAnimations = new ElismosAnimations();
        window.ServiceCardInteractions = new ServiceCardInteractions();
        window.ProjectCardInteractions = new ProjectCardInteractions();
    });
    
})();