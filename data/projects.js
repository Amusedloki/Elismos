/* ============================================
   ELISMOS INTERNATIONAL - PROJECT DATA
   Editable Project Information
   ============================================ */

// Project data for Elismos International Limited

const ELISMOS_PROJECTS = [
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
        images: [
            'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80&fit=crop',
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop'
        ],
        tags: ['cable', 'industrial', 'high-voltage'],
        featured: true
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
        images: [
            'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80&fit=crop'
        ],
        tags: ['testing', 'maintenance', 'quality-assurance'],
        featured: false
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
        images: [
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop',
            'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80&fit=crop'
        ],
        tags: ['control-panel', 'automation', 'industrial'],
        featured: true
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
        images: [
            'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80&fit=crop'
        ],
        tags: ['commercial', 'panel', 'food-beverage'],
        featured: true
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
        images: [
            'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80&fit=crop',
            'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80&fit=crop'
        ],
        tags: ['solar', 'commercial', 'renewable-energy'],
        featured: true
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
        images: [
            'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80&fit=crop'
        ],
        tags: ['cctv', 'security', 'industrial'],
        featured: false
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
        images: [
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop'
        ],
        tags: ['fire-safety', 'commercial', 'detection'],
        featured: false
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
        images: [
            'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80&fit=crop',
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop'
        ],
        tags: ['instrumentation', 'oil-gas', 'industrial'],
        featured: true
    }
];

// ============================================
// COMPANY INFORMATION
// ============================================
const ELISMOS_COMPANY = {
    name: 'ELISMOS INTERNATIONAL LIMITED',
    brandName: 'ELISMOS',
    tagline: 'Business • Innovation • Growth',
    founded: '2011',
    rcNumber: 'RC 1016301',
    
    address: {
        street: 'No. 16 Nwanwa Street',
        city: 'Port Harcourt',
        state: 'Rivers State',
        country: 'Nigeria',
        full: 'No. 16 Nwanwa Street, Port Harcourt, Rivers State, Nigeria'
    },
    
    contact: {
        phone: '08037065465',
        whatsapp: '08037065465',
        email: 'elismosinter@gmail.com',
        hours: 'Every day, 8:00 AM – 6:00 PM'
    },
    
    social: {
        // DEMO CONTENT — REPLACE BEFORE LAUNCH
        facebook: '',
        twitter: '',
        linkedin: '',
        instagram: '',
        youtube: ''
    },
    
    mission: 'To power a brighter, more sustainable future by providing exceptional electrical services and renewable energy solutions. We strive to be a trusted partner to our clients, ensuring every project is completed with the highest standards of quality, safety, and efficiency.',
    
    vision: 'To be the leading electrical and renewable energy solutions provider in the region, recognized for our unwavering commitment to quality, integrity, and client satisfaction.',
    
    values: [
        {
            title: 'Integrity',
            description: 'We operate with complete honesty and transparency in all our dealings, building lasting trust with our clients and partners.',
            icon: '<i data-lucide="handshake"></i>'
        },
        {
            title: 'Excellence',
            description: 'We are committed to delivering the highest quality of workmanship, using premium materials and expert craftsmanship on every project.',
            icon: '<i data-lucide="star"></i>'
        },
        {
            title: 'Safety',
            description: 'The well-being of our team and our clients is our top priority. We maintain a zero-compromise approach to safety.',
            icon: '<i data-lucide="shield-check"></i>'
        },
        {
            title: 'Innovation',
            description: 'We continuously seek out and adopt new technologies and methods to provide more efficient and sustainable solutions.',
            icon: '<i data-lucide="lightbulb"></i>'
        },
        {
            title: 'Customer Focus',
            description: 'Our clients are at the center of everything we do. We listen to their needs and provide dedicated support.',
            icon: '<i data-lucide="target"></i>'
        }
    ],
    
    services: [
        'Instrumentation & Control',
        'Electrical Industrial Installations',
        'Solar Energy Solutions',
        'Maintenance & Repair',
        'Consultancy',
        'CCTV Camera Installation & Maintenance',
        'Fire & Gas Systems'
    ],
    
    industries: [
        'Industrial',
        'Commercial',
        'Engineering & Construction',
        'Oil & Gas',
        'Residential'
    ],
    
    leadership: [
        {
            name: 'Mr. Olutomi Adekunle',
            role: 'Founder & Managing Director',
            experience: '25+ years',
            bio: 'A seasoned electrical engineer with over 25 years of experience in the industry. Founded Elismos International Ltd. with a vision to integrate traditional electrical services with modern, sustainable solutions.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop'
        },
        {
            name: 'Mr. Sample Christian Aza',
            role: 'Operations Manager',
            experience: '20+ years',
            bio: 'A seasoned instrument engineer with over 20 years of experience who takes charge of operations at Elismos International Ltd.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop'
        }
    ],
    
    resources: [
        {
            title: 'Certified & Experienced Team',
            description: 'Highly-skilled and certified professionals with extensive experience in the electrical and solar industries.',
            icon: '<i data-lucide="users"></i>'
        },
        {
            title: 'State-of-the-Art Equipment',
            description: 'Latest tools and technology for diagnostics, installation, and maintenance.',
            icon: '<i data-lucide="wrench"></i>'
        },
        {
            title: 'High-Quality Materials',
            description: 'Premium, industry-approved materials and components for longevity, safety, and performance.',
            icon: '<i data-lucide="check-circle"></i>'
        }
    ]
};

// ============================================
// HELPER FUNCTIONS
// ============================================

// Get project by ID
function getProjectById(id) {
    return ELISMOS_PROJECTS.find(project => project.id === id);
}

// Get projects by service
function getProjectsByService(service) {
    return ELISMOS_PROJECTS.filter(project => 
        project.service.toLowerCase().replace(/\s+/g, '-') === service.toLowerCase()
    );
}

// Get projects by sector
function getProjectsBySector(sector) {
    return ELISMOS_PROJECTS.filter(project => 
        project.sector.toLowerCase().replace(/\s+/g, '-') === sector.toLowerCase()
    );
}

// Get featured projects
function getFeaturedProjects() {
    return ELISMOS_PROJECTS.filter(project => project.featured);
}

// Get all unique services
function getUniqueServices() {
    const services = new Set(ELISMOS_PROJECTS.map(project => project.service));
    return Array.from(services);
}

// Get all unique sectors
function getUniqueSectors() {
    const sectors = new Set(ELISMOS_PROJECTS.map(project => project.sector));
    return Array.from(sectors);
}

// Format phone number
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3');
}

// Sanitize HTML
function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ELISMOS_PROJECTS,
        ELISMOS_COMPANY,
        getProjectById,
        getProjectsByService,
        getProjectsBySector,
        getFeaturedProjects,
        getUniqueServices,
        getUniqueSectors,
        formatPhoneNumber,
        sanitizeHTML
    };
}