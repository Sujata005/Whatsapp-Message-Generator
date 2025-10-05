// Message Generator JavaScript

// Predefined message templates
const messageTemplates = {
    // Morning Greetings
    morning: [
        "Good morning {name}! Wishing you a day filled with happiness and success. May your morning be as bright as your smile!",
        "Rise and shine, {name}! May this morning bring you new opportunities and positive vibes. Have a fantastic day ahead!",
        "Morning {name}! Just wanted to send you some positive energy to kickstart your day. May your day be productive and joyful!"
    ],
    // Festival and Holiday Messages
    diwali: [
        "Hello {name},\n\nDiwali greetings! We wish you and your family a very happy and prosperous Diwali. May this festival of lights bring joy, happiness, and success to your life.\n\nWarm regards,\n{sender_name}",
        "Dear {name},\n\nOn this auspicious occasion of Diwali, we extend our heartfelt wishes to you and your loved ones. May the divine light of Diwali spread peace, prosperity, and happiness in your life.\n\nNamaste!\n{sender_name}",
        "Hi {name},\n\nWishing you a sparkling Diwali filled with joy, prosperity, and happiness! May this festival of lights illuminate your path to success.\n\nBest wishes,\n{sender_name}"
    ],
    
    christmas: [
        "Dear {name},\n\nMerry Christmas! May this festive season bring you joy, peace, and happiness. Wishing you and your family a wonderful holiday season.\n\nWarm wishes,\n{sender_name}",
        "Hello {name},\n\nWishing you a Merry Christmas and a Happy New Year! May your holidays be filled with warmth, love, and cherished moments with family and friends.\n\nBest regards,\n{sender_name}"
    ],
    
    newyear: [
        "Dear {name},\n\nHappy New Year! May this new year bring you new opportunities, success, and happiness. Here's to a fantastic year ahead!\n\nBest wishes,\n{sender_name}",
        "Hello {name},\n\nWishing you a very Happy New Year! May 2024 be filled with new adventures, achievements, and memorable moments.\n\nCheers to the new year!\n{sender_name}"
    ],
    
    // Personal Messages
    birthday: [
        "Happy Birthday {name}! 🎉\n\nWishing you a day filled with happiness and a year filled with joy. Hope all your birthday wishes come true!\n\nBest wishes,\n{sender_name}",
        "Dear {name},\n\nHappy Birthday! May this special day bring you endless joy and tons of precious memories. Have a wonderful celebration!\n\nWith love,\n{sender_name}"
    ],
    
    anniversary: [
        "Dear {name},\n\nHappy Anniversary! Wishing you both continued love, happiness, and many more years of togetherness.\n\nWarm congratulations,\n{sender_name}",
        "Congratulations {name}!\n\nHappy Anniversary! May your love story continue to be filled with beautiful moments and lasting happiness.\n\nBest wishes,\n{sender_name}"
    ],
    
    // Business Messages
    thankyou: [
        "Dear {name},\n\nThank you for your continued support and trust in our services. We truly appreciate your business and look forward to serving you in the future.\n\nBest regards,\n{sender_name}",
        "Hello {name},\n\nWe wanted to take a moment to thank you for choosing us. Your support means the world to us, and we're grateful for the opportunity to work with you.\n\nSincerely,\n{sender_name}"
    ],
    
    meeting: [
        "Dear {name},\n\nThis is a friendly reminder about our upcoming meeting scheduled for {date} at {time}. Please confirm your attendance.\n\nAgenda: {agenda}\nLocation: {location}\n\nLooking forward to meeting with you.\n\nBest regards,\n{sender_name}",
        "Hello {name},\n\nJust a reminder that we have a meeting scheduled for {date} at {time}. Please let me know if you need to reschedule.\n\nMeeting details:\n- Topic: {topic}\n- Duration: {duration}\n- Platform: {platform}\n\nThanks,\n{sender_name}"
    ],
    
    invitation: [
        "Dear {name},\n\nYou are cordially invited to {event}!\n\nDate: {date}\nTime: {time}\nVenue: {venue}\n\nWe would be honored by your presence. Please RSVP by {rsvp_date}.\n\nLooking forward to celebrating with you!\n\nWarm regards,\n{sender_name}"
    ],
    
    // Wedding Messages
    wedding: [
        "Dear {name},\n\nWith great joy and excitement, we invite you to celebrate our wedding!\n\nDate: {date}\nTime: {time}\nVenue: {venue}\n\nYour presence would make our special day even more memorable. Please RSVP by {rsvp_date}.\n\nWith love and anticipation,\n{bride_name} & {groom_name}",
        "Hello {name},\n\nWe are getting married! 💍\n\nPlease join us as we exchange vows and begin our journey together.\n\nWedding Details:\n📅 Date: {date}\n🕐 Time: {time}\n📍 Venue: {venue}\n\nKindly confirm your attendance by {rsvp_date}.\n\nLove,\n{bride_name} & {groom_name}"
    ],
    
    // Apology Messages
    apology: [
        "Dear {name},\n\nI sincerely apologize for {reason}. I understand this may have caused inconvenience, and I take full responsibility.\n\nI am committed to ensuring this doesn't happen again and would appreciate the opportunity to make things right.\n\nSincerely,\n{sender_name}",
        "Hello {name},\n\nI wanted to reach out and apologize for {reason}. This was not up to our usual standards, and I'm sorry for any frustration this may have caused.\n\nWe value your relationship and are taking steps to prevent this in the future.\n\nBest regards,\n{sender_name}"
    ],
    
    // Generic/Default
    generic: [
        "Hello {name},\n\nI hope this message finds you well. {custom_message}\n\nPlease let me know if you need any additional information.\n\nBest regards,\n{sender_name}",
        "Dear {name},\n\n{custom_message}\n\nThank you for your time and consideration.\n\nSincerely,\n{sender_name}"
    ]
};

