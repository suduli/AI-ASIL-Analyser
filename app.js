// Components Database - 100+ Automotive Components
const COMPONENTS_DB = {
    // ADAS Components
    'adaptive_cruise_control': {
        name: 'Adaptive Cruise Control',
        category: 'ADAS',
        description: 'System that automatically adjusts vehicle speed to maintain a safe distance from vehicles ahead using radar and camera sensors.',
        potential_hazards: ['Inappropriate acceleration', 'Failure to brake', 'Loss of target tracking'],
        failure_modes: ['Sensor malfunction', 'Software error', 'Communication failure'],
        safety_recommendations: ['Implement redundant sensors', 'Driver override capability', 'Fail-safe deceleration'],
        S: 2, E: 4, C: 2, asil: 'B',
        reasons: { S: 'Can cause collision (S2)', E: 'Used frequently on highways (E4)', C: 'Driver can override (C2)' }
    },
    'lane_keeping_assist': {
        name: 'Lane Keeping Assist',
        category: 'ADAS',
        description: 'System that monitors lane markings and provides steering assistance to keep the vehicle centered in its lane.',
        potential_hazards: ['Unintended steering input', 'Lane departure', 'Interference with driver control'],
        failure_modes: ['Camera sensor failure', 'Algorithm error', 'Actuator malfunction'],
        safety_recommendations: ['Driver hands-on detection', 'Gradual steering input', 'System disengagement protocol'],
        S: 2, E: 4, C: 2, asil: 'B',
        reasons: { S: 'Can cause lane departure accident (S2)', E: 'Active during highway driving (E4)', C: 'Driver can override steering (C2)' }
    },
    'automatic_emergency_braking': {
        name: 'Automatic Emergency Braking',
        category: 'ADAS',
        description: 'System that detects imminent collision and automatically applies brakes when driver fails to respond.',
        potential_hazards: ['False activation', 'Failure to activate', 'Insufficient braking force'],
        failure_modes: ['Sensor obstruction', 'Processing delay', 'Brake system failure'],
        safety_recommendations: ['Multiple sensor fusion', 'Graduated brake application', 'Driver notification system'],
        S: 3, E: 3, C: 3, asil: 'D',
        reasons: { S: 'Failure can result in fatal collision (S3)', E: 'Emergency situations occur regularly (E3)', C: 'Driver cannot react in time (C3)' }
    },
    'blind_spot_monitoring': {
        name: 'Blind Spot Monitoring',
        category: 'ADAS',
        description: 'System that detects vehicles in blind spots and alerts driver during lane change attempts.',
        potential_hazards: ['False warning', 'Missed detection', 'Delayed warning'],
        failure_modes: ['Radar sensor failure', 'Signal processing error', 'Display malfunction'],
        safety_recommendations: ['Dual sensor configuration', 'Visual and audible alerts', 'Self-diagnostic capability'],
        S: 2, E: 4, C: 1, asil: 'B',
        reasons: { S: 'Can cause side collision (S2)', E: 'Used during lane changes (E4)', C: 'Driver can check mirrors (C1)' }
    },
    'traffic_sign_recognition': {
        name: 'Traffic Sign Recognition',
        category: 'ADAS',
        description: 'Camera-based system that identifies traffic signs and displays information to driver.',
        potential_hazards: ['Misidentified signs', 'Missed critical signs', 'Incorrect speed limits'],
        failure_modes: ['Camera malfunction', 'Image processing error', 'Database corruption'],
        safety_recommendations: ['High-resolution cameras', 'Regular database updates', 'Driver confirmation protocol'],
        S: 1, E: 4, C: 1, asil: 'A',
        reasons: { S: 'Information only, low injury risk (S1)', E: 'Active during normal driving (E4)', C: 'Driver maintains control (C1)' }
    },

    // Braking System Components
    'abs_control_unit': {
        name: 'ABS Control Unit',
        category: 'Braking',
        description: 'Electronic control unit that prevents wheel lockup during braking by modulating brake pressure.',
        potential_hazards: ['Wheel lockup', 'Loss of steering control', 'Extended stopping distance'],
        failure_modes: ['ECU malfunction', 'Sensor failure', 'Hydraulic pump failure'],
        safety_recommendations: ['Redundant wheel speed sensors', 'Fail-safe to normal braking', 'System self-test capability'],
        S: 3, E: 4, C: 2, asil: 'D',
        reasons: { S: 'Brake failure can be fatal (S3)', E: 'Braking occurs frequently (E4)', C: 'Driver has limited control during emergency (C2)' }
    },
    'electronic_brake_distribution': {
        name: 'Electronic Brake Distribution',
        category: 'Braking',
        description: 'System that optimally distributes brake force between front and rear wheels based on loading conditions.',
        potential_hazards: ['Improper brake balance', 'Vehicle instability', 'Premature wheel lockup'],
        failure_modes: ['Load sensor error', 'Control algorithm failure', 'Valve malfunction'],
        safety_recommendations: ['Load sensing redundancy', 'Progressive brake distribution', 'Integration with ABS'],
        S: 2, E: 4, C: 2, asil: 'C',
        reasons: { S: 'Can cause loss of control (S2)', E: 'Active during all braking (E4)', C: 'Driver can modulate pedal (C2)' }
    },
    'brake_assist_system': {
        name: 'Brake Assist System',
        category: 'Braking',
        description: 'System that detects emergency braking situations and provides maximum braking force.',
        potential_hazards: ['Failure to detect emergency', 'False activation', 'Insufficient brake boost'],
        failure_modes: ['Pedal sensor failure', 'Vacuum pump malfunction', 'Software error'],
        safety_recommendations: ['Multiple detection algorithms', 'Manual override capability', 'System status monitoring'],
        S: 3, E: 2, C: 2, asil: 'C',
        reasons: { S: 'Emergency braking failure can be fatal (S3)', E: 'Emergency situations are uncommon (E2)', C: 'Driver can apply more force (C2)' }
    },
    'electronic_parking_brake': {
        name: 'Electronic Parking Brake',
        category: 'Braking',
        description: 'Electric motor-driven parking brake system with automatic engagement and release capability.',
        potential_hazards: ['Unintended engagement', 'Failure to engage', 'Failure to release'],
        failure_modes: ['Motor failure', 'Switch malfunction', 'Software error'],
        safety_recommendations: ['Manual release mechanism', 'Engagement confirmation', 'Speed-based lockout'],
        S: 2, E: 4, C: 1, asil: 'B',
        reasons: { S: 'Can cause vehicle movement or tire damage (S2)', E: 'Used every time parking (E4)', C: 'Alternative manual brake available (C1)' }
    },

    // Powertrain Components
    'engine_control_unit': {
        name: 'Engine Control Unit',
        category: 'Powertrain',
        description: 'Electronic control unit that manages engine operation including fuel injection, ignition timing, and emissions.',
        potential_hazards: ['Unintended acceleration', 'Engine stall', 'Excessive emissions'],
        failure_modes: ['ECU hardware failure', 'Software corruption', 'Sensor input error'],
        safety_recommendations: ['Throttle redundancy', 'Limp-home mode', 'Real-time monitoring'],
        S: 3, E: 4, C: 2, asil: 'D',
        reasons: { S: 'Uncontrolled acceleration can be fatal (S3)', E: 'Engine operates continuously (E4)', C: 'Driver has brake and ignition control (C2)' }
    },
    'transmission_control_unit': {
        name: 'Transmission Control Unit',
        category: 'Powertrain',
        description: 'Electronic system that controls automatic transmission shifting, torque converter lockup, and line pressure.',
        potential_hazards: ['Unexpected gear change', 'Loss of drive', 'Transmission overheating'],
        failure_modes: ['Solenoid failure', 'Software error', 'Hydraulic pressure loss'],
        safety_recommendations: ['Shift pattern validation', 'Temperature monitoring', 'Manual override mode'],
        S: 2, E: 4, C: 2, asil: 'C',
        reasons: { S: 'Unexpected shifts can cause accidents (S2)', E: 'Transmission operates continuously (E4)', C: 'Driver can use manual mode (C2)' }
    },
    'hybrid_battery_management': {
        name: 'Hybrid Battery Management System',
        category: 'Powertrain',
        description: 'System that monitors and controls high-voltage battery pack operation in hybrid and electric vehicles.',
        potential_hazards: ['Battery thermal runaway', 'High voltage exposure', 'Sudden power loss'],
        failure_modes: ['Cell monitoring failure', 'Cooling system malfunction', 'Contactor failure'],
        safety_recommendations: ['Cell-level monitoring', 'Emergency disconnect', 'Thermal management'],
        S: 3, E: 4, C: 3, asil: 'D',
        reasons: { S: 'High voltage can be fatal (S3)', E: 'Battery operates continuously (E4)', C: 'No driver control over battery (C3)' }
    },

    // Steering System Components
    'electric_power_steering': {
        name: 'Electric Power Steering',
        category: 'Steering',
        description: 'Electric motor-assisted steering system that provides variable steering assistance based on driving conditions.',
        potential_hazards: ['Loss of power assistance', 'Unintended steering torque', 'Steering lockup'],
        failure_modes: ['Motor failure', 'Torque sensor error', 'ECU malfunction'],
        safety_recommendations: ['Manual steering fallback', 'Torque limiting', 'System status monitoring'],
        S: 3, E: 4, C: 2, asil: 'D',
        reasons: { S: 'Steering failure can be fatal (S3)', E: 'Steering used continuously (E4)', C: 'Driver can apply manual force (C2)' }
    },
    'active_front_steering': {
        name: 'Active Front Steering',
        category: 'Steering',
        description: 'System that can modify steering ratio and add steering angle independent of driver input.',
        potential_hazards: ['Unintended steering input', 'System oscillation', 'Loss of steering feel'],
        failure_modes: ['Actuator malfunction', 'Position sensor error', 'Software instability'],
        safety_recommendations: ['Driver override detection', 'Gradual intervention', 'System disengagement capability'],
        S: 3, E: 3, C: 3, asil: 'D',
        reasons: { S: 'Unwanted steering can cause fatal accident (S3)', E: 'Active during normal driving (E3)', C: 'Difficult for driver to overcome (C3)' }
    },

    // Safety System Components
    'airbag_control_unit': {
        name: 'Airbag Control Unit',
        category: 'Safety',
        description: 'Electronic system that determines when to deploy airbags based on crash severity and occupant position.',
        potential_hazards: ['Inadvertent deployment', 'Failure to deploy', 'Delayed deployment'],
        failure_modes: ['Crash sensor failure', 'Squib circuit malfunction', 'Software error'],
        safety_recommendations: ['Multiple crash sensors', 'Deployment threshold validation', 'System self-diagnosis'],
        S: 3, E: 1, C: 3, asil: 'C',
        reasons: { S: 'Improper deployment can be fatal (S3)', E: 'Crashes are rare (E1)', C: 'No driver control over deployment (C3)' }
    },
    'electronic_Stability_control': {
        name: 'Electronic Stability Control',
        category: 'Safety',
        description: 'System that helps maintain vehicle stability by detecting and reducing loss of traction through selective brake application.',
        potential_hazards: ['Unwanted brake intervention', 'Failure to intervene', 'System oscillation'],
        failure_modes: ['Yaw rate sensor failure', 'Brake actuator malfunction', 'Control algorithm error'],
        safety_recommendations: ['Sensor redundancy', 'Gradual intervention', 'Driver override capability'],
        S: 3, E: 3, C: 2, asil: 'D',
        reasons: { S: 'Loss of control can be fatal (S3)', E: 'Operates in various driving conditions (E3)', C: 'Driver can counter-steer (C2)' }
    }
};

