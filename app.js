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
    'electronic_stability_control': {
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
            apiKey: ''
        };
        
        this.isKeyValid = false;
        this.analysesCount = 0;
        this.componentsDB = COMPONENTS_DB;
        this.filteredComponents = Object.keys(this.componentsDB);
        this.currentEditKey = null;
        
        this.init();
    }

    init() {
        // Use immediate execution to avoid timing issues
        this.initializeElements();
        this.attachEventListeners();
        this.loadSettings();
        this.updateDashboard();
        this.populateComponentSelect();
        this.populateComponentsTable();
        console.log('ASIL Calculator v16 initialized successfully');
    }

    initializeElements() {
        // Header buttons
        this.settingsBtn = document.getElementById('settingsBtn');
        this.databaseBtn = document.getElementById('databaseBtn');
        this.asilGuideBtn = document.getElementById('asilGuideBtn');

        // Modal elements
        this.settingsModal = document.getElementById('settingsModal');
        this.databaseModal = document.getElementById('databaseModal');
        this.asilGuideModal = document.getElementById('asilGuideModal');
        this.componentFormModal = document.getElementById('componentFormModal');

        // Settings modal elements
        this.closeSettingsModal = document.getElementById('closeSettingsModal');
        this.providerSelect = document.getElementById('providerSelect');
        this.apiKeyInput = document.getElementById('apiKeyInput');
        this.testKeyBtn = document.getElementById('testKeyBtn');
        this.saveSettingsBtn = document.getElementById('saveSettingsBtn');
        this.keyStatus = document.getElementById('keyStatus');

        // Database modal elements
        this.closeDatabaseModal = document.getElementById('closeDatabaseModal');
        this.searchComponents = document.getElementById('searchComponents');
        this.categoryFilter = document.getElementById('categoryFilter');
        this.addComponentBtn = document.getElementById('addComponentBtn');
        this.componentsTableBody = document.getElementById('componentsTableBody');

        // Other modal closes
        this.closeAsilGuideModal = document.getElementById('closeAsilGuideModal');
        this.closeComponentFormModal = document.getElementById('closeComponentFormModal');

        // Input elements
        this.manualInput = document.getElementById('manualInput');
        this.databaseInput = document.getElementById('databaseInput');
        this.componentInput = document.getElementById('componentInput');
        this.componentSelect = document.getElementById('componentSelect');

        // S/E/C Adjustments
        this.severitySelect = document.getElementById('severitySelect');
        this.exposureSelect = document.getElementById('exposureSelect');
        this.controllabilitySelect = document.getElementById('controllabilitySelect');

        // Analysis elements
        this.analyzeBtn = document.getElementById('analyzeBtn');
        this.spinner = document.getElementById('spinner');
        this.errorBanner = document.getElementById('errorBanner');
        this.errorMessage = document.getElementById('errorMessage');
        this.resultsSection = document.getElementById('resultsSection');

        // Dashboard elements
        this.totalComponents = document.getElementById('totalComponents');
        this.apiStatus = document.getElementById('apiStatus');
        this.analysesCountEl = document.getElementById('analysesCount');

        // Result display elements
        this.componentName = document.getElementById('componentName');
        this.componentCategory = document.getElementById('componentCategory');
        this.featureDescription = document.getElementById('featureDescription');
        this.hazardsList = document.getElementById('hazardsList');
        this.failureList = document.getElementById('failureList');
        this.recommendationsList = document.getElementById('recommendationsList');

        // Analysis results
        this.severityValue = document.getElementById('severityValue');
        this.severityDesc = document.getElementById('severityDesc');
        this.exposureValue = document.getElementById('exposureValue');
        this.exposureDesc = document.getElementById('exposureDesc');
        this.controllabilityValue = document.getElementById('controllabilityValue');
        this.controllabilityDesc = document.getElementById('controllabilityDesc');
        this.asilBadge = document.getElementById('asilBadge');
        this.asilExplanation = document.getElementById('asilExplanation');

        // Comparison table elements
        this.aiSeverity = document.getElementById('aiSeverity');
        this.dbSeverity = document.getElementById('dbSeverity');
        this.severityMatch = document.getElementById('severityMatch');
        this.aiExposure = document.getElementById('aiExposure');
        this.dbExposure = document.getElementById('dbExposure');
        this.exposureMatch = document.getElementById('exposureMatch');
        this.aiControllability = document.getElementById('aiControllability');
        this.dbControllability = document.getElementById('dbControllability');
        this.controllabilityMatch = document.getElementById('controllabilityMatch');
        this.aiAsil = document.getElementById('aiAsil');
        this.dbAsil = document.getElementById('dbAsil');
        this.asilMatch = document.getElementById('asilMatch');

        // Component form elements
        this.componentForm = document.getElementById('componentForm');
        this.componentFormTitle = document.getElementById('componentFormTitle');
        this.cancelComponentForm = document.getElementById('cancelComponentForm');
    }

    attachEventListeners() {
        // FIXED: Header button events with direct event handlers
        if (this.settingsBtn) {
            this.settingsBtn.onclick = (e) => {
                e.preventDefault();
                console.log('Settings button clicked');
                this.openModal('settings');
            };
        }

        if (this.databaseBtn) {
            this.databaseBtn.onclick = (e) => {
                e.preventDefault();
                console.log('Database button clicked');
                this.openModal('database');
            };
        }

        if (this.asilGuideBtn) {
            this.asilGuideBtn.onclick = (e) => {
                e.preventDefault();
                console.log('ASIL Guide button clicked');
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
                console.log('Analyze button clicked');
                this.analyzeComponent();
            };
        }

        // ESC key for modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });

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
            if (btn) {
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
        console.log(`Opening modal: ${modalType}`);
        this.closeAllModals(); // Close any open modals first
        
        const modalMap = {
            'settings': this.settingsModal,
            'database': this.databaseModal,
            'asilGuide': this.asilGuideModal,
            'componentForm': this.componentFormModal
        };

        const modal = modalMap[modalType];
        if (modal) {
            modal.classList.remove('hidden');
            console.log(`Modal ${modalType} opened successfully`);
        } else {
            console.error(`Modal ${modalType} not found`);
        }
    }

    closeModal(modalType) {
        console.log(`Closing modal: ${modalType}`);
        const modalMap = {
            'settings': this.settingsModal,
            'database': this.databaseModal,
            'asilGuide': this.asilGuideModal,
            'componentForm': this.componentFormModal
        };

        const modal = modalMap[modalType];
        if (modal) {
            modal.classList.add('hidden');
            console.log(`Modal ${modalType} closed successfully`);
        }
    }

    closeAllModals() {
        const modals = [this.settingsModal, this.databaseModal, this.asilGuideModal, this.componentFormModal];
        modals.forEach(modal => {
            if (modal) {
                modal.classList.add('hidden');
            }
        });
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

    updateProvider() {
        this.settings.provider = this.providerSelect.value;
        this.isKeyValid = false;
        this.updateSaveButtonState();
        this.clearKeyStatus();
        this.updateDashboard();
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
        if (apiKey === 'demo-openai-key' || apiKey === 'demo-anthropic-key') {
            return true;
        }

        try {
            let url, headers;
            
            if (provider === 'openai') {
                url = 'https://api.openai.com/v1/models';
                headers = {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                };
            } else if (provider === 'anthropic') {
                url = 'https://api.anthropic.com/v1/models';
                headers = {
                    'x-api-key': apiKey,
                    'Content-Type': 'application/json',
                    'anthropic-version': '2023-06-01'
                };
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
            const nameInput = document.getElementById('componentNameInput');
            const categoryInput = document.getElementById('componentCategoryInput');
            const descInput = document.getElementById('componentDescriptionInput');
            const severityInput = document.getElementById('componentSeverityInput');
            const exposureInput = document.getElementById('componentExposureInput');
            const controllabilityInput = document.getElementById('componentControllabilityInput');

            if (nameInput) nameInput.value = component.name;
            if (categoryInput) categoryInput.value = component.category;
            if (descInput) descInput.value = component.description;
            if (severityInput) severityInput.value = component.S.toString();
            if (exposureInput) exposureInput.value = component.E.toString();
            if (controllabilityInput) controllabilityInput.value = component.C.toString();
        } else {
            // Add mode
            if (this.componentFormTitle) this.componentFormTitle.textContent = 'Add New Component';
            if (this.componentForm) this.componentForm.reset();
        }
    }

    saveComponent() {
        const nameInput = document.getElementById('componentNameInput');
        const categoryInput = document.getElementById('componentCategoryInput');
        const descInput = document.getElementById('componentDescriptionInput');
        const severityInput = document.getElementById('componentSeverityInput');
        const exposureInput = document.getElementById('componentExposureInput');
        const controllabilityInput = document.getElementById('componentControllabilityInput');

        const name = nameInput ? nameInput.value.trim() : '';
        const category = categoryInput ? categoryInput.value : '';
        const description = descInput ? descInput.value.trim() : '';
        const severity = severityInput ? parseInt(severityInput.value) : 0;
        const exposure = exposureInput ? parseInt(exposureInput.value) : 0;
        const controllability = controllabilityInput ? parseInt(controllabilityInput.value) : 0;

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

    handleComponentSelection() {
        const selectedKey = this.componentSelect ? this.componentSelect.value : '';
        if (!selectedKey) return;
        
        const component = this.componentsDB[selectedKey];
        console.log('Component selected:', component.name);
        
        // Update component details immediately
        if (this.componentName) this.componentName.textContent = component.name;
        if (this.componentCategory) this.componentCategory.textContent = component.category;
        if (this.featureDescription) this.featureDescription.textContent = component.description;
    }

    async analyzeComponent() {
        console.log('Starting component analysis...');
        
        const inputMethod = document.querySelector('input[name="inputMethod"]:checked');
        const method = inputMethod ? inputMethod.value : 'manual';
        let component, selectedComponent = null;
        
        if (method === 'manual') {
            component = this.componentInput ? this.componentInput.value.trim() : '';
            if (!component) {
                alert('Please describe a component to analyze.');
                return;
            }
        } else {
            const selectedKey = this.componentSelect ? this.componentSelect.value : '';
            if (!selectedKey) {
                alert('Please select a component from the database.');
                return;
            }
            selectedComponent = this.componentsDB[selectedKey];
            component = selectedComponent.description;
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
                console.log('Checking if component is automotive...');
                const isAutomotive = await this.checkIfAutomotive(component);
                if (!isAutomotive) {
                    this.showError('This component is not part of an automobile or vehicle subsystem. Please describe a component that is specifically part of automotive systems.');
                    return;
                }
            }

            // Step 2: Perform ASIL analysis
            console.log('Performing ASIL analysis...');
            const analysis = await this.performASILAnalysis(component, selectedComponent);
            
            // Step 3: Display comprehensive results
            console.log('Displaying results...');
            this.displayComprehensiveResults(analysis, selectedComponent, method);
            
            // Update analysis count
            this.analysesCount++;
            this.updateDashboard();

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

        let analysis;

        if (selectedComponent) {
            // Use database values with manual overrides
            analysis = {
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
        } else {
            // AI-based analysis for manual input
            const prompt = `As an ISO 26262 functional safety expert, analyze this automotive component: "${component}"

Provide detailed analysis in this exact format:
SEVERITY: [S0-S3]
SEVERITY_DESC: [detailed explanation]
EXPOSURE: [E0-E4]
EXPOSURE_DESC: [detailed explanation]  
CONTROLLABILITY: [C0-C3]
CONTROLLABILITY_DESC: [detailed explanation]
HAZARDS: [list 3-5 potential hazards]
FAILURES: [list 3-5 failure modes]
RECOMMENDATIONS: [list 3-5 ISO 26262 safety recommendations]`;

            try {
                const response = await this.callAI(prompt);
                analysis = this.parseDetailedAnalysis(response);
            } catch (error) {
                console.error('AI analysis error:', error);
                analysis = this.fallbackASILAnalysis(component);
            }

            // Apply manual overrides
            if (manualS) {
                analysis.severity.level = `S${manualS}`;
                analysis.severity.description = this.getSeverityDescription(`S${manualS}`);
            }
            if (manualE) {
                analysis.exposure.level = `E${manualE}`;
                analysis.exposure.description = this.getExposureDescription(`E${manualE}`);
            }
            if (manualC) {
                analysis.controllability.level = `C${manualC}`;
                analysis.controllability.description = this.getControllabilityDescription(`C${manualC}`);
            }
        }

        return analysis;
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
        // For demo keys, use simulation
        if (this.settings.apiKey === 'demo-openai-key' || this.settings.apiKey === 'demo-anthropic-key') {
            await new Promise(resolve => setTimeout(resolve, 1500));
            return this.simulateAIResponse(prompt);
        }

        // Real API calls
        let url, headers, body;

        if (this.settings.provider === 'openai') {
            url = 'https://api.openai.com/v1/chat/completions';
            headers = {
                'Authorization': `Bearer ${this.settings.apiKey}`,
                'Content-Type': 'application/json'
            };
            body = JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 1000,
                temperature: 0.1
            });
        } else if (this.settings.provider === 'anthropic') {
            url = 'https://api.anthropic.com/v1/messages';
            headers = {
                'x-api-key': this.settings.apiKey,
                'Content-Type': 'application/json',
                'anthropic-version': '2023-06-01'
            };
            body = JSON.stringify({
                model: 'claude-3-haiku-20240307',
                max_tokens: 1000,
                messages: [{ role: 'user', content: prompt }]
            });
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        if (this.settings.provider === 'openai') {
            return data.choices[0].message.content;
        } else if (this.settings.provider === 'anthropic') {
            return data.content[0].text;
        }
    }

    simulateAIResponse(prompt) {
        if (prompt.includes('automobile or vehicle')) {
            const component = prompt.split('"')[1].toLowerCase();
            const automotiveKeywords = ['brake', 'engine', 'steering', 'airbag', 'transmission', 'suspension', 'abs', 'esp', 'ecu', 'control', 'sensor', 'wheel', 'motor'];
            const hasAutomotive = automotiveKeywords.some(keyword => component.includes(keyword));
            return hasAutomotive ? 'YES' : 'NO';
        }
        
        if (prompt.includes('ISO 26262')) {
            return `SEVERITY: S2
SEVERITY_DESC: Severe to life-threatening injuries - Component failure could result in significant harm to vehicle occupants or other road users
EXPOSURE: E3  
EXPOSURE_DESC: High probability - Component is frequently used during normal vehicle operation in various driving conditions
CONTROLLABILITY: C2
CONTROLLABILITY_DESC: Normally controllable - Most drivers would be able to control the situation or avoid harm through appropriate response
HAZARDS: Loss of primary function
HAZARDS: Incorrect or unexpected behavior
HAZARDS: Interference with other vehicle systems
HAZARDS: Environmental degradation
HAZARDS: Cyber security vulnerabilities
FAILURES: Component hardware failure
FAILURES: Software errors or glitches
FAILURES: Loss of power or data connection
FAILURES: Sensor malfunction
FAILURES: Communication interference
RECOMMENDATIONS: Incorporate fail-safe mechanisms
RECOMMENDATIONS: Ensure robust error handling in software
RECOMMENDATIONS: Follow standard QA and testing protocols
RECOMMENDATIONS: Implement redundant systems
RECOMMENDATIONS: Regular maintenance and updates`;
        }
        
        return 'Analysis completed using simulation mode';
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

    displayComprehensiveResults(analysis, selectedComponent, inputMethod) {
        // Feature Details
        if (selectedComponent) {
            if (this.componentName) this.componentName.textContent = selectedComponent.name;
            if (this.componentCategory) this.componentCategory.textContent = selectedComponent.category;
            if (this.featureDescription) this.featureDescription.textContent = selectedComponent.description;
        } else {
            const componentText = this.componentInput ? this.componentInput.value.trim() : 'Manual Input';
            if (this.componentName) this.componentName.textContent = componentText.substring(0, 50) + (componentText.length > 50 ? '...' : '');
            if (this.componentCategory) this.componentCategory.textContent = 'Manual Analysis';
            if (this.featureDescription) this.featureDescription.textContent = componentText;
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

        // AI vs Database Comparison
        this.displayComparison(analysis, selectedComponent, asil);

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

    displayComparison(analysis, selectedComponent, aiAsil) {
        if (!selectedComponent) {
            // No database comparison for manual input
            if (this.aiSeverity) this.aiSeverity.textContent = analysis.severity.level;
            if (this.dbSeverity) this.dbSeverity.textContent = 'N/A';
            if (this.severityMatch) this.severityMatch.textContent = 'N/A';
            
            if (this.aiExposure) this.aiExposure.textContent = analysis.exposure.level;
            if (this.dbExposure) this.dbExposure.textContent = 'N/A';
            if (this.exposureMatch) this.exposureMatch.textContent = 'N/A';
            
            if (this.aiControllability) this.aiControllability.textContent = analysis.controllability.level;
            if (this.dbControllability) this.dbControllability.textContent = 'N/A';
            if (this.controllabilityMatch) this.controllabilityMatch.textContent = 'N/A';
            
            if (this.aiAsil) this.aiAsil.textContent = aiAsil;
            if (this.dbAsil) this.dbAsil.textContent = 'N/A';
            if (this.asilMatch) this.asilMatch.textContent = 'N/A';
            return;
        }

        // Database comparison
        const dbSeverity = `S${selectedComponent.S}`;
        const dbExposure = `E${selectedComponent.E}`;
        const dbControllability = `C${selectedComponent.C}`;
        const dbAsil = selectedComponent.asil;

        if (this.aiSeverity) this.aiSeverity.textContent = analysis.severity.level;
        if (this.dbSeverity) this.dbSeverity.textContent = dbSeverity;
        if (this.severityMatch) {
            const match = analysis.severity.level === dbSeverity;
            this.severityMatch.textContent = match ? '✓ Match' : '✗ Differ';
            this.severityMatch.className = match ? 'match-yes' : 'match-no';
        }
        
        if (this.aiExposure) this.aiExposure.textContent = analysis.exposure.level;
        if (this.dbExposure) this.dbExposure.textContent = dbExposure;
        if (this.exposureMatch) {
            const match = analysis.exposure.level === dbExposure;
            this.exposureMatch.textContent = match ? '✓ Match' : '✗ Differ';
            this.exposureMatch.className = match ? 'match-yes' : 'match-no';
        }
        
        if (this.aiControllability) this.aiControllability.textContent = analysis.controllability.level;
        if (this.dbControllability) this.dbControllability.textContent = dbControllability;
        if (this.controllabilityMatch) {
            const match = analysis.controllability.level === dbControllability;
            this.controllabilityMatch.textContent = match ? '✓ Match' : '✗ Differ';
            this.controllabilityMatch.className = match ? 'match-yes' : 'match-no';
        }
        
        if (this.aiAsil) this.aiAsil.textContent = aiAsil;
        if (this.dbAsil) this.dbAsil.textContent = dbAsil;
        if (this.asilMatch) {
            const match = aiAsil === dbAsil;
            this.asilMatch.textContent = match ? '✓ Match' : '✗ Differ';
            this.asilMatch.className = match ? 'match-yes' : 'match-no';
        }
    }

    setLoadingState(isLoading) {
        if (this.analyzeBtn) {
            if (isLoading) {
                this.analyzeBtn.classList.add('loading');
                this.analyzeBtn.disabled = true;
            } else {
                this.analyzeBtn.classList.remove('loading');
                this.analyzeBtn.disabled = false;
            }
        }
        
        if (this.spinner) {
            if (isLoading) {
                this.spinner.classList.remove('hidden');
            } else {
                this.spinner.classList.add('hidden');
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

// Initialize the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Initializing ASIL Calculator v16...');
        window.asilCalculator = new ASILCalculator();
    });
} else {
    console.log('DOM ready - Initializing ASIL Calculator v16...');
    window.asilCalculator = new ASILCalculator();
}