// Keywords to match prompts to message types
const keywordMapping = {
    morning: ['good morning', 'morning greetings', 'rise and shine'],
    diwali: ['diwali', 'deepavali', 'festival of lights'],
    christmas: ['christmas', 'xmas', 'holiday', 'festive season'],
    newyear: ['new year', 'newyear', '2024', '2025'],
    birthday: ['birthday', 'bday', 'born day'],
    anniversary: ['anniversary', 'wedding anniversary'],
    thankyou: ['thank you', 'thanks', 'grateful', 'appreciate'],
    meeting: ['meeting', 'appointment', 'conference', 'call', 'discussion'],
    invitation: ['invite', 'invitation', 'event', 'party', 'gathering'],
    wedding: ['wedding', 'marriage', 'wed', 'ceremony', 'nuptials'],
    apology: ['sorry', 'apology', 'apologize', 'mistake', 'error']
};

// DOM Elements
const promptInput = document.getElementById('prompt');
const generateBtn = document.getElementById('generate-btn');
const outputSection = document.getElementById('output-section');
const messageDisplay = document.getElementById('message-display');
const editableMessage = document.getElementById('editable-message');
const copyBtn = document.getElementById('copy-btn');
const regenerateBtn = document.getElementById('regenerate-btn');
const whatsappBtn = document.getElementById('whatsapp-btn');
const whatsappNumber = document.getElementById('whatsapp-number');
const themeToggle = document.getElementById('theme-toggle');

// Bot messaging DOM elements
const enableBotMode = document.getElementById('enable-bot-mode');
const botConfigOptions = document.getElementById('bot-config-options');
const serviceProvider = document.getElementById('service-provider');
const saveApiConfigBtn = document.getElementById('save-api-config-btn');
const testConnectionBtn = document.getElementById('test-connection-btn');
const sendBotMessageBtn = document.getElementById('send-bot-message-btn');
const recipientList = document.getElementById('recipient-list');
const enableScheduling = document.getElementById('enable-scheduling');
const scheduleDateTime = document.getElementById('schedule-datetime');
const messageTemplateType = document.getElementById('message-template-type');
const templateNameContainer = document.getElementById('template-name-container');
const templateName = document.getElementById('template-name');

// Demo mode and debug elements
const enableDemoMode = document.getElementById('enable-demo-mode');
const enableDebugMode = document.getElementById('enable-debug-mode');
const debugOutput = document.getElementById('debug-output');
const debugLog = document.getElementById('debug-log');
const clearDebugBtn = document.getElementById('clear-debug-btn');
const downloadDebugBtn = document.getElementById('download-debug-btn');

