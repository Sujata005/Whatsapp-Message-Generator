
# 📝 Whatsapp Message Generator

A simple web application that generates predefined messages based on user prompts. Perfect for creating personalised messages for various occasions and purposes.

## Features

- **Smart Message Generation**: Enter a prompt and get contextually appropriate messages
- **Multiple Templates**: Various message types, including festivals, birthdays, business communications, etc.
- **Editable Output**: Edit generated messages before using them
- **Placeholder Support**: Messages include placeholders like `{name}`, `{date}`, etc. for personalization
- **WhatsApp Integration**: Send generated messages directly to WhatsApp numbers
- **Phone Number Validation**: Real-time validation of WhatsApp numbers with country codes
- **Copy to Clipboard**: Easy one-click copying of your customised messages
- **Responsive Design**: Works great on both desktop and mobile devices

## How to Use

1. **Open the Application**: Double-click `message-generator.html` to open in your web browser
2. **Enter a Prompt**: Type what kind of message you want (e.g., "I want to send Diwali wishes to my customers")
3. **Generate**: Click the "Generate Message" button or press Enter
4. **Edit**: Customise the generated message in the text area
5. **WhatsApp Option**: Enter a WhatsApp number with country code (e.g., +91 9876543210)
6. **Send**: Choose to either:
   - **Copy** the message to the clipboard, or
   - **Send to WhatsApp** directly (opens WhatsApp Web/App)

## Supported Message Types

### Festival & Holiday Messages
- **Diwali**: "Diwali wishes", "festival of lights"
- **Christmas**: "Christmas greetings", "holiday wishes"
- **New Year**: "New Year wishes", "2024", "2025"

### Personal Messages
- **Birthday**: "birthday message", "birthday wishes"
- **Anniversary**: "anniversary", "wedding anniversary"

### Business Messages
- **Thank You**: "thank you message", "appreciation"
- **Meeting Reminders**: "meeting", "appointment", "conference"
- **Invitations**: "invite", "invitation", "event"

### Special Occasions
- **Wedding**: "wedding invitation", "marriage ceremony"
- **Apology**: "sorry", "apologise", "mistake"

## Example Prompts

- "I am trying to send a Diwali wish to my customers"
- "I need to send a birthday message to my friend"
- "I want to thank my clients for their support"
- "I need to invite people to my wedding"
- "I want to send Christmas greetings"
- "I need to send a meeting reminder"

## Sample Output

**Input**: "I am trying to send a Diwali wish to my customers"

**Output**:
```
Hello {name},

Diwali greetings! We wish you and your family a very happy and prosperous Diwali. May this festival of lights bring joy, happiness, and success to your life.

Warm regards,
{sender_name}
```

## WhatsApp Integration

The application now includes WhatsApp functionality:

### Phone Number Format
- **Include country code**: +91 9876543210 (India)
- **US numbers**: +1 234 567 8900
- **UK numbers**: +44 20 7946 0958

### How it Works
1. Enter a valid WhatsApp number with country code
2. The system validates the number in real-time
3. Click "Send to WhatsApp" to open WhatsApp Web/App
4. The message will be pre-filled, ready to send

### Supported Formats
- `+91 9876543210`
- `+91-987-654-3210`
- `+91 (987) 654-3210`
- All formats are automatically cleaned and validated

## Files Created

- `message-generator.html` - Main application file
- `styles.css` - Styling for the interface
- `script.js` - JavaScript logic and message templates
- `MESSAGE-GENERATOR-README.md` - This documentation

## Browser Compatibility

Works in all modern web browsers. Open `message-generator.html` to start using the application.

---

**Ready to generate personalised messages!** 🚀
