// ============================================
// ALIT Website - AI-Powered Search
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initSearch();
});

function initSearch() {
    const searchInput = document.getElementById('aiSearchInput');
    const searchBtn = document.getElementById('aiSearchBtn');
    const suggestions = document.getElementById('aiSearchSuggestions');
    
    if (!searchInput || !searchBtn) return;
    
    // Search data
    const searchData = {
        courses: [
            { name: 'Certificate II in Security Operations', category: 'Security Services', url: 'pages/courses.html#security' },
            { name: 'First Aid & CPR Training', category: 'First Aid', url: 'pages/courses.html#first-aid' },
            { name: 'Certificate III in Individual Support', category: 'Community Services', url: 'pages/courses.html#community' },
            { name: 'Certificate IV in Ageing Support', category: 'Community Services', url: 'pages/courses.html#community' },
            { name: 'Certificate IV in Disability Support', category: 'Community Services', url: 'pages/courses.html#community' },
            { name: 'Diploma of Community Services', category: 'Community Services', url: 'pages/courses.html#community' },
            { name: 'Certificate III in Commercial Cookery', category: 'Hospitality', url: 'pages/courses.html#hospitality' },
            { name: 'Certificate IV in Kitchen Management', category: 'Hospitality', url: 'pages/courses.html#hospitality' },
            { name: 'Diploma of Hospitality Management', category: 'Hospitality', url: 'pages/courses.html#hospitality' },
            { name: 'Diploma of Business', category: 'Business', url: 'pages/courses.html#business' },
            { name: 'Advanced Diploma of Leadership and Management', category: 'Business', url: 'pages/courses.html#business' },
            { name: 'Diploma of Information Technology', category: 'Information Technology', url: 'pages/courses.html#ict' },
            { name: 'Advanced Diploma of Information Technology', category: 'Information Technology', url: 'pages/courses.html#ict' }
        ],
        pages: [
            { name: 'Admissions', url: 'pages/admissions.html' },
            { name: 'How to Apply', url: 'pages/admissions.html#how-to-apply' },
            { name: 'Entry Requirements', url: 'pages/admissions.html#requirements' },
            { name: 'Fees & Scholarships', url: 'pages/admissions.html#fees' },
            { name: 'International Students', url: 'pages/international.html' },
            { name: 'Student Life', url: 'pages/student-life.html' },
            { name: 'About Us', url: 'pages/about.html' },
            { name: 'Contact Us', url: 'pages/contact.html' },
            { name: 'Support Services', url: 'pages/support.html' }
        ],
        topics: [
            { name: 'CRICOS', description: 'CRICOS Provider Code: 03981M', url: 'pages/about.html' },
            { name: 'RTO', description: 'RTO Code: 45156', url: 'pages/about.html' },
            { name: 'Scholarships', description: 'Financial aid and scholarships available', url: 'pages/admissions.html#fees' },
            { name: 'Visa', description: 'Visa information for international students', url: 'pages/international.html#visa' },
            { name: 'Accommodation', description: 'Student accommodation options', url: 'pages/international.html#accommodation' }
        ]
    };
    
    // Search function
    function performSearch(query) {
        if (!query || query.length < 2) {
            return [];
        }
        
        const results = [];
        const lowerQuery = query.toLowerCase();
        
        // Search courses
        searchData.courses.forEach(course => {
            if (course.name.toLowerCase().includes(lowerQuery) || 
                course.category.toLowerCase().includes(lowerQuery)) {
                results.push({
                    type: 'course',
                    title: course.name,
                    subtitle: course.category,
                    url: course.url
                });
            }
        });
        
        // Search pages
        searchData.pages.forEach(page => {
            if (page.name.toLowerCase().includes(lowerQuery)) {
                results.push({
                    type: 'page',
                    title: page.name,
                    subtitle: 'Page',
                    url: page.url
                });
            }
        });
        
        // Search topics
        searchData.topics.forEach(topic => {
            if (topic.name.toLowerCase().includes(lowerQuery) || 
                topic.description.toLowerCase().includes(lowerQuery)) {
                results.push({
                    type: 'topic',
                    title: topic.name,
                    subtitle: topic.description,
                    url: topic.url
                });
            }
        });
        
        return results.slice(0, 5); // Limit to 5 results
    }
    
    // Show suggestions
    function showSuggestions(query) {
        if (!suggestions) return;
        
        const results = performSearch(query);
        
        if (results.length > 0 && query.length >= 2) {
            suggestions.innerHTML = results.map(result => `
                <a href="${result.url}" class="search-suggestion">
                    <div class="suggestion-icon">
                        <i class="fas fa-${getIconForType(result.type)}"></i>
                    </div>
                    <div class="suggestion-content">
                        <div class="suggestion-title">${result.title}</div>
                        <div class="suggestion-subtitle">${result.subtitle}</div>
                    </div>
                </a>
            `).join('');
            suggestions.classList.add('active');
        } else {
            suggestions.classList.remove('active');
            suggestions.innerHTML = '';
        }
    }
    
    function getIconForType(type) {
        const icons = {
            'course': 'graduation-cap',
            'page': 'file-alt',
            'topic': 'info-circle'
        };
        return icons[type] || 'search';
    }
    
    // Input event with debounce
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value;
        
        searchTimeout = setTimeout(() => {
            showSuggestions(query);
        }, 300);
    });
    
    // Search button click
    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            handleSearch(query);
        }
    });
    
    // Enter key press
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                handleSearch(query);
            }
        }
    });
    
    // Handle search
    function handleSearch(query) {
        const results = performSearch(query);
        
        if (results.length > 0) {
            // Redirect to first result
            window.location.href = results[0].url;
        } else {
            // Show no results message
            if (suggestions) {
                suggestions.innerHTML = `
                    <div class="search-no-results">
                        <i class="fas fa-search"></i>
                        <p>No results found for "${query}"</p>
                        <p class="search-help">Try searching for courses, admissions, or contact information.</p>
                    </div>
                `;
                suggestions.classList.add('active');
            }
        }
    }
    
    // Close suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (suggestions && !searchInput.contains(e.target) && !suggestions.contains(e.target) && !searchBtn.contains(e.target)) {
            suggestions.classList.remove('active');
        }
    });
}

// Add search suggestion styles
const style = document.createElement('style');
style.textContent = `
    .search-suggestion {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border-radius: 8px;
        transition: background 0.2s;
        color: var(--text-dark);
    }
    
    .search-suggestion:hover {
        background: var(--bg-light);
    }
    
    .suggestion-icon {
        width: 40px;
        height: 40px;
        background: var(--primary-color);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .suggestion-title {
        font-weight: 600;
        margin-bottom: 0.25rem;
    }
    
    .suggestion-subtitle {
        font-size: 0.875rem;
        color: var(--text-light);
    }
    
    .search-no-results {
        padding: 2rem;
        text-align: center;
        color: var(--text-light);
    }
    
    .search-no-results i {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: var(--text-light);
    }
    
    .search-help {
        font-size: 0.875rem;
        margin-top: 0.5rem;
    }
`;
document.head.appendChild(style);