// ISO 26262 ASIL Calculator v16 - Real API Validation Fixed
class ASILCalculator {
    constructor() {
        this.settings = {
            provider: 'openai',
            apiKey: '',
            useOpenRouter: false,
            openRouterModel: 'openai/gpt-oss-20b:free',
            anthropicModel: 'claude-3-sonnet-20240229'
        };
        
        this.isKeyValid = false;
        // Restore persisted analyses count when available so the counter survives reloads
        try {
            this.analysesCount = parseInt(localStorage.getItem('analysesCount')) || 0;
        } catch (e) {
            this.analysesCount = 0;
        }
        this.componentsDB = COMPONENTS_DB;
        this.filteredComponents = Object.keys(this.componentsDB);
        this.currentEditKey = null;
        
        // Debounce timers
        this._aboutInputTimer = null;
        this._aboutHighlightTimer = null;
        
        // Track current analysis results
        this.currentAnalysis = null;
        
        this.init();
    }

    init() {
        // Use immediate execution to avoid timing issues
        this.initializeElements();
        this.attachEventListeners();
        // Ensure input panels reflect the currently selected input method (replace global setupTabSwitching)
        try {
            const selectedInput = document.querySelector('input[name="inputMethod"]:checked');
            const method = selectedInput ? selectedInput.value : (this.manualTabInput && this.manualTabInput.checked ? 'manual' : 'database');
            this.toggleInputMethod(method);
        } catch (e) {
            // ignore if DOM not ready or elements missing
        }
        this.loadSettings();
        this.updateDashboard();
        this.populateComponentSelect();
        this.populateComponentsTable();
        console.log('ASIL Calculator v16 initialized successfully');
    }

    initializeElements() {
        const ids = [
            'settingsBtn', 'databaseBtn', 'asilGuideBtn', 'closeSettingsModal', 'closeDatabaseModal',
            'closeAsilGuideModal', 'closeComponentFormModal', 'settingsModal', 'databaseModal',
            'asilGuideModal', 'componentFormModal', 'providerSelect', 'openRouterModelSelect',
            'apiKeyInput', 'keyStatus', 'testKeyBtn', 'saveSettingsBtn', 'totalComponents',
            'apiStatus', 'componentInput', 'databaseInput', 'manualInput',
            'componentSelect', 'severitySelect', 'exposureSelect', 'controllabilitySelect',
            'analyzeBtn', 'spinner', 'errorBanner', 'errorMessage', 'resultsSection',
            'componentName', 'componentCategory', 'featureDescription', 'severityValue',
            'severityDesc', 'exposureValue', 'exposureDesc', 'controllabilityValue',
            'controllabilityDesc', 'asilBadge', 'asilExplanation', 'saveToDbBtn', 'saveStatus',
            'hazardsList', 'failureList', 'recommendationsList', 'aiSeverity', 'dbSeverity',
            'severityMatch', 'aiExposure', 'dbExposure', 'exposureMatch', 'aiControllability',
            'dbControllability', 'controllabilityMatch', 'aiAsil', 'dbAsil', 'asilMatch',
            'searchComponents', 'categoryFilter', 'componentsTableBody', 'addComponentBtn',
            'componentForm', 'componentFormTitle', 'cancelComponentForm', 'manualTabInput',
            'databaseTabInput', 'manualInputPanel', 'databaseInputPanel',
            // Component form inputs
            'componentNameInput', 'componentCategoryInput', 'componentDescriptionInput',
            'componentSeverityInput', 'componentExposureInput', 'componentControllabilityInput'
        ];

        ids.forEach(id => {
            const camelCaseId = id.replace(/-([a-z])/g, g => g[1].toUpperCase());
            this[camelCaseId] = document.getElementById(id);
        });

        // Special case for elements where id doesn't match property name
        this.analysesCountEl = document.getElementById('analysesCount');
    }

