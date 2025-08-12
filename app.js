// ISO 26262 ASIL Analyzer v5 - AI Enhanced with Provider Selection
// Professional Automotive Safety Tool with AI Validation and Database Sync

// AI Provider Configuration (Session Memory Only - Never Persisted)
let aiSettings = {
  provider: 'openai', // default provider
  apiKeys: {
    openai: '',
    anthropic: ''
  },
  autoLearn: false
};

// Modular AI Providers (Simulated for Demo)
const aiProviders = {
  openai: {
    name: 'OpenAI GPT-4',
    model: 'gpt-4o',
    async analyzeComponent(componentName) {
      // Simulated OpenAI API call with realistic delay and responses
      await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
      
      return this.generateOpenAIResponse(componentName);
    },
    
    generateOpenAIResponse(componentName) {
      // OpenAI-style intelligent analysis with detailed reasoning
      const analysis = {
        severity: 'S2',
        exposure: 'E3', 
        controllability: 'C2',
        function: `OpenAI Analysis: ${componentName} serves as a critical automotive component with specific safety implications requiring ISO 26262 evaluation.`,
        failureModes: `Potential failure modes include: component malfunction, degraded performance, complete system failure, and unintended operation that could impact vehicle safety.`,
        severityReason: `OpenAI GPT-4 Assessment: Based on automotive safety analysis, ${componentName} failure could result in moderate to severe injuries, warranting S2 classification per ISO 26262-3.`,
        exposureReason: `OpenAI Analysis: Component exposure during typical vehicle operation is medium frequency, occurring in approximately 10-50% of driving scenarios, indicating E3 classification.`,
        controllabilityReason: `OpenAI GPT-4: Driver controllability analysis suggests that >90% of drivers can take corrective action to prevent injury, indicating C2 normally controllable classification.`
      };

      // Enhanced component-specific analysis
      if (componentName.includes('brake')) {
        return {
          ...analysis,
          severity: 'S3', exposure: 'E4', controllability: 'C3',
          severityReason: 'OpenAI Analysis: Brake system failure can result in fatal accidents - classified as S3 per ISO 26262 severity definitions.',
          exposureReason: 'OpenAI Assessment: Braking is required continuously during vehicle operation - high exposure E4 classification.',
          controllabilityReason: 'OpenAI GPT-4: Complete brake failure is difficult for most drivers to control safely - C3 classification.'
        };
      } else if (componentName.includes('steering')) {
        return {
          ...analysis,
          severity: 'S3', exposure: 'E4', controllability: 'C2',
          severityReason: 'OpenAI Analysis: Steering system failure can cause loss of vehicle control leading to fatal injuries - S3 classification.',
          exposureReason: 'OpenAI Assessment: Steering system active continuously during vehicle operation - E4 high exposure.',
          controllabilityReason: 'OpenAI GPT-4: Most skilled drivers can maintain some directional control even with power assist failure - C2.'
        };
      } else if (componentName.includes('airbag')) {
        return {
          ...analysis,
          severity: 'S3', exposure: 'E2', controllability: 'C3',
          severityReason: 'OpenAI Analysis: Airbag non-deployment during crash can result in fatal injuries - S3 severity classification.',
          exposureReason: 'OpenAI Assessment: Crash events requiring airbag deployment are low probability - E2 classification.',
          controllabilityReason: 'OpenAI GPT-4: Driver cannot control airbag deployment timing or effectiveness - C3 uncontrollable.'
        };
      } else if (componentName === 'body control module') {
        return {
          ...analysis,
          severity: 'S1', exposure: 'E3', controllability: 'C2', // Different from database to create discrepancy
          function: 'OpenAI Analysis: Body Control Module manages critical electrical systems including lighting, locking, and security functions essential for vehicle safety.',
          severityReason: 'OpenAI GPT-4: BCM failure primarily affects convenience functions with moderate safety impact - S1 classification suggested.',
          exposureReason: 'OpenAI Assessment: Body Control Module operates frequently but not continuously in safety-critical scenarios - E3 medium exposure.',
          controllabilityReason: 'OpenAI Analysis: Driver can implement manual overrides for most BCM functions - C2 normally controllable.'
        };
      }

      return analysis;
    }
  },

  anthropic: {
    name: 'Anthropic Claude',
    model: 'claude-3-sonnet-20240229',
    async analyzeComponent(componentName) {
      // Simulated Anthropic API call with realistic delay
      await new Promise(resolve => setTimeout(resolve, 1800 + Math.random() * 1200));
      
      return this.generateClaudeResponse(componentName);
    },

    generateClaudeResponse(componentName) {
      // Claude-style methodical and conservative analysis
      const analysis = {
        severity: 'S1',
        exposure: 'E2',
        controllability: 'C1',
        function: `Claude Analysis: ${componentName} represents an automotive subsystem requiring systematic hazard analysis and risk assessment according to ISO 26262 functional safety standard.`,
        failureModes: `Systematic failure mode analysis identifies: hardware degradation, software malfunction, environmental stress failures, and systematic design inadequacies.`,
        severityReason: `Claude Assessment: Conservative safety analysis indicates ${componentName} failures typically result in light to moderate injuries - S1 classification per ISO 26262-3 Table 1.`,
        exposureReason: `Claude Analysis: Operational exposure assessment suggests low probability scenarios - E2 classification based on usage patterns.`,
        controllabilityReason: `Claude Safety Assessment: Driver controllability analysis indicates >99% of drivers can prevent injury through corrective action - C1 simply controllable.`
      };

      // Claude's more conservative but thorough analysis
      if (componentName.includes('brake')) {
        return {
          ...analysis,
          severity: 'S3', exposure: 'E4', controllability: 'C3',
          severityReason: 'Claude Safety Analysis: Primary braking system failure presents highest severity risk with potential for fatal outcomes - unambiguous S3 classification.',
          exposureReason: 'Claude Assessment: Braking function required in virtually all driving scenarios - clear E4 high exposure classification.',
          controllabilityReason: 'Claude Analysis: Loss of primary braking capability severely limits driver ability to prevent collision - C3 difficult to control.'
        };
      } else if (componentName.includes('steering')) {
        return {
          ...analysis,
          severity: 'S2', exposure: 'E4', controllability: 'C2',
          severityReason: 'Claude Analysis: Power steering failure can lead to severe injuries but fatality risk is moderate - S2 classification.',
          exposureReason: 'Claude Assessment: Steering system continuously active during vehicle operation - E4 classification.',
          controllabilityReason: 'Claude Safety Assessment: Experienced drivers can maintain control with manual steering effort - C2 normally controllable.'
        };
      } else if (componentName === 'body control module') {
        return {
          ...analysis,
          severity: 'S1', exposure: 'E2', controllability: 'C1', // Different from database to create discrepancy
          function: 'Claude Analysis: Body Control Module serves as central coordinator for body electrical systems with direct safety implications.',
          severityReason: 'Claude Safety Analysis: BCM failure primarily impacts non-critical functions with low direct injury risk - S1 conservative assessment.',
          exposureReason: 'Claude Assessment: Body Control Module safety-critical failures occur in limited operational scenarios - E2 exposure.',
          controllabilityReason: 'Claude Analysis: Driver can easily compensate for most BCM failures through manual operation - C1 simply controllable.'
        };
      }

      return analysis;
    }
  }
};

