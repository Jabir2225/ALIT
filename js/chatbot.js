// ============================================
// ALIT Website - AI Chatbot
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initChatbot();
});

function initChatbot() {
    const toggle = document.getElementById('chatbotToggle');
    const window = document.getElementById('chatbotWindow');
    const close = document.getElementById('chatbotClose');
    const input = document.getElementById('chatbotInput');
    const send = document.getElementById('chatbotSend');
    const messages = document.getElementById('chatbotMessages');
    const quickActions = document.querySelectorAll('.quick-action-btn');
    
    // Toggle chatbot
    if (toggle && window) {
        toggle.addEventListener('click', function() {
            window.classList.toggle('active');
        });
    }
    
    // Close chatbot
    if (close && window) {
        close.addEventListener('click', function() {
            window.classList.remove('active');
        });
    }
    
    // Send message
    function sendMessage() {
        const message = input.value.trim();
        if (message) {
            addUserMessage(message);
            input.value = '';
            
            // Simulate bot response
            setTimeout(() => {
                const response = getBotResponse(message);
                addBotMessage(response);
            }, 1000);
        }
    }
    
    // Send button click
    if (send) {
        send.addEventListener('click', sendMessage);
    }
    
    // Enter key press
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Quick actions
    quickActions.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            handleQuickAction(action);
        });
    });
}

function addUserMessage(message) {
    const messagesContainer = document.getElementById('chatbotMessages');
    if (messagesContainer) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message user-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="message-content">
                <p>${escapeHtml(message)}</p>
            </div>
        `;
        messagesContainer.appendChild(messageDiv);
        scrollToBottom();
    }
}

function addBotMessage(message) {
    const messagesContainer = document.getElementById('chatbotMessages');
    if (messagesContainer) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message bot-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <p>${escapeHtml(message)}</p>
            </div>
        `;
        messagesContainer.appendChild(messageDiv);
        scrollToBottom();
    }
}

function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Course inquiries
    if (lowerMessage.includes('course') || lowerMessage.includes('program')) {
        return 'ALIT offers a wide range of courses including Security Services, First Aid, Community Services, Hospitality, Business, and Information Technology. Would you like to know more about a specific course?';
    }
    
    // Admissions
    if (lowerMessage.includes('admission') || lowerMessage.includes('apply') || lowerMessage.includes('enroll')) {
        return 'To apply, you can visit our Admissions page or click "Apply Now" on the website. We accept applications year-round. Would you like information about entry requirements or the application process?';
    }
    
    // Fees
    if (lowerMessage.includes('fee') || lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('tuition')) {
        return 'Course fees vary depending on the program. We also offer scholarships for eligible students. Would you like to see our fees and scholarships page?';
    }
    
    // Scholarships
    if (lowerMessage.includes('scholarship') || lowerMessage.includes('financial aid')) {
        return 'ALIT offers various scholarships for both domestic and international students. You can find more information on our Admissions page under "Fees & Scholarships".';
    }
    
    // International students
    if (lowerMessage.includes('international') || lowerMessage.includes('visa') || lowerMessage.includes('cricos')) {
        return 'ALIT is a CRICOS-approved provider (Code: 03981M). We welcome international students and provide support with visa applications, accommodation, and student services. Would you like more information?';
    }
    
    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
        return 'You can reach us at info@alit.edu.au or call (03) 9917 5018. Our office hours are 9:00 am - 5:00 pm EST, Monday - Friday.';
    }
    
    // Campus
    if (lowerMessage.includes('campus') || lowerMessage.includes('location') || lowerMessage.includes('address')) {
        return 'ALIT has two campuses: Main Campus at 500 Spencer St, West Melbourne, VIC, 3003, and NSW Campus at Level 6, 16-18 Wentworth Street, Parramatta NSW 2150.';
    }
    
    // Default response
    const responses = [
        "I'm here to help! You can ask me about courses, admissions, fees, scholarships, or anything else about ALIT.",
        "That's a great question! Let me help you. You can ask about our courses, how to apply, fees, or student life.",
        "I'd be happy to assist you! What would you like to know about ALIT? I can help with course information, admissions, or general inquiries."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
}

function handleQuickAction(action) {
    const actions = {
        'courses': 'You can view all our courses on the Courses & Programs page. We offer programs in Security Services, First Aid, Community Services, Hospitality, Business, and Information Technology.',
        'admissions': 'To apply, visit our Admissions page. You\'ll find information about entry requirements, application process, fees, and scholarships. You can also download the application form directly from the website.',
        'scholarships': 'ALIT offers various scholarships for eligible students. Check our Admissions page under "Fees & Scholarships" for detailed information and eligibility criteria.'
    };
    
    if (actions[action]) {
        addBotMessage(actions[action]);
    }
}

function scrollToBottom() {
    const messagesContainer = document.getElementById('chatbotMessages');
    if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

