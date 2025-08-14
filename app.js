// Enhanced ASIL Calculator App.js with Components Database Integration
// ISO 26262 Compliant ASIL Determination System

// Import the components database (assuming components_db.js is included separately)
// This will be loaded from components_db.js file

class ASILCalculator {
    constructor() {
        this.currentComponent = null;
        this.currentParameters = { S: 0, E: 1, C: 1 };
        this.aiConfig = JSON.parse(localStorage.getItem('aiConfig')) || { provider: null, apiKey: null };
        this.autoLearn = JSON.parse(localStorage.getItem('autoLearn')) || { enabled: false, requireConfirmation: true };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateComponentDropdown();
        this.setupSettingsModal();
        this.updateASILMatrix();
        this.loadTheme();
    }

    // ASIL Determination Matrix based on ISO 26262
    getASILLevel(S, E, C) {
        const matrix = {
            0: { 1: 'QM', 2: 'QM', 3: 'QM', 4: 'QM' },
            1: { 1: 'A', 2: 'A', 3: 'B', 4: 'B' },
            2: { 1: 'B', 2: 'B', 3: 'C', 4: 'C' },
            3: { 1: 'C', 2: 'C', 3: 'D', 4: 'D' }
        };
        return matrix[S][E];
    }

    // Enhanced parameter descriptions with ISO 26262 compliance
    getParameterDescriptions() {
        return {
            severity: {
                0: {
                    title: 'S0 - No Injuries',
                    description: 'No injuries. The failure has no potential to cause harm to persons.',
                    examples: ['Comfort features failure', 'Entertainment system malfunction', 'Minor lighting issues']
                },
                1: {
                    title: 'S1 - Light to Moderate Injuries',
                    description: 'Light to moderate injuries. The failure may cause minor physical harm.',
                    examples: ['Power window malfunction', 'Climate control failure', 'Non-critical warning light failure']
                },
                2: {
                    title: 'S2 - Severe to Life-threatening Injuries',
                    description: 'Severe to life-threatening injuries (survival probable). The failure may cause significant physical harm.',
                    examples: ['Airbag deployment failure', 'Seatbelt system malfunction', 'Anti-lock braking system failure']
                },
                3: {
                    title: 'S3 - Life-threatening to Fatal Injuries',
                    description: 'Life-threatening to fatal injuries (survival uncertain). The failure may cause death or severe harm.',
                    examples: ['Primary brake system failure', 'Steering system complete loss', 'Unintended acceleration']
                }
            },
            exposure: {
                1: {
                    title: 'E1 - Very Low Probability',
                    description: 'Very low probability of exposure to the operational situation. Less than 1% of operating time.',
                    examples: ['Parking assistance systems', 'Hill start assist', 'Trailer tow assistance']
                },
                2: {
                    title: 'E2 - Low Probability',
                    description: 'Low probability of exposure to the operational situation. 1% to 10% of operating time.',
                    examples: ['Lane departure warning', 'Automatic high beam', 'Rain sensing wipers']
                },
                3: {
                    title: 'E3 - Medium Probability',
                    description: 'Medium probability of exposure to the operational situation. 10% to 50% of operating time.',
                    examples: ['Adaptive cruise control', 'Electronic stability control', 'Collision avoidance systems']
                },
                4: {
                    title: 'E4 - High Probability',
                    description: 'High probability of exposure to the operational situation. More than 50% of operating time.',
                    examples: ['Engine control unit', 'Transmission control', 'Primary braking system']
                }
            },
            controllability: {
                1: {
                    title: 'C1 - Controllable in General',
                    description: 'Controllable in general. More than 99% of drivers can cope with the situation.',
                    examples: ['Power steering assist loss at low speeds', 'Gradual brake fade warning', 'Engine power reduction with warning']
                },
                2: {
                    title: 'C2 - Simply Controllable',
                    description: 'Simply controllable. More than 90% of drivers can cope with the situation.',
                    examples: ['Sudden loss of power steering', 'Brake assist failure', 'Transmission harsh shifting']
                },
                3: {
                    title: 'C3 - Difficult to Control or Uncontrollable',
                    description: 'Difficult to control or uncontrollable. Less than 90% of drivers can cope with the situation.',
                    examples: ['Complete brake failure', 'Unintended acceleration', 'Sudden steering lock']
                }
            }
        };
    }

