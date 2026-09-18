/* ============================================
   ELISMOS INTERNATIONAL - PROJECTS MODULE
   Project Data & Filtering System
   ============================================ */

(function() {
    'use strict';
    
    // ============================================
    // PROJECT DATA
    // ============================================
    // DEMO CONTENT — REPLACE BEFORE LAUNCH
    const projectsData = [
        {
            id: 1,
            title: 'Industrial Cable Installation',
            sector: 'Industrial',
            location: 'Port Harcourt, Rivers State',
            year: '2024',
            service: 'Electrical Installation',
            description: 'Installation of 4-core × 50mm² armoured cable, 500m length, at a cable tray height of 8 metres for an industrial facility.',
            technicalScope: 'Cable procurement, tray installation, cable pulling, termination, and testing.',
            challenge: 'Working at height with heavy-gauge cable while maintaining safety standards.',
            solution: 'Implemented systematic cable pulling procedure with proper lifting equipment and safety protocols.',
            outcome: 'Successful installation meeting all technical specifications and safety requirements.',
            images: ['https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=75', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75'],
            tags: ['cable', 'industrial', 'high-voltage']
        },
        {
            id: 2,
            title: 'Insulation Resistance Testing',
            sector: 'Industrial',
            location: 'Port Harcourt, Rivers State',
            year: '2024',
            service: 'Maintenance & Repair',
            description: 'Comprehensive insulation resistance testing performed on cables before installation to ensure system integrity.',
            technicalScope: 'Megger testing, insulation measurement, documentation, and compliance verification.',
            challenge: 'Ensuring accurate readings across multiple cable configurations.',
            solution: 'Applied standardized testing procedures with calibrated equipment.',
            outcome: 'All cables passed insulation resistance standards, ready for installation.',
            images: ['https://i.pinimg.com/736x/48/48/9a/48489a8a6a208b976cd897215d1d6ee1.jpg'],
            tags: ['testing', 'maintenance', 'quality-assurance']
        },
        {
            id: 3,
            title: 'Control Panel Engineering - Sojay Automations',
            sector: 'Industrial',
            location: 'Port Harcourt, Rivers State',
            year: '2023',
            service: 'Instrumentation & Control',
            description: 'Design, fabrication, and commissioning of custom control panel for Sojay Automations facility.',
            technicalScope: 'Panel design, component selection, wiring, programming, testing, and commissioning.',
            challenge: 'Meeting specific automation requirements while ensuring system reliability.',
            solution: 'Collaborated closely with client to understand operational needs and deliver tailored solution.',
            outcome: 'Successfully commissioned control panel meeting all operational requirements.',
            images: ['https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75', 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=75'],
            tags: ['control-panel', 'automation', 'industrial']
        },
        {
            id: 4,
            title: 'Coca-Cola Bottling Company Panel',
            sector: 'Commercial',
            location: 'Port Harcourt, Rivers State',
            year: '2023',
            service: 'Electrical Installation',
            description: 'Electrical panel construction for Zery Engineering at Coca-Cola Bottling Company facility.',
            technicalScope: 'Panel design, fabrication, installation, and integration with existing systems.',
            challenge: 'Integrating new panel with existing infrastructure while minimizing downtime.',
            solution: 'Phased installation approach with thorough testing at each stage.',
            outcome: 'Panel commissioned successfully with zero operational disruption.',
            images: ['https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=75'],
            tags: ['commercial', 'panel', 'food-beverage']
        },
        {
            id: 5,
            title: 'Solar Panel System - Commercial Complex',
            sector: 'Commercial',
            location: 'Lagos, Nigeria',
            year: '2024',
            service: 'Solar Energy Solutions',
            description: 'Design and installation of 50kW solar panel system with battery storage for commercial complex.',
            technicalScope: 'Site assessment, system design, panel installation, inverter setup, battery integration, and commissioning.',
            challenge: 'Maximizing energy output within limited roof space.',
            solution: 'Optimized panel placement using advanced solar mapping technology.',
            outcome: 'System generating estimated 200kWh daily, reducing client energy costs by 40%.',
            images: ['https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=75', 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=75'],
            tags: ['solar', 'commercial', 'renewable-energy']
        },
        {
            id: 6,
            title: 'CCTV Installation - Industrial Facility',
            sector: 'Industrial',
            location: 'Rivers State, Nigeria',
            year: '2024',
            service: 'CCTV Installation',
            description: 'Complete CCTV surveillance system installation covering 50+ camera positions across industrial facility.',
            technicalScope: 'System design, camera placement, cabling, NVR setup, monitoring station, and staff training.',
            challenge: 'Ensuring comprehensive coverage while maintaining system performance.',
            solution: 'Strategic camera placement with redundancy for critical areas.',
            outcome: 'Full facility coverage with 24/7 monitoring capability.',
            images: ['https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=75'],
            tags: ['cctv', 'security', 'industrial']
        },
        {
            id: 7,
            title: 'Fire Detection System - Office Building',
            sector: 'Commercial',
            location: 'Port Harcourt, Rivers State',
            year: '2023',
            service: 'Fire & Gas Systems',
            description: 'Design, installation, and commissioning of fire detection and alarm system for multi-story office building.',
            technicalScope: 'Fire alarm panel, smoke detectors, heat detectors, manual call points, sounders, and integration.',
            challenge: 'Meeting stringent fire safety regulations while minimizing aesthetic impact.',
            solution: 'Discreet detector placement with centralized monitoring system.',
            outcome: 'System certified and compliant with all local fire safety standards.',
            images: ['https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75'],
            tags: ['fire-safety', 'commercial', 'detection']
        },
        {
            id: 8,
            title: 'Industrial Instrumentation Upgrade',
            sector: 'Oil & Gas',
            location: 'Niger Delta, Nigeria',
            year: '2024',
            service: 'Instrumentation & Control',
            description: 'Upgrading instrumentation systems for oil and gas processing facility, including flow meters and pressure sensors.',
            technicalScope: 'System audit, equipment procurement, installation, calibration, and commissioning.',
            challenge: 'Minimizing production downtime during upgrade process.',
            solution: 'Phased implementation with temporary monitoring solutions.',
            outcome: 'All instrumentation upgraded with improved accuracy and reliability.',
            images: ['https://i.pinimg.com/736x/86/ac/e0/86ace0a09d9371748883725a7ac65da9.jpg', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75'],
            tags: ['instrumentation', 'oil-gas', 'industrial']
        }
    ];
    
    // ============================================
    // PROJECTS CLASS
    // ============================================
    class ElismosProjects {
        constructor() {
            this.projects = projectsData;
            this.filteredProjects = [...this.projects];
            this.currentFilter = 'all';
            this.currentIndustryFilter = 'all';
            this.projectsGrid = document.querySelector('.projects-grid');
            
            this.init();
        }
        
        init() {
            if (!this.projectsGrid) return;
            
            this.renderProjects();
            this.bindFilterEvents();
            this.initLightbox();
        }
        
        // ============================================
        // RENDER PROJECTS
        // ============================================
        renderProjects() {
            if (!this.projectsGrid) return;
            
            this.projectsGrid.innerHTML = '';
            
            if (this.filteredProjects.length === 0) {
                this.projectsGrid.innerHTML = `
                    <div class="no-projects">
                        <h3>No Projects Found</h3>
                        <p>No projects match your current filter criteria.</p>
                        <button class="btn btn-secondary" onclick="window.ElismosProjects.clearFilters()">Clear Filters</button>
                    </div>
                `;
                return;
            }
            
            this.filteredProjects.forEach(project => {
                const projectCard = this.createProjectCard(project);
                this.projectsGrid.appendChild(projectCard);
            });
            
            // Trigger reveal animations
            this.triggerRevealAnimations();
        }
        
        createProjectCard(project) {
            const card = document.createElement('div');
            card.className = 'project-card reveal';
            card.dataset.service = project.service.toLowerCase().replace(/\s+/g, '-');
            card.dataset.sector = project.sector.toLowerCase().replace(/\s+/g, '-');
            
            const imageUrl = project.images[0] || 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=75';
            
            card.innerHTML = `
                <div class="project-image">
                    <img src="${imageUrl}" alt="${this.sanitizeHTML(project.title)}" loading="lazy">
                    <div class="project-image-overlay"></div>
                    <div class="project-image-view">
                        <span>View Project</span>
                        →
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-meta">
                        <span class="project-sector">${this.sanitizeHTML(project.sector)}</span>
                        <span class="project-year">${this.sanitizeHTML(project.year)}</span>
                    </div>
                    <h3 class="project-title">${this.sanitizeHTML(project.title)}</h3>
                    <p class="project-excerpt">${this.sanitizeHTML(project.description)}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${this.sanitizeHTML(tag)}</span>`).join('')}
                    </div>
                </div>
            `;
            
            // Add click event for lightbox
            card.addEventListener('click', () => this.openProjectLightbox(project));
            
            return card;
        }
        
        // ============================================
        // FILTERING
        // ============================================
        bindFilterEvents() {
            // Initialize custom dropdowns
            this.initCustomDropdown('serviceFilter', 'service');
            this.initCustomDropdown('industryFilter', 'industry');
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.filter-dropdown')) {
                    document.querySelectorAll('.filter-dropdown').forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }
            });
        }
        
        initCustomDropdown(dropdownId, filterType) {
            const dropdown = document.getElementById(dropdownId);
            if (!dropdown) return;
            
            const trigger = dropdown.querySelector('.filter-dropdown-trigger');
            const menu = dropdown.querySelector('.filter-dropdown-menu');
            const options = dropdown.querySelectorAll('.filter-dropdown-option');
            const textDisplay = dropdown.querySelector('.filter-dropdown-text');
            
            // Toggle dropdown
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Close other dropdowns
                document.querySelectorAll('.filter-dropdown').forEach(d => {
                    if (d !== dropdown) d.classList.remove('active');
                });
                
                dropdown.classList.toggle('active');
            });
            
            // Handle option selection
            options.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    
                    const value = option.dataset.value;
                    const text = option.textContent.trim();
                    
                    // Update selected state
                    options.forEach(opt => opt.classList.remove('selected'));
                    option.classList.add('selected');
                    
                    // Update trigger text
                    textDisplay.textContent = text;
                    
                    // Update dropdown value
                    dropdown.dataset.value = value;
                    
                    // Apply filter
                    if (filterType === 'service') {
                        this.setFilter(value);
                    } else {
                        this.setIndustryFilter(value);
                    }
                    
                    // Close dropdown
                    dropdown.classList.remove('active');
                });
            });
        }
        
        setFilter(filter) {
            this.currentFilter = filter;
            this.applyFilters();
        }
        
        setIndustryFilter(filter) {
            this.currentIndustryFilter = filter;
            this.applyFilters();
        }
        
        applyFilters() {
            this.filteredProjects = this.projects.filter(project => {
                const matchesService = this.currentFilter === 'all' || 
                    project.service.toLowerCase().replace(/\s+/g, '-') === this.currentFilter;
                
                const matchesIndustry = this.currentIndustryFilter === 'all' || 
                    project.sector.toLowerCase().replace(/\s+/g, '-') === this.currentIndustryFilter;
                
                return matchesService && matchesIndustry;
            });
            
            this.renderProjects();
        }
        
        clearFilters() {
            this.currentFilter = 'all';
            this.currentIndustryFilter = 'all';
            
            // Reset service dropdown
            const serviceDropdown = document.getElementById('serviceFilter');
            if (serviceDropdown) {
                serviceDropdown.dataset.value = 'all';
                serviceDropdown.querySelector('.filter-dropdown-text').textContent = 'All Services';
                serviceDropdown.querySelectorAll('.filter-dropdown-option').forEach(opt => {
                    opt.classList.remove('selected');
                    if (opt.dataset.value === 'all') opt.classList.add('selected');
                });
            }
            
            // Reset industry dropdown
            const industryDropdown = document.getElementById('industryFilter');
            if (industryDropdown) {
                industryDropdown.dataset.value = 'all';
                industryDropdown.querySelector('.filter-dropdown-text').textContent = 'All Industries';
                industryDropdown.querySelectorAll('.filter-dropdown-option').forEach(opt => {
                    opt.classList.remove('selected');
                    if (opt.dataset.value === 'all') opt.classList.add('selected');
                });
            }
            
            this.filteredProjects = [...this.projects];
            this.renderProjects();
        }
        
        // ============================================
        // LIGHTBOX
        // ============================================
        initLightbox() {
            // Create lightbox elements if they don't exist
            if (!document.querySelector('.lightbox')) {
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox';
                lightbox.innerHTML = `
                    <button class="lightbox-close" aria-label="Close">×</button>
                    <button class="lightbox-nav lightbox-prev" aria-label="Previous">‹</button>
                    <button class="lightbox-nav lightbox-next" aria-label="Next">›</button>
                    <div class="lightbox-content">
                        <img class="lightbox-image" src="" alt="">
                        <div class="lightbox-caption"></div>
                    </div>
                `;
                document.body.appendChild(lightbox);
            }
            
            // Bind lightbox events
            const lightbox = document.querySelector('.lightbox');
            const closeBtn = lightbox.querySelector('.lightbox-close');
            const prevBtn = lightbox.querySelector('.lightbox-prev');
            const nextBtn = lightbox.querySelector('.lightbox-next');
            
            closeBtn.addEventListener('click', () => this.closeLightbox());
            prevBtn.addEventListener('click', () => this.prevImage());
            nextBtn.addEventListener('click', () => this.nextImage());
            
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    this.closeLightbox();
                }
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (!lightbox.classList.contains('active')) return;
                
                if (e.key === 'Escape') this.closeLightbox();
                if (e.key === 'ArrowLeft') this.prevImage();
                if (e.key === 'ArrowRight') this.nextImage();
            });
        }
        
        openProjectLightbox(project) {
            this.currentProject = project;
            this.currentImageIndex = 0;
            
            this.updateLightboxContent();
            
            const lightbox = document.querySelector('.lightbox');
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        closeLightbox() {
            const lightbox = document.querySelector('.lightbox');
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        prevImage() {
            if (!this.currentProject) return;
            
            this.currentImageIndex--;
            if (this.currentImageIndex < 0) {
                this.currentImageIndex = this.currentProject.images.length - 1;
            }
            
            this.updateLightboxContent();
        }
        
        nextImage() {
            if (!this.currentProject) return;
            
            this.currentImageIndex++;
            if (this.currentImageIndex >= this.currentProject.images.length) {
                this.currentImageIndex = 0;
            }
            
            this.updateLightboxContent();
        }
        
        updateLightboxContent() {
            const lightbox = document.querySelector('.lightbox');
            const image = lightbox.querySelector('.lightbox-image');
            const caption = lightbox.querySelector('.lightbox-caption');
            
            const imageUrl = this.currentProject.images[this.currentImageIndex];
            image.src = imageUrl;
            image.alt = this.currentProject.title;
            caption.textContent = `${this.currentProject.title} - Image ${this.currentImageIndex + 1} of ${this.currentProject.images.length}`;
        }
        
        // ============================================
        // UTILITIES
        // ============================================
        sanitizeHTML(str) {
            const temp = document.createElement('div');
            temp.textContent = str;
            return temp.innerHTML;
        }
        
        triggerRevealAnimations() {
            const revealElements = this.projectsGrid.querySelectorAll('.reveal');
            
            if (window.ElismosAnimations && !window.ElismosAnimations.prefersReducedMotion) {
                revealElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('visible');
                    }, index * 100);
                });
            } else {
                revealElements.forEach(el => {
                    el.classList.add('visible');
                });
            }
        }
        
        // Get project by ID
        getProjectById(id) {
            return this.projects.find(project => project.id === id);
        }
        
        // Get projects by service
        getProjectsByService(service) {
            return this.projects.filter(project => 
                project.service.toLowerCase().replace(/\s+/g, '-') === service.toLowerCase()
            );
        }
        
        // Get projects by sector
        getProjectsBySector(sector) {
            return this.projects.filter(project => 
                project.sector.toLowerCase().replace(/\s+/g, '-') === sector.toLowerCase()
            );
        }
        
        // Get all unique services
        getUniqueServices() {
            const services = new Set(this.projects.map(project => project.service));
            return Array.from(services);
        }
        
        // Get all unique sectors
        getUniqueSectors() {
            const sectors = new Set(this.projects.map(project => project.sector));
            return Array.from(sectors);
        }
    }
    
    // ============================================
    // INITIALIZE
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        window.ElismosProjects = new ElismosProjects();
    });
    
})();