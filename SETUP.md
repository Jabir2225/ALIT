# ALIT Website Setup Guide

## Quick Start

1. **Open the website**: Simply open `index.html` in your web browser
2. **For local development**: Use a local server (see below)

## Local Development Server

### Option 1: Python
```bash
cd "/Users/jabir/Downloads/ALIT Web"
python3 -m http.server 8000
```
Then visit: http://localhost:8000

### Option 2: Node.js
```bash
cd "/Users/jabir/Downloads/ALIT Web"
npx http-server -p 8000
```

### Option 3: PHP
```bash
cd "/Users/jabir/Downloads/ALIT Web"
php -S localhost:8000
```

## Required Assets

### Images Needed
Place these images in the `images/` directory:
- `alit-logo.png` - Main logo (recommended: 200x60px)
- `hero-campus.jpg` - Hero section background (recommended: 1920x1080px)
- `placeholder-course.jpg` - Default course image
- `courses/` folder with course images:
  - `security-vic.jpg`
  - `security-nsw.jpg`
  - `first-aid.jpg`
  - `individual-support.jpg`
  - `ageing-support.jpg`
  - `disability-support.jpg`
  - `community-services.jpg`
  - `commercial-cookery.jpg`
  - `kitchen-management.jpg`
  - `hospitality-management.jpg`
  - `business.jpg`
  - `leadership-management.jpg`
  - `it-diploma.jpg`
  - `it-advanced.jpg`

### Videos Needed
Place in `videos/` directory:
- `hero-video.mp4` - Hero section background video (optional, will fallback to image)

## Features Implemented

✅ Sticky navigation with dropdown menus
✅ Top bar with contact info and social links
✅ Language selector
✅ Hero section with AI search
✅ AI Chatbot with interactive responses
✅ Animated statistics counter
✅ Course filtering and display
✅ Admissions page with interactive timeline
✅ Multi-step application form
✅ Responsive mobile-first design
✅ Footer with all links and information

## Next Steps for Production

1. **Add Real Images**: Replace placeholder images with actual ALIT photos
2. **Backend Integration**: Connect forms to database/email system
3. **Chatbot API**: Integrate with actual AI service (OpenAI, Dialogflow, etc.)
4. **SSL Certificate**: Set up HTTPS for security
5. **CDN**: Use CDN for faster loading
6. **Analytics**: Add Google Analytics or similar
7. **SEO**: Optimize meta tags and add structured data
8. **Testing**: Test on various devices and browsers

## Browser Testing

Test the website on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

Before going live:
1. Minify CSS and JavaScript
2. Optimize images (use WebP format)
3. Enable GZIP compression
4. Use CDN for static assets
5. Implement lazy loading for images
6. Cache static resources

## Support

For questions or issues, contact:
- Email: info@alit.edu.au
- Phone: (03) 9917 5018