// Correct ASIL Matrix from ISO 26262-3 Table 4
const asilMatrix = {
  "S0": {
    "E1": "QM", "E2": "QM", "E3": "QM", "E4": "QM"
  },
  "S1": {
    "E1": {"C1": "QM", "C2": "QM", "C3": "QM"},
    "E2": {"C1": "QM", "C2": "QM", "C3": "QM"},
    "E3": {"C1": "QM", "C2": "QM", "C3": "A"},
    "E4": {"C1": "QM", "C2": "A", "C3": "B"}
  },
  "S2": {
    "E1": {"C1": "QM", "C2": "QM", "C3": "QM"},
    "E2": {"C1": "QM", "C2": "QM", "C3": "A"},
    "E3": {"C1": "QM", "C2": "A", "C3": "B"},
    "E4": {"C1": "A", "C2": "B", "C3": "C"}
  },
  "S3": {
    "E1": {"C1": "QM", "C2": "QM", "C3": "A"},
    "E2": {"C1": "QM", "C2": "A", "C3": "B"},
    "E3": {"C1": "A", "C2": "B", "C3": "C"},
    "E4": {"C1": "B", "C2": "C", "C3": "D"}
  }
};

// Enhanced Feature Database with CORRECTED Body Control Module Entry
const featureDB = {
  "brake system": {
    "asil": "D", "severity": "S3", "exposure": "E4", "controllability": "C3",
    "severityReason": "Loss of braking can be fatal.", 
    "exposureReason": "Braking needed in most driving.", 
    "controllabilityReason": "Driver cannot compensate for full brake loss.", 
    "source": "Database", "validated": true,
    "function": "Primary vehicle deceleration and stopping system providing controlled braking force",
    "failureModes": "Complete loss of braking capability, reduced braking force, brake lock-up, uneven braking"
  },
  "electronic stability control": {
    "asil": "C", "severity": "S3", "exposure": "E2", "controllability": "C3",
    "severityReason": "Skid/rollover risk fatal.", 
    "exposureReason": "ESC intervenes in limited scenarios.", 
    "controllabilityReason": "Hard to control spin.", 
    "source": "Database", "validated": true,
    "function": "Electronic system that improves vehicle stability by detecting and reducing loss of traction",
    "failureModes": "System failure to intervene during loss of control, false activation, sensor malfunctions"
  },
  "power steering": {
    "asil": "C", "severity": "S3", "exposure": "E4", "controllability": "C2",
    "severityReason": "Steering loss can cause crash.", 
    "exposureReason": "Steering used constantly.", 
    "controllabilityReason": "Manual steer possible with effort.", 
    "source": "Database", "validated": true,
    "function": "Assists driver in steering vehicle by reducing required steering effort through hydraulic or electric assistance",
    "failureModes": "Complete loss of power assistance, intermittent assistance, incorrect assistance direction, excessive assistance"
  },
  "airbag": {
    "asil": "D", "severity": "S3", "exposure": "E2", "controllability": "C3",
    "severityReason": "Failure to deploy fatal.", 
    "exposureReason": "Crashes less frequent.", 
    "controllabilityReason": "Driver cannot control timing.", 
    "source": "Database", "validated": true,
    "function": "Provides supplemental occupant restraint and protection during crash events through rapid inflation",
    "failureModes": "Failure to deploy when needed (non-deployment), inadvertent deployment during normal driving, incorrect deployment timing"
  },
  "body control module": {
    "asil": "C", "severity": "S2", "exposure": "E4", "controllability": "C3",
    "severityReason": "Electrical failure can disable critical lighting or locking systems leading to severe injuries.", 
    "exposureReason": "Module active in all driving scenarios (high exposure).", 
    "controllabilityReason": "Driver cannot unlock/turn lights manually in all scenarios.", 
    "source": "Database", "validated": true, "corrected": true,
    "function": "Central control unit for body electrical systems including lighting, door locks, and security systems",
    "failureModes": "Central locking failure, window control issues, lighting control problems, communication errors, security system failure"
  },
  "adaptive cruise control": {
    "asil": "C", "severity": "S2", "exposure": "E3", "controllability": "C2",
    "severityReason": "Speed control failure severe.", 
    "exposureReason": "Highway use common.", 
    "controllabilityReason": "Driver can brake.", 
    "source": "Database", "validated": true,
    "function": "Automatically adjusts vehicle speed to maintain safe following distance",
    "failureModes": "Failure to maintain speed, incorrect distance sensing, unintended acceleration/deceleration"
  },
  "headlights": {
    "asil": "A", "severity": "S2", "exposure": "E3", "controllability": "C2",
    "severityReason": "Night visibility severe.", 
    "exposureReason": "Night scenarios medium.", 
    "controllabilityReason": "Driver slows down.", 
    "source": "Database", "validated": true,
    "function": "Provides forward illumination for night and low-visibility driving conditions and communicates vehicle presence",
    "failureModes": "Complete headlight failure, reduced brightness, incorrect beam pattern, bulb burnout, lens fogging"
  },
  "hvac": {
    "asil": "QM", "severity": "S0", "exposure": "E1", "controllability": "C1",
    "severityReason": "Comfort only.", 
    "exposureReason": "Always on.", 
    "controllabilityReason": "No safety impact.", 
    "source": "Database", "validated": true,
    "function": "Heating, ventilation, and air conditioning system for occupant comfort",
    "failureModes": "Blower motor failure, temperature control issues, refrigerant leaks, duct blockages"
  }
};