    // Populate component dropdown from database
    populateComponentDropdown() {
        const dropdown = document.getElementById('component-select');
        if (!dropdown) return;

        // Clear existing options
        dropdown.innerHTML = '<option value="">Select a component...</option>';

        // Check if componentsDB is available
        if (typeof componentsDB !== 'undefined') {
            Object.keys(componentsDB).sort().forEach(component => {
                const option = document.createElement('option');
                option.value = component;
                option.textContent = component.charAt(0).toUpperCase() + component.slice(1).replace(/_/g, ' ');
                dropdown.appendChild(option);
            });
        }
    }

    // Load component from database
    loadComponent(componentName) {
        if (typeof componentsDB === 'undefined' || !componentsDB[componentName]) {
            this.showError('Component not found in database');
            return;
        }

        const component = componentsDB[componentName];
        this.currentComponent = componentName;
        this.currentParameters = {
            S: component.S,
            E: component.E,
            C: component.C
        };

        this.updateParameterInputs();
        this.updateASILMatrix();
        this.showComponentAnalysis(componentName, component);
    }

    // Show detailed component analysis
    showComponentAnalysis(componentName, component) {
        const analysisContainer = document.getElementById('analysis-container');
        if (!analysisContainer) return;

        const asil = this.getASILLevel(component.S, component.E, component.C);
        const descriptions = this.getParameterDescriptions();

        analysisContainer.innerHTML = `
            <div class="component-analysis">
                <div class="analysis-header">
                    <h3>Component Analysis: ${componentName.replace(/_/g, ' ').toUpperCase()}</h3>
                    <div class="asil-badge asil-${asil.toLowerCase()}">${asil}</div>
                </div>
                
                <div class="parameter-analysis">
                    <div class="parameter-card severity">
                        <div class="parameter-header">
                            <span class="parameter-icon">⚠️</span>
                            <h4>Severity Analysis (S${component.S})</h4>
                        </div>
                        <div class="parameter-content">
                            <h5>${descriptions.severity[component.S].title}</h5>
                            <p>${descriptions.severity[component.S].description}</p>
                            ${component.reasons && component.reasons.S ? 
                                `<div class="component-reasoning">
                                    <strong>Component-specific reasoning:</strong>
                                    <p>${component.reasons.S}</p>
                                </div>` : ''}
                            <div class="examples">
                                <strong>Typical examples:</strong>
                                <ul>
                                    ${descriptions.severity[component.S].examples.map(ex => `<li>${ex}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="parameter-card exposure">
                        <div class="parameter-header">
                            <span class="parameter-icon">📊</span>
                            <h4>Exposure Analysis (E${component.E})</h4>
                        </div>
                        <div class="parameter-content">
                            <h5>${descriptions.exposure[component.E].title}</h5>
                            <p>${descriptions.exposure[component.E].description}</p>
                            ${component.reasons && component.reasons.E ? 
                                `<div class="component-reasoning">
                                    <strong>Component-specific reasoning:</strong>
                                    <p>${component.reasons.E}</p>
                                </div>` : ''}
                            <div class="examples">
                                <strong>Typical examples:</strong>
                                <ul>
                                    ${descriptions.exposure[component.E].examples.map(ex => `<li>${ex}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="parameter-card controllability">
                        <div class="parameter-header">
                            <span class="parameter-icon">🎮</span>
                            <h4>Controllability Analysis (C${component.C})</h4>
                        </div>
                        <div class="parameter-content">
                            <h5>${descriptions.controllability[component.C].title}</h5>
                            <p>${descriptions.controllability[component.C].description}</p>
                            ${component.reasons && component.reasons.C ? 
                                `<div class="component-reasoning">
                                    <strong>Component-specific reasoning:</strong>
                                    <p>${component.reasons.C}</p>
                                </div>` : ''}
                            <div class="examples">
                                <strong>Typical examples:</strong>
                                <ul>
                                    ${descriptions.controllability[component.C].examples.map(ex => `<li>${ex}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="improvement-suggestions">
                    <h4>🚀 ASIL Enhancement Recommendations</h4>
                    <div class="suggestions-grid">
                        ${this.generateImprovementSuggestions(component.S, component.E, component.C, asil)}
                    </div>
                </div>
            </div>
        `;

        analysisContainer.style.display = 'block';
        analysisContainer.scrollIntoView({ behavior: 'smooth' });
    }

    // Generate improvement suggestions to achieve higher ASIL
    generateImprovementSuggestions(S, E, C, currentASIL) {
        const suggestions = [];
        const currentLevel = this.asilToNumber(currentASIL);
        
        // Analyze potential improvements
        if (S < 3) {
            const newASIL = this.getASILLevel(S + 1, E, C);
            if (this.asilToNumber(newASIL) > currentLevel) {
                suggestions.push({
                    type: 'severity',
                    action: 'Increase Severity Classification',
                    current: `S${S}`,
                    suggested: `S${S + 1}`,
                    result: newASIL,
                    description: 'Consider if the component failure could lead to more severe consequences through system interactions or cascading failures.'
                });
            }
        }

        if (E < 4) {
            const newASIL = this.getASILLevel(S, E + 1, C);
            if (this.asilToNumber(newASIL) > currentLevel) {
                suggestions.push({
                    type: 'exposure',
                    action: 'Increase Exposure Assessment',
                    current: `E${E}`,
                    suggested: `E${E + 1}`,
                    result: newASIL,
                    description: 'Analyze if the operational situation occurs more frequently than initially assessed, considering all driving scenarios.'
                });
            }
        }

        if (C < 3) {
            const newASIL = this.getASILLevel(S, E, C + 1);
            if (this.asilToNumber(newASIL) > currentLevel) {
                suggestions.push({
                    type: 'controllability',
                    action: 'Reassess Controllability',
                    current: `C${C}`,
                    suggested: `C${C + 1}`,
                    result: newASIL,
                    description: 'Evaluate if average drivers can truly control the situation, considering factors like reaction time, skill level, and environmental conditions.'
                });
            }
        }

        // Design-based improvements
        const designSuggestions = [
            {
                type: 'redundancy',
                action: 'Implement Redundant Systems',
                description: 'Add backup systems or failsafe mechanisms to reduce the severity of potential failures.',
                benefit: 'Can justify lower severity classification with proper fail-operational design'
            },
            {
                type: 'warning',
                action: 'Enhanced Warning Systems',
                description: 'Implement early warning systems to alert drivers before critical failures occur.',
                benefit: 'Improves controllability by giving drivers more time to react'
            },
            {
                type: 'degradation',
                action: 'Graceful Degradation',
                description: 'Design systems to fail safely with reduced functionality rather than complete failure.',
                benefit: 'Reduces severity by maintaining essential safety functions'
            }
        ];

        return suggestions.map(s => `
            <div class="suggestion-card ${s.type}">
                <h5>${s.action}</h5>
                <div class="parameter-change">
                    ${s.current && s.suggested ? 
                        `<span class="current">${s.current}</span> → <span class="suggested">${s.suggested}</span> = <span class="result-asil asil-${s.result.toLowerCase()}">${s.result}</span>` 
                        : ''}
                </div>
                <p>${s.description}</p>
                ${s.benefit ? `<div class="benefit"><strong>Benefit:</strong> ${s.benefit}</div>` : ''}
            </div>
        `).join('') + designSuggestions.map(s => `
            <div class="suggestion-card ${s.type}">
                <h5>${s.action}</h5>
                <p>${s.description}</p>
                <div class="benefit"><strong>Benefit:</strong> ${s.benefit}</div>
            </div>
        `).join('');
    }

    // Convert ASIL level to number for comparison
    asilToNumber(asil) {
        const levels = { 'QM': 0, 'A': 1, 'B': 2, 'C': 3, 'D': 4 };
        return levels[asil] || 0;
    }

    // Update parameter inputs
    updateParameterInputs() {
        const sInput = document.getElementById('severity-input');
        const eInput = document.getElementById('exposure-input');
        const cInput = document.getElementById('controllability-input');

        if (sInput) sInput.value = this.currentParameters.S;
        if (eInput) eInput.value = this.currentParameters.E;
        if (cInput) cInput.value = this.currentParameters.C;
    }

    // Update ASIL matrix visualization
    updateASILMatrix() {
        const { S, E, C } = this.currentParameters;
        const asil = this.getASILLevel(S, E, C);
        
        // Update ASIL result display
        const asilResult = document.getElementById('asil-result');
        if (asilResult) {
            asilResult.textContent = asil;
            asilResult.className = `asil-badge asil-${asil.toLowerCase()}`;
        }

        // Update matrix visualization
        this.highlightMatrixCell(S, E);
        
        // Update parameter displays
        this.updateParameterDisplay('severity', S);
        this.updateParameterDisplay('exposure', E);
        this.updateParameterDisplay('controllability', C);
    }

    // Highlight active cell in ASIL matrix
    highlightMatrixCell(S, E) {
        const matrix = document.getElementById('asil-matrix');
        if (!matrix) return;

        // Remove previous highlights
        matrix.querySelectorAll('.active').forEach(cell => cell.classList.remove('active'));
        
        // Add highlight to current cell
        const cell = matrix.querySelector(`[data-s="${S}"][data-e="${E}"]`);
        if (cell) cell.classList.add('active');
    }

    // Update individual parameter display
    updateParameterDisplay(type, value) {
        const display = document.getElementById(`${type}-display`);
        if (!display) return;

        const descriptions = this.getParameterDescriptions();
        const info = descriptions[type][value];
        
        display.innerHTML = `
            <div class="parameter-info">
                <h4>${info.title}</h4>
                <p>${info.description}</p>
            </div>
        `;
    }

    // AI Analysis Integration
    async analyzeWithAI(componentName) {
        if (!this.aiConfig.provider || !this.aiConfig.apiKey) {
            this.showError('Please configure AI settings first');
            return;
        }

        this.showLoading('Analyzing with AI...');

        try {
            const prompt = this.buildAIPrompt(componentName);
            const response = await this.callAI(prompt);
            const analysis = this.parseAIResponse(response);
            
            this.compareWithDatabase(componentName, analysis);
            this.hideLoading();
        } catch (error) {
            this.hideLoading();
            this.showError(`AI Analysis failed: ${error.message}`);
        }
    }

    // Build AI prompt for analysis
    buildAIPrompt(componentName) {
        return `Analyze the automotive component: "${componentName}" for ISO 26262 ASIL determination.

Consider the following:
1. Severity (S0-S3): Potential harm level if the component fails
2. Exposure (E1-E4): Probability of exposure to the operational situation
3. Controllability (C1-C3): Ability of the driver to control the situation

Provide structured response in JSON format:
{
  "severity": number (0-3),
  "exposure": number (1-4),
  "controllability": number (1-3),
  "asil": "calculated ASIL level",
  "reasoning": {
    "severity": "detailed explanation",
    "exposure": "detailed explanation", 
    "controllability": "detailed explanation"
  },
  "confidence": "high/medium/low",
  "recommendations": ["list of safety recommendations"]
}

Focus on automotive safety standards and real-world driving scenarios.`;
    }

    // Compare AI analysis with database
    compareWithDatabase(componentName, aiAnalysis) {
        const dbComponent = typeof componentsDB !== 'undefined' ? componentsDB[componentName] : null;
        
        if (!dbComponent) {
            this.showAIOnlyResults(componentName, aiAnalysis);
            return;
        }

        const differences = this.findDifferences(dbComponent, aiAnalysis);
        this.showComparisonResults(componentName, dbComponent, aiAnalysis, differences);
    }

    // Find differences between database and AI analysis
    findDifferences(dbData, aiData) {
        const diffs = {};
        
        if (dbData.S !== aiData.severity) diffs.severity = { db: dbData.S, ai: aiData.severity };
        if (dbData.E !== aiData.exposure) diffs.exposure = { db: dbData.E, ai: aiData.exposure };
        if (dbData.C !== aiData.controllability) diffs.controllability = { db: dbData.C, ai: aiData.controllability };
        
        return diffs;
    }

    // Show comparison results
    showComparisonResults(componentName, dbData, aiData, differences) {
        const container = document.getElementById('comparison-results');
        if (!container) return;

        const hasDifferences = Object.keys(differences).length > 0;
        const dbASIL = this.getASILLevel(dbData.S, dbData.E, dbData.C);
        const aiASIL = aiData.asil;

        container.innerHTML = `
            <div class="comparison-container ${hasDifferences ? 'has-differences' : 'matches'}">
                <h3>Analysis Comparison: ${componentName}</h3>
                
                ${hasDifferences ? `
                    <div class="difference-banner">
                        ⚠️ Discrepancies detected between database and AI analysis
                    </div>
                ` : `
                    <div class="match-banner">
                        ✅ Database and AI analysis are in agreement
                    </div>
                `}

                <div class="comparison-grid">
                    <div class="source-column">
                        <h4>Database Results</h4>
                        <div class="asil-result asil-${dbASIL.toLowerCase()}">${dbASIL}</div>
                        <div class="parameters">
                            <div>Severity: S${dbData.S}</div>
                            <div>Exposure: E${dbData.E}</div>
                            <div>Controllability: C${dbData.C}</div>
                        </div>
                    </div>

                    <div class="source-column">
                        <h4>AI Analysis Results</h4>
                        <div class="asil-result asil-${aiASIL.toLowerCase()}">${aiASIL}</div>
                        <div class="parameters">
                            <div class="${differences.severity ? 'different' : ''}">
                                Severity: S${aiData.severity}
                            </div>
                            <div class="${differences.exposure ? 'different' : ''}">
                                Exposure: E${aiData.exposure}
                            </div>
                            <div class="${differences.controllability ? 'different' : ''}">
                                Controllability: C${aiData.controllability}
                            </div>
                        </div>
                        <div class="confidence">Confidence: ${aiData.confidence}</div>
                    </div>
                </div>

                ${hasDifferences ? this.generateDifferenceAnalysis(differences, aiData.reasoning) : ''}
                
                <div class="action-buttons">
                    ${hasDifferences ? `
                        <button class="adopt-ai-btn" onclick="asilCalc.adoptAIValues('${componentName}', ${JSON.stringify(aiData).replace(/"/g, '&quot;')})">
                            Adopt AI Values
                        </button>
                    ` : ''}
                    <button class="use-db-btn" onclick="asilCalc.loadComponent('${componentName}')">
                        Use Database Values
                    </button>
                </div>
            </div>
        `;

        container.style.display = 'block';
    }

    // Generate detailed difference analysis
    generateDifferenceAnalysis(differences, aiReasoning) {
        let analysis = '<div class="difference-analysis"><h4>Difference Analysis</h4>';
        
        Object.keys(differences).forEach(param => {
            const diff = differences[param];
            analysis += `
                <div class="difference-item">
                    <h5>${param.charAt(0).toUpperCase() + param.slice(1)}</h5>
                    <div class="diff-values">
                        Database: ${param.charAt(0).toUpperCase()}${diff.db} → AI: ${param.charAt(0).toUpperCase()}${diff.ai}
                    </div>
                    <div class="ai-reasoning">
                        <strong>AI Reasoning:</strong> ${aiReasoning[param]}
                    </div>
                </div>
            `;
        });
        
        analysis += '</div>';
        return analysis;
    }

    // Adopt AI values and optionally update database
    adoptAIValues(componentName, aiData) {
        this.currentParameters = {
            S: aiData.severity,
            E: aiData.exposure,
            C: aiData.controllability
        };

        this.updateParameterInputs();
        this.updateASILMatrix();
        
        const updatedComponent = {
            S: aiData.severity,
            E: aiData.exposure,
            C: aiData.controllability,
            asil: aiData.asil,
            reasons: aiData.reasoning
        };

        this.showComponentAnalysis(componentName, updatedComponent);

        if (this.autoLearn.enabled) {
            this.updateDatabase(componentName, updatedComponent);
        }

        this.showSuccess('AI values adopted successfully');
    }

    // Update database with new values
    updateDatabase(componentName, newData) {
        if (typeof componentsDB === 'undefined') return;

        if (this.autoLearn.requireConfirmation) {
            if (!confirm(`Update database for "${componentName}" with AI-validated values?`)) {
                return;
            }
        }

        // In a real implementation, this would make an API call to update the backend
        componentsDB[componentName] = newData;
        this.showSuccess('Database updated with AI-validated values');
    }

    // Call AI API
    async callAI(prompt) {
        const endpoint = this.aiConfig.provider === 'openai' 
            ? 'https://api.openai.com/v1/chat/completions'
            : 'https://api.anthropic.com/v1/messages';

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.aiConfig.apiKey}`
        };

        const body = this.aiConfig.provider === 'openai' 
            ? {
                model: 'gpt-4-turbo-preview',
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.3
              }
            : {
                model: 'claude-3-opus-20240229',
                max_tokens: 1000,
                messages: [{ role: 'user', content: prompt }]
              };

        const response = await fetch(endpoint, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`AI API error: ${response.status}`);
        }

        return await response.json();
    }