    attachEventListeners() {
        // Save ASIL to Database button
        if (this.saveToDbBtn) {
            this.saveToDbBtn.onclick = (e) => {
                e.preventDefault();
                this.saveCurrentAnalysisToDatabase();
            };
        }
        
        // Provider and model selection handling
        if (this.providerSelect && this.openRouterModelSelect) {
            // Initially hide OpenRouter model select if OpenRouter is not selected
            this.openRouterModelSelect.parentElement.style.display = 
                this.providerSelect.value === 'openrouter' ? 'block' : 'none';

            // Show/hide OpenRouter model select based on provider selection
            this.providerSelect.addEventListener('change', () => {
                this.openRouterModelSelect.parentElement.style.display = 
                    this.providerSelect.value === 'openrouter' ? 'block' : 'none';
            });
        }

        // Set up the unified debounced About panel input handler
        if (this.componentInput && this.featureDescription) {
            this.setupDebouncedAboutInputHandler();
        }

        // FIXED: Header button events with direct event handlers
        if (this.settingsBtn) {
            this.settingsBtn.onclick = (e) => {
                e.preventDefault();
                this.openModal('settings');
            };
        }

        if (this.databaseBtn) {
            this.databaseBtn.onclick = (e) => {
                e.preventDefault();
                this.openModal('database');
            };
        }

        if (this.asilGuideBtn) {
            this.asilGuideBtn.onclick = (e) => {
                e.preventDefault();
                this.openModal('asilGuide');
            };
        }

        // Modal close events - FIXED
        this.attachModalCloseEvents();

        // Settings events
        if (this.testKeyBtn) {
            this.testKeyBtn.onclick = (e) => {
                e.preventDefault();
                this.testApiKey();
            };
        }

        if (this.saveSettingsBtn) {
            this.saveSettingsBtn.onclick = (e) => {
                e.preventDefault();
                this.saveSettings();
            };
        }

        if (this.providerSelect) {
            this.providerSelect.addEventListener('change', () => {
                this.updateProvider();
            });
        }

        if (this.apiKeyInput) {
            this.apiKeyInput.addEventListener('input', () => {
                this.isKeyValid = false;
                this.updateSaveButtonState();
                this.clearKeyStatus();
            });
        }

        // Database events
        if (this.searchComponents) {
            this.searchComponents.addEventListener('input', () => {
                this.filterComponents();
            });
        }

        if (this.categoryFilter) {
            this.categoryFilter.addEventListener('change', () => {
                this.filterComponents();
            });
        }

        if (this.addComponentBtn) {
            this.addComponentBtn.onclick = (e) => {
                e.preventDefault();
                this.openComponentForm();
            };
        }

        // Component form events
        if (this.componentForm) {
            this.componentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveComponent();
            });
        }

        if (this.cancelComponentForm) {
            this.cancelComponentForm.onclick = (e) => {
                e.preventDefault();
                this.closeModal('componentForm');
            };
        }

        // Input method toggle - fixed
        const radioButtons = document.querySelectorAll('input[name="inputMethod"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.toggleInputMethod(e.target.value);
            });
        });

        // Manual tab and database tab event listeners
        if (this.manualTabInput) {
            this.manualTabInput.addEventListener('change', () => {
                if (this.manualTabInput.checked) {
                    this.toggleInputMethod('manual');
                }
            });
        }

        if (this.databaseTabInput) {
            this.databaseTabInput.addEventListener('change', () => {
                if (this.databaseTabInput.checked) {
                    this.toggleInputMethod('database');
                }
            });
        }

        // Component selection
        if (this.componentSelect) {
            this.componentSelect.addEventListener('change', () => {
                this.handleComponentSelection();
            });
        }

        // Analysis button
        if (this.analyzeBtn) {
            this.analyzeBtn.onclick = (e) => {
                e.preventDefault();
                this.analyzeComponent();
            };
        }

        // ESC key for modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });

        // Removed duplicate componentInput event listener
        
        console.log('All event listeners attached successfully');
    }

    attachModalCloseEvents() {
        const modalCloseMappings = [
            { btn: this.closeSettingsModal, modal: 'settings' },
            { btn: this.closeDatabaseModal, modal: 'database' },
            { btn: this.closeAsilGuideModal, modal: 'asilGuide' },
            { btn: this.closeComponentFormModal, modal: 'componentForm' }
        ];

        modalCloseMappings.forEach(({ btn, modal }) => {
            if (btn) {  // This check is redundant as the elements must exist
                btn.onclick = (e) => {
                    e.preventDefault();
                    console.log(`Closing ${modal} modal`);
                    this.closeModal(modal);
                };
            }
        });

        // Backdrop clicks
        const modals = [
            { element: this.settingsModal, name: 'settings' },
            { element: this.databaseModal, name: 'database' },
            { element: this.asilGuideModal, name: 'asilGuide' },
            { element: this.componentFormModal, name: 'componentForm' }
        ];

        modals.forEach(({ element, name }) => {
            if (element) {
                element.onclick = (e) => {
                    if (e.target === element || e.target.classList.contains('modal-backdrop')) {
                        console.log(`Backdrop clicked for ${name} modal`);
                        this.closeModal(name);
                    }
                };
            }
        });
    }

    openModal(modalType) {
        this.closeAllModals(); // Close any open modals first
        
        const modalMap = {
            'settings': this.settingsModal,
            'database': this.databaseModal,
            'asilGuide': this.asilGuideModal,
            'componentForm': this.componentFormModal
        };

        const modal = modalMap[modalType];
        if (modal) {
            // Store the element that had focus before opening the modal
            this.lastFocusedElement = document.activeElement;
            
            modal.classList.remove('hidden');
            
            // Find the first focusable element in the modal and focus it
            setTimeout(() => {
                const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                if (focusableElements.length > 0) {
                    focusableElements[0].focus();
                }
                
                // Set up trap focus within modal
                this.setupFocusTrap(modal);
            }, 50);
        } else {
            console.error(`Modal ${modalType} not found`);
        }
    }

    setupFocusTrap(modal) {
        // Remove any existing event listeners
        document.removeEventListener('keydown', this.handleTabKey);
        
        // Store focusable elements
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        // Create event listener function that can be removed later
        this.handleTabKey = (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        };
        
        // Add the event listener
        document.addEventListener('keydown', this.handleTabKey);
    }

    closeModal(modalType) {
        const modalMap = {
            'settings': this.settingsModal,
            'database': this.databaseModal,
            'asilGuide': this.asilGuideModal,
            'componentForm': this.componentFormModal
        };

        const modal = modalMap[modalType];
        if (modal) {
            modal.classList.add('hidden');
            
            // Remove focus trap
            document.removeEventListener('keydown', this.handleTabKey);
            
            // Restore focus to the element that had focus before the modal was opened
            if (this.lastFocusedElement) {
                this.lastFocusedElement.focus();
            }
        }
    }

    closeAllModals() {
        const modals = [this.settingsModal, this.databaseModal, this.asilGuideModal, this.componentFormModal];
        modals.forEach(modal => {
            if (modal) {
                modal.classList.add('hidden');
            }
        });
        
        // Remove focus trap
        document.removeEventListener('keydown', this.handleTabKey);
        
        // Restore focus to the element that had focus before the modal was opened
        if (this.lastFocusedElement) {
            this.lastFocusedElement.focus();
        }
    }

    loadSettings() {
        this.settings.provider = 'openai';
        this.settings.apiKey = '';
        if (this.providerSelect) this.providerSelect.value = this.settings.provider;
        if (this.apiKeyInput) this.apiKeyInput.value = this.settings.apiKey;
        this.updateSaveButtonState();
        this.updateDashboard();
    }

    updateDashboard() {
        if (this.totalComponents) {
            this.totalComponents.textContent = Object.keys(this.componentsDB).length.toString();
        }
        
        if (this.apiStatus) {
            this.apiStatus.textContent = this.isKeyValid ? 'Connected' : 'Not Configured';
        }
        
        if (this.analysesCountEl) {
            this.analysesCountEl.textContent = this.analysesCount.toString();
        }
    }

    // Unified increment handler for analysesCount.
    // Keeps state, updates the dashboard and persists the value to localStorage.
    incrementAnalysesCount(by = 1) {
        try {
            this.analysesCount = (this.analysesCount || 0) + by;
            // Persist for session continuity
            try { localStorage.setItem('analysesCount', String(this.analysesCount)); } catch (e) { /* ignore storage errors */ }
            this.updateDashboard();
        } catch (e) {
            console.warn('incrementAnalysesCount failed', e);
        }
    }

    updateProvider() {
        const newProvider = this.providerSelect.value;
        this.settings.provider = newProvider;
        this.settings.useOpenRouter = newProvider === 'openrouter';
        
        // Update model if OpenRouter is selected
        if (this.settings.useOpenRouter) {
            if (this.openRouterModelSelect) {
                this.settings.openRouterModel = this.openRouterModelSelect.value;
            }
        }

        this.isKeyValid = false;
        this.updateSaveButtonState();
        this.clearKeyStatus();
        this.updateDashboard();
        
        // For testing: Log provider update
        console.log('Provider updated:', {
            provider: this.settings.provider,
            useOpenRouter: this.settings.useOpenRouter,
            model: this.settings.openRouterModel
        });
    }

    clearKeyStatus() {
        if (this.keyStatus) {
            this.keyStatus.textContent = '';
            this.keyStatus.className = 'key-status';
        }
    }

    updateSaveButtonState() {
        if (this.saveSettingsBtn) {
            this.saveSettingsBtn.disabled = !this.isKeyValid;
        }
    }

    async testApiKey() {
        const apiKey = this.apiKeyInput ? this.apiKeyInput.value.trim() : '';
        
        if (!apiKey) {
            this.showKeyStatus('Please enter an API key', 'error');
            return;
        }

        // For testing: Log key validation attempt
        this.showKeyStatus('Testing API key...', 'testing');
        if (this.testKeyBtn) this.testKeyBtn.disabled = true;

        try {
            const isValid = await this.validateApiKey(apiKey, this.settings.provider);
            this.isKeyValid = isValid;
            
            if (isValid) {
                this.showKeyStatus('✓ API key is valid', 'success');
            } else {
                this.showKeyStatus('✗ API key is invalid or network error', 'error');
            }
        } catch (error) {
            this.isKeyValid = false;
            this.showKeyStatus(`✗ Error: ${error.message}`, 'error');
        } finally {
            if (this.testKeyBtn) this.testKeyBtn.disabled = false;
            this.updateSaveButtonState();
        }
    }

    async validateApiKey(apiKey, provider) {
        // Handle demo keys
        if (apiKey === 'demo-openai-key' || apiKey === 'demo-anthropic-key' || apiKey === 'demo-openrouter-key') {
            return true;
        }

        try {
            let url, headers;
            
            // Check if it's an OpenRouter key
            if (apiKey.startsWith('sk-or-')) {
                url = 'https://openrouter.ai/api/v1/auth/key';
                headers = {
                    'Authorization': `Bearer ${apiKey}`,
                    'HTTP-Referer': window.location.href, // Required by OpenRouter
                    'X-Title': 'ASIL Calculator' // Application name
                };
                this.settings.useOpenRouter = true;
            } else if (provider === 'openai') {
                url = 'https://api.openai.com/v1/models';
                headers = {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                };
                this.settings.useOpenRouter = false;
            } else if (provider === 'anthropic') {
                url = 'https://api.anthropic.com/v1/models';
                headers = {
                    'x-api-key': apiKey,
                    'Content-Type': 'application/json',
                    'anthropic-version': '2023-06-01'
                };
                this.settings.useOpenRouter = false;
            } else {
                throw new Error('Unsupported provider');
            }

            const response = await fetch(url, {
                method: 'GET',
                headers: headers
            });

            // REAL API VALIDATION: Only return true if HTTP 200
            if (response.status === 200) {
                return true;
            } else if (response.status === 401) {
                throw new Error('Invalid API key - authentication failed');
            } else if (response.status === 403) {
                throw new Error('API key forbidden - insufficient permissions');
            } else {
                throw new Error(`API request failed with status ${response.status}`);
            }
        } catch (error) {
            // If it's a network error, still throw it - no format fallback
            if (error.message.includes('fetch')) {
                throw new Error('Network error - unable to connect to API');
            }
            throw error;
        }
    }

    showKeyStatus(message, type) {
        if (this.keyStatus) {
            this.keyStatus.textContent = message;
            this.keyStatus.className = `key-status ${type}`;
        }
    }

    saveSettings() {
        if (!this.isKeyValid) {
            this.showKeyStatus('Please test and validate your API key first', 'error');
            return;
        }

        this.settings.provider = this.providerSelect ? this.providerSelect.value : 'openai';
        this.settings.apiKey = this.apiKeyInput ? this.apiKeyInput.value.trim() : '';
        
        this.showKeyStatus('Settings saved successfully', 'success');
        this.updateDashboard();
        
        setTimeout(() => {
            this.closeModal('settings');
        }, 1000);
    }

    populateComponentSelect() {
        if (!this.componentSelect) {
            console.error('Component select element not found');
            return;
        }
        
        this.componentSelect.innerHTML = '<option value="">Choose a component...</option>';
        
        Object.entries(this.componentsDB).forEach(([key, component]) => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = `${component.name} (${component.category})`;
            this.componentSelect.appendChild(option);
        });
        
        console.log('Component select populated with', Object.keys(this.componentsDB).length, 'components');
    }
    async updateAboutFeature(componentKey) {
        const aboutEl = document.querySelector('.about-feature-description');
        if (!aboutEl) return componentKey;

        if (!componentKey) {
            aboutEl.textContent = '';
            return componentKey;
        }

        const db = this.componentsDB || COMPONENTS_DB;
        const component = db[componentKey];
        
        if (!component) {
            aboutEl.textContent = '';
            return componentKey;
        }

        aboutEl.textContent = 'Analyzing component features...';
        aboutEl.classList.add('loading');
        
        try {
            // Create a rich context for AI analysis
            const componentContext = `
Name: ${component.name}
Category: ${component.category}
Description: ${component.description}
Hazards: ${component.potential_hazards.join(', ')}
            `.trim();

            // Use the new AI description generator
            const response = await this.generateAIDescription(componentContext, 'short');
            
            if (response) {
                aboutEl.textContent = response.trim();
                aboutEl.classList.add('about-update-highlight');
                setTimeout(() => aboutEl.classList.remove('about-update-highlight'), 2000);
            }
        } catch (error) {
            console.error('Error generating AI description for component:', error);
            if (error.message.includes('API key')) {
                aboutEl.textContent = `Please configure your API key in Settings to enable AI-powered feature descriptions.`;
            } else {
                aboutEl.textContent = `${component.name} - Unable to generate AI description. Please check your connection and try again.`;
            }
        } finally {
            aboutEl.classList.remove('loading');
        }
        
        return componentKey;
    }

    populateComponentsTable() {
        if (!this.componentsTableBody) {
            console.error('Components table body not found');
            return;
        }
        
        this.componentsTableBody.innerHTML = '';
        
        this.filteredComponents.forEach(key => {
            const component = this.componentsDB[key];
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${component.name}</td>
                <td>${component.category}</td>
                <td>ASIL ${component.asil}</td>
                <td class="table-actions">
                    <button class="btn btn--outline btn-sm edit-component-btn" data-key="${key}">Edit</button>
                    <button class="btn btn--outline btn-sm delete-component-btn" data-key="${key}">Delete</button>
                </td>
            `;
            
            this.componentsTableBody.appendChild(row);
        });

        // Add event listeners to edit and delete buttons
        this.componentsTableBody.querySelectorAll('.edit-component-btn').forEach(btn => {
            btn.onclick = (e) => {
                const key = e.target.dataset.key;
                this.editComponent(key);
            };
        });

        this.componentsTableBody.querySelectorAll('.delete-component-btn').forEach(btn => {
            btn.onclick = (e) => {
                const key = e.target.dataset.key;
                this.deleteComponent(key);
            };
        });
    }

    filterComponents() {
        const searchTerm = this.searchComponents ? this.searchComponents.value.toLowerCase() : '';
        const selectedCategory = this.categoryFilter ? this.categoryFilter.value : '';
        
        this.filteredComponents = Object.keys(this.componentsDB).filter(key => {
            const component = this.componentsDB[key];
            const matchesSearch = component.name.toLowerCase().includes(searchTerm) || 
                                component.description.toLowerCase().includes(searchTerm);
            const matchesCategory = !selectedCategory || component.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });
        
        this.populateComponentsTable();
    }

    openComponentForm(componentKey = null) {
        this.currentEditKey = componentKey;
        this.openModal('componentForm');
        
        if (componentKey && this.componentsDB[componentKey]) {
            // Edit mode
            const component = this.componentsDB[componentKey];
            if (this.componentFormTitle) this.componentFormTitle.textContent = 'Edit Component';
            
            // Populate form fields
            if (this.componentNameInput) this.componentNameInput.value = component.name;
            if (this.componentCategoryInput) this.componentCategoryInput.value = component.category;
            if (this.componentDescriptionInput) this.componentDescriptionInput.value = component.description;
            if (this.componentSeverityInput) this.componentSeverityInput.value = component.S.toString();
            if (this.componentExposureInput) this.componentExposureInput.value = component.E.toString();
            if (this.componentControllabilityInput) this.componentControllabilityInput.value = component.C.toString();
        } else {
            // Add mode
            if (this.componentFormTitle) this.componentFormTitle.textContent = 'Add New Component';
            if (this.componentForm) this.componentForm.reset();
        }
    }

    saveComponent() {
    const name = this.componentNameInput ? this.componentNameInput.value.trim() : '';
    const category = this.componentCategoryInput ? this.componentCategoryInput.value : '';
    const description = this.componentDescriptionInput ? this.componentDescriptionInput.value.trim() : '';
    const severity = this.componentSeverityInput ? parseInt(this.componentSeverityInput.value) : 0;
    const exposure = this.componentExposureInput ? parseInt(this.componentExposureInput.value) : 0;
    const controllability = this.componentControllabilityInput ? parseInt(this.componentControllabilityInput.value) : 0;

        if (!name || !category || !description) {
            alert('Please fill in all required fields');
            return;
        }
        
        const asil = this.calculateASIL(`S${severity}`, `E${exposure}`, `C${controllability}`);
        const key = this.currentEditKey || name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
        
        this.componentsDB[key] = {
            name: name,
            category: category,
            description: description,
            potential_hazards: ['Component failure', 'Unexpected behavior', 'System interference'],
            failure_modes: ['Hardware failure', 'Software error', 'Environmental factors'],
            safety_recommendations: ['Implement redundancy', 'Add monitoring', 'Follow ISO 26262 guidelines'],
            S: severity,
            E: exposure,
            C: controllability,
            asil: asil,
            reasons: {
                S: `Severity level ${severity} assigned`,
                E: `Exposure level ${exposure} assigned`,
                C: `Controllability level ${controllability} assigned`
            }
        };
        
        this.populateComponentSelect();
        this.populateComponentsTable();
        this.updateDashboard();
        this.closeModal('componentForm');
        this.currentEditKey = null;
    }

    editComponent(key) {
        this.openComponentForm(key);
    }

    deleteComponent(key) {
        if (confirm('Are you sure you want to delete this component?')) {
            delete this.componentsDB[key];
            this.populateComponentSelect();
            this.populateComponentsTable();
            this.updateDashboard();
        }
    }

    toggleInputMethod(method) {
        console.log('Toggling input method to:', method);
        // For new component design
        if (this.manualTabInput && this.databaseTabInput && this.manualInputPanel && this.databaseInputPanel) {
            if (method === 'manual') {
                this.manualTabInput.checked = true;
                this.manualInputPanel.style.display = 'block';
                this.databaseInputPanel.style.display = 'none';
            } else {
                this.databaseTabInput.checked = true;
                this.manualInputPanel.style.display = 'none';
                this.databaseInputPanel.style.display = 'block';
            }
        }
        
        // For backward compatibility with old design
        if (this.manualInput && this.databaseInput) {
            if (method === 'manual') {
                if (this.manualInput) {
                    this.manualInput.classList.remove('hidden');
                    this.manualInput.style.display = 'block';
                }
                if (this.databaseInput) {
                    this.databaseInput.classList.add('hidden');
                    this.databaseInput.style.display = 'none';
                }
            } else {
                if (this.manualInput) {
                    this.manualInput.classList.add('hidden');
                    this.manualInput.style.display = 'none';
                }
                if (this.databaseInput) {
                    this.databaseInput.classList.remove('hidden');
                    this.databaseInput.style.display = 'block';
                }
            }
        }
    }

    handleComponentSelection() {
        const selectedKey = this.componentSelect ? this.componentSelect.value : '';
        if (!selectedKey) return;

        // Update About panel content (shows DB info while AI generates a 2-3 line description on analysis)
        this.updateAboutFeature(selectedKey);

        const component = this.componentsDB[selectedKey];
        
        console.log('Component selected:', component.name);

        // Update component details immediately
        if (this.componentName) this.componentName.textContent = component.name;
        if (this.componentCategory) this.componentCategory.textContent = component.category;

        // Do not update About panel here with raw DB description; AI generates a summary during analysis
    }

    async analyzeComponent() {
        // Prevent multiple analysis attempts
        if (this.analyzeBtn && this.analyzeBtn.classList.contains('loading')) {
            return;
        }
        
        // Store the current focused element to restore focus later
        const previouslyFocused = document.activeElement;
        
        const inputMethod = document.querySelector('input[name="inputMethod"]:checked');
        const method = inputMethod ? inputMethod.value : 'manual';
        let component, selectedComponent = null;
        const selectedKey = this.componentSelect ? this.componentSelect.value : '';
        
        if (method === 'manual') {
            component = this.componentInput ? this.componentInput.value.trim() : '';
            if (!component) {
                alert('Please describe a component to analyze.');
                return;
            }
            
            // Generate AI description for manual input immediately
            try {
                const descriptionPrompt = `As an automotive expert, provide a concise 3-line technical description focusing on:
1. Primary purpose and role
2. Integration with other systems 
3. Safety implications

Component: "${component}"

Format: Return exactly 3 lines, one point per line.`;

                const description = await this.callAI(descriptionPrompt);
                if (this.featureDescription) {
                    this.featureDescription.textContent = description;
                    this.featureDescription.classList.add('about-update-highlight');
                    setTimeout(() => {
                        this.featureDescription.classList.remove('about-update-highlight');
                    }, 2000);
                }
            } catch (error) {
                console.error('Error generating description:', error);
                if (this.featureDescription) {
                    this.featureDescription.textContent = 'Unable to generate description. Please check API configuration and try again.';
                }
            }
        } else {
            // Use selected component from database; performASILAnalysis will request an AI summary
            if (!selectedKey) {
                alert('Please select a component from the database.');
                return;
            }
            selectedComponent = this.componentsDB[selectedKey];
            component = selectedComponent.name;
        }

        // For database components, we can analyze without API key
        if (!selectedComponent && (!this.settings.apiKey || !this.isKeyValid)) {
            alert('Please configure and validate your API key in Settings first for manual analysis.');
            this.openModal('settings');
            return;
        }

        this.setLoadingState(true);
        this.hideError();
        this.hideResults();

        try {
            // Step 1: Automotive validation (skip if from database)
            if (method === 'manual') {
                const isAutomotive = await this.checkIfAutomotive(component);
                if (!isAutomotive) {
                    this.showError('This component is not part of an automobile or vehicle subsystem. Please describe a component that is specifically part of automotive systems.');
                    return;
                }
            }

            // Step 2: Perform ASIL analysis
            const analysis = await this.performASILAnalysis(component, selectedComponent);
            
            // Step 3: Display comprehensive results
            this.displayComprehensiveResults(analysis, selectedComponent);
            
            // Update analysis count (centralized to persist and update dashboard)
            this.incrementAnalysesCount();
            
            // Restore focus to the button when complete
            if (previouslyFocused && previouslyFocused.focus) {
                previouslyFocused.focus();
            }

        } catch (error) {
            console.error('Analysis error:', error);
            this.showError(`Analysis failed: ${error.message}`);
        } finally {
            this.setLoadingState(false);
        }
    }

    async checkIfAutomotive(component) {
        const prompt = `Is the following component/system part of an automobile or vehicle: "${component}"? 
        
        Respond with exactly "YES" if it is automotive/vehicle related, or "NO" if it is not.`;
        
        try {
            const response = await this.callAI(prompt);
            const result = response.trim().toUpperCase();
            return result === 'YES' || result.startsWith('YES');
        } catch (error) {
            console.error('Classification error:', error);
            return this.fallbackAutomotiveCheck(component);
        }
    }

    fallbackAutomotiveCheck(component) {
        const componentLower = component.toLowerCase();
        const automotiveKeywords = [
            'brake', 'braking', 'abs', 'engine', 'motor', 'steering', 'wheel',
            'airbag', 'transmission', 'suspension', 'chassis', 'ecu', 'control',
            'cruise', 'adaptive', 'lane', 'collision', 'safety', 'sensor',
            'vehicle', 'automotive', 'car', 'truck', 'automobile'
        ];
        
        return automotiveKeywords.some(keyword => componentLower.includes(keyword));
    }

    async performASILAnalysis(component, selectedComponent = null) {
        // Check for manual adjustments
        const manualS = this.severitySelect ? this.severitySelect.value : '';
        const manualE = this.exposureSelect ? this.exposureSelect.value : '';
        const manualC = this.controllabilitySelect ? this.controllabilitySelect.value : '';

        // Always generate a short AI description (2-3 lines) for the About panel
        try {
            const targetName = selectedComponent ? selectedComponent.name : component;
            const descriptionPrompt = `As an automotive expert, provide a 3-4 line technical description of this component: "${targetName}"`;
            const aiDescription = await this.callAI(descriptionPrompt);
            if (this.featureDescription) {
                this.featureDescription.textContent = aiDescription;
                // debug: add temporary highlight and console log to help verify updates
                try {
                    this.featureDescription.classList.add('about-update-highlight');
                    console.log('AI description applied to About panel:', aiDescription);
                    setTimeout(() => {
                        this.featureDescription.classList.remove('about-update-highlight');
                    }, 2000);
                } catch (e) {
                    // ignore DOM errors in older browsers
                }
            }
        } catch (error) {
            console.error('Error generating short AI description:', error);
        }

        // Create two separate analysis objects: one for database (if available) and one for AI
        let dbAnalysis = null;
        let aiAnalysis = null;

        // If we have a database component, create the database analysis object
        if (selectedComponent) {
            // Create database analysis with manual overrides
            dbAnalysis = {
                severity: {
                    level: manualS ? `S${manualS}` : `S${selectedComponent.S}`,
                    description: selectedComponent.reasons.S || this.getSeverityDescription(manualS ? `S${manualS}` : `S${selectedComponent.S}`)
                },
                exposure: {
                    level: manualE ? `E${manualE}` : `E${selectedComponent.E}`,
                    description: selectedComponent.reasons.E || this.getExposureDescription(manualE ? `E${manualE}` : `E${selectedComponent.E}`)
                },
                controllability: {
                    level: manualC ? `C${manualC}` : `C${selectedComponent.C}`,
                    description: selectedComponent.reasons.C || this.getControllabilityDescription(manualC ? `C${manualC}` : `C${selectedComponent.C}`)
                },
                hazards: selectedComponent.potential_hazards,
                failures: selectedComponent.failure_modes,
                recommendations: selectedComponent.safety_recommendations
            };
        }

        // For both database and manual components, attempt an AI analysis
        // This ensures we have a true AI vs Database comparison
        try {
            // Use the component name for database items, or the full description for manual input
            const targetName = selectedComponent ? selectedComponent.name : component;
            
            // AI-based analysis for both database and manual input
            const prompt = `As an ISO 26262 functional safety expert, analyze this automotive component: "${targetName}"

Provide detailed analysis in this exact format:
SEVERITY: [S0-S3]
SEVERITY_DESC: [detailed explanation]
EXPOSURE: [E0-E4]
EXPOSURE_DESC: [detailed explanation]  
CONTROLLABILITY: [C0-C3]
CONTROLLABILITY_DESC: [detailed explanation,without numbers]
HAZARDS: [list 3-5 potential hazards,without numbers]
FAILURES: [list 3-5 failure modes,without numbers]
RECOMMENDATIONS: [list 3-5 ISO 26262 safety recommendations]`;

            const response = await this.callAI(prompt);
            aiAnalysis = this.parseDetailedAnalysis(response);
            
            // Apply manual overrides to AI analysis if specified
            if (manualS) {
                aiAnalysis.severity.level = `S${manualS}`;
                aiAnalysis.severity.description = this.getSeverityDescription(`S${manualS}`);
            }
            if (manualE) {
                aiAnalysis.exposure.level = `E${manualE}`;
                aiAnalysis.exposure.description = this.getExposureDescription(`E${manualE}`);
            }
            if (manualC) {
                aiAnalysis.controllability.level = `C${manualC}`;
                aiAnalysis.controllability.description = this.getControllabilityDescription(`C${manualC}`);
            }
        } catch (error) {
            console.error('AI analysis error:', error);
            aiAnalysis = this.fallbackASILAnalysis(selectedComponent ? selectedComponent.name : component);
            
            // Apply manual overrides to fallback analysis if specified
            if (manualS) {
                aiAnalysis.severity.level = `S${manualS}`;
                aiAnalysis.severity.description = this.getSeverityDescription(`S${manualS}`);
            }
            if (manualE) {
                aiAnalysis.exposure.level = `E${manualE}`;
                aiAnalysis.exposure.description = this.getExposureDescription(`E${manualE}`);
            }
            if (manualC) {
                aiAnalysis.controllability.level = `C${manualC}`;
                aiAnalysis.controllability.description = this.getControllabilityDescription(`C${manualC}`);
            }
        }

        // Return the appropriate analysis object based on context
        // For display purposes, we prioritize the database analysis for the main display,
        // but we'll pass both analyses to the comparison display function
        return {
            displayAnalysis: dbAnalysis || aiAnalysis, // For main display, prioritize DB if available
            dbAnalysis: dbAnalysis,                   // Database analysis (or null if none)
            aiAnalysis: aiAnalysis                    // AI analysis (should always be available)
        };
    }

    parseDetailedAnalysis(response) {
        const lines = response.split('\n');
        const analysis = {
            severity: {},
            exposure: {},
            controllability: {},
            hazards: [],
            failures: [],
            recommendations: []
        };
        
        let currentSection = null;
        
        lines.forEach(line => {
            const trimmed = line.trim();
            
            if (trimmed.startsWith('SEVERITY:')) {
                analysis.severity.level = trimmed.split(':')[1].trim();
            } else if (trimmed.startsWith('SEVERITY_DESC:')) {
                analysis.severity.description = trimmed.split(':')[1].trim();
            } else if (trimmed.startsWith('EXPOSURE:')) {
                analysis.exposure.level = trimmed.split(':')[1].trim();
            } else if (trimmed.startsWith('EXPOSURE_DESC:')) {
                analysis.exposure.description = trimmed.split(':')[1].trim();
            } else if (trimmed.startsWith('CONTROLLABILITY:')) {
                analysis.controllability.level = trimmed.split(':')[1].trim();
            } else if (trimmed.startsWith('CONTROLLABILITY_DESC:')) {
                analysis.controllability.description = trimmed.split(':')[1].trim();
            } else if (trimmed.startsWith('HAZARDS:')) {
                currentSection = 'hazards';
                const hazardText = trimmed.split(':')[1].trim();
                if (hazardText) analysis.hazards.push(hazardText);
            } else if (trimmed.startsWith('FAILURES:')) {
                currentSection = 'failures';
                const failureText = trimmed.split(':')[1].trim();
                if (failureText) analysis.failures.push(failureText);
            } else if (trimmed.startsWith('RECOMMENDATIONS:')) {
                currentSection = 'recommendations';
                const recText = trimmed.split(':')[1].trim();
                if (recText) analysis.recommendations.push(recText);
            } else if (trimmed && currentSection && trimmed.length > 3) {
                analysis[currentSection].push(trimmed.replace(/^[-•*]\s*/, ''));
            }
        });
        
        // Ensure we have fallback data
        if (!analysis.hazards.length) {
            analysis.hazards = ['Component malfunction', 'Unexpected behavior', 'System interference'];
        }
        if (!analysis.failures.length) {
            analysis.failures = ['Hardware failure', 'Software error', 'Communication loss'];
        }
        if (!analysis.recommendations.length) {
            analysis.recommendations = ['Implement redundancy', 'Add monitoring', 'Follow ISO 26262 guidelines'];
        }
        
        return analysis;
    }

    async callAI(prompt) {
        // Validate API key and configuration
        if (!this.settings.apiKey || this.settings.apiKey === '') {
            throw new Error('Please configure your API key in Settings first.');
        }
        
        if (!this.isKeyValid && !this.settings.apiKey.startsWith('demo-')) {
            throw new Error('Please validate your API key in Settings first.');
        }

        try {
            let url, headers, body;
            
            if (this.settings.useOpenRouter || this.settings.apiKey.startsWith('sk-or-')) {
                url = 'https://openrouter.ai/api/v1/chat/completions';
                headers = {
                    'Authorization': `Bearer ${this.settings.apiKey}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': window.location.href || 'https://localhost',
                    'X-Title': 'ASIL Calculator'
                };
                body = {
                    model: "openai/gpt-oss-20b:free",
                    messages: [{ role: 'user', content: prompt }],
                    max_tokens: 1000,
                    temperature: 0.1
                };
            } else if (this.settings.provider === 'openai') {
                // Fixed OpenAI request format
                url = 'https://api.openai.com/v1/chat/completions';
                headers = {
                    'Authorization': `Bearer ${this.settings.apiKey}`,
                    'Content-Type': 'application/json'
                };
                body = {
                    model: 'gpt-3.5-turbo', // Using the latest model
                    messages: [{ role: 'user', content: prompt }],
                    max_tokens: 1000,
                    temperature: 0.1,
                    stream: false
                };
            } else if (this.settings.provider === 'anthropic') {
                url = 'https://api.anthropic.com/v1/messages';
                headers = {
                    'x-api-key': this.settings.apiKey,
                    'Content-Type': 'application/json',
                    'anthropic-version': '2024-01-01'
                };
                body = JSON.stringify({
                    model: this.settings.anthropicModel,
                    max_tokens: 1000,
                    messages: [{ role: 'user', content: prompt }]
                });
            }

            console.log('Making API call with:', { 
                url, 
                headers,
                body: { ...body, apiKey: '***' } 
            });

            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('API Error Response:', errorText);
                try {
                    const errorData = JSON.parse(errorText);
                    throw new Error(`API request failed: ${errorData.error?.message || response.statusText}`);
                } catch (e) {
                    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
                }
            }

            const data = await response.json();
            console.log('API Response:', {
                ...data,
                apiKey: '***'
            });

            // Extract content based on provider
            let content;
            if (this.settings.useOpenRouter || this.settings.apiKey.startsWith('sk-or-')) {
                content = data.choices[0].message.content;
            } else if (this.settings.provider === 'openai') {
                content = data.choices[0].message.content;
            } else if (this.settings.provider === 'anthropic') {
                content = data.content[0].text;
            }

            if (!content) {
                throw new Error('No content in API response');
            }

            return content;
            
        } catch (error) {
            console.error('API call error:', error);
            throw error;
        }
    }

    fallbackASILAnalysis(component) {
        const componentLower = component.toLowerCase();
        let severity, exposure, controllability;

        // Enhanced rule-based analysis
        if (componentLower.includes('brake') || componentLower.includes('braking') || componentLower.includes('abs')) {
            severity = 'S3'; exposure = 'E4'; controllability = 'C2';
        } else if (componentLower.includes('steering')) {
            severity = 'S3'; exposure = 'E4'; controllability = 'C2';
        } else if (componentLower.includes('airbag') || componentLower.includes('safety')) {
            severity = 'S3'; exposure = 'E1'; controllability = 'C3';
        } else if (componentLower.includes('engine') || componentLower.includes('powertrain') || componentLower.includes('transmission')) {
            severity = 'S2'; exposure = 'E4'; controllability = 'C2';
        } else if (componentLower.includes('cruise') || componentLower.includes('adas')) {
            severity = 'S2'; exposure = 'E4'; controllability = 'C1';
        } else {
            severity = 'S2'; exposure = 'E3'; controllability = 'C2';
        }

        return {
            severity: {
                level: severity,
                description: this.getSeverityDescription(severity)
            },
            exposure: {
                level: exposure,
                description: this.getExposureDescription(exposure)
            },
            controllability: {
                level: controllability,
                description: this.getControllabilityDescription(controllability)
            },
            hazards: ['Component failure', 'Unexpected behavior', 'System interference'],
            failures: ['Hardware malfunction', 'Software error', 'Environmental factors'],
            recommendations: ['Implement redundancy', 'Add monitoring systems', 'Follow ISO 26262 guidelines']
        };
    }

    getSeverityDescription(level) {
        const descriptions = {
            'S0': 'No injuries - No harm to persons',
            'S1': 'Light to moderate injuries - Minor harm to persons with full recovery expected',
            'S2': 'Severe to life-threatening injuries - Significant harm with possible long-term effects',
            'S3': 'Life-threatening to fatal injuries - Critical safety impact with potential fatalities'
        };
        return descriptions[level] || 'Severity assessment pending';
    }

    getExposureDescription(level) {
        const descriptions = {
            'E0': 'Very unlikely - Rare operational situations (< 0.001%)',
            'E1': 'Unlikely - Infrequent operational situations (0.001% to 0.1%)',
            'E2': 'Medium probability - Common operational situations (0.1% to 1%)',
            'E3': 'High probability - Frequent operational situations (1% to 10%)',
            'E4': 'Highly likely - Very frequent operational situations (> 10%)'
        };
        return descriptions[level] || 'Exposure assessment pending';
    }

    getControllabilityDescription(level) {
        const descriptions = {
            'C0': 'Controllable in general - Easy to control or avoid harm',
            'C1': 'Simply controllable - Normal driver response is sufficient',
            'C2': 'Normally controllable - Most drivers can control the situation',
            'C3': 'Difficult to control or uncontrollable - High skill required or impossible to avoid'
        };
        return descriptions[level] || 'Controllability assessment pending';
    }

    setupDebouncedAboutInputHandler() {
        if (!this.componentInput || !this.featureDescription) {
            console.error('Required elements for About panel updates not found');
            return;
        }

        // Clean up any existing handlers and timers
        this.clearAboutPanelTimers();

        this.componentInput.addEventListener('input', async (e) => {
            const value = e.target.value.trim();

            // Always clear pending timers
            this.clearAboutPanelTimers();

            // Clear panel if empty input
            if (!value) {
                this.updateAboutPanel('');
                return;
            }

            // Show loading state immediately
            this.showAboutPanelLoading();

            // Debounce the AI request
            this._aboutInputTimer = setTimeout(async () => {
                try {
                    const description = await this.generateAIDescription(value, 'short');
                    this.updateAboutPanel(description.trim());
                    // Count this as an analysis event (user asked Describe Component -> AI generated output)
                    try {
                        this.incrementAnalysesCount();
                    } catch (incErr) {
                        console.warn('Failed to increment analysesCount', incErr);
                    }
                    this.showAboutPanelUpdateFeedback();
                } catch (error) {
                    console.error('Error generating AI description:', error);
                    const fallbackMessage = error.message.includes('API key')
                        ? 'Please configure your API key in Settings to enable AI-powered descriptions.'
                        : 'Unable to generate description. Please check your network connection and try again.';
                    this.updateAboutPanel(fallbackMessage);
                } finally {
                    this.hideAboutPanelLoading();
                }
            }, 1000);
        });
    }

    updateAboutPanel(text) {
        if (!this.featureDescription) return;
        this.featureDescription.textContent = text;
    }

    showAboutPanelLoading() {
        if (!this.featureDescription) return;
        this.featureDescription.textContent = 'Waiting for analysis...';
        this.featureDescription.classList.add('loading');
        this.featureDescription.classList.remove('about-update-highlight');
    }

    hideAboutPanelLoading() {
        if (!this.featureDescription) return;
        this.featureDescription.classList.remove('loading');
    }

    showAboutPanelUpdateFeedback() {
        if (!this.featureDescription) return;
        this.featureDescription.classList.add('about-update-highlight');
        this._aboutHighlightTimer = setTimeout(() => {
            if (this.featureDescription) {
                this.featureDescription.classList.remove('about-update-highlight');
            }
        }, 2000);
    }

    clearAboutPanelTimers() {
        if (this._aboutInputTimer) {
            clearTimeout(this._aboutInputTimer);
            this._aboutInputTimer = null;
        }
        if (this._aboutHighlightTimer) {
            clearTimeout(this._aboutHighlightTimer);
            this._aboutHighlightTimer = null;
        }
    }

    async saveCurrentAnalysisToDatabase() {
        if (!this.currentAnalysis) {
            this.showSaveStatus('No analysis results to save', 'error');
            return;
        }

        const { analysis, componentName } = this.currentAnalysis;

        // Prepare component data
        const newComponent = {
            name: componentName.substring(0, 100), // Limit name length
            category: this.componentCategory ? this.componentCategory.textContent : 'Manual Analysis',
            description: this.featureDescription ? this.featureDescription.textContent : '',
            potential_hazards: analysis.hazards || ['Component failure'],
            failure_modes: analysis.failures || ['Hardware failure'],
            safety_recommendations: analysis.recommendations || ['Follow ISO 26262 guidelines'],
            S: parseInt(analysis.severity.level.replace('S', '')),
            E: parseInt(analysis.exposure.level.replace('E', '')),
            C: parseInt(analysis.controllability.level.replace('C', '')),
            asil: this.calculateASIL(
                analysis.severity.level,
                analysis.exposure.level,
                analysis.controllability.level
            ),
            reasons: {
                S: analysis.severity.description,
                E: analysis.exposure.description,
                C: analysis.controllability.description
            }
        };

        // Check for duplicates
        const matchingComponent = this.findMatchingComponent(newComponent);
        if (matchingComponent) {
            this.showSaveStatus('Match found in database! This component analysis already exists.', 'match');
            return;
        }

        try {
            // Generate unique key
            const key = this.generateComponentKey(newComponent.name);
            
            // Save to database
            this.componentsDB[key] = newComponent;
            
            // Update UI
            this.populateComponentSelect();
            this.populateComponentsTable();
            this.updateDashboard();
            
            this.showSaveStatus('ASIL analysis saved to database', 'saved');
        } catch (error) {
            console.error('Error saving analysis:', error);
            this.showSaveStatus('Error: Could not save ASIL analysis. Please try again.', 'error');
        }
    }

    findMatchingComponent(newComponent) {
        return Object.values(this.componentsDB).find(comp => {
            // Check for functional equality
            const nameMatch = comp.name.toLowerCase() === newComponent.name.toLowerCase();
            const categoryMatch = comp.category === newComponent.category;
            const secMatch = comp.S === newComponent.S &&
                           comp.E === newComponent.E &&
                           comp.C === newComponent.C &&
                           comp.asil === newComponent.asil;
            
            return nameMatch && categoryMatch && secMatch;
        });
    }

    generateComponentKey(name) {
        const baseKey = name.toLowerCase()
            .replace(/[^a-z0-9]+/g, '_')
            .replace(/^_+|_+$/g, '');
        
        // Add numeric suffix if key exists
        let key = baseKey;
        let counter = 1;
        while (this.componentsDB[key]) {
            key = `${baseKey}_${counter}`;
            counter++;
        }
        
        return key;
    }

    showSaveStatus(message, type) {
        if (!this.saveStatus) return;

        this.saveStatus.textContent = message;
        this.saveStatus.className = 'save-status ' + type;
        this.saveStatus.classList.remove('hidden');

        // Hide status after 5 seconds
        setTimeout(() => {
            this.saveStatus.classList.add('hidden');
        }, 5000);
    }

    calculateASIL(severity, exposure, controllability) {
        const asilMatrix = {
            'S0': {
                'E0': { 'C0': 'QM', 'C1': 'QM', 'C2': 'QM', 'C3': 'QM' },
                'E1': { 'C0': 'QM', 'C1': 'QM', 'C2': 'QM', 'C3': 'QM' },
                'E2': { 'C0': 'QM', 'C1': 'QM', 'C2': 'QM', 'C3': 'QM' },
                'E3': { 'C0': 'QM', 'C1': 'QM', 'C2': 'QM', 'C3': 'QM' },
                'E4': { 'C0': 'QM', 'C1': 'QM', 'C2': 'QM', 'C3': 'QM' }
            },
            'S1': {
                'E0': { 'C0': 'QM', 'C1': 'QM', 'C2': 'QM', 'C3': 'QM' },
                'E1': { 'C0': 'QM', 'C1': 'QM', 'C2': 'QM', 'C3': 'QM' },
                'E2': { 'C0': 'QM', 'C1': 'QM', 'C2': 'QM', 'C3': 'A' },
                'E3': { 'C0': 'QM', 'C1': 'QM', 'C2': 'A', 'C3': 'B' },
                'E4': { 'C0': 'QM', 'C1': 'A', 'C2': 'B', 'C3': 'C' }
            },
            'S2': {
                'E0': { 'C0': 'QM', 'C1': 'QM', 'C2': 'QM', 'C3': 'QM' },
                'E1': { 'C0': 'QM', 'C1': 'QM', 'C2': 'QM', 'C3': 'A' },
                'E2': { 'C0': 'QM', 'C1': 'QM', 'C2': 'A', 'C3': 'B' },
                'E3': { 'C0': 'QM', 'C1': 'A', 'C2': 'B', 'C3': 'C' },
                'E4': { 'C0': 'A', 'C1': 'B', 'C2': 'C', 'C3': 'D' }
            },
            'S3': {
                'E0': { 'C0': 'QM', 'C1': 'QM', 'C2': 'QM', 'C3': 'A' },
                'E1': { 'C0': 'QM', 'C1': 'QM', 'C2': 'A', 'C3': 'B' },
                'E2': { 'C0': 'QM', 'C1': 'A', 'C2': 'B', 'C3': 'C' },
                'E3': { 'C0': 'A', 'C1': 'B', 'C2': 'C', 'C3': 'D' },
                'E4': { 'C0': 'B', 'C1': 'C', 'C2': 'D', 'C3': 'D' }
            }
        };

        return asilMatrix[severity]?.[exposure]?.[controllability] || 'QM';
    }

    getASILExplanation(asil) {
        const explanations = {
            'QM': 'Quality Management - No specific safety requirements beyond quality management measures. Standard automotive development processes apply.',
            'A': 'ASIL A - Lowest integrity level. Basic safety requirements and processes needed. Requires systematic approach to development.',
            'B': 'ASIL B - Medium-low integrity level. Enhanced safety requirements and verification processes. Structured testing approaches required.',
            'C': 'ASIL C - Medium-high integrity level. Comprehensive safety measures and validation processes. Detailed hazard analysis required.',
            'D': 'ASIL D - Highest integrity level. Most stringent safety requirements and processes. Extensive verification and validation needed.'
        };
        return explanations[asil] || 'ASIL determination pending';
    }

    async displayComprehensiveResults(analysisResult, selectedComponent) {
        // Extract the appropriate analysis objects from the result
        const { displayAnalysis, dbAnalysis, aiAnalysis } = analysisResult;
        
        // Use displayAnalysis (which is either dbAnalysis or aiAnalysis) for main display
        const analysis = displayAnalysis;
        
        // Store current analysis results for save functionality
        this.currentAnalysis = {
            analysis: analysis,
            selectedComponent: selectedComponent,
            componentName: selectedComponent ? selectedComponent.name : (this.componentInput ? this.componentInput.value.trim() : 'Manual Input')
        };
        
        // Feature Details
        if (selectedComponent) {
            if (this.componentName) this.componentName.textContent = selectedComponent.name;
            if (this.componentCategory) this.componentCategory.textContent = selectedComponent.category;
            // Feature description for database components is handled in handleComponentSelection
        } else {
            const componentText = this.componentInput ? this.componentInput.value.trim() : 'Manual Input';
            if (this.componentName) this.componentName.textContent = componentText.substring(0, 50) + (componentText.length > 50 ? '...' : '');
            if (this.componentCategory) this.componentCategory.textContent = 'Manual Analysis';
            // Note: featureDescription for manual input is handled in performASILAnalysis
        }

        // S/E/C Analysis Results
        if (this.severityValue) this.severityValue.textContent = analysis.severity.level;
        if (this.severityDesc) this.severityDesc.textContent = analysis.severity.description;
        
        if (this.exposureValue) this.exposureValue.textContent = analysis.exposure.level;
        if (this.exposureDesc) this.exposureDesc.textContent = analysis.exposure.description;
        
        if (this.controllabilityValue) this.controllabilityValue.textContent = analysis.controllability.level;
        if (this.controllabilityDesc) this.controllabilityDesc.textContent = analysis.controllability.description;

        // Calculate and display ASIL
        const asil = this.calculateASIL(
            analysis.severity.level,
            analysis.exposure.level,
            analysis.controllability.level
        );

        if (this.asilBadge) {
            const asilLevel = this.asilBadge.querySelector('.asil-level');
            if (asilLevel) asilLevel.textContent = asil === 'QM' ? 'QM' : `ASIL ${asil}`;
            this.asilBadge.className = `asil-badge asil-${asil.toLowerCase()}`;
        }
        
        if (this.asilExplanation) this.asilExplanation.textContent = this.getASILExplanation(asil);

        // Display hazards, failures, and recommendations in 3-column layout
        this.displayListSection(this.hazardsList, analysis.hazards || ['Analysis completed successfully']);
        this.displayListSection(this.failureList, analysis.failures || ['Analysis completed successfully']);
        this.displayListSection(this.recommendationsList, analysis.recommendations || ['Analysis completed successfully']);

        // AI vs Database Comparison - use the separate aiAnalysis and dbAnalysis objects
        this.displayComparison(aiAnalysis, dbAnalysis);

        // Show results
        if (this.resultsSection) {
            this.resultsSection.classList.remove('hidden');
            this.resultsSection.style.display = 'block';
        }
        
        setTimeout(() => {
            if (this.resultsSection) {
                this.resultsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }

    displayListSection(listElement, items) {
        if (!listElement || !items) return;
        
        listElement.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listElement.appendChild(li);
        });
    }

    displayComparison(aiAnalysis, dbAnalysis) {
        if (!dbAnalysis) {
            // No database comparison for manual input
            if (this.aiSeverity) this.aiSeverity.textContent = aiAnalysis.severity.level;
            if (this.dbSeverity) this.dbSeverity.textContent = 'N/A';
            if (this.severityMatch) this.severityMatch.textContent = 'N/A';
            
            if (this.aiExposure) this.aiExposure.textContent = aiAnalysis.exposure.level;
            if (this.dbExposure) this.dbExposure.textContent = 'N/A';
            if (this.exposureMatch) this.exposureMatch.textContent = 'N/A';
            
            if (this.aiControllability) this.aiControllability.textContent = aiAnalysis.controllability.level;
                       if (this.dbControllability) this.dbControllability.textContent = 'N/A';
            if (this.controllabilityMatch) this.controllabilityMatch.textContent = 'N/A';
            
            const aiAsilValue = this.calculateASIL(
                aiAnalysis.severity.level,
                aiAnalysis.exposure.level,
                aiAnalysis.controllability.level
            );
            
            if (this.aiAsil) this.aiAsil.textContent = aiAsilValue;
            if (this.dbAsil) this.dbAsil.textContent = 'N/A';
            if (this.asilMatch) this.asilMatch.textContent = 'N/A';
            return;
        }

        // Calculate ASIL values for comparison
        const aiAsilValue = this.calculateASIL(
            aiAnalysis.severity.level,
            aiAnalysis.exposure.level,
            aiAnalysis.controllability.level
        );
        
        const dbAsilValue = this.calculateASIL(
            dbAnalysis.severity.level,
            dbAnalysis.exposure.level,
            dbAnalysis.controllability.level
        );

        // Display comparisons
        if (this.aiSeverity) this.aiSeverity.textContent = aiAnalysis.severity.level;
        if (this.dbSeverity) this.dbSeverity.textContent = dbAnalysis.severity.level;
        if (this.severityMatch) {
            const match = aiAnalysis.severity.level === dbAnalysis.severity.level;
            this.severityMatch.textContent = match ? '✓ Match' : '✗ Differ';
            this.severityMatch.className = match ? 'match-yes' : 'match-no';
        }
        
        if (this.aiExposure) this.aiExposure.textContent = aiAnalysis.exposure.level;
        if (this.dbExposure) this.dbExposure.textContent = dbAnalysis.exposure.level;
        if (this.exposureMatch) {
            const match = aiAnalysis.exposure.level === dbAnalysis.exposure.level;
            this.exposureMatch.textContent = match ? '✓ Match' : '✗ Differ';
            this.exposureMatch.className = match ? 'match-yes' : 'match-no';
        }
        
        if (this.aiControllability) this.aiControllability.textContent = aiAnalysis.controllability.level;
        if (this.dbControllability) this.dbControllability.textContent = dbAnalysis.controllability.level;
        if (this.controllabilityMatch) {
            const match = aiAnalysis.controllability.level === dbAnalysis.controllability.level;
            this.controllabilityMatch.textContent = match ? '✓ Match' : '✗ Differ';
            this.controllabilityMatch.className = match ? 'match-yes' : 'match-no';
        }
        
        if (this.aiAsil) this.aiAsil.textContent = aiAsilValue;
        if (this.dbAsil) this.dbAsil.textContent = dbAsilValue;
        if (this.asilMatch) {
            const match = aiAsilValue === dbAsilValue;
            this.asilMatch.textContent = match ? '✓ Match' : '✗ Differ';
            this.asilMatch.className = match ? 'match-yes' : 'match-no';
        }
    }

    setLoadingState(isLoading) {
        if (this.analyzeBtn) {
            if (isLoading) {
                this.analyzeBtn.classList.add('loading');
                this.analyzeBtn.disabled = true;
                this.analyzeBtn.setAttribute('aria-label', 'Analyzing, please wait.');
                this.analyzeBtn.setAttribute('aria-busy', 'true');
            } else {
                this.analyzeBtn.classList.remove('loading');
                this.analyzeBtn.disabled = false;
                this.analyzeBtn.setAttribute('aria-label', 'Analyze ASIL');
                this.analyzeBtn.setAttribute('aria-busy', 'false');
                
                // Ensure any error state is removed
                this.analyzeBtn.classList.remove('error');
            }
        }
        
        if (this.spinner) {
            if (isLoading) {
                this.spinner.classList.remove('hidden');
                this.spinner.setAttribute('role', 'status');
                this.spinner.setAttribute('aria-live', 'polite');
            } else {
                this.spinner.classList.add('hidden');
                this.spinner.removeAttribute('aria-live');
            }
        }
    }

    showError(message) {
        if (this.errorMessage) this.errorMessage.textContent = message;
        if (this.errorBanner) {
            this.errorBanner.classList.remove('hidden');
            this.errorBanner.style.display = 'block';
            setTimeout(() => {
                this.errorBanner.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
        
        // Add error animation to button if there was an analysis error
        if (this.analyzeBtn) {
            this.analyzeBtn.classList.add('error');
            this.analyzeBtn.setAttribute('aria-label', 'Analysis failed. Try again.');
            
            // Remove error class after animation completes
            setTimeout(() => {
                this.analyzeBtn.classList.remove('error');
                this.analyzeBtn.setAttribute('aria-label', 'Analyze ASIL');
            }, 2000);
        }
    }

    hideError() {
        if (this.errorBanner) {
            this.errorBanner.classList.add('hidden');
            this.errorBanner.style.display = 'none';
        }
    }

    hideResults() {
        if (this.resultsSection) {
            this.resultsSection.classList.add('hidden');
            this.resultsSection.style.display = 'none';
        }
    }
}

// Theme toggle functionality
function setupThemeToggle() {
    // Check for system preference first
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Check for saved preference
    const savedTheme = localStorage.getItem('color-scheme');
    
    // Apply theme based on saved preference or system preference
    if (savedTheme) {
        document.documentElement.setAttribute('data-color-scheme', savedTheme);
    } else if (prefersDarkMode) {
        document.documentElement.setAttribute('data-color-scheme', 'dark');
    } else {
        document.documentElement.setAttribute('data-color-scheme', 'light');
    }
    
    // Create theme toggle button if it doesn't exist
    let themeToggleBtn = document.getElementById('themeToggleBtn');
    
    if (!themeToggleBtn) {
        themeToggleBtn = document.createElement('button');
        themeToggleBtn.id = 'themeToggleBtn';
        themeToggleBtn.className = 'btn btn--outline theme-toggle';
        themeToggleBtn.setAttribute('aria-label', 'Toggle dark/light mode');
        
        // Create icon element
        const iconElement = document.createElement('span');
        iconElement.className = 'theme-toggle-icon';
        iconElement.innerHTML = '☀️';
        themeToggleBtn.appendChild(iconElement);
        
        // Add button to the header actions
        const headerActions = document.querySelector('.header-actions');
        if (headerActions) {
            headerActions.appendChild(themeToggleBtn);
        }
    }
    
    // Update icon based on current theme
    const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
    const iconElement = themeToggleBtn.querySelector('.theme-toggle-icon');
    if (iconElement) {
        iconElement.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
    }
    
    // Add event listener to theme toggle button
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Set the new theme
        document.documentElement.setAttribute('data-color-scheme', newTheme);
        
        // Save preference to localStorage
        localStorage.setItem('color-scheme', newTheme);
        
        // Update icon
        const iconElement = themeToggleBtn.querySelector('.theme-toggle-icon');
        if (iconElement) {
            iconElement.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
        }
        
        // Announce theme change to screen readers
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.className = 'sr-only';
        announcer.textContent = `Theme changed to ${newTheme} mode`;
        document.body.appendChild(announcer);
        
        // Remove announcer after it's been read
        setTimeout(() => {
            document.body.removeChild(announcer);
        }, 3000);
    });
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only apply if user hasn't set a preference
        if (!localStorage.getItem('color-scheme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-color-scheme', newTheme);
            
            // Update icon
            const iconElement = themeToggleBtn.querySelector('.theme-toggle-icon');
            if (iconElement) {
                iconElement.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
            }
        }
    });
}