// ISO 26262 Parameter Definitions
const parameterDefinitions = {
  "severity": {
    "S0": {
      "name": "No Injuries",
      "description": "No physical harm or injuries result from the hazardous event according to ISO 26262-3"
    },
    "S1": {
      "name": "Light to Moderate Injuries", 
      "description": "Light to moderate injuries that are typically recoverable per ISO 26262 severity classification"
    },
    "S2": {
      "name": "Severe Injuries (Survival Probable)",
      "description": "Severe to life-threatening injuries where survival is probable with medical treatment"
    },
    "S3": {
      "name": "Life-threatening to Fatal Injuries",
      "description": "Life-threatening injuries where survival is uncertain, or fatal injuries"
    }
  },
  "exposure": {
    "E1": {
      "name": "Very Low Probability",
      "description": "Very unlikely operational scenarios or driving conditions (<1% of operating time)"
    },
    "E2": {
      "name": "Low Probability", 
      "description": "Low probability operational scenarios (1-10% of operating time) per ISO 26262"
    },
    "E3": {
      "name": "Medium Probability",
      "description": "Medium probability operational scenarios (10-50% of operating time)"
    },
    "E4": {
      "name": "High Probability",
      "description": "High probability scenarios occurring frequently during normal operation (>50%)"
    }
  },
  "controllability": {
    "C1": {
      "name": "Simply Controllable", 
      "description": "Simply controllable - more than 99% of drivers can act to prevent injury"
    },
    "C2": {
      "name": "Normally Controllable",
      "description": "Normally controllable - more than 90% of drivers can act to prevent injury"
    },
    "C3": {
      "name": "Difficult to Control or Uncontrollable",
      "description": "Difficult to control - less than 90% of drivers can act to prevent injury"
    }
  }
};

// ASIL information with development requirements
const asilInfo = {
  'QM': {
    description: 'Quality Management (QM) - No specific ISO 26262 safety requirements apply. Standard automotive quality processes sufficient.',
    level: 'Quality Management',
    requirements: 'Standard automotive quality management processes'
  },
  'A': {
    description: 'ASIL A - Basic safety integrity level requiring systematic fault avoidance and basic fault detection during operation.',
    level: 'Safety Integrity Level A',
    requirements: 'Systematic fault avoidance, basic verification methods, single-point fault detection'
  },
  'B': {
    description: 'ASIL B - Medium safety integrity level with moderate safety requirements including fault detection and some redundancy.',
    level: 'Safety Integrity Level B', 
    requirements: 'Enhanced verification, fault detection coverage, some redundancy measures'
  },
  'C': {
    description: 'ASIL C - High safety integrity level requiring stringent safety requirements with extensive fault detection and redundancy.',
    level: 'Safety Integrity Level C',
    requirements: 'Rigorous verification, high fault detection coverage, redundancy, extensive testing'
  },
  'D': {
    description: 'ASIL D - Highest safety integrity level with the most stringent safety requirements including fail-safe mechanisms.',
    level: 'Safety Integrity Level D',
    requirements: 'Maximum rigor verification, fail-safe design, extensive redundancy, comprehensive testing'
  }
};