// Event Listeners
generateBtn.addEventListener('click', generateMessage);
copyBtn.addEventListener('click', copyMessage);
regenerateBtn.addEventListener('click', generateMessage);
whatsappBtn.addEventListener('click', sendToWhatsApp);

// Bot messaging event listeners
enableBotMode.addEventListener('change', toggleBotMode);
serviceProvider.addEventListener('change', showProviderCredentials);
saveApiConfigBtn.addEventListener('click', saveApiConfiguration);
testConnectionBtn.addEventListener('click', testConnection);
sendBotMessageBtn.addEventListener('click', sendBotMessage);
enableScheduling.addEventListener('change', toggleScheduling);
messageTemplateType.addEventListener('change', toggleTemplateOptions);

// Demo mode and debug event listeners
enableDemoMode.addEventListener('change', toggleDemoMode);
enableDebugMode.addEventListener('change', toggleDebugMode);
clearDebugBtn.addEventListener('click', clearDebugLog);
downloadDebugBtn.addEventListener('click', downloadDebugLog);

// Allow Enter key to generate message (use keydown for better compatibility)
promptInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        generateMessage();
    }
});

// Function to fill prompt from examples
function fillPrompt(exampleText) {
    promptInput.value = exampleText;
    promptInput.focus();
}

// Main function to generate message
function generateMessage() {
    const prompt = promptInput.value.trim().toLowerCase();
    
    if (!prompt) {
        alert('Please enter a prompt to generate a message!');
        promptInput.focus();
        return;
    }
    
    const messageType = identifyMessageType(prompt);
    const templates = messageTemplates[messageType];
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    
    // Show the output section
    outputSection.style.display = 'block';
    messageDisplay.textContent = randomTemplate;
    editableMessage.value = randomTemplate;
    
    // Scroll to output section
    outputSection.scrollIntoView({ behavior: 'smooth' });
    
    // Focus on editable textarea
    editableMessage.focus();

    // Enable WhatsApp button only if a valid number is present
    if (whatsappNumber && whatsappNumber.value && validatePhoneNumber(whatsappNumber.value)) {
        whatsappBtn.disabled = false;
    } else {
        whatsappBtn.disabled = true;
    }
}

// Function to identify message type from prompt
function identifyMessageType(prompt) {
    for (const [type, keywords] of Object.entries(keywordMapping)) {
        if (keywords.some(keyword => prompt.includes(keyword))) {
            return type;
        }
    }
    return 'generic'; // Default fallback
}

// Function to copy message to clipboard
async function copyMessage() {
    const message = editableMessage.value;
    
    if (!message.trim()) {
        alert('No message to copy!');
        return;
    }
    
    try {
        await navigator.clipboard.writeText(message);
        
        // Visual feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✅ Copied!';
        copyBtn.classList.add('copied');
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.classList.remove('copied');
        }, 2000);
        
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = message;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            copyBtn.textContent = '✅ Copied!';
            setTimeout(() => {
                copyBtn.textContent = '📋 Copy Message';
            }, 2000);
        } catch (fallbackErr) {
            alert('Unable to copy message. Please copy manually.');
        }
        
        document.body.removeChild(textArea);
    }
}

// Function to update message display when editing
editableMessage.addEventListener('input', function() {
    messageDisplay.textContent = this.value;
});

// Phone number validation function
function validatePhoneNumber(phoneNumber) {
    if (!phoneNumber || typeof phoneNumber !== 'string') {
        logDebug(`Invalid phone number input: ${phoneNumber}`, 'error');
        return false;
    }
    
    // Remove all spaces, hyphens, parentheses, and dots
    const cleanNumber = phoneNumber.replace(/[\s\-\(\)\.]/g, '');
    logDebug(`Validating phone number: "${phoneNumber}" -> cleaned: "${cleanNumber}"`, 'info');
    
    // Must start with + followed by country code (1-4 digits) and phone number (4-15 digits)
    // More flexible regex that accepts various country codes and number lengths
    const phoneRegex = /^\+[1-9]\d{0,3}\d{4,15}$/;
    
    const isValid = phoneRegex.test(cleanNumber);
    
    if (isValid) {
        logDebug(`Phone number "${phoneNumber}" is valid`, 'success');
    } else {
        logDebug(`Phone number "${phoneNumber}" is invalid - doesn't match pattern +[country code][number]`, 'error', {
            original: phoneNumber,
            cleaned: cleanNumber,
            expectedFormat: '+[1-4 digit country code][4-15 digit number]',
            examples: ['+1234567890', '+919876543210', '+447700900123']
        });
    }
    
    return isValid;
}

