# 🚗 AI-ASIL-Calculator

## Next-Generation Automotive Safety Integrity Level Determination Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-5.0-blue.svg)](https://github.com/suduli/ai-asil-calculator)
[![ISO 26262](https://img.shields.io/badge/ISO-26262-green.svg)](https://www.iso.org/standard/68383.html)
[![AI Powered](https://img.shields.io/badge/AI-Powered-purple.svg)](https://github.com/suduli/ai-asil-calculator)

A cutting-edge web application that combines traditional ISO 26262 ASIL determination methods with AI-powered validation to ensure accurate automotive safety assessments.



## 🌟 Features

### 🤖 AI-Enhanced Analysis
- **Dual Validation System**: Compare database results with AI analysis from OpenAI GPT-4 or Anthropic Claude
- **Intelligent Discrepancy Detection**: Automatically identifies and highlights differences between database and AI assessments
- **Real-time Reasoning**: Get detailed explanations for Severity, Exposure, and Controllability ratings
- **Auto-Learning**: Optionally update the database with AI-validated results

### 🎯 Comprehensive ASIL Determination
- **ISO 26262 Compliant**: Follows official automotive safety standards
- **Interactive Parameter Adjustment**: Modify S, E, C parameters with instant ASIL recalculation
- **Visual Matrix Display**: Interactive ASIL determination matrix with color coding
- **Component Database**: Pre-loaded with common automotive components

### ✨ Modern User Experience
- **Futuristic UI**: Glassmorphism design with neon accents and animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Mode**: Automatic theme detection with manual override
- **Accessibility First**: WCAG compliant with keyboard navigation support

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- AI API key (OpenAI or Anthropic) for enhanced features

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/suduli/ai-asil-calculator.git
   cd ai-asil-calculator
   ```

2. **Open the application**
   ```bash
   # Simply open index.html in your browser
   open index.html
   
   # Or serve with a local server (recommended)
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

3. **Configure AI Integration**
   - Click the ⚙️ settings button
   - Enter your OpenAI or Anthropic API key
   - Select your preferred AI provider
   - Save settings

## 📖 Usage Guide

### Basic ASIL Assessment

1. **Quick Database Lookup**
   - Select a component from the dropdown (e.g., "brake system", "body control module")
   - View instant results from the pre-built database

2. **Custom Component Analysis**
   - Enter any automotive component name
   - Click "Analyze with AI Validation"
   - Compare database vs AI results

3. **Parameter Adjustment**
   - Modify Severity (S0-S3), Exposure (E1-E4), or Controllability (C1-C3)
   - See real-time ASIL level updates
   - View detailed ISO 26262 matrix position

### Advanced Features

#### AI Validation Workflow
```
User Input → Database Lookup → AI Analysis → Comparison → Results Display
                    ↓              ↓           ↓
                 Instant        Real-time   Discrepancy
                 Results        Reasoning   Detection
```

#### Discrepancy Resolution
When database and AI results differ:
1. Review detailed reasoning from both sources
2. Analyze the differences highlighted in the banner
3. Choose to adopt AI values if they're more accurate
4. Optionally save improved results to database

## 🏗️ Architecture

### File Structure
```
ai-asil-calculator/
├── index.html              # Main application HTML
├── style.css              # Enhanced futuristic styling
├── app.js                 # Core application logic
├── components_db.js       # Automotive components database
├── README.md              # This documentation
└── assets/               # Additional resources
    ├── icons/
    └── images/
```

### Technology Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Variables, Glassmorphism
- **AI Integration**: OpenAI GPT-4, Anthropic Claude APIs
- **Standards**: ISO 26262-3 ASIL Determination

### Key Components

#### Database Structure
```javascript
const componentsDB = {
  "component_name": {
    S: 3,                    // Severity (0-3)
    E: 4,                    // Exposure (1-4)
    C: 3,                    // Controllability (1-3)
    asil: "D",              // Determined ASIL level
    reasons: {
      S: "Detailed severity reasoning",
      E: "Detailed exposure reasoning", 
      C: "Detailed controllability reasoning"
    }
  }
}
```

## 🎨 Design System

### Color Palette
- **Primary**: Neon Cyan (`#00f5ff`) - Main interactive elements
- **Secondary**: Neon Purple (`#bd00ff`) - AI-related features
- **Success**: Neon Green (`#00ff88`) - Database results
- **Warning**: Neon Orange (`#ff6b35`) - Discrepancies
- **Error**: Neon Red (`#ff2965`) - Critical issues

### Typography
- **Headings**: FKGroteskNeue (futuristic, clean)
- **Body**: Inter/Geist (readable, modern)
- **Code**: Berkeley Mono (technical elements)

### Visual Effects
- **Glassmorphism**: Translucent panels with backdrop blur
- **Neon Glows**: CSS box-shadow animations
- **Gradient Borders**: Dynamic color transitions
- **Particle Effects**: Animated background grid

## 🧠 AI Integration

### Supported Providers

#### OpenAI GPT-4
- **Model**: `gpt-4-turbo-preview`
- **Strengths**: Comprehensive reasoning, automotive domain knowledge
- **API Key Format**: `sk-...`

#### Anthropic Claude
- **Model**: `claude-3-opus-20240229`
- **Strengths**: Detailed safety analysis, ISO standard compliance
- **API Key Format**: `sk-ant-...`

### AI Analysis Process

1. **Component Analysis**
   ```javascript
   // AI receives component description and safety context
   const prompt = `Analyze the automotive component: ${componentName}
   Determine ISO 26262 ASIL parameters (S, E, C) with detailed reasoning...`;
   ```

2. **Structured Response**
   ```json
   {
     "severity": 3,
     "exposure": 4, 
     "controllability": 3,
     "asil": "D",
     "reasoning": {
       "severity": "Failure can cause fatal accidents...",
       "exposure": "Active in all driving scenarios...",
       "controllability": "Difficult to control without backup systems..."
     }
   }
   ```

3. **Validation & Comparison**
   - Compare AI results with database entries
   - Highlight discrepancies with visual indicators
   - Provide adoption recommendations

## 📊 Component Database

### Current Categories
- **Braking Systems**: brake system, ABS, brake pedal, brake fluid reservoir
- **Steering Systems**: power steering, steering wheel, steering column
- **Powertrain**: engine control unit, transmission, throttle control
- **Body Electronics**: body control module, lighting systems, HVAC
- **Safety Systems**: airbags, seatbelt systems, emergency braking
- **Chassis Systems**: suspension control, electronic stability control
- **Communication**: CAN bus, gateway modules, diagnostic systems

### Expansion Roadmap
- **ADAS Components**: cameras, radar, lidar, sensor fusion
- **Electric Vehicle**: battery management, charging systems, inverters  
- **Autonomous Driving**: path planning, decision making, fail-safe systems
- **Connectivity**: V2X communication, telematics, OTA updates

## 🔧 Configuration

### Settings Options

#### AI Provider Selection
```javascript
// Configure in settings modal
const aiConfig = {
  provider: 'openai' | 'anthropic',
  apiKey: 'your-api-key',
  model: 'gpt-4' | 'claude-3-opus'
};
```

#### Auto-Learning
Enable automatic database updates when AI provides more accurate results:
```javascript
const autoLearn = {
  enabled: true,
  requireConfirmation: true,
  backupOriginal: true
};
```

## 🧪 Testing & Validation

### Test Cases
1. **Database Components**: Verify all pre-loaded components return expected ASIL levels
2. **AI Integration**: Test API connectivity and response parsing
3. **Parameter Modification**: Ensure real-time ASIL recalculation
4. **Discrepancy Detection**: Validate comparison logic accuracy
5. **Responsive Design**: Test across different screen sizes
6. **Accessibility**: Verify keyboard navigation and screen reader support

### Quality Assurance
- **ISO 26262 Compliance**: All calculations follow official standard
- **AI Response Validation**: Structured prompts ensure consistent output
- **Error Handling**: Graceful degradation when AI services unavailable
- **Performance**: Optimized for fast loading and smooth animations

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit with descriptive messages: `git commit -m 'Add amazing feature'`
5. Push to your branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Contribution Areas
- **Component Database**: Add more automotive components with accurate ASIL data
- **AI Prompts**: Improve prompt engineering for better AI responses
- **UI/UX**: Enhance the user interface and experience
- **Documentation**: Improve guides, examples, and API docs
- **Testing**: Add automated tests and validation scripts
- **Performance**: Optimize loading times and animations

### Component Database Contributions
When adding new components, ensure:
```javascript
{
  S: 0-3,              // Based on ISO 26262-3 Table 1
  E: 1-4,              // Based on ISO 26262-3 Table 2  
  C: 1-3,              // Based on ISO 26262-3 Table 3
  asil: "QM"|"A"|"B"|"C"|"D",  // From ISO 26262-3 Table 4
  reasons: {
    S: "Clear severity justification with ISO reference",
    E: "Exposure probability explanation with scenarios",
    C: "Controllability assessment with driver capability analysis"
  }
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **ISO 26262**: International standard for automotive functional safety
- **OpenAI**: GPT-4 API for intelligent component analysis
- **Anthropic**: Claude API for safety-focused reasoning
- **Automotive Industry**: Domain experts who contributed to component database
- **Open Source Community**: Libraries and tools that made this possible

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/suduli/ai-asil-calculator/issues)
- **Discussions**: [GitHub Discussions](https://github.com/suduli/ai-asil-calculator/discussions)
- **Email**: suduli.office@gmail.com
- **Documentation**: [Wiki](https://github.com/suduli/ai-asil-calculator/wiki)
- **Website**: [Link](https://suduli.github.io/AI-ASIL-Calculator/)

## 🗺️ Roadmap

### Version 5.1 (Q2 2024)
- [ ] Enhanced AI prompt templates
- [ ] Export functionality (PDF, JSON, CSV)
- [ ] Component search and filtering
- [ ] History tracking and comparison

### Version 5.2 (Q3 2024)
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Batch component analysis
- [ ] Integration with CAD tools

### Version 6.0 (Q4 2024)
- [ ] Machine learning model training
- [ ] Real-time collaborative editing
- [ ] Enterprise SSO integration
- [ ] Advanced reporting and compliance

---

**Built with ❤️ for the automotive safety community**

*Ensuring safer vehicles through intelligent ASIL determination*