    // Parse AI response
    parseAIResponse(response) {
        let content = '';
        
        if (this.aiConfig.provider === 'openai') {
            content = response.choices[0].message.content;
        } else {
            content = response.content[0].text;
        }

        // Extract JSON from response
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error('Invalid AI response format');
        }

        return JSON.parse(jsonMatch[0]);
    }

    // Setup event listeners
    setupEventListeners() {
        // Component selection
        const componentSelect = document.getElementById('component-select');
        if (componentSelect) {
            componentSelect.addEventListener('change', (e) => {
                if (e.target.value) {
                    this.loadComponent(e.target.value);
                }
            });
        }

        // Parameter inputs
        ['severity', 'exposure', 'controllability'].forEach(param => {
            const input = document.getElementById(`${param}-input`);
            if (input) {
                input.addEventListener('change', (e) => {
                    const value = parseInt(e.target.value);
                    const paramKey = param === 'severity' ? 'S' : param === 'exposure' ? 'E' : 'C';
                    this.currentParameters[paramKey] = value;
                    this.updateASILMatrix();
                });
            }
        });

        // AI analysis button
        const aiAnalyzeBtn = document.getElementById('ai-analyze-btn');
        if (aiAnalyzeBtn) {
            aiAnalyzeBtn.addEventListener('click', () => {
                const customInput = document.getElementById('custom-component-input');
                const componentName = customInput ? customInput.value.trim() : '';
                
                if (!componentName) {
                    this.showError('Please enter a component name for AI analysis');
                    return;
                }
                
                this.analyzeWithAI(componentName);
            });
        }

        // Settings modal
        const settingsBtn = document.getElementById('settings-btn');
        const settingsModal = document.getElementById('settings-modal');
        const closeModal = document.getElementById('close-modal');

        if (settingsBtn && settingsModal) {
            settingsBtn.addEventListener('click', () => {
                settingsModal.style.display = 'block';
            });
        }

        if (closeModal && settingsModal) {
            closeModal.addEventListener('click', () => {
                settingsModal.style.display = 'none';
            });
        }

        // Save settings
        const saveSettingsBtn = document.getElementById('save-settings');
        if (saveSettingsBtn) {
            saveSettingsBtn.addEventListener('click', () => {
                this.saveSettings();
            });
        }
    }

    // Setup settings modal
    setupSettingsModal() {
        // Load current settings
        const providerSelect = document.getElementById('ai-provider');
        const apiKeyInput = document.getElementById('api-key');
        const autoLearnCheckbox = document.getElementById('auto-learn');
        const requireConfirmCheckbox = document.getElementById('require-confirmation');

        if (providerSelect) providerSelect.value = this.aiConfig.provider || '';
        if (apiKeyInput) apiKeyInput.value = this.aiConfig.apiKey || '';
        if (autoLearnCheckbox) autoLearnCheckbox.checked = this.autoLearn.enabled;
        if (requireConfirmCheckbox) requireConfirmCheckbox.checked = this.autoLearn.requireConfirmation;
    }

    // Save settings
    saveSettings() {
        const providerSelect = document.getElementById('ai-provider');
        const apiKeyInput = document.getElementById('api-key');
        const autoLearnCheckbox = document.getElementById('auto-learn');
        const requireConfirmCheckbox = document.getElementById('require-confirmation');

        this.aiConfig = {
            provider: providerSelect ? providerSelect.value : null,
            apiKey: apiKeyInput ? apiKeyInput.value : null
        };

        this.autoLearn = {
            enabled: autoLearnCheckbox ? autoLearnCheckbox.checked : false,
            requireConfirmation: requireConfirmCheckbox ? requireConfirmCheckbox.checked : true
        };

        localStorage.setItem('aiConfig', JSON.stringify(this.aiConfig));
        localStorage.setItem('autoLearn', JSON.stringify(this.autoLearn));

        const settingsModal = document.getElementById('settings-modal');
        if (settingsModal) settingsModal.style.display = 'none';

        this.showSuccess('Settings saved successfully');
    }

    // Load theme
    loadTheme() {
        const theme = localStorage.getItem('theme') || 'dark';
        document.body.classList.add(`theme-${theme}`);
    }

    // Utility functions
    showSuccess(message) {
        this.showNotification(message, 'success');
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    showLoading(message) {
        const loader = document.getElementById('loading-indicator');
        const loadingText = document.getElementById('loading-text');
        
        if (loader) loader.style.display = 'flex';
        if (loadingText) loadingText.textContent = message;
    }

    hideLoading() {
        const loader = document.getElementById('loading-indicator');
        if (loader) loader.style.display = 'none';
    }

    showAIOnlyResults(componentName, aiAnalysis) {
        const container = document.getElementById('comparison-results');
        if (!container) return;

        container.innerHTML = `
            <div class="ai-only-results">
                <h3>AI Analysis: ${componentName}</h3>
                <div class="ai-results-card">
                    <div class="asil-result asil-${aiAnalysis.asil.toLowerCase()}">${aiAnalysis.asil}</div>
                    <div class="parameters">
                        <div>Severity: S${aiAnalysis.severity}</div>
                        <div>Exposure: E${aiAnalysis.exposure}</div>
                        <div>Controllability: C${aiAnalysis.controllability}</div>
                    </div>
                    <div class="confidence">Confidence: ${aiAnalysis.confidence}</div>
                </div>

                <div class="ai-reasoning">
                    <h4>AI Reasoning</h4>
                    <div class="reasoning-grid">
                        <div class="reasoning-item">
                            <h5>Severity</h5>
                            <p>${aiAnalysis.reasoning.severity}</p>
                        </div>
                        <div class="reasoning-item">
                            <h5>Exposure</h5>
                            <p>${aiAnalysis.reasoning.exposure}</p>
                        </div>
                        <div class="reasoning-item">
                            <h5>Controllability</h5>
                            <p>${aiAnalysis.reasoning.controllability}</p>
                        </div>
                    </div>
                </div>

                ${aiAnalysis.recommendations && aiAnalysis.recommendations.length > 0 ? `
                    <div class="ai-recommendations">
                        <h4>Safety Recommendations</h4>
                        <ul>
                            ${aiAnalysis.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}

                <div class="action-buttons">
                    <button class="adopt-ai-btn" onclick="asilCalc.adoptAIValues('${componentName}', ${JSON.stringify(aiAnalysis).replace(/"/g, '&quot;')})">
                        Use These Values
                    </button>
                </div>
            </div>
        `;

        container.style.display = 'block';
    }

    // Export functionality
    exportResults() {
        if (!this.currentComponent) {
            this.showError('No component selected for export');
            return;
        }

        const data = {
            component: this.currentComponent,
            parameters: this.currentParameters,
            asil: this.getASILLevel(this.currentParameters.S, this.currentParameters.E, this.currentParameters.C),
            timestamp: new Date().toISOString(),
            analysis: this.getParameterDescriptions()
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.currentComponent}_asil_analysis.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showSuccess('Analysis exported successfully');
    }

    // Search components
    searchComponents(query) {
        if (typeof componentsDB === 'undefined') return [];

        const lowerQuery = query.toLowerCase();
        return Object.keys(componentsDB).filter(component => 
            component.toLowerCase().includes(lowerQuery) ||
            component.replace(/_/g, ' ').toLowerCase().includes(lowerQuery)
        );
    }

    // Get component statistics
    getComponentStatistics() {
        if (typeof componentsDB === 'undefined') return null;

        const stats = {
            total: Object.keys(componentsDB).length,
            asilLevels: { QM: 0, A: 0, B: 0, C: 0, D: 0 },
            severityDistribution: { 0: 0, 1: 0, 2: 0, 3: 0 },
            exposureDistribution: { 1: 0, 2: 0, 3: 0, 4: 0 },
            controllabilityDistribution: { 1: 0, 2: 0, 3: 0 }
        };

        Object.values(componentsDB).forEach(component => {
            const asil = this.getASILLevel(component.S, component.E, component.C);
            stats.asilLevels[asil]++;
            stats.severityDistribution[component.S]++;
            stats.exposureDistribution[component.E]++;
            stats.controllabilityDistribution[component.C]++;
        });

        return stats;
    }

    // Generate comprehensive report
    generateReport() {
        if (!this.currentComponent) {
            this.showError('No component selected for report generation');
            return;
        }

        const component = typeof componentsDB !== 'undefined' ? componentsDB[this.currentComponent] : null;
        const asil = this.getASILLevel(this.currentParameters.S, this.currentParameters.E, this.currentParameters.C);
        const descriptions = this.getParameterDescriptions();

        const report = `