// Global state
let currentParameters = {
  severity: 'S1',
  exposure: 'E1',
  controllability: 'C1'
};

let currentDataSource = 'database';
let originalDatabaseValues = null;
let aiAnalysisResult = null;
let currentComponent = '';
let hasDiscrepancy = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('ISO 26262 ASIL Analyzer v5 - AI Enhanced initialized');
  
  // Use longer delay to ensure DOM is fully ready
  setTimeout(() => {
    populateDatabaseDropdown();
    initializeEventListeners();
    initializeSettingsModal();
    console.log('V5 initialization complete with AI providers');
  }, 500); // Increased delay
});

function populateDatabaseDropdown() {
  console.log('Populating database dropdown...');
  const dropdown = document.getElementById('database-select');
  if (!dropdown) {
    console.error('Database dropdown not found');
    return;
  }
  
  try {
    // Force clear and rebuild dropdown
    dropdown.innerHTML = '';
    
    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Choose from known automotive components...';
    dropdown.appendChild(defaultOption);
    
    const sortedEntries = Object.keys(featureDB).sort();
    console.log('Adding components to dropdown:', sortedEntries);
    
    sortedEntries.forEach(component => {
      const option = document.createElement('option');
      option.value = component;
      const correctedFlag = featureDB[component].corrected ? ' [CORRECTED]' : '';
      option.textContent = `${component.charAt(0).toUpperCase() + component.slice(1)} (ASIL ${featureDB[component].asil})${correctedFlag}`;
      dropdown.appendChild(option);
    });
    
    // Force refresh the dropdown
    dropdown.style.display = 'none';
    dropdown.offsetHeight; // Force reflow
    dropdown.style.display = '';
    
    console.log('Database dropdown populated with', sortedEntries.length, 'components');
    
  } catch (error) {
    console.error('Error populating dropdown:', error);
  }
}

function initializeEventListeners() {
  console.log('Setting up v5 event listeners...');
  
  // Database dropdown with multiple event types for better compatibility
  const databaseSelect = document.getElementById('database-select');
  if (databaseSelect) {
    // Remove any existing listeners first
    databaseSelect.replaceWith(databaseSelect.cloneNode(true));
    const newDropdown = document.getElementById('database-select');
    
    const handleDropdownChange = function(e) {
      console.log('Dropdown changed:', e.target.value);
      const selectedComponent = e.target.value;
      if (selectedComponent) {
        console.log('Database component selected:', selectedComponent);
        const componentInput = document.getElementById('component-input');
        if (componentInput) {
          componentInput.value = selectedComponent;
        }
        analyzeComponent();
      }
    };
    
    // Add multiple event listeners for better compatibility
    newDropdown.addEventListener('change', handleDropdownChange);
    newDropdown.addEventListener('input', handleDropdownChange);
    
    // Also add click listener to ensure dropdown opens
    newDropdown.addEventListener('click', function(e) {
      console.log('Dropdown clicked');
      e.stopPropagation();
    });
    
    console.log('Database dropdown listeners attached');
  } else {
    console.error('Database dropdown not found');
  }
  
  // Main analyze button
  const analyzeBtn = document.getElementById('analyze-btn');
  if (analyzeBtn) {
    analyzeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Analyze button clicked');
      analyzeComponent();
    });
    console.log('Analyze button listener attached');
  } else {
    console.error('Analyze button not found');
  }
  
  // Enter key support
  const componentInput = document.getElementById('component-input');
  if (componentInput) {
    componentInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        console.log('Enter key pressed in component input');
        analyzeComponent();
      }
    });
    console.log('Component input listener attached');
  } else {
    console.error('Component input not found');
  }
  
  // Adopt AI button
  const adoptAiBtn = document.getElementById('adopt-ai-btn');
  if (adoptAiBtn) {
    adoptAiBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Adopt AI button clicked');
      adoptAIValues();
    });
    console.log('Adopt AI button listener attached');
  } else {
    console.error('Adopt AI button not found');
  }
}

function initializeSettingsModal() {
  console.log('Initializing settings modal...');
  
  const settingsBtn = document.getElementById('settings-btn');
  const settingsModal = document.getElementById('settings-modal');
  const closeModal = document.getElementById('close-modal');
  const cancelSettings = document.getElementById('cancel-settings');
  const saveSettings = document.getElementById('save-settings');
  const modalBackdrop = settingsModal?.querySelector('.modal-backdrop');
  
  if (!settingsBtn || !settingsModal) {
    console.error('Settings modal elements not found');
    return;
  }
  
  // Open settings modal with multiple event listeners
  const openSettings = function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Settings button clicked');
    settingsModal.classList.remove('hidden');
    loadSettingsValues();
  };
  
  settingsBtn.addEventListener('click', openSettings);
  settingsBtn.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      openSettings(e);
    }
  });
  
  // Close modal events
  const closeModalFn = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log('Closing settings modal');
    settingsModal.classList.add('hidden');
  };
  
  if (closeModal) {
    closeModal.addEventListener('click', closeModalFn);
  }
  if (cancelSettings) {
    cancelSettings.addEventListener('click', closeModalFn);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeModalFn);
  }
  
  // Escape key to close modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !settingsModal.classList.contains('hidden')) {
      closeModalFn(e);
    }
  });
  
  // Save settings
  if (saveSettings) {
    saveSettings.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Save settings clicked');
      saveSettingsValues();
    });
  }
  
  // Provider selection
  const providerRadios = document.querySelectorAll('input[name="ai-provider"]');
  providerRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      console.log('Provider selected:', e.target.value);
      aiSettings.provider = e.target.value; // Update immediately
      updateAIProviderPill(e.target.value);
    });
  });
  
  // Update initial provider pill
  updateAIProviderPill(aiSettings.provider);
  
  console.log('Settings modal initialized successfully');
}