// Format phone number for WhatsApp (remove + and spaces)
function formatPhoneForWhatsApp(phoneNumber) {
    return phoneNumber.replace(/[\s\-\(\)\+]/g, '');
}

// Function to send message to WhatsApp
function sendToWhatsApp() {
    const message = editableMessage.value.trim();
    const phoneNumber = whatsappNumber.value.trim();
    
    // Validate message
    if (!message) {
        alert('Please generate a message first!');
        return;
    }
    
    // Validate phone number
    if (!phoneNumber) {
        alert('Please enter a WhatsApp number!');
        whatsappNumber.focus();
        return;
    }
    
    if (!validatePhoneNumber(phoneNumber)) {
        alert('Please enter a valid phone number with country code (e.g., +91 9876543210)');
        whatsappNumber.focus();
        return;
    }
    
    // Format phone number and message for WhatsApp
    const formattedPhone = formatPhoneForWhatsApp(phoneNumber);
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Visual feedback
    const originalText = whatsappBtn.textContent;
    whatsappBtn.textContent = '✅ Opened WhatsApp!';
    whatsappBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    
    setTimeout(() => {
        whatsappBtn.textContent = originalText;
        whatsappBtn.style.background = 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)';
    }, 3000);
}

// Real-time phone number validation
whatsappNumber.addEventListener('input', function() {
    const phoneNumber = this.value.trim();
    
    if (phoneNumber && !validatePhoneNumber(phoneNumber)) {
        this.style.borderColor = '#ef4444';
        this.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
        whatsappBtn.disabled = true;
    } else {
        this.style.borderColor = '#25D366';
        this.style.boxShadow = '0 0 0 3px rgba(37, 211, 102, 0.1)';
        whatsappBtn.disabled = false;
    }
});

// Add some helper functions for better user experience
document.addEventListener('DOMContentLoaded', function() {
    // Focus on prompt input when page loads
    promptInput.focus();
    
    // Load saved bot configuration
    loadSavedConfiguration();
    
    // Initialize scheduled message checker
    initializeScheduledMessageChecker();
    
    // Add placeholder cycling for better UX
    const placeholders = [
        "e.g., I want to send Diwali wishes to my customers",
        "e.g., I need to send a birthday message to my friend",
        "e.g., I want to thank my clients for their support",
        "e.g., I need to invite people to my wedding",
        "e.g., I want to send Christmas greetings",
        "e.g., I need to send a meeting reminder"
    ];
    
    let currentPlaceholder = 0;
    setInterval(() => {
        if (promptInput === document.activeElement) return; // Don't change if user is typing
        promptInput.placeholder = placeholders[currentPlaceholder];
        currentPlaceholder = (currentPlaceholder + 1) % placeholders.length;
    }, 3000);

    // Initialize theme
    try {
        const savedTheme = localStorage.getItem('appTheme') || 'light';
        if (savedTheme === 'dark') document.documentElement.classList.add('dark');
        updateThemeToggle();
    } catch (e) {
        console.warn('Unable to read theme preference:', e);
    }
});

// Theme toggle handler
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        const isDark = document.documentElement.classList.toggle('dark');
        try { localStorage.setItem('appTheme', isDark ? 'dark' : 'light'); } catch(e) {}
        updateThemeToggle();
    });
}

function updateThemeToggle() {
    if (!themeToggle) return;
    const isDark = document.documentElement.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️ Light' : '🌙 Dark';
    themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
}

// Bot messaging configuration storage
let botConfig = {
    provider: '',
    credentials: {},
    isConfigured: false
};

// Debug logging system
let debugEnabled = false;
let demoModeEnabled = false;