# ASIL Determination Report

## Component Information
- **Component Name:** ${this.currentComponent.replace(/_/g, ' ').toUpperCase()}
- **Analysis Date:** ${new Date().toLocaleDateString()}
- **ASIL Level:** ${asil}

## Parameter Assessment

### Severity (S${this.currentParameters.S})
**${descriptions.severity[this.currentParameters.S].title}**

${descriptions.severity[this.currentParameters.S].description}

${component && component.reasons && component.reasons.S ? 
    `**Component-specific reasoning:** ${component.reasons.S}` : ''}

### Exposure (E${this.currentParameters.E})
**${descriptions.exposure[this.currentParameters.E].title}**

${descriptions.exposure[this.currentParameters.E].description}

${component && component.reasons && component.reasons.E ? 
    `**Component-specific reasoning:** ${component.reasons.E}` : ''}

### Controllability (C${this.currentParameters.C})
**${descriptions.controllability[this.currentParameters.C].title}**

${descriptions.controllability[this.currentParameters.C].description}

${component && component.reasons && component.reasons.C ? 
    `**Component-specific reasoning:** ${component.reasons.C}` : ''}

## ASIL Determination Matrix

| S\\E | E1 | E2 | E3 | E4 |
|-----|----|----|----|----|
| S0  | QM | QM | QM | QM |
| S1  | A  | A  | B  | B  |
| S2  | B  | B  | C  | C  |
| S3  | C  | C  | D  | D  |