function loadSettingsValues() {
  console.log('Loading settings values...', aiSettings);
  // Load current settings into modal
  const providerRadio = document.querySelector(`input[name="ai-provider"][value="${aiSettings.provider}"]`);
  if (providerRadio) {
    providerRadio.checked = true;
    console.log('Provider radio set to:', aiSettings.provider);
  }
  
  const openaiKey = document.getElementById('openai-key');
  const anthropicKey = document.getElementById('anthropic-key');
  const autoLearn = document.getElementById('auto-learn');
  
  if (openaiKey) openaiKey.value = aiSettings.apiKeys.openai;
  if (anthropicKey) anthropicKey.value = aiSettings.apiKeys.anthropic;
  if (autoLearn) autoLearn.checked = aiSettings.autoLearn;
}

function saveSettingsValues() {
  console.log('Saving settings values...');
  // Save settings to session memory (never persisted)
  const selectedProvider = document.querySelector('input[name="ai-provider"]:checked');
  if (selectedProvider) {
    aiSettings.provider = selectedProvider.value;
    console.log('Provider saved:', aiSettings.provider);
  }
  
  const openaiKey = document.getElementById('openai-key');
  const anthropicKey = document.getElementById('anthropic-key');
  const autoLearn = document.getElementById('auto-learn');
  
  if (openaiKey) aiSettings.apiKeys.openai = openaiKey.value;
  if (anthropicKey) aiSettings.apiKeys.anthropic = anthropicKey.value;
  if (autoLearn) aiSettings.autoLearn = autoLearn.checked;
  
  updateAIProviderPill(aiSettings.provider);
  
  // Close modal
  document.getElementById('settings-modal').classList.add('hidden');
  
  console.log('Settings saved to session memory:', aiSettings);
}

function updateAIProviderPill(provider) {
  const pill = document.getElementById('ai-provider-pill');
  const providerName = document.getElementById('ai-provider-name');
  
  if (pill && providerName) {
    const providerInfo = aiProviders[provider];
    if (providerInfo) {
      providerName.textContent = providerInfo.name;
      console.log('Updated AI provider pill:', providerInfo.name);
    }
  }
}

function analyzeComponent() {
  console.log('analyzeComponent function called');
  const componentInput = document.getElementById('component-input');
  if (!componentInput) {
    console.error('Component input element not found');
    return;
  }
  
  const componentName = componentInput.value.trim().toLowerCase();
  if (!componentName) {
    alert('Please enter a component name to analyze.');
    return;
  }
  
  currentComponent = componentName;
  console.log('Analyzing component with AI validation:', componentName);
  
  // Reset state
  hasDiscrepancy = false;
  aiAnalysisResult = null;
  hideDiscrepancyBanner();
  
  // Show comparison section
  const comparisonSection = document.getElementById('comparison-section');
  if (comparisonSection) {
    comparisonSection.style.display = 'block';
  }
  
  // Show database result immediately
  if (featureDB[componentName]) {
    console.log('Component found in database:', componentName);
    showDatabaseResult(componentName, featureDB[componentName]);
    originalDatabaseValues = { ...featureDB[componentName] };
  } else {
    console.log('Component not found in database:', componentName);
    showDatabaseResult(componentName, null);
    originalDatabaseValues = null;
  }
  
  // Start AI analysis in parallel
  startAIAnalysis(componentName);
}

function showDatabaseResult(componentName, dbEntry) {
  console.log('Showing database result for:', componentName, dbEntry);
  const dbResult = document.getElementById('db-result');
  const dbAsil = document.getElementById('db-asil');
  const dbParams = document.getElementById('db-params');
  
  if (!dbAsil || !dbParams) {
    console.error('Database result elements not found');
    return;
  }
  
  if (dbEntry) {
    // Database entry found
    dbAsil.textContent = dbEntry.asil;
    dbAsil.className = 'asil-badge ' + dbEntry.asil.toLowerCase();
    
    dbParams.innerHTML = `
      <span class="param">${dbEntry.severity}</span>
      <span class="param">${dbEntry.exposure}</span>
      <span class="param">${dbEntry.controllability}</span>
    `;
    
    // Set current parameters
    currentParameters = {
      severity: dbEntry.severity,
      exposure: dbEntry.exposure,
      controllability: dbEntry.controllability
    };
    
    currentDataSource = 'database';
  } else {
    // No database entry
    dbAsil.textContent = 'N/A';
    dbAsil.className = 'asil-badge';
    dbParams.innerHTML = '<span class="param">Not in DB</span>';
  }
}