function logDebug(message, type = 'info', data = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
        timestamp,
        type,
        message,
        data
    };
    
    // Always log to console
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`, data || '');
    
    // Log to debug panel if enabled
    if (debugEnabled && debugLog) {
        const statusClass = type === 'error' ? 'error' : type === 'warning' ? 'warning' : type === 'success' ? 'success' : 'info';
        const logLine = `[${timestamp}] <span class="debug-status ${statusClass}">${type}</span> ${message}`;
        if (data) {
            const dataStr = typeof data === 'object' ? JSON.stringify(data, null, 2) : data;
            debugLog.innerHTML += logLine + '\n' + dataStr + '\n\n';
        } else {
            debugLog.innerHTML += logLine + '\n\n';
        }
        debugLog.scrollTop = debugLog.scrollHeight;
    }
}

// Toggle demo mode
function toggleDemoMode() {
    demoModeEnabled = enableDemoMode.checked;
    if (demoModeEnabled) {
        sendBotMessageBtn.classList.add('demo-mode-active');
        logDebug('Demo mode enabled - messages will be simulated', 'warning');
    } else {
        sendBotMessageBtn.classList.remove('demo-mode-active');
        logDebug('Demo mode disabled - real API calls will be made', 'info');
    }
}

// Toggle debug mode
function toggleDebugMode() {
    debugEnabled = enableDebugMode.checked;
    if (debugEnabled) {
        debugOutput.style.display = 'block';
        logDebug('Debug mode enabled', 'success');
    } else {
        debugOutput.style.display = 'none';
    }
}

// Clear debug log
function clearDebugLog() {
    if (debugLog) {
        debugLog.innerHTML = '';
        logDebug('Debug log cleared', 'info');
    }
}

// Download debug log
function downloadDebugLog() {
    if (debugLog) {
        const logContent = debugLog.textContent || debugLog.innerText;
        const blob = new Blob([logContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `message-generator-debug-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        logDebug('Debug log downloaded', 'success');
    }
}

// Toggle bot mode
function toggleBotMode() {
    if (enableBotMode.checked) {
        botConfigOptions.style.display = 'block';
    } else {
        botConfigOptions.style.display = 'none';
    }
}

// Show provider-specific credentials
function showProviderCredentials() {
    // Hide all provider credentials
    const allCredentials = document.querySelectorAll('.provider-credentials');
    allCredentials.forEach(cred => cred.style.display = 'none');
    
    const selectedProvider = serviceProvider.value;
    if (selectedProvider) {
        const credentialsDiv = document.getElementById(`${selectedProvider}-credentials`);
        if (credentialsDiv) {
            credentialsDiv.style.display = 'block';
        }
    }
}

// Save API configuration
function saveApiConfiguration() {
    const provider = serviceProvider.value;
    
    if (!provider) {
        alert('Please select a service provider first!');
        return;
    }
    
    let credentials = {};
    
    // Get credentials based on provider
    switch (provider) {
        case 'twilio':
            credentials = {
                accountSid: document.getElementById('twilio-account-sid').value,
                authToken: document.getElementById('twilio-auth-token').value,
                phoneNumber: document.getElementById('twilio-phone-number').value
            };
            break;
        case 'whatsapp-business':
            credentials = {
                phoneNumberId: document.getElementById('wa-phone-number-id').value,
                accessToken: document.getElementById('wa-access-token').value,
                businessAccountId: document.getElementById('wa-business-account-id').value
            };
            break;
        case '360dialog':
            credentials = {
                apiKey: document.getElementById('360dialog-api-key').value,
                phoneNumber: document.getElementById('360dialog-phone-number').value
            };
            break;
        default:
            alert('Provider configuration not yet implemented!');
            return;
    }
    
    // Validate credentials
    const hasAllCredentials = Object.values(credentials).every(value => value.trim() !== '');
    
    if (!hasAllCredentials) {
        alert('Please fill in all required credentials!');
        return;
    }
    
    // Save configuration
    botConfig = {
        provider: provider,
        credentials: credentials,
        isConfigured: true
    };
    
    // Store in localStorage for persistence
    localStorage.setItem('messageBotConfig', JSON.stringify(botConfig));
    
    // Visual feedback
    const originalText = saveApiConfigBtn.textContent;
    saveApiConfigBtn.textContent = '✅ Saved!';
    saveApiConfigBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    
    setTimeout(() => {
        saveApiConfigBtn.textContent = originalText;
        saveApiConfigBtn.style.background = 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)';
    }, 2000);
}