**Current Position:** S${this.currentParameters.S} × E${this.currentParameters.E} = **${asil}**

## Recommendations

Based on the analysis, the component requires **ASIL ${asil}** safety measures.

${this.generateSafetyRecommendations(asil)}

---
*This report was generated using the AI-ASIL Calculator in compliance with ISO 26262 standards.*
        `;

        // Create and download the report
        const blob = new Blob([report], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.currentComponent}_asil_report.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showSuccess('Comprehensive report generated successfully');
    }

    // Generate safety recommendations based on ASIL level
    generateSafetyRecommendations(asil) {
        const recommendations = {
            'QM': [
                'Quality Management processes sufficient',
                'Standard software development practices',
                'Basic testing and verification'
            ],
            'A': [
                'Implement basic fault detection mechanisms',
                'Apply software architectural design principles',
                'Conduct structured testing (unit, integration)',
                'Use proven software components'
            ],
            'B': [
                'Implement fault detection and handling',
                'Apply semi-formal verification methods',
                'Conduct comprehensive testing including fault injection',
                'Use qualified tools for development',
                'Implement redundancy where applicable'
            ],
            'C': [
                'Implement advanced fault detection and fault handling',
                'Apply formal verification methods',
                'Conduct exhaustive testing including MC/DC coverage',
                'Use certified tools and qualified personnel',
                'Implement fault-tolerant architecture',
                'Regular safety audits and assessments'
            ],
            'D': [
                'Implement comprehensive fault detection, handling, and avoidance',
                'Apply formal methods throughout development',
                'Achieve highest test coverage (MC/DC + additional criteria)',
                'Use certified tools with tool qualification',
                'Implement fault-tolerant and fail-safe architecture',
                'Redundancy and diversity in safety mechanisms',
                'Continuous monitoring and diagnostics',
                'Regular safety case updates and independent assessments'
            ]
        };

        return recommendations[asil] ? 
            recommendations[asil].map(rec => `- ${rec}`).join('\n') : 
            'No specific recommendations available for this ASIL level.';
    }
}

// Initialize the ASIL Calculator when DOM is loaded
let asilCalc;

document.addEventListener('DOMContentLoaded', () => {
    asilCalc = new ASILCalculator();
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case 's':
                    e.preventDefault();
                    asilCalc.exportResults();
                    break;
                case 'r':
                    e.preventDefault();
                    asilCalc.generateReport();
                    break;
                case ',':
                    e.preventDefault();
                    document.getElementById('settings-modal').style.display = 'block';
                    break;
            }
        }
    });
});

// Additional utility functions
function validateASILParameters(S, E, C) {
    return S >= 0 && S <= 3 && E >= 1 && E <= 4 && C >= 1 && C <= 3;
}

function formatComponentName(name) {
    return name.replace(/_/g, ' ')
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ASILCalculator, validateASILParameters, formatComponentName };
}