async function startAIAnalysis(componentName) {
  console.log('Starting AI analysis for:', componentName);
  const aiContent = document.getElementById('ai-content');
  const aiLoading = document.getElementById('ai-loading');
  
  if (!aiContent || !aiLoading) {
    console.error('AI result elements not found');
    return;
  }
  
  // Show loading state
  aiLoading.classList.remove('hidden');
  aiContent.classList.add('hidden');
  
  try {
    // Get selected AI provider
    const provider = aiProviders[aiSettings.provider];
    if (!provider) {
      throw new Error('No AI provider selected');
    }
    
    console.log(`Starting AI analysis with ${provider.name}...`);
    
    // Call AI provider
    aiAnalysisResult = await provider.analyzeComponent(componentName);
    console.log('AI analysis result:', aiAnalysisResult);
    
    // Show AI results
    showAIResult(aiAnalysisResult);
    
    // Check for discrepancies
    checkForDiscrepancies();
    
    // Show detailed analysis sections if we have database entry or AI result
    const analysisData = originalDatabaseValues || aiAnalysisResult;
    if (analysisData) {
      displayDetailedAnalysis(componentName, analysisData);
      showAllSections();
      setupParameterListeners();
      updateParameterDisplays();
      updateASILDisplay();
      
      // Update data source pill based on what we're using
      if (originalDatabaseValues && !hasDiscrepancy) {
        updateDataSourcePill('database');
      } else {
        updateDataSourcePill('ai');
      }
    }
    
  } catch (error) {
    console.error('AI analysis error:', error);
    showAIError();
  } finally {
    aiLoading.classList.add('hidden');
    aiContent.classList.remove('hidden');
  }
}

function showAIResult(analysisResult) {
  console.log('Showing AI result:', analysisResult);
  const aiAsil = document.getElementById('ai-asil');
  const aiParams = document.getElementById('ai-params');
  
  if (!aiAsil || !aiParams) {
    console.error('AI result elements not found');
    return;
  }
  
  const calculatedAsil = calculateASIL(
    analysisResult.severity,
    analysisResult.exposure, 
    analysisResult.controllability
  );
  
  aiAsil.textContent = calculatedAsil;
  aiAsil.className = 'asil-badge ' + calculatedAsil.toLowerCase();
  
  aiParams.innerHTML = `
    <span class="param">${analysisResult.severity}</span>
    <span class="param">${analysisResult.exposure}</span>
    <span class="param">${analysisResult.controllability}</span>
  `;
}

function showAIError() {
  const aiAsil = document.getElementById('ai-asil');
  const aiParams = document.getElementById('ai-params');
  
  if (aiAsil) {
    aiAsil.textContent = 'ERROR';
    aiAsil.className = 'asil-badge';
  }
  if (aiParams) {
    aiParams.innerHTML = '<span class="param">AI Analysis Failed</span>';
  }
}

function checkForDiscrepancies() {
  console.log('Checking for discrepancies...');
  if (!originalDatabaseValues || !aiAnalysisResult) {
    console.log('No discrepancy check - missing data');
    return;
  }
  
  const dbAsil = calculateASIL(
    originalDatabaseValues.severity,
    originalDatabaseValues.exposure,
    originalDatabaseValues.controllability
  );
  
  const aiAsil = calculateASIL(
    aiAnalysisResult.severity,
    aiAnalysisResult.exposure,
    aiAnalysisResult.controllability
  );
  
  console.log('Discrepancy check - DB ASIL:', dbAsil, 'AI ASIL:', aiAsil);
  console.log('DB params:', originalDatabaseValues.severity, originalDatabaseValues.exposure, originalDatabaseValues.controllability);
  console.log('AI params:', aiAnalysisResult.severity, aiAnalysisResult.exposure, aiAnalysisResult.controllability);
  
  if (dbAsil !== aiAsil || 
      originalDatabaseValues.severity !== aiAnalysisResult.severity ||
      originalDatabaseValues.exposure !== aiAnalysisResult.exposure ||
      originalDatabaseValues.controllability !== aiAnalysisResult.controllability) {
    
    hasDiscrepancy = true;
    console.log('Discrepancy detected!');
    showDiscrepancyBanner(dbAsil, aiAsil);
  } else {
    console.log('No discrepancy found');
  }
}

function showDiscrepancyBanner(dbAsil, aiAsil) {
  console.log('Showing discrepancy banner');
  const banner = document.getElementById('discrepancy-banner');
  const details = document.getElementById('discrepancy-details');
  
  if (banner && details) {
    details.textContent = `Database shows ASIL ${dbAsil}, but ${aiProviders[aiSettings.provider].name} analysis suggests ASIL ${aiAsil}. Consider reviewing the assessment parameters.`;
    banner.classList.remove('hidden');
  }
}

function hideDiscrepancyBanner() {
  const banner = document.getElementById('discrepancy-banner');
  if (banner) {
    banner.classList.add('hidden');
  }
}

