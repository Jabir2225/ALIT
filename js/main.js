// ============================================
// ALIT Website - Main JavaScript
// ============================================

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initStickyHeader();
    initHeroVideo();
    initAnimatedCards();
    initCourseFilters();
    initSmoothScroll();
    initLanguageSelector();
    loadCourses();
    loadTestimonials();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('navMenu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!toggle.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            }
        });
    }
}

// Sticky Header
function initStickyHeader() {
    const header = document.getElementById('mainHeader');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// Hero Video Control
function initHeroVideo() {
    const video = document.getElementById('heroVideo');
    
    if (video) {
        // Pause video when user scrolls
        let isScrolling = false;
        
        window.addEventListener('scroll', function() {
            if (!isScrolling) {
                window.requestAnimationFrame(function() {
                    if (window.pageYOffset > 100) {
                        video.pause();
                    } else {
                        video.play();
                    }
                    isScrolling = false;
                });
                isScrolling = true;
            }
        });
        
        // Handle video loading
        video.addEventListener('loadeddata', function() {
            video.play().catch(function(error) {
                console.log('Video autoplay prevented:', error);
            });
        });
    }
}

// Removed campus cards function - section removed

// Animated Cards on Scroll
function initAnimatedCards() {
    const animatedCards = document.querySelectorAll('.animated-card');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedCards.forEach(card => observer.observe(card));
}

// Course Filters
function initCourseFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            
            // Filter courses
            courseCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(`category-${filter}`)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Language Selector
function initLanguageSelector() {
    const selector = document.getElementById('languageSelect');
    
    if (selector) {
        selector.addEventListener('change', function() {
            const lang = this.value;
            // Store language preference
            localStorage.setItem('preferredLanguage', lang);
            // In a real implementation, this would trigger a language change
            console.log('Language changed to:', lang);
        });
        
        // Load saved preference
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang) {
            selector.value = savedLang;
        }
    }
}

