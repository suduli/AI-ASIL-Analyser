# Software Requirements Specification (SRS)
## AI-ASIL Analyser for ISO 26262 Automotive Safety

---

### Document Information
- **Project Name:** AI-ASIL Analyser  
- **Version:** 1.0  
- **Date:** August 20, 2025  
- **Author:** Suduli  
- **Document Type:** Software Requirements Specification  
- **Repository:** https://github.com/suduli/AI-ASIL-Analyser  

---

## Table of Contents
1. [Introduction](#1-introduction)
2. [Overall Description](#2-overall-description)
3. [System Features](#3-system-features)
4. [External Interface Requirements](#4-external-interface-requirements)
5. [Non-Functional Requirements](#5-non-functional-requirements)
6. [Technical Requirements](#6-technical-requirements)
7. [Database Requirements](#7-database-requirements)
8. [Security Requirements](#8-security-requirements)
9. [User Interface Requirements](#9-user-interface-requirements)
10. [Animation and UX Requirements](#10-animation-and-ux-requirements)

---

## 1. Introduction

### 1.1 Purpose
The AI-ASIL Analyser is a web-based application designed to automate and enhance the Automotive Safety Integrity Level (ASIL) classification process according to ISO 26262 standards. The system provides AI-assisted analysis, comprehensive component database management, and interactive visualizations for automotive safety assessment.

### 1.2 Document Scope
This SRS document defines the functional and non-functional requirements for the AI-ASIL Analyser system, including user interface specifications, system architecture, and integration requirements.

### 1.3 Intended Audience
- Automotive Safety Engineers
- ISO 26262 Compliance Specialists
- Software Developers
- Quality Assurance Engineers
- Project Managers
- System Integrators

### 1.4 Product Scope
The AI-ASIL Analyser enables users to:
- Perform automated ASIL calculations using AI algorithms
- Manage comprehensive automotive component databases
- Compare AI analysis with historical database records
- Generate safety recommendations and hazard assessments
- Visualize results through interactive dashboards

---

## 2. Overall Description

### 2.1 Product Perspective
The AI-ASIL Analyser is a standalone web application that integrates with multiple AI providers (OpenAI, Anthropic, OpenRouter) to provide intelligent automotive safety analysis. The system operates independently while offering API integration capabilities.

### 2.2 Product Functions
**Core Functions:**
- ASIL Classification (A, B, C, D, QM levels)
- Severity, Exposure, Controllability analysis
- AI-powered safety recommendations
- Component database management
- Hazard and failure mode identification
- Comparative analysis (AI vs Database)

**Supporting Functions:**
- Multi-AI provider integration
- Real-time API testing
- Data export/import capabilities
- Interactive animations and visualizations
- Theme switching (Light/Dark mode)
- Accessibility features

### 2.3 User Classes and Characteristics
**Primary Users:**
- **Safety Engineers:** Expert users requiring detailed ASIL analysis
- **Compliance Specialists:** Users focused on ISO 26262 compliance
- **Development Teams:** Users integrating safety analysis into development workflows

**Secondary Users:**
- **Auditors:** Users reviewing safety assessments
- **Managers:** Users requiring high-level safety overviews

### 2.4 Operating Environment
- **Client-side:** Modern web browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Server-side:** Python HTTP server for development, scalable web server for production
- **Supported Platforms:** Windows, macOS, Linux
- **Network:** Internet connection required for AI API integration

---

## 3. System Features

### 3.1 ASIL Analysis Engine
**Description:** Core functionality for calculating ASIL levels based on ISO 26262 standards.

**Functional Requirements:**
- **FR-3.1.1:** System shall calculate ASIL levels (A, B, C, D, QM) based on Severity (S), Exposure (E), and Controllability (C) parameters
- **FR-3.1.2:** System shall validate input parameters according to ISO 26262 classification table
- **FR-3.1.3:** System shall provide detailed explanations for each ASIL classification
- **FR-3.1.4:** System shall support both manual input and database selection methods

### 3.2 AI Integration Module
**Description:** Integration with multiple AI providers for intelligent analysis.

**Functional Requirements:**
- **FR-3.2.1:** System shall integrate with OpenAI GPT models for safety analysis
- **FR-3.2.2:** System shall integrate with Anthropic Claude models for alternative analysis
- **FR-3.2.3:** System shall integrate with OpenRouter for additional model access
- **FR-3.2.4:** System shall provide API key management and validation
- **FR-3.2.5:** System shall implement fallback mechanisms for API failures

### 3.3 Component Database Management
**Description:** Comprehensive database of 100+ automotive components with safety classifications.

**Functional Requirements:**
- **FR-3.3.1:** System shall maintain database of automotive components across categories (ADAS, Powertrain, Braking, etc.)
- **FR-3.3.2:** System shall allow component search and filtering by category
- **FR-3.3.3:** System shall support adding new components to database
- **FR-3.3.4:** System shall provide component details including hazards, failure modes, and recommendations
- **FR-3.3.5:** System shall enable bulk import/export of component data

### 3.4 Analysis Comparison Engine
**Description:** Comparative analysis between AI-generated and database-stored assessments.

**Functional Requirements:**
- **FR-3.4.1:** System shall compare AI analysis results with database records
- **FR-3.4.2:** System shall highlight discrepancies between AI and database classifications
- **FR-3.4.3:** System shall provide detailed comparison tables with match indicators
- **FR-3.4.4:** System shall calculate accuracy percentages for AI predictions

### 3.5 Reporting and Visualization
**Description:** Interactive dashboards and comprehensive reporting capabilities.

**Functional Requirements:**
- **FR-3.5.1:** System shall generate comprehensive ASIL analysis reports
- **FR-3.5.2:** System shall provide interactive visualizations of safety data
- **FR-3.5.3:** System shall display real-time statistics and dashboards
- **FR-3.5.4:** System shall support export of reports in multiple formats

---

## 4. External Interface Requirements

### 4.1 User Interfaces
**UI-4.1.1:** Web-based interface with responsive design
**UI-4.1.2:** Progressive Web App (PWA) capabilities
**UI-4.1.3:** Touch-friendly interface for mobile devices
**UI-4.1.4:** Keyboard navigation support for accessibility

### 4.2 Hardware Interfaces
**HI-4.2.1:** Standard web browser on desktop/laptop computers
**HI-4.2.2:** Mobile devices (smartphones, tablets)
**HI-4.2.3:** Touch screen interface support

### 4.3 Software Interfaces
**SI-4.3.1:** OpenAI API integration for GPT models
**SI-4.3.2:** Anthropic API integration for Claude models
**SI-4.3.3:** OpenRouter API integration for additional models
**SI-4.3.4:** Modern web browser APIs (Local Storage, Service Workers)

### 4.4 Communication Interfaces
**CI-4.4.1:** HTTPS protocol for secure API communication
**CI-4.4.2:** RESTful API architecture for external integrations
**CI-4.4.3:** WebSocket support for real-time updates (future enhancement)

---

## 5. Non-Functional Requirements

### 5.1 Performance Requirements
**PR-5.1.1:** System shall respond to user interactions within 200ms
**PR-5.1.2:** AI analysis shall complete within 10 seconds under normal load
**PR-5.1.3:** Database queries shall return results within 1 second
**PR-5.1.4:** System shall support concurrent users (minimum 100 simultaneous users)

### 5.2 Reliability Requirements
**RR-5.2.1:** System availability shall be 99.5% during business hours
**RR-5.2.2:** System shall implement graceful degradation for API failures
**RR-5.2.3:** Data integrity shall be maintained with 99.99% accuracy
**RR-5.2.4:** System shall provide automatic error recovery mechanisms

### 5.3 Usability Requirements
**UR-5.3.1:** New users shall complete first ASIL analysis within 5 minutes
**UR-5.3.2:** System shall provide contextual help and guidance
**UR-5.3.3:** Interface shall follow modern UX best practices
**UR-5.3.4:** System shall support keyboard-only navigation

### 5.4 Scalability Requirements
**SR-5.4.1:** System architecture shall support horizontal scaling
**SR-5.4.2:** Database shall handle 10,000+ component records
**SR-5.4.3:** System shall support API rate limiting and queuing

---

## 6. Technical Requirements

### 6.1 Frontend Technology Stack
**Technology Requirements:**
- **HTML5:** Modern semantic markup
- **CSS3:** Advanced styling with custom properties
- **JavaScript (ES2020+):** Modern JavaScript features
- **Anime.js v4.0.0:** Animation library for enhanced UX
- **FontAwesome 6.4.0:** Icon library
- **Google Fonts:** Typography (Orbitron, Inter)

### 6.2 Architecture Requirements
**AR-6.2.1:** Single Page Application (SPA) architecture
**AR-6.2.2:** Modular JavaScript design with separation of concerns
**AR-6.2.3:** Progressive enhancement for accessibility
**AR-6.2.4:** Mobile-first responsive design approach

### 6.3 Browser Compatibility
**BC-6.3.1:** Chrome 90+ (primary target)
**BC-6.3.2:** Firefox 88+ (secondary target)
**BC-6.3.3:** Safari 14+ (mobile focus)
**BC-6.3.4:** Edge 90+ (enterprise support)

### 6.4 Data Storage Requirements
**DS-6.4.1:** Client-side storage using localStorage API
**DS-6.4.2:** Session management for user preferences
**DS-6.4.3:** Component database stored as JavaScript objects
**DS-6.4.4:** API key encryption for security

---

## 7. Database Requirements

### 7.1 Component Database Schema
```javascript
ComponentRecord = {
    id: String,
    name: String,
    category: String,
    description: String,
    potential_hazards: Array[String],
    failure_modes: Array[String],
    safety_recommendations: Array[String],
    S: Number (1-3),
    E: Number (1-4),
    C: Number (1-3),
    asil: String (A|B|C|D|QM),
    reasons: {
        S: String,
        E: String,
        C: String
    }
}
```

### 7.2 Analysis Results Schema
```javascript
AnalysisResult = {
    timestamp: Date,
    component: ComponentRecord,
    ai_analysis: {
        severity: Number,
        exposure: Number,
        controllability: Number,
        asil: String,
        reasoning: String
    },
    database_match: Boolean,
    accuracy_score: Number
}
```

### 7.3 Database Categories
**Automotive Component Categories:**
- ADAS (Advanced Driver Assistance Systems)
- Powertrain Systems
- Braking Systems
- Steering Systems
- Electrical Systems
- Body Control Systems
- Infotainment Systems
- Communication Systems

---

## 8. Security Requirements

### 8.1 Data Protection
**DP-8.1.1:** API keys shall be encrypted before local storage
**DP-8.1.2:** Sensitive data shall not be logged in console
**DP-8.1.3:** HTTPS shall be enforced for all API communications
**DP-8.1.4:** Input validation shall prevent injection attacks

### 8.2 Authentication and Authorization
**AA-8.2.1:** API key validation before system access
**AA-8.2.2:** Rate limiting to prevent API abuse
**AA-8.2.3:** Session timeout for inactive users
**AA-8.2.4:** Secure storage of user preferences

### 8.3 Privacy Requirements
**PR-8.3.1:** No personal data collection without consent
**PR-8.3.2:** Component analysis data shall remain client-side
**PR-8.3.3:** API communications shall not store sensitive information
**PR-8.3.4:** User preferences shall be anonymized

---

## 9. User Interface Requirements

### 9.1 Visual Design Requirements
**VD-9.1.1:** Modern glassmorphism design language
**VD-9.1.2:** Consistent color scheme with primary blue (#4A90E2)
**VD-9.1.3:** High contrast ratios for accessibility (WCAG AA compliance)
**VD-9.1.4:** Responsive typography with scale hierarchy

### 9.2 Layout Requirements
**LR-9.2.1:** Header with navigation and settings access
**LR-9.2.2:** Hero section with call-to-action elements
**LR-9.2.3:** Dashboard with real-time statistics
**LR-9.2.4:** Main analysis panel with tabbed interface
**LR-9.2.5:** Results section with detailed breakdowns

### 9.3 Component Requirements
**CR-9.3.1:** Interactive forms with real-time validation
**CR-9.3.2:** Modal dialogs for settings and database management
**CR-9.3.3:** Dropdown selectors with search capabilities
**CR-9.3.4:** Progress indicators for loading states
**CR-9.3.5:** Toast notifications for user feedback

### 9.4 Theme Requirements
**TR-9.4.1:** Light theme as default
**TR-9.4.2:** Dark theme for low-light environments
**TR-9.4.3:** High contrast theme for accessibility
**TR-9.4.4:** User preference persistence

---

## 10. Animation and UX Requirements

### 10.1 Core Animation Features
**AF-10.1.1:** ASIL badge pulse/glow effects for attention
**AF-10.1.2:** Button microinteractions (hover, click, ripple)
**AF-10.1.3:** Card flip animations for detailed views
**AF-10.1.4:** Row reveal animations for data presentation
**AF-10.1.5:** Smooth page transitions and loading states

### 10.2 Decorative Animations
**DA-10.2.1:** Floating icons for ambient movement
**DA-10.2.2:** Animated gradients for visual depth
**DA-10.2.3:** Shimmer loading effects for content placeholders
**DA-10.2.4:** Particle system for background ambiance

### 10.3 Interaction Animations
**IA-10.3.1:** Hover highlights for interactive elements
**IA-10.3.2:** Focus indicators for keyboard navigation
**IA-10.3.3:** State change animations for form elements
**IA-10.3.4:** Feedback animations for user actions

### 10.4 Performance Requirements
**PA-10.4.1:** Animations shall maintain 60fps performance
**PA-10.4.2:** Reduced motion support for accessibility
**PA-10.4.3:** GPU acceleration for smooth transitions
**PA-10.4.4:** Minimal impact on application responsiveness

---

## 11. Compliance Requirements

### 11.1 ISO 26262 Compliance
**IC-11.1.1:** ASIL calculations shall conform to ISO 26262-3 standard
**IC-11.1.2:** Risk assessment methodology shall follow ISO 26262 guidelines
**IC-11.1.3:** Safety lifecycle processes shall be documented
**IC-11.1.4:** Traceability requirements shall be maintained

### 11.2 Web Standards Compliance
**WS-11.2.1:** HTML5 semantic markup standards
**WS-11.2.2:** CSS3 modern layout techniques
**WS-11.2.3:** ECMAScript 2020+ compatibility
**WS-11.2.4:** W3C accessibility guidelines (WCAG 2.1 AA)

### 11.3 Industry Standards
**IS-11.3.1:** Automotive SPICE process compliance
**IS-11.3.2:** Functional safety documentation standards
**IS-11.3.3:** Software development lifecycle compliance

---

## 12. Testing Requirements

### 12.1 Functional Testing
**FT-12.1.1:** Unit testing for all calculation algorithms
**FT-12.1.2:** Integration testing for AI API connections
**FT-12.1.3:** End-to-end testing for complete user workflows
**FT-12.1.4:** Regression testing for system updates

### 12.2 Performance Testing
**PT-12.2.1:** Load testing for concurrent user scenarios
**PT-12.2.2:** Stress testing for API rate limits
**PT-12.2.3:** Performance profiling for optimization
**PT-12.2.4:** Memory usage analysis

### 12.3 Usability Testing
**UT-12.3.1:** User acceptance testing with target audience
**UT-12.3.2:** Accessibility testing with assistive technologies
**UT-12.3.3:** Cross-browser compatibility testing
**UT-12.3.4:** Mobile device testing

### 12.4 Security Testing
**ST-12.4.1:** Penetration testing for vulnerabilities
**ST-12.4.2:** API security validation
**ST-12.4.3:** Data encryption verification
**ST-12.4.4:** Input validation testing

---

## 13. Deployment Requirements

### 13.1 Development Environment
**DE-13.1.1:** Python HTTP server for local development
**DE-13.1.2:** Git version control for source management
**DE-13.1.3:** Modern code editor with debugging support

### 13.2 Production Environment
**PE-13.2.1:** Scalable web server (Apache/Nginx)
**PE-13.2.2:** Content Delivery Network (CDN) for assets
**PE-13.2.3:** SSL/TLS certificate for security
**PE-13.2.4:** Domain name and hosting infrastructure

### 13.3 Monitoring Requirements
**MR-13.3.1:** Application performance monitoring
**MR-13.3.2:** Error tracking and logging
**MR-13.3.3:** User analytics and usage patterns
**MR-13.3.4:** API usage monitoring and alerting

---

## 14. Maintenance and Support

### 14.1 Documentation Requirements
**DR-14.1.1:** User manual and tutorials
**DR-14.1.2:** API documentation for integrations
**DR-14.1.3:** Developer documentation for maintenance
**DR-14.1.4:** Deployment and configuration guides

### 14.2 Update Requirements
**UR-14.2.1:** Regular component database updates
**UR-14.2.2:** Security patches and vulnerability fixes
**UR-14.2.3:** Browser compatibility updates
**UR-14.2.4:** Feature enhancements based on user feedback

### 14.3 Support Requirements
**SR-14.3.1:** Technical support documentation
**SR-14.3.2:** Troubleshooting guides
**SR-14.3.3:** FAQ and knowledge base
**SR-14.3.4:** Community support channels

---

## 15. Risk Assessment

### 15.1 Technical Risks
**TR-15.1.1:** AI API service downtime or changes
**TR-15.1.2:** Browser compatibility issues
**TR-15.1.3:** Performance degradation with large datasets
**TR-15.1.4:** Security vulnerabilities in dependencies

### 15.2 Business Risks
**BR-15.2.1:** Changes in ISO 26262 standards
**BR-15.2.2:** Competitor analysis tools
**BR-15.2.3:** User adoption challenges
**BR-15.2.4:** Regulatory compliance changes

### 15.3 Mitigation Strategies
**MS-15.3.1:** Multiple AI provider integration for redundancy
**MS-15.3.2:** Progressive enhancement for browser support
**MS-15.3.3:** Performance optimization and monitoring
**MS-15.3.4:** Regular security audits and updates

---

## 16. Future Enhancements

### 16.1 Planned Features
**PF-16.1.1:** Real-time collaboration capabilities
**PF-16.1.2:** Advanced reporting and analytics
**PF-16.1.3:** Machine learning model integration
**PF-16.1.4:** API for third-party integrations

### 16.2 Technology Upgrades
**TU-16.2.1:** Progressive Web App (PWA) features
**TU-16.2.2:** Offline functionality
**TU-16.2.3:** Advanced visualization libraries
**TU-16.2.4:** Voice interface integration

---

## 17. Glossary

**ASIL:** Automotive Safety Integrity Level - ISO 26262 risk classification
**API:** Application Programming Interface
**PWA:** Progressive Web App
**SPA:** Single Page Application
**UX:** User Experience
**CDN:** Content Delivery Network
**SSL/TLS:** Secure Sockets Layer/Transport Layer Security
**WCAG:** Web Content Accessibility Guidelines

---

## 18. Appendices

### Appendix A: ISO 26262 ASIL Classification Table
| Severity | Exposure | Controllability | ASIL |
|----------|----------|-----------------|------|
| S1 | E1 | C1 | QM |
| S1 | E1 | C2 | QM |
| S1 | E1 | C3 | QM |
| ... | ... | ... | ... |
| S3 | E4 | C3 | D |

### Appendix B: Component Database Structure
Detailed database schema and relationships for automotive components.

### Appendix C: API Integration Specifications
Complete API documentation for OpenAI, Anthropic, and OpenRouter integrations.

---

**Document Version:** 1.0  
**Last Updated:** August 20, 2025  
**Next Review Date:** September 20, 2025  

---

*This document serves as the comprehensive requirements specification for the AI-ASIL Analyser project and should be reviewed and updated regularly to reflect system evolution and user feedback.*