function adoptAIValues() {
  if (!aiAnalysisResult) {
    console.log('No AI values to adopt');
    return;
  }
  
  console.log('Adopting AI values:', aiAnalysisResult);
  
  // Update current parameters with AI values
  currentParameters = {
    severity: aiAnalysisResult.severity,
    exposure: aiAnalysisResult.exposure,
    controllability: aiAnalysisResult.controllability
  };
  
  // Update database entry (in-memory only)
  if (featureDB[currentComponent]) {
    featureDB[currentComponent] = {
      ...featureDB[currentComponent],
      severity: aiAnalysisResult.severity,
      exposure: aiAnalysisResult.exposure,
      controllability: aiAnalysisResult.controllability,
      asil: calculateASIL(aiAnalysisResult.severity, aiAnalysisResult.exposure, aiAnalysisResult.controllability),
      severityReason: aiAnalysisResult.severityReason,
      exposureReason: aiAnalysisResult.exposureReason,
      controllabilityReason: aiAnalysisResult.controllabilityReason,
      source: 'User-validated AI',
      validated: true
    };
  } else {
    // Create new database entry
    featureDB[currentComponent] = {
      severity: aiAnalysisResult.severity,
      exposure: aiAnalysisResult.exposure,
      controllability: aiAnalysisResult.controllability,
      asil: calculateASIL(aiAnalysisResult.severity, aiAnalysisResult.exposure, aiAnalysisResult.controllability),
      severityReason: aiAnalysisResult.severityReason,
      exposureReason: aiAnalysisResult.exposureReason,
      controllabilityReason: aiAnalysisResult.controllabilityReason,
      function: aiAnalysisResult.function,
      failureModes: aiAnalysisResult.failureModes,
      source: 'User-validated AI',
      validated: true
    };
  }
  
  // Update displays
  showDatabaseResult(currentComponent, featureDB[currentComponent]);
  updateParameterDisplays();
  updateASILDisplay();
  updateDataSourcePill('manual');
  hideDiscrepancyBanner();
  
  // Auto-learn functionality
  if (aiSettings.autoLearn) {
    console.log('Auto-learn enabled - database updated automatically');
  }
  
  alert('AI values adopted successfully! Database has been updated.');
}

function setupParameterListeners() {
  console.log('Setting up parameter listeners...');
  const severitySelect = document.getElementById('severity-select');
  const exposureSelect = document.getElementById('exposure-select');
  const controllabilitySelect = document.getElementById('controllability-select');
  
  if (severitySelect) {
    severitySelect.removeEventListener('change', onParameterChange); // Remove existing
    severitySelect.addEventListener('change', onParameterChange);
  }
  if (exposureSelect) {
    exposureSelect.removeEventListener('change', onParameterChange);
    exposureSelect.addEventListener('change', onParameterChange);
  }
  if (controllabilitySelect) {
    controllabilitySelect.removeEventListener('change', onParameterChange);
    controllabilitySelect.addEventListener('change', onParameterChange);
  }
}

function displayDetailedAnalysis(componentName, analysisData) {
  console.log('Displaying detailed analysis for:', componentName, analysisData);
  
  const analyzedComponentEl = document.getElementById('analyzed-component');
  if (analyzedComponentEl) {
    analyzedComponentEl.textContent = componentName.charAt(0).toUpperCase() + componentName.slice(1);
  }
  
  const functionDescEl = document.getElementById('function-description');
  if (functionDescEl) {
    functionDescEl.innerHTML = `<strong>Function:</strong> ${analysisData.function}<br><strong>Potential Failure Modes:</strong> ${analysisData.failureModes}`;
  }
  
  const severityReasoningEl = document.getElementById('severity-reasoning');
  const exposureReasoningEl = document.getElementById('exposure-reasoning');
  const controllabilityReasoningEl = document.getElementById('controllability-reasoning');
  
  if (severityReasoningEl) severityReasoningEl.textContent = analysisData.severityReason;
  if (exposureReasoningEl) exposureReasoningEl.textContent = analysisData.exposureReason;
  if (controllabilityReasoningEl) controllabilityReasoningEl.textContent = analysisData.controllabilityReason;
}

function showAllSections() {
  console.log('Showing all sections...');
  const sections = [
    'analysis-section',
    'parameters-section',
    'asil-section',
    'matrix-section',
    'legend-section'
  ];
  
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.display = 'block';
    }
  });
}

function updateDataSourcePill(source) {
  const pill = document.getElementById('data-source-pill');
  const sourceText = document.getElementById('source-text');
  
  if (!pill || !sourceText) return;
  
  pill.classList.remove('database', 'ai', 'manual');
  
  switch (source) {
    case 'database':
      pill.classList.add('database');
      sourceText.textContent = 'Database';
      break;
    case 'ai':
      pill.classList.add('ai');
      sourceText.textContent = aiProviders[aiSettings.provider].name;
      break;
    case 'manual':
      pill.classList.add('manual');
      sourceText.textContent = 'User Modified';
      break;
  }
}