// Add reduced motion support
function setupReducedMotionSupport() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        document.documentElement.classList.add('reduced-motion');
    }
    
    // Listen for preference changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
        if (e.matches) {
            document.documentElement.classList.add('reduced-motion');
        } else {
            document.documentElement.classList.remove('reduced-motion');
        }
    });
}

// Initialize the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Initializing ASIL Calculator v16...');
        setupThemeToggle(); // Add theme toggle before calculator initialization
        setupReducedMotionSupport(); // Add reduced motion support
        window.asilCalculator = new ASILCalculator();
        // Tab switching handled by ASILCalculator.init
        setupFooterLinks(); // Add footer functionality
    });
} else {
    console.log('DOM ready - Initializing ASIL Calculator v16...');
    setupThemeToggle(); // Add theme toggle before calculator initialization
    setupReducedMotionSupport(); // Add reduced motion support
    window.asilCalculator = new ASILCalculator();
    // Tab switching handled by ASILCalculator.init
    setupFooterLinks(); // Add footer functionality
}

// Footer links functionality
function setupFooterLinks() {
    // Connect footer database link to database modal
    const footerDatabaseLink = document.getElementById('footerDatabaseLink');
    if (footerDatabaseLink) {
        footerDatabaseLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.asilCalculator) {
                window.asilCalculator.openModal('database');
            }
        });
    }

    // Connect footer ASIL guide link to guide modal
    const footerAsilGuideLink = document.getElementById('footerAsilGuideLink');
    if (footerAsilGuideLink) {
        footerAsilGuideLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.asilCalculator) {
                window.asilCalculator.openModal('asilGuide');
            }
        });
    }

    console.log('Footer links initialized');
}