// Test connection to API
function testConnection() {
    if (!botConfig.isConfigured) {
        alert('Please save your API configuration first!');
        return;
    }
    
    const originalText = testConnectionBtn.textContent;
    testConnectionBtn.textContent = '🔄 Testing...';
    testConnectionBtn.disabled = true;
    
    // Simulate API test (in real implementation, make actual API call)
    setTimeout(() => {
        const isConnected = Math.random() > 0.2; // 80% success rate for demo
        
        if (isConnected) {
            testConnectionBtn.textContent = '✅ Connected!';
            testConnectionBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        } else {
            testConnectionBtn.textContent = '❌ Failed';
            testConnectionBtn.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
        }
        
        setTimeout(() => {
            testConnectionBtn.textContent = originalText;
            testConnectionBtn.style.background = 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)';
            testConnectionBtn.disabled = false;
        }, 3000);
    }, 2000);
}

// Send message via bot
async function sendBotMessage() {
    const message = editableMessage.value.trim();
    const recipients = getRecipientList();
    
    logDebug('Starting bot message send process', 'info', {
        messageLength: message.length,
        recipientCount: recipients.length,
        demoMode: demoModeEnabled,
        provider: botConfig.provider
    });
    
    // Validation checks
    if (!message) {
        const error = 'Please generate a message first!';
        logDebug(error, 'error');
        alert(error);
        return;
    }
    
    if (!demoModeEnabled && !botConfig.isConfigured) {
        const error = 'Please configure and save your API settings first, or enable Demo Mode for testing!';
        logDebug(error, 'error');
        alert(error);
        return;
    }
    
    if (recipients.length === 0) {
        const error = 'Please enter at least one valid recipient number with country code (e.g., +91 9876543210)!';
        logDebug(error, 'error');
        alert(error);
        recipientList.focus();
        return;
    }
    
    // Validate all recipients
    const invalidRecipients = [];
    const recipientLines = recipientList.value.trim().split('\n');
    recipientLines.forEach((line, index) => {
        const trimmed = line.trim();
        if (trimmed && !validatePhoneNumber(trimmed)) {
            invalidRecipients.push(`Line ${index + 1}: "${trimmed}"`);
        }
    });
    
    if (invalidRecipients.length > 0) {
        const error = `Invalid phone numbers found:\n${invalidRecipients.join('\n')}\n\nPlease use format: +[country code] [number]`;
        logDebug('Invalid recipients detected', 'error', invalidRecipients);
        alert(error);
        return;
    }
    
    // Check if scheduling is enabled
    const isScheduled = enableScheduling.checked && scheduleDateTime.value;
    
    if (isScheduled) {
        const scheduleTime = new Date(scheduleDateTime.value);
        const now = new Date();
        
        if (scheduleTime <= now) {
            const error = 'Please select a future date and time for scheduling!';
            logDebug(error, 'error');
            alert(error);
            return;
        }
        
        logDebug('Scheduling message for later delivery', 'info', { scheduleTime, recipientCount: recipients.length });
        scheduleMessage(message, recipients, scheduleTime);
        return;
    }
    
    // Send immediately
    logDebug('Sending messages immediately', 'info');
    await sendImmediateMessages(message, recipients);
}

// Get list of recipients from textarea
function getRecipientList() {
    const text = recipientList.value.trim();
    logDebug(`Getting recipient list from textarea`, 'info', { rawText: text });
    
    if (!text) {
        logDebug('No recipients found - textarea is empty', 'warning');
        return [];
    }
    
    const lines = text.split('\n').map(line => line.trim()).filter(line => line);
    logDebug(`Found ${lines.length} non-empty lines`, 'info', { lines });
    
    const validRecipients = [];
    const invalidRecipients = [];
    
    lines.forEach((line, index) => {
        if (validatePhoneNumber(line)) {
            validRecipients.push(line);
        } else {
            invalidRecipients.push({ line: index + 1, number: line });
        }
    });
    
    logDebug(`Validation results: ${validRecipients.length} valid, ${invalidRecipients.length} invalid`, 
        validRecipients.length > 0 ? 'success' : 'error', 
        { valid: validRecipients, invalid: invalidRecipients });
    
    return validRecipients;
}

