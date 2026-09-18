# ELISMOS International Limited - Website

A complete, production-quality, responsive, multi-page website for **Elismos International Limited**, a premier electrical services, procurement, and renewable energy solutions company based in Nigeria.

## 🚀 Overview

This website is designed to communicate professionalism, technical competence, and reliability to industrial, commercial, engineering, and oil & gas clients across Nigeria. It features:

- **7 Complete Pages**: Home, About, Services, Projects, Safety & Quality, Contact, Quote Request
- **Interactive Features**: Service matrix, project filtering, solar energy visualization, technical diagrams
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern Animations**: Subtle, professional animations without being overwhelming
- **Accessibility**: Semantic HTML, keyboard navigation, screen reader support
- **SEO Optimized**: Meta tags, structured data, semantic markup

## 📁 Project Structure

```
elismos/
├── index.html                 # Homepage
├── about.html                 # About page
├── services.html              # Services page
├── projects.html              # Projects portfolio
├── safety-quality.html        # Safety & quality policies
├── contact.html               # Contact page with map
├── quote.html                 # Advanced quote request form
├── 404.html                   # Error page
├── README.md                  # This file
│
├── css/
│   ├── styles.css             # Main stylesheet & design system
│   ├── responsive.css         # Responsive breakpoints
│   └── animations.css         # Animation keyframes & utilities
│
├── js/
│   ├── main.js                # Core initialization & utilities
│   ├── navigation.js          # Navigation system
│   ├── animations.js          # Scroll reveal & interactive effects
│   ├── projects.js            # Project data & filtering
│   ├── services.js            # Service matrix & diagrams
│   └── quote.js               # Quote form validation & handling
│
├── data/
│   └── projects.js            # Editable project & company data
│
└── assets/
    ├── images/
    │   ├── hero/              # Hero section images
    │   ├── services/          # Service-related images
    │   ├── projects/          # Project portfolio images
    │   ├── team/              # Leadership team photos
    │   └── general/           # General company images
    │
    ├── logo/                  # Logo files
    ├── icons/                 # Custom icons
    └── video/                 # Video assets (if any)
```

## 🎨 Design System

### Colors
- **Electric Blue**: `#009FE3` - Primary brand color
- **Energy Lime**: `#9BEF00` - Accent color for CTAs and highlights
- **Deep Navy**: `#07152D` - Dark backgrounds and authority
- **White**: `#FFFFFF` - Clean backgrounds
- **Technical Gray**: `#F4F7F9` - Light backgrounds

### Typography
- **Font Family**: Inter (or system fonts as fallback)
- **Heading Weights**: 700-800
- **Body Weight**: 400-500

### Spacing
- Uses CSS custom properties for consistent spacing
- Scale: xs (0.25rem) to 5xl (8rem)

## 🛠️ Setup Instructions

### 1. Clone/Download
```bash
# Download the project files
# Or clone the repository if available
```

### 2. Add Assets
Replace placeholder images with actual company images:

1. **Logo**: Add your logo files to `assets/logo/`
   - `logo.png` - Main logo
   - `logo-white.png` - White version for dark backgrounds
   - `favicon.ico` - Browser favicon

2. **Images**: Add images to appropriate folders:
   - `assets/images/hero/` - Hero section background
   - `assets/images/projects/` - Project portfolio images
   - `assets/images/team/` - Leadership photos
   - `assets/images/general/` - About page, general use

### 3. Update Content
Edit the following files to customize content:

- **`data/projects.js`** - Update company info and project data
- **HTML files** - Update text content as needed
- **Contact information** - Already configured with provided details

### 4. Launch
Simply open `index.html` in a web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if available)
npx serve

# Using PHP
php -S localhost:8000
```

## 📝 Content Customization

### Company Information
Edit `data/projects.js` to update:
- Company name, address, contact details
- Mission, vision, values
- Leadership team information
- Services list
- Industries served

### Projects
Add new projects to the `ELISMOS_PROJECTS` array in `data/projects.js`:

```javascript
{
    id: 9,
    title: 'New Project Title',
    sector: 'Industrial',
    location: 'Lagos, Nigeria',
    year: '2025',
    service: 'Electrical Installation',
    description: 'Project description...',
    technicalScope: 'Technical details...',
    challenge: 'Challenge faced...',
    solution: 'Solution implemented...',
    outcome: 'Results achieved...',
    images: ['projects/new-project-1.jpg'],
    tags: ['electrical', 'industrial'],
    featured: true
}
```

### Images
- Replace placeholder images with actual photos
- Maintain aspect ratios for best results
- Recommended sizes:
  - Hero: 1920x1080 or larger
  - Projects: 800x600 minimum
  - Team: 400x500

## 🔧 Technical Details

### CSS Architecture
- **BEM-like naming** for clarity
- **CSS Custom Properties** for theming
- **Mobile-first responsive** approach
- **Reduced motion support** for accessibility

### JavaScript Modules
- **Main**: Core utilities and initialization
- **Navigation**: Mobile menu, scroll behavior, active states
- **Animations**: Scroll reveal, parallax, counters
- **Projects**: Data management, filtering, lightbox
- **Services**: Interactive matrix, diagrams
- **Quote**: Form validation, file upload, submission

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 769px - 1024px
- **Desktop**: 1025px - 1280px
- **Large Desktop**: > 1281px

## ⚡ Performance

- **Lazy loading** for images
- **Optimized CSS** with minimal redundancy
- **Efficient JavaScript** with event delegation
- **Minimal external dependencies**

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Focus states for interactive elements
- Reduced motion support
- Alt text for images
- Form labels and error messages

## 🔍 SEO

- Unique meta titles and descriptions
- Open Graph tags for social sharing
- Structured data (JSON-LD)
- Semantic heading hierarchy
- Image alt text
- Canonical URLs

## 🐛 Known Issues

- Placeholder images need to be replaced
- Form submission requires backend integration
- Google Maps API key needed for production
- Social media links need to be added

## 📞 Contact

**Elismos International Limited**
- Address: No. 16 Nwanwa Street, Port Harcourt, Rivers State, Nigeria
- Phone: 08037065465
- Email: elismosinter@gmail.com
- Website: [www.elismos.com](https://www.elismos.com) (placeholder)

## 📄 License

This website was developed for Elismos International Limited. All rights reserved.

---

**Built with ❤️ for Elismos International Limited**

*Engineering That Powers Progress*