// Shared Header and Footer Component
// This ensures consistent navigation across all pages

function getHeaderHTML(currentPage = '') {
    const isActive = (page) => currentPage === page ? 'active' : '';
    const isHighlight = (page) => currentPage === page ? 'nav-highlight active' : '';
    
    return `
    <header class="main-header" id="mainHeader">
        <div class="top-bar">
            <div class="container">
                <div class="top-bar-content">
                    <div class="contact-info">
                        <a href="tel:+61399175018" class="contact-item">
                            <i class="fas fa-phone"></i>
                            <span>(03) 9917 5018</span>
                        </a>
                        <a href="mailto:info@alit.edu.au" class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>info@alit.edu.au</span>
                        </a>
                    </div>
                    <div class="top-bar-right">
                        <div class="language-selector">
                            <select id="languageSelect" aria-label="Select Language">
                                <option value="en">English</option>
                                <option value="zh">中文</option>
                                <option value="hi">हिन्दी</option>
                                <option value="es">Español</option>
                            </select>
                        </div>
                        <div class="social-links">
                            <a href="https://www.facebook.com/alit.edu.au" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/aliteduau" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/aliteduau/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/aliteduau/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/@aliteduau" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                        </div>
                        <div class="header-actions">
                            <a href="#student-portal" class="btn-login">Student Portal</a>
                            <a href="pages/admissions.html" class="btn-apply">Apply Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <nav class="main-nav">
            <div class="container">
                <div class="nav-wrapper">
                    <div class="logo">
                        <a href="${currentPage === 'index' ? 'index.html' : '../index.html'}">
                            <img src="${currentPage === 'index' ? 'images/alit-logo.png' : '../images/alit-logo.png'}" alt="ALIT Logo" id="logoImg" onerror="this.style.display='none'">
                            <span class="logo-text">ALIT</span>
                        </a>
                    </div>
                    <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul class="nav-menu" id="navMenu">
                        <li><a href="${currentPage === 'index' ? 'index.html' : '../index.html'}" class="${isActive('index')}">Home</a></li>
                        <li><a href="${currentPage === 'index' ? 'pages/about.html' : 'about.html'}" class="${isActive('about')}">About us</a></li>
                        <li class="has-dropdown">
                            <a href="${currentPage === 'index' ? 'pages/courses.html' : 'courses.html'}">Courses <i class="fas fa-chevron-down"></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="${currentPage === 'index' ? 'pages/courses.html#security' : 'courses.html#security'}">Security Services</a></li>
                                <li><a href="${currentPage === 'index' ? 'pages/courses.html#first-aid' : 'courses.html#first-aid'}">First Aid</a></li>
                                <li><a href="${currentPage === 'index' ? 'pages/courses.html#community' : 'courses.html#community'}">Community Services</a></li>
                                <li><a href="${currentPage === 'index' ? 'pages/courses.html#hospitality' : 'courses.html#hospitality'}">Hospitality</a></li>
                                <li><a href="${currentPage === 'index' ? 'pages/courses.html#business' : 'courses.html#business'}">Business Services</a></li>
                                <li><a href="${currentPage === 'index' ? 'pages/courses.html#ict' : 'courses.html#ict'}">Information Technology</a></li>
                            </ul>
                        </li>
                        <li class="has-dropdown">
                            <a href="${currentPage === 'index' ? 'pages/student-life.html' : 'student-life.html'}">Student Information <i class="fas fa-chevron-down"></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="${currentPage === 'index' ? 'pages/admissions.html#how-to-apply' : 'admissions.html#how-to-apply'}">How To Apply</a></li>
                                <li><a href="${currentPage === 'index' ? 'pages/admissions.html#enrolment-form' : 'admissions.html#enrolment-form'}">Enrolment Form</a></li>
                                <li><a href="${currentPage === 'index' ? 'pages/support.html' : 'support.html'}">Student Support Service</a></li>
                                <li><a href="${currentPage === 'index' ? 'pages/support.html#policy' : 'support.html#policy'}">Policy & Procedure</a></li>
                                <li><a href="${currentPage === 'index' ? 'pages/support.html#downloads' : 'support.html#downloads'}">Downloads</a></li>
                            </ul>
                        </li>
                        <li><a href="${currentPage === 'index' ? 'pages/news-blogs.html' : 'news-blogs.html'}" class="${isHighlight('news')}">News & Blogs</a></li>
                        <li><a href="${currentPage === 'index' ? 'pages/contact.html' : 'contact.html'}" class="${isActive('contact')}">Contact us</a></li>
                    </ul>
                    <div class="nav-phone-button">
                        <a href="tel:+61399175018" class="phone-btn">
                            <i class="fas fa-phone-alt"></i>
                            <span>(03) 9917 5018</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    `;
}