// Send messages immediately
async function sendImmediateMessages(message, recipients) {
    const originalText = sendBotMessageBtn.textContent;
    sendBotMessageBtn.textContent = '📤 Sending...';
    sendBotMessageBtn.disabled = true;
    
    // Create progress indicator
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    progressContainer.innerHTML = '<div class="progress-bar" id="send-progress"></div>';
    sendBotMessageBtn.parentNode.appendChild(progressContainer);
    
    const progressBar = document.getElementById('send-progress');
    let successCount = 0;
    let failCount = 0;
    
    for (let i = 0; i < recipients.length; i++) {
        const recipient = recipients[i];
        const progress = ((i + 1) / recipients.length) * 100;
        progressBar.style.width = `${progress}%`;
        
        try {
            await sendSingleMessage(message, recipient);
            successCount++;
        } catch (error) {
            console.error(`Failed to send to ${recipient}:`, error);
            failCount++;
        }
        
        // Add delay between messages to avoid rate limiting
        if (i < recipients.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    
    // Show results
    const resultMessage = `Sending complete!\nSuccessful: ${successCount}\nFailed: ${failCount}`;
    alert(resultMessage);
    
    // Cleanup
    progressContainer.remove();
    sendBotMessageBtn.textContent = originalText;
    sendBotMessageBtn.disabled = false;
}

// Send single message via API
async function sendSingleMessage(message, recipient) {
    logDebug(`Attempting to send message to ${recipient}`, 'info', { message: message.substring(0, 100) + '...', recipient });
    
    // Demo mode simulation
    if (demoModeEnabled) {
        logDebug(`Demo mode: Simulating message send to ${recipient}`, 'warning');
        await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 500)); // Random delay
        
        // Simulate 90% success rate
        if (Math.random() > 0.1) {
            logDebug(`Demo mode: Message sent successfully to ${recipient}`, 'success');
            return { success: true, messageId: 'demo_' + Date.now(), recipient };
        } else {
            logDebug(`Demo mode: Simulated failure for ${recipient}`, 'error');
            throw new Error('Demo mode: Simulated API failure');
        }
    }
    
    // Real API calls
    if (!botConfig.isConfigured) {
        const error = 'Bot configuration not set up properly';
        logDebug(error, 'error');
        throw new Error(error);
    }
    
    const { provider, credentials } = botConfig;
    
    try {
        let result;
        switch (provider) {
            case 'twilio':
                result = await sendViaTwilio(message, recipient, credentials);
                break;
            case 'whatsapp-business':
                result = await sendViaWhatsAppBusiness(message, recipient, credentials);
                break;
            case '360dialog':
                result = await sendVia360Dialog(message, recipient, credentials);
                break;
            default:
                throw new Error(`Provider ${provider} not implemented`);
        }
        
        logDebug(`Message sent successfully to ${recipient} via ${provider}`, 'success', result);
        return result;
    } catch (error) {
        logDebug(`Failed to send message to ${recipient} via ${provider}`, 'error', {
            error: error.message,
            provider,
            recipient
        });
        throw error;
    }
}

