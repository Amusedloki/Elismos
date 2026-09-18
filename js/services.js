/* ============================================
   ELISMOS INTERNATIONAL - SERVICES MODULE
   Interactive Capabilities Matrix
   ============================================ */

(function() {
    'use strict';
    
    // ============================================
    // SERVICES DATA
    // ============================================
    // DEMO CONTENT — REPLACE BEFORE LAUNCH
    const servicesData = [
        {
            id: 'instrumentation-control',
            number: '01',
            title: 'Instrumentation & Control',
            shortDescription: 'Design, installation, calibration, and maintenance of control systems.',
            fullDescription: 'We provide a full suite of services for industrial instrumentation, including design, installation, calibration, and maintenance of control systems. Our team is proficient in working with process control systems, flow meters, pressure sensors, and temperature gauges to ensure optimal operational efficiency and safety.',
            features: [
                'Process control system design',
                'Flow meter installation & calibration',
                'Pressure sensor implementation',
                'Temperature monitoring systems',
                'Control panel engineering',
                'System integration & commissioning'
            ],
            industries: ['Industrial', 'Oil & Gas', 'Manufacturing'],
            icon: '⚙️'
        },
        {
            id: 'electrical-installations',
            number: '02',
            title: 'Electrical Installations',
            shortDescription: 'From residential wiring to large-scale industrial power systems.',
            fullDescription: 'From small-scale residential wiring to large-scale industrial power systems, our certified electricians handle all aspects of electrical installation. This includes new construction wiring, panel upgrades, lighting systems, and troubleshooting for both low- and high-voltage applications. We ensure all our work adheres to the latest industry standards and safety regulations.',
            features: [
                'New construction wiring',
                'Electrical panel upgrades',
                'Lighting system installation',
                'Low-voltage applications',
                'High-voltage systems',
                'Troubleshooting & diagnostics'
            ],
            industries: ['Industrial', 'Commercial', 'Residential', 'Engineering'],
            icon: '⚡'
        },
        {
            id: 'solar-energy',
            number: '03',
            title: 'Solar Energy Solutions',
            shortDescription: 'Customized solar solutions for homes and businesses.',
            fullDescription: 'We are at the forefront of the renewable energy revolution, offering customized solar solutions for homes and businesses. Our services include the design and installation of solar panel systems, battery storage, and grid-tie solutions. We help clients reduce their carbon footprint and save on energy costs with clean, sustainable power.',
            features: [
                'Solar panel system design',
                'Battery storage solutions',
                'Grid-tie systems',
                'Energy monitoring',
                'System maintenance',
                'Performance optimization'
            ],
            industries: ['Commercial', 'Residential', 'Industrial'],
            icon: '☀️'
        },
        {
            id: 'maintenance-repair',
            number: '04',
            title: 'Maintenance & Repair',
            shortDescription: 'Comprehensive maintenance contracts and emergency repair services.',
            fullDescription: 'We offer comprehensive maintenance contracts and emergency repair services, including the rewinding of electric motors, to keep your electrical and solar systems running smoothly. Our proactive approach to maintenance minimizes downtime and extends the lifespan of your equipment.',
            features: [
                'Preventive maintenance programs',
                'Emergency repair services',
                'Electric motor rewinding',
                'System diagnostics',
                'Equipment restoration',
                'Performance monitoring'
            ],
            industries: ['Industrial', 'Commercial', 'Oil & Gas'],
            icon: '🔧'
        },
        {
            id: 'consultancy',
            number: '05',
            title: 'Consultancy',
            shortDescription: 'Expert consultation for electrical and energy projects.',
            fullDescription: 'We provide expert consultation services to help clients plan and execute their electrical and energy projects. Our specialists offer guidance on system design, energy efficiency audits, and regulatory compliance to ensure a successful outcome.',
            features: [
                'System design consultation',
                'Energy efficiency audits',
                'Regulatory compliance',
                'Project planning',
                'Technical advisory',
                'Risk assessment'
            ],
            industries: ['Industrial', 'Commercial', 'Engineering', 'Oil & Gas'],
            icon: '📋'
        },
        {
            id: 'cctv',
            number: '06',
            title: 'CCTV Installation & Maintenance',
            shortDescription: 'Complete CCTV solutions for commercial and residential properties.',
            fullDescription: 'We offer a full range of CCTV solutions to enhance the security of your property. Our services include the strategic design, professional installation, and ongoing maintenance of surveillance systems for both commercial and residential clients.',
            features: [
                'Security system design',
                'Camera installation',
                'NVR/DVR setup',
                'Remote monitoring',
                'System maintenance',
                'Upgrades & expansions'
            ],
            industries: ['Commercial', 'Residential', 'Industrial'],
            icon: '📹'
        },
        {
            id: 'fire-gas',
            number: '07',
            title: 'Fire & Gas Systems',
            shortDescription: 'Installation, commissioning, and maintenance of fire and gas systems.',
            fullDescription: 'We specialize in the installation, commissioning, and maintenance of fire and gas detection and suppression systems. Our solutions are designed to provide early warning and robust protection for industrial, commercial, and residential properties, ensuring compliance with all safety regulations.',
            features: [
                'Fire alarm systems',
                'Smoke & heat detectors',
                'Gas detection systems',
                'Suppression systems',
                'System commissioning',
                'Regular maintenance & calibration'
            ],
            industries: ['Industrial', 'Commercial', 'Oil & Gas', 'Residential'],
            icon: '🔥'
        }
    ];
    
    // ============================================
    // SERVICES CLASS
    // ============================================
    class ElismosServices {
        constructor() {
            this.services = servicesData;
            this.activeService = null;
            this.serviceCards = document.querySelectorAll('.service-card');
            this.serviceDetail = document.querySelector('.service-detail');
            
            this.init();
        }
        
        init() {
            if (!this.serviceCards.length) return;
            
            this.bindEvents();
            this.initServiceDiagrams();
        }
        
        // ============================================
        // EVENT BINDING
        // ============================================
        bindEvents() {
            this.serviceCards.forEach(card => {
                card.addEventListener('click', () => this.handleCardClick(card));
                card.addEventListener('mouseenter', () => this.handleCardHover(card));
                card.addEventListener('mouseleave', () => this.handleCardLeave(card));
            });
            
            // Close detail panel when clicking outside
            document.addEventListener('click', (e) => {
                if (this.serviceDetail && 
                    !this.serviceDetail.contains(e.target) && 
                    !e.target.closest('.service-card')) {
                    this.closeServiceDetail();
                }
            });
        }
        
        // ============================================
        // CARD INTERACTIONS
        // ============================================
        handleCardClick(card) {
            const serviceId = card.dataset.service;
            const service = this.getServiceById(serviceId);
            
            if (!service) return;
            
            // Toggle active state
            if (this.activeService === serviceId) {
                this.closeServiceDetail();
                return;
            }
            
            // Update active card
            this.serviceCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            // Update detail panel
            this.updateServiceDetail(service);
            this.activeService = serviceId;
            
            // Scroll to detail panel
            if (this.serviceDetail) {
                this.serviceDetail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
        
        handleCardHover(card) {
            const serviceId = card.dataset.service;
            const service = this.getServiceById(serviceId);
            
            if (service) {
                card.querySelector('.service-card-excerpt').textContent = service.shortDescription;
            }
        }
        
        handleCardLeave(card) {
            // Reset to short description if not active
            const serviceId = card.dataset.service;
            if (this.activeService !== serviceId) {
                const service = this.getServiceById(serviceId);
                if (service) {
                    card.querySelector('.service-card-excerpt').textContent = service.shortDescription;
                }
            }
        }
        
        // ============================================
        // SERVICE DETAIL PANEL
        // ============================================
        updateServiceDetail(service) {
            if (!this.serviceDetail) return;
            
            this.serviceDetail.innerHTML = `
                <div class="service-detail-grid">
                    <div class="service-detail-content">
                        <h3>${this.sanitizeHTML(service.title)}</h3>
                        <p>${this.sanitizeHTML(service.fullDescription)}</p>
                        
                        <h4>Core Capabilities</h4>
                        <ul class="service-features">
                            ${service.features.map(feature => `
                                <li>${this.sanitizeHTML(feature)}</li>
                            `).join('')}
                        </ul>
                        
                        <div class="service-industries">
                            <h4>Industries Served</h4>
                            <div class="industry-tags">
                                ${service.industries.map(industry => `
                                    <span class="industry-tag">${this.sanitizeHTML(industry)}</span>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="service-cta">
                            <a href="quote.html" class="btn btn-primary">Request a Quote</a>
                            <a href="contact.html" class="btn btn-secondary">Contact Us</a>
                        </div>
                    </div>
                    
                    <div class="service-visual">
                        <div class="service-diagram" id="diagram-${service.id}">
                            ${this.getServiceDiagram(service.id)}
                        </div>
                    </div>
                </div>
            `;
            
            this.serviceDetail.classList.add('active');
            
            // Animate diagram
            this.animateServiceDiagram(service.id);
        }
        
        closeServiceDetail() {
            if (this.serviceDetail) {
                this.serviceDetail.classList.remove('active');
            }
            
            this.serviceCards.forEach(c => c.classList.remove('active'));
            this.activeService = null;
        }
        
        // ============================================
        // SERVICE DIAGRAMS
        // ============================================
        getServiceDiagram(serviceId) {
            const diagrams = {
                'instrumentation-control': `
                    <div class="diagram-flow">
                        <div class="diagram-node">
                            <div class="diagram-node-icon">📡</div>
                            <div class="diagram-node-label">Sensor</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">📶</div>
                            <div class="diagram-node-label">Signal</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">🖥️</div>
                            <div class="diagram-node-label">Control System</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">⚙️</div>
                            <div class="diagram-node-label">Process</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">📊</div>
                            <div class="diagram-node-label">Monitoring</div>
                        </div>
                    </div>
                `,
                'electrical-installations': `
                    <div class="diagram-flow">
                        <div class="diagram-node">
                            <div class="diagram-node-icon">🔌</div>
                            <div class="diagram-node-label">Power Source</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">⚡</div>
                            <div class="diagram-node-label">Distribution</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">🔧</div>
                            <div class="diagram-node-label">Panel</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">💡</div>
                            <div class="diagram-node-label">Load</div>
                        </div>
                    </div>
                `,
                'solar-energy': `
                    <div class="solar-flow">
                        <div class="solar-step">
                            <div class="solar-step-icon">☀️</div>
                            <div class="solar-step-title">Sun</div>
                            <div class="solar-step-desc">Solar radiation</div>
                        </div>
                        <div class="solar-step">
                            <div class="solar-step-icon">🔲</div>
                            <div class="solar-step-title">Solar Panels</div>
                            <div class="solar-step-desc">Energy conversion</div>
                        </div>
                        <div class="solar-step">
                            <div class="solar-step-icon">⚡</div>
                            <div class="solar-step-title">Inverter</div>
                            <div class="solar-step-desc">DC to AC</div>
                        </div>
                        <div class="solar-step">
                            <div class="solar-step-icon">🔋</div>
                            <div class="solar-step-title">Battery</div>
                            <div class="solar-step-desc">Energy storage</div>
                        </div>
                        <div class="solar-step">
                            <div class="solar-step-icon">🏢</div>
                            <div class="solar-step-title">Building</div>
                            <div class="solar-step-desc">Power usage</div>
                        </div>
                    </div>
                `,
                'maintenance-repair': `
                    <div class="diagram-flow">
                        <div class="diagram-node">
                            <div class="diagram-node-icon">🔍</div>
                            <div class="diagram-node-label">Prevent</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">🔧</div>
                            <div class="diagram-node-label">Maintain</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">🔄</div>
                            <div class="diagram-node-label">Restore</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">📈</div>
                            <div class="diagram-node-label">Extend</div>
                        </div>
                    </div>
                `,
                'consultancy': `
                    <div class="diagram-flow">
                        <div class="diagram-node">
                            <div class="diagram-node-icon">📋</div>
                            <div class="diagram-node-label">Assessment</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">📊</div>
                            <div class="diagram-node-label">Analysis</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">📝</div>
                            <div class="diagram-node-label">Planning</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">✅</div>
                            <div class="diagram-node-label">Implementation</div>
                        </div>
                    </div>
                `,
                'cctv': `
                    <div class="diagram-flow">
                        <div class="diagram-node">
                            <div class="diagram-node-icon">📹</div>
                            <div class="diagram-node-label">Cameras</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">🔌</div>
                            <div class="diagram-node-label">Cabling</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">🖥️</div>
                            <div class="diagram-node-label">NVR/DVR</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">👁️</div>
                            <div class="diagram-node-label">Monitoring</div>
                        </div>
                    </div>
                `,
                'fire-gas': `
                    <div class="diagram-flow">
                        <div class="diagram-node">
                            <div class="diagram-node-icon">🔥</div>
                            <div class="diagram-node-label">Detection</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">🚨</div>
                            <div class="diagram-node-label">Alarm</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">🚒</div>
                            <div class="diagram-node-label">Response</div>
                        </div>
                        <div class="diagram-arrow">→</div>
                        <div class="diagram-node">
                            <div class="diagram-node-icon">🛡️</div>
                            <div class="diagram-node-label">Protection</div>
                        </div>
                    </div>
                `
            };
            
            return diagrams[serviceId] || '<p>Diagram not available</p>';
        }
        
        animateServiceDiagram(serviceId) {
            const diagram = document.querySelector(`#diagram-${serviceId}`);
            if (!diagram) return;
            
            const nodes = diagram.querySelectorAll('.diagram-node, .solar-step');
            const arrows = diagram.querySelectorAll('.diagram-arrow');
            
            // Animate nodes sequentially
            nodes.forEach((node, index) => {
                setTimeout(() => {
                    node.style.opacity = '1';
                    node.style.transform = 'translateY(0) scale(1)';
                }, index * 150);
            });
            
            // Animate arrows
            arrows.forEach((arrow, index) => {
                setTimeout(() => {
                    arrow.style.opacity = '1';
                    arrow.style.transform = 'scaleX(1)';
                }, 200 + index * 150);
            });
        }
        
        initServiceDiagrams() {
            // Initialize all diagrams with hidden state
            const nodes = document.querySelectorAll('.diagram-node, .solar-step');
            const arrows = document.querySelectorAll('.diagram-arrow');
            
            nodes.forEach(node => {
                node.style.opacity = '0';
                node.style.transform = 'translateY(20px) scale(0.9)';
                node.style.transition = 'all 0.3s ease';
            });
            
            arrows.forEach(arrow => {
                arrow.style.opacity = '0';
                arrow.style.transform = 'scaleX(0)';
                arrow.style.transition = 'all 0.3s ease';
            });
        }
        
        // ============================================
        // UTILITY FUNCTIONS
        // ============================================
        getServiceById(id) {
            return this.services.find(service => service.id === id);
        }
        
        getServiceByNumber(number) {
            return this.services.find(service => service.number === number);
        }
        
        getAllServices() {
            return this.services;
        }
        
        getServicesByIndustry(industry) {
            return this.services.filter(service => 
                service.industries.includes(industry)
            );
        }
        
        sanitizeHTML(str) {
            const temp = document.createElement('div');
            temp.textContent = str;
            return temp.innerHTML;
        }
    }
    
    // ============================================
    // INITIALIZE
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        window.ElismosServices = new ElismosServices();
    });
    
})();