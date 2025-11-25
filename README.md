# ALIT Website - Redesigned

A modern, responsive website for Australian Leading Institute of Technology (ALIT), featuring AI-powered search, chatbot, and comprehensive course information.

## Project Structure

```
ALIT Web/
├── index.html              # Home page
├── pages/                  # Additional pages
│   ├── courses.html       # Courses & Programs
│   ├── admissions.html    # Admissions with interactive form
│   ├── about.html         # About Us
│   ├── international.html # International Students
│   ├── student-life.html  # Student Life
│   ├── support.html       # Support Services
│   └── contact.html       # Contact Us
├── css/
│   ├── style.css          # Main stylesheet
│   └── responsive.css     # Responsive styles (mobile-first)
├── js/
│   ├── main.js            # Main JavaScript functionality
│   ├── chatbot.js         # AI Chatbot implementation
│   └── search.js          # AI-powered search
├── images/                # Image assets
├── videos/                # Video assets
└── assets/                # Additional assets
    └── fonts/             # Custom fonts
```

## Features

### 1. Header & Navigation
- Sticky navigation bar
- Top bar with contact info and social media
- Language selector
- Mobile-responsive menu
- Dropdown menus for course categories

### 2. Home Page
- **Hero Section**: Full-screen video/image background with AI search bar
- **AI Chatbot**: Interactive virtual assistant for instant help
- **Why Choose ALIT**: Animated statistics counter
- **Featured Courses**: Filterable course grid
- **Campus Highlights**: Key features showcase
- **Testimonials**: Student success stories

### 3. Courses & Programs
- Course filtering by category
- Detailed course cards with information
- Category-based organization
- Easy navigation to course details

### 4. Admissions
- **Interactive Timeline**: Step-by-step application process
- **Multi-step Application Form**: 
  - Personal Information
  - Course Selection
  - Document Upload
  - Review & Submit
- Entry Requirements section
- Fees & Scholarships information

### 5. AI Features
- **AI-Powered Search**: Intelligent search with suggestions
- **AI Chatbot**: 
  - Answers FAQs
  - Provides course recommendations
  - Assists with admissions
  - Quick action buttons

### 6. Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Fast loading times

## Technical Details

### Technologies Used
- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Inter & Poppins)

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance
- Optimized images (WebP format recommended)
- Minified CSS/JS (for production)
- Lazy loading for images
- CDN for external resources

## Setup Instructions

1. **Clone or download** the project files
2. **Open** `index.html` in a web browser
3. **For development**, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
4. **Access** at `http://localhost:8000`

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #114479;
    --secondary-color: #f39c12;
    /* ... */
}
```

### Content
- Update course data in `js/main.js` (loadCourses function)
- Modify chatbot responses in `js/chatbot.js`
- Add/remove pages in `pages/` directory

### Images
- Replace placeholder images in `images/` directory
- Add hero video to `videos/hero-video.mp4`
- Update logo: `images/alit-logo.png`

## Future Enhancements

1. **Backend Integration**
   - Connect application form to database
   - User authentication for student portal
   - Real-time chatbot with AI API

2. **Advanced Features**
   - 360° virtual campus tour
   - Interactive campus map
   - Event calendar with booking
   - Student portal with grades/schedules

3. **SEO Optimization**
   - Meta tags optimization
   - Structured data (Schema.org)
   - Sitemap generation
   - Analytics integration

4. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Screen reader optimization
   - High contrast mode

## Contact Information

**ALIT - Australian Leading Institute of Technology**
- **Main Campus**: 500 Spencer St, West Melbourne, VIC, 3003
- **NSW Campus**: Level 6, 16-18 Wentworth Street, Parramatta NSW 2150
- **Phone**: (03) 9917 5018
- **Email**: info@alit.edu.au
- **RTO Code**: 45156
- **CRICOS Provider Code**: 03981M

## License

This website is designed for ALIT. All rights reserved.

## Notes

- Replace placeholder images with actual ALIT images
- Add actual hero video or use image fallback
- Connect forms to backend for production
- Implement actual chatbot API for real AI responses
- Add SSL certificate for production deployment
- Set up CDN for better performance