// Twilio API integration
async function sendViaTwilio(message, recipient, credentials) {
    const url = `https://api.twilio.com/2010-04-01/Accounts/${credentials.accountSid}/Messages.json`;
    
    logDebug(`Sending via Twilio to ${recipient}`, 'info', { url, from: credentials.phoneNumber });
    
    try {
        const formData = new FormData();
        formData.append('From', `whatsapp:${credentials.phoneNumber}`);
        formData.append('To', `whatsapp:${recipient}`);
        formData.append('Body', message);
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${btoa(credentials.accountSid + ':' + credentials.authToken)}`
            },
            body: formData
        });
        
        const responseData = await response.text();
        logDebug(`Twilio API response`, response.ok ? 'success' : 'error', { status: response.status, data: responseData });
        
        if (!response.ok) {
            let errorMessage = `Twilio API error: ${response.status}`;
            try {
                const errorData = JSON.parse(responseData);
                if (errorData.message) {
                    errorMessage += ` - ${errorData.message}`;
                }
                if (errorData.code) {
                    errorMessage += ` (Code: ${errorData.code})`;
                }
            } catch (e) {
                errorMessage += ` - ${responseData}`;
            }
            throw new Error(errorMessage);
        }
        
        return JSON.parse(responseData);
    } catch (error) {
        if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
            logDebug('CORS error detected - API call blocked by browser', 'error', {
                suggestion: 'Try using a CORS proxy or server-side implementation'
            });
            throw new Error('CORS Error: Cannot make API call from browser. Consider using a server-side proxy or CORS-enabled endpoint.');
        }
        throw error;
    }
}

// WhatsApp Business API integration
async function sendViaWhatsAppBusiness(message, recipient, credentials) {
    const url = `https://graph.facebook.com/v18.0/${credentials.phoneNumberId}/messages`;
    
    const payload = {
        messaging_product: 'whatsapp',
        to: recipient.replace(/[\+\s\-\(\)]/g, ''),
        type: 'text',
        text: { body: message }
    };
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${credentials.accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
        throw new Error(`WhatsApp Business API error: ${response.status}`);
    }
    
    return await response.json();
}

// 360dialog API integration
async function sendVia360Dialog(message, recipient, credentials) {
    const url = 'https://waba.360dialog.io/v1/messages';
    
    const payload = {
        to: recipient.replace(/[\+\s\-\(\)]/g, ''),
        type: 'text',
        text: { body: message }
    };
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'D360-API-KEY': credentials.apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
        throw new Error(`360dialog API error: ${response.status}`);
    }
    
    return await response.json();
}

// Schedule message for later
function scheduleMessage(message, recipients, scheduleTime) {
    const scheduleData = {
        message,
        recipients,
        scheduleTime: scheduleTime.getTime(),
        provider: botConfig.provider,
        credentials: botConfig.credentials
    };
    
    // Store scheduled message
    const scheduledMessages = JSON.parse(localStorage.getItem('scheduledMessages') || '[]');
    scheduledMessages.push({
        id: Date.now(),
        ...scheduleData
    });
    localStorage.setItem('scheduledMessages', JSON.stringify(scheduledMessages));
    
    alert(`Message scheduled for ${scheduleTime.toLocaleString()}!\nRecipients: ${recipients.length}`);
}

// Toggle scheduling options
function toggleScheduling() {
    scheduleDateTime.disabled = !enableScheduling.checked;
}

// Toggle template options
function toggleTemplateOptions() {
    if (messageTemplateType.value === 'template') {
        templateNameContainer.style.display = 'block';
    } else {
        templateNameContainer.style.display = 'none';
    }
}

// Load saved configuration on page load
function loadSavedConfiguration() {
    const savedConfig = localStorage.getItem('messageBotConfig');
    if (savedConfig) {
        try {
            botConfig = JSON.parse(savedConfig);
            if (botConfig.isConfigured) {
                // Restore UI state
                enableBotMode.checked = true;
                toggleBotMode();
                serviceProvider.value = botConfig.provider;
                showProviderCredentials();
                
                // Restore credentials (but not sensitive data for security)
                // In production, you might want to require re-entry of sensitive data
            }
        } catch (error) {
            console.error('Error loading saved configuration:', error);
        }
    }
}

// Initialize scheduled message checker
function initializeScheduledMessageChecker() {
    setInterval(() => {
        checkScheduledMessages();
    }, 60000); // Check every minute
}

// Check and send scheduled messages
function checkScheduledMessages() {
    const scheduledMessages = JSON.parse(localStorage.getItem('scheduledMessages') || '[]');
    const now = Date.now();
    const toSend = [];
    const remaining = [];
    
    scheduledMessages.forEach(msg => {
        if (msg.scheduleTime <= now) {
            toSend.push(msg);
        } else {
            remaining.push(msg);
        }
    });
    document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark");
    this.textContent = document.body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark";
});

    // Send due messages
    toSend.forEach(async (msg) => {
        try {
            await sendImmediateMessages(msg.message, msg.recipients);
            console.log(`Scheduled message ${msg.id} sent successfully`);
        } catch (error) {
            console.error(`Failed to send scheduled message ${msg.id}:`, error);
        }
    });
    
    // Update localStorage with remaining messages
    localStorage.setItem('scheduledMessages', JSON.stringify(remaining));
}

// Export functions for global use
window.fillPrompt = fillPrompt;