function getFooterHTML(currentPage = '') {
    const basePath = currentPage === 'index' ? 'pages/' : '';
    return `
    <footer class="main-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <div class="footer-logo">
                        <h3>Australian Leading Institute of Technology</h3>
                    </div>
                    <p>Committed to continuously improving our quality education and preparing our graduates for employment.</p>
                    <div class="footer-social">
                        <a href="https://www.facebook.com/alit.edu.au" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/aliteduau" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/company/aliteduau/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/aliteduau/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.youtube.com/@aliteduau" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="footer-column">
                    <h4>Our Courses</h4>
                    <ul class="footer-links">
                        <li><a href="${basePath}courses.html#community">CHC43015 - Certificate IV in Ageing Support</a></li>
                        <li><a href="${basePath}courses.html#community">CHC52025 - Diploma of Community Services</a></li>
                        <li><a href="${basePath}courses.html#business">BSB50120 - Diploma of Business</a></li>
                        <li><a href="${basePath}courses.html#business">BSB60420 - Advanced Diploma of Leadership and Management</a></li>
                        <li><a href="${basePath}courses.html#ict">ICT50220 - Diploma of Information Technology</a></li>
                        <li><a href="${basePath}courses.html#ict">ICT60220 - Advanced Diploma of Information Technology</a></li>
                        <li><a href="${basePath}courses.html#security">CPP20218 - Certificate II In Security Operations</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Student Info</h4>
                    <ul class="footer-links">
                        <li><a href="${basePath}admissions.html#how-to-apply">How To Apply</a></li>
                        <li><a href="${basePath}admissions.html#enrolment-form">Enrolment Form</a></li>
                        <li><a href="${basePath}support.html">Student Support Service</a></li>
                        <li><a href="${basePath}support.html#policy">Policy & Procedure</a></li>
                        <li><a href="${basePath}support.html#downloads">Downloads</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Get in Touch</h4>
                    <ul class="footer-contact">
                        <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <strong>Main Campus:</strong><br>
                                500 Spencer St, West Melbourne, VIC, 3003
                            </div>
                        </li>
                        <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <strong>NSW Campus:</strong><br>
                                Level 6, 16-18 Wentworth Street, Parramatta NSW 2150
                            </div>
                        </li>
                        <li>
                            <i class="fas fa-clock"></i>
                            <div>
                                <strong>Administrative Office Hours:</strong><br>
                                9:00 am - 5:00 pm EST,<br>
                                Monday - Friday
                            </div>
                        </li>
                        <li>
                            <i class="fas fa-envelope"></i>
                            <div>
                                <strong>Email:</strong><br>
                                <a href="mailto:info@alit.edu.au">info@alit.edu.au</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Other Links</h4>
                    <ul class="footer-links">
                        <li><a href="#e-learning">E-Learning</a></li>
                        <li><a href="${basePath}news-blogs.html">News & Blogs</a></li>
                        <li><a href="#agents">Agents</a></li>
                    </ul>
                    <div class="footer-social" style="margin-top: 1.5rem;">
                        <a href="https://www.facebook.com/alit.edu.au" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/aliteduau" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/company/aliteduau/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/aliteduau/" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.youtube.com/@aliteduau" target="_blank"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-certifications">
                    <p><strong>RTO Code:</strong> 45156</p>
                    <p><strong>CRICOS Provider Code:</strong> 03981M</p>
                    <p><strong>VIC Business License:</strong> Z39-528-10 S</p>
                    <p><strong>Security Master Licence:</strong> 000109601</p>
                </div>
                <div class="footer-legal">
                    <p>&copy; 2025 Australian Leading Institute of Technology. All Rights Reserved.</p>
                    <div class="legal-links">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Use</a>
                        <a href="#accessibility">Accessibility</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;
}