function updateParameterDisplays() {
  updateParameterBadge('severity', currentParameters.severity);
  updateParameterBadge('exposure', currentParameters.exposure);
  updateParameterBadge('controllability', currentParameters.controllability);
  
  const severityDesc = document.getElementById('severity-desc');
  const exposureDesc = document.getElementById('exposure-desc');
  const controllabilityDesc = document.getElementById('controllability-desc');
  
  if (severityDesc) severityDesc.textContent = parameterDefinitions.severity[currentParameters.severity].description;
  if (exposureDesc) exposureDesc.textContent = parameterDefinitions.exposure[currentParameters.exposure].description;
  if (controllabilityDesc) controllabilityDesc.textContent = parameterDefinitions.controllability[currentParameters.controllability].description;
  
  const severitySelect = document.getElementById('severity-select');
  const exposureSelect = document.getElementById('exposure-select');
  const controllabilitySelect = document.getElementById('controllability-select');
  
  if (severitySelect) severitySelect.value = currentParameters.severity;
  if (exposureSelect) exposureSelect.value = currentParameters.exposure;
  if (controllabilitySelect) controllabilitySelect.value = currentParameters.controllability;
}

function updateParameterBadge(paramType, value) {
  const badge = document.getElementById(`current-${paramType}`);
  if (!badge) return;
  
  const definitions = parameterDefinitions[paramType];
  if (!definitions || !definitions[value]) return;
  
  badge.textContent = `${value} - ${definitions[value].name}`;
  badge.className = 'param-badge';
  
  // Color coding
  if (paramType === 'severity') {
    const colors = {
      'S3': { bg: 'rgba(255, 41, 101, 0.2)', color: '#ff2965' },
      'S2': { bg: 'rgba(255, 107, 53, 0.2)', color: '#ff6b35' },
      'S1': { bg: 'rgba(255, 235, 59, 0.2)', color: '#ffeb3b' },
      'S0': { bg: 'rgba(0, 255, 136, 0.2)', color: '#00ff88' }
    };
    const colorSet = colors[value] || colors['S0'];
    badge.style.background = colorSet.bg;
    badge.style.color = colorSet.color;
    badge.style.border = `1px solid ${colorSet.color}`;
  } else if (paramType === 'exposure') {
    badge.style.background = 'rgba(0, 212, 255, 0.2)';
    badge.style.color = '#00d4ff';
    badge.style.border = '1px solid #00d4ff';
  } else {
    badge.style.background = 'rgba(189, 0, 255, 0.2)';
    badge.style.color = '#bd00ff';
    badge.style.border = '1px solid #bd00ff';
  }
}

function onParameterChange(event) {
  console.log('Parameter changed:', event.target.id, event.target.value);
  const paramType = event.target.id.replace('-select', '');
  const newValue = event.target.value;
  
  if (currentDataSource === 'database' && originalDatabaseValues) {
    currentDataSource = 'manual';
    updateDataSourcePill('manual');
  }
  
  if (paramType === 'severity') currentParameters.severity = newValue;
  else if (paramType === 'exposure') currentParameters.exposure = newValue;
  else if (paramType === 'controllability') currentParameters.controllability = newValue;
  
  const row = event.target.closest('tr');
  if (row) {
    row.classList.add('param-change');
    setTimeout(() => row.classList.remove('param-change'), 500);
  }
  
  updateParameterDisplays();
  updateASILDisplay();
}

function calculateASIL(severity, exposure, controllability) {
  if (severity === 'S0') {
    return 'QM';
  }
  
  const severityLevel = asilMatrix[severity];
  if (!severityLevel) return 'QM';
  
  const exposureLevel = severityLevel[exposure];
  if (!exposureLevel) return 'QM';
  
  if (typeof exposureLevel === 'string') {
    return exposureLevel;
  }
  
  const result = exposureLevel[controllability];
  return result || 'QM';
}

function updateASILDisplay() {
  const asil = calculateASIL(currentParameters.severity, currentParameters.exposure, currentParameters.controllability);
  
  const asilValueElement = document.getElementById('asil-value');
  if (asilValueElement) {
    asilValueElement.textContent = asil;
    asilValueElement.className = 'asil-value ' + asil.toLowerCase();
    
    if (!asilValueElement.querySelector('.asil-pulse')) {
      const pulse = document.createElement('div');
      pulse.className = 'asil-pulse';
      asilValueElement.appendChild(pulse);
    }
  }
  
  const asilInfoElement = document.getElementById('asil-info');
  if (asilInfoElement && asilInfo[asil]) {
    asilInfoElement.innerHTML = `
      <p><strong>${asilInfo[asil].level}</strong></p>
      <p>${asilInfo[asil].description}</p>
      <p><strong>Development Requirements:</strong> ${asilInfo[asil].requirements}</p>
    `;
  }
  
  const matrixS = document.getElementById('matrix-s');
  const matrixE = document.getElementById('matrix-e');
  const matrixC = document.getElementById('matrix-c');
  const matrixResult = document.getElementById('matrix-result');
  
  if (matrixS) matrixS.textContent = currentParameters.severity;
  if (matrixE) matrixE.textContent = currentParameters.exposure;
  if (matrixC) matrixC.textContent = currentParameters.controllability;
  if (matrixResult) matrixResult.textContent = asil;
}

// Log BCM verification on load
console.log('Body Control Module Database Entry Verification:');
if (featureDB['body control module']) {
  const bcm = featureDB['body control module'];
  const calculatedAsil = calculateASIL(bcm.severity, bcm.exposure, bcm.controllability);
  console.log('BCM - S:', bcm.severity, 'E:', bcm.exposure, 'C:', bcm.controllability);
  console.log('BCM Calculated ASIL:', calculatedAsil, 'Database ASIL:', bcm.asil);
  console.log('BCM Corrected:', bcm.corrected);
}