// Load Courses Dynamically
function loadCourses() {
    const courses = [
        {
            category: 'security',
            title: 'CPP20218 - Certificate II in Security Operations (Victoria)',
            description: 'Entry-level course for the security industry, covering crowd control and risk management.',
            duration: '6 months',
            image: 'images/courses/security-vic.jpg'
        },
        {
            category: 'security',
            title: 'CPP20218 - Certificate II in Security Operations (NSW)',
            description: 'Entry-level course for the security industry, covering crowd control and risk management.',
            duration: '6 months',
            image: 'images/courses/security-nsw.jpg'
        },
        {
            category: 'first-aid',
            title: 'First Aid & CPR Training',
            description: 'ALIT offers industry-recognised First Aid and CPR training across Melbourne (VIC) and Parramatta (NSW).',
            duration: '1 day',
            image: 'images/courses/first-aid.jpg'
        },
        {
            category: 'community',
            title: 'CHC33021 - Certificate III in Individual Support',
            description: 'The ideal starting point for those seeking a career in aged care, disability, or community services.',
            duration: '12 months',
            image: 'images/courses/individual-support.jpg'
        },
        {
            category: 'community',
            title: 'CHC43015 - Certificate IV in Ageing Support',
            description: 'Prepare for a rewarding career in aged care with our nationally recognized Certificate IV in Ageing Support.',
            duration: '12 months',
            image: 'images/courses/ageing-support.jpg'
        },
        {
            category: 'community',
            title: 'CHC43121 - Certificate IV in Disability Support',
            description: 'Designed for individuals who want to make a real difference in the lives of people with disability.',
            duration: '12 months',
            image: 'images/courses/disability-support.jpg'
        },
        {
            category: 'community',
            title: 'CHC52025 - Diploma of Community Services (Case Management)',
            description: 'This qualification reflects the role of community services workers involved in the delivery and management of person-centred services.',
            duration: '18 months',
            image: 'images/courses/community-services.jpg'
        },
        {
            category: 'hospitality',
            title: 'SIT30821 - Certificate III in Commercial Cookery',
            description: 'Designed for those who want to turn their passion for food into a professional career.',
            duration: '12 months',
            image: 'images/courses/commercial-cookery.jpg'
        },
        {
            category: 'hospitality',
            title: 'SIT40521 - Certificate IV in Kitchen Management',
            description: 'Designed for individuals seeking advanced skills in culinary management and supervision.',
            duration: '12 months',
            image: 'images/courses/kitchen-management.jpg'
        },
        {
            category: 'hospitality',
            title: 'SIT50422 - Diploma of Hospitality Management',
            description: 'Designed for individuals seeking advanced leadership and management skills in the hospitality industry.',
            duration: '18 months',
            image: 'images/courses/hospitality-management.jpg'
        },
        {
            category: 'business',
            title: 'BSB50120 - Diploma of Business (Operations)',
            description: 'Focuses on business operations, leadership, and project management.',
            duration: '12 months',
            image: 'images/courses/business.jpg'
        },
        {
            category: 'business',
            title: 'BSB60420 - Advanced Diploma of Leadership and Management',
            description: 'Develops high-level management and leadership skills.',
            duration: '18 months',
            image: 'images/courses/leadership-management.jpg'
        },
        {
            category: 'ict',
            title: 'ICT50220 - Diploma of Information Technology',
            description: 'Covers IT systems, network security, and project management.',
            duration: '12 months',
            image: 'images/courses/it-diploma.jpg'
        },
        {
            category: 'ict',
            title: 'ICT60220 - Advanced Diploma of Information Technology',
            description: 'Explores advanced topics like cybersecurity and enterprise solutions.',
            duration: '18 months',
            image: 'images/courses/it-advanced.jpg'
        }
    ];
    
    const grid = document.getElementById('coursesGrid');
    if (grid) {
        grid.innerHTML = courses.map(course => `
            <div class="course-card category-${course.category}">
                <img src="${course.image}" alt="${course.title}" class="course-card-image" onerror="this.src='images/placeholder-course.jpg'">
                <div class="course-card-content">
                    <span class="course-card-category">${getCategoryName(course.category)}</span>
                    <h3 class="course-card-title">${course.title}</h3>
                    <p class="course-card-description">${course.description}</p>
                    <div class="course-card-footer">
                        <span class="course-card-duration"><i class="fas fa-clock"></i> ${course.duration}</span>
                        <a href="pages/courses.html#${course.category}" class="course-card-link">
                            Learn More <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function getCategoryName(category) {
    const names = {
        'security': 'Security Services',
        'first-aid': 'First Aid',
        'community': 'Community Services',
        'hospitality': 'Hospitality',
        'business': 'Business',
        'ict': 'Information Technology'
    };
    return names[category] || category;
}

// Load Testimonials
function loadTestimonials() {
    const testimonials = [
        {
            content: 'ALIT provided me with the practical skills and knowledge I needed to excel in my career. The supportive environment and industry connections were invaluable.',
            author: 'Sarah Johnson',
            role: 'Graduate, Diploma of Business',
            avatar: 'SJ'
        },
        {
            content: 'As an international student, ALIT made me feel welcome from day one. The staff are incredibly supportive and the courses are well-structured.',
            author: 'Raj Patel',
            role: 'Graduate, Diploma of IT',
            avatar: 'RP'
        },
        {
            content: 'The hands-on approach to learning at ALIT prepared me perfectly for the workforce. I got a job within 3 months of graduating!',
            author: 'Emma Chen',
            role: 'Graduate, Certificate IV in Ageing Support',
            avatar: 'EC'
        }
    ];
    
    const slider = document.getElementById('testimonialsSlider');
    if (slider) {
        slider.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <p>"${testimonial.content}"</p>
                </div>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">${testimonial.avatar}</div>
                    <div class="testimonial-info">
                        <h4>${testimonial.author}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Utility: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utility: Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD'
    }).format(amount);
}

// Export functions for use in other scripts
window.ALIT = {
    debounce,
    formatCurrency
};

