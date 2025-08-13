/**
 * Enhanced Automotive Components Database for ISO 26262 ASIL Determination
 * Version 5.0 - AI Enhanced Platform
 * 
 * Each component includes:
 * - S: Severity (0-3) - Potential for harm in case of failure
 * - E: Exposure (1-4) - Probability of operational situation
 * - C: Controllability (1-3) - Driver's ability to control hazardous event
 * - asil: Determined ASIL level (QM, A, B, C, D)
 * - reasons: Detailed justification for each parameter
 */

const componentsDB = {
  // ============================================================================
  // BRAKING SYSTEMS - Critical safety systems
  // ============================================================================
  "brake system": {
    S: 3, E: 4, C: 3, asil: "D",
    reasons: {
      S: "Failure can cause fatal accidents with multiple casualties (ISO 26262-3: S3)",
      E: "Braking is required in all driving scenarios and conditions (E4)",
      C: "Hard to control without functioning brakes - most drivers cannot manage (C3)"
    }
  },
  
  "abs": {
    S: 2, E: 4, C: 2, asil: "B",
    reasons: {
      S: "Failure leads to longer stopping distances, severe injuries likely (S2)",
      E: "ABS operates during most braking events, especially emergency braking (E4)",
      C: "Experienced drivers can partially compensate by modulating brake pedal (C2)"
    }
  },
  
  "brake pedal": {
    S: 3, E: 4, C: 3, asil: "D",
    reasons: {
      S: "Complete loss of braking control leads to fatal accidents (S3)",
      E: "Brake pedal used continuously during all driving operations (E4)",
      C: "No alternative control method available to most drivers (C3)"
    }
  },
  
  "brake fluid reservoir": {
    S: 2, E: 3, C: 2, asil: "B",
    reasons: {
      S: "Gradual brake performance degradation, severe injuries probable (S2)",
      E: "Brake fluid loss occurs over time, not every driving scenario (E3)",
      C: "Driver can detect loss through pedal feel and adjust driving (C2)"
    }
  },
  
  "electronic brake force distribution": {
    S: 2, E: 4, C: 2, asil: "B",
    reasons: {
      S: "Uneven braking can cause vehicle instability, severe injuries likely (S2)",
      E: "EBD operates during all braking events with loaded vehicle (E4)",
      C: "Skilled drivers can partially compensate through steering input (C2)"
    }
  },
  
  "brake assist system": {
    S: 2, E: 3, C: 2, asil: "A",
    reasons: {
      S: "Reduced emergency braking effectiveness, severe injuries possible (S2)",
      E: "Only active during emergency braking situations (E3)",
      C: "Driver can still apply full braking force manually (C2)"
    }
  },
  
  // ============================================================================
  // STEERING SYSTEMS - Vehicle control systems
  // ============================================================================
  "power steering": {
    S: 2, E: 4, C: 2, asil: "B",
    reasons: {
      S: "Loss makes steering difficult, severe injuries likely at high speed (S2)",
      E: "Power steering is used continuously during driving (E4)",
      C: "Driver can maintain control with increased effort, most can adapt (C2)"
    }
  },
  
  "steering wheel": {
    S: 3, E: 4, C: 3, asil: "D",
    reasons: {
      S: "Complete loss of directional control leads to fatal accidents (S3)",
      E: "Steering wheel used continuously during all driving (E4)",
      C: "No alternative steering method available to drivers (C3)"
    }
  },
  
  "steering column": {
    S: 3, E: 4, C: 3, asil: "D",
    reasons: {
      S: "Mechanical failure eliminates steering control, fatal consequences (S3)",
      E: "Critical component active throughout entire driving operation (E4)",
      C: "No backup steering mechanism available to drivers (C3)"
    }
  },
  
  "electric power steering": {
    S: 2, E: 4, C: 2, asil: "C",
    reasons: {
      S: "Sudden loss or erratic behavior can cause severe accidents (S2)",
      E: "EPS operates continuously during all driving conditions (E4)",
      C: "Driver can override with increased physical effort (C2)"
    }
  },
  
  "steering angle sensor": {
    S: 2, E: 4, C: 2, asil: "B",
    reasons: {
      S: "Incorrect steering feedback to ESC/other systems, severe injuries (S2)",
      E: "Sensor data used continuously by multiple vehicle systems (E4)",
      C: "Driver can maintain control through direct steering feel (C2)"
    }
  },
  
  // ============================================================================
  // ENGINE & POWERTRAIN - Propulsion control systems
  // ============================================================================
  "engine control unit": {
    S: 2, E: 4, C: 2, asil: "B",
    reasons: {
      S: "Unintended acceleration or power loss can cause severe accidents (S2)",
      E: "ECU controls engine during all driving operations (E4)",
      C: "Driver can use brakes and gear selection for control (C2)"
    }
  },
  
  "throttle control": {
    S: 2, E: 4, C: 2, asil: "B",
    reasons: {
      S: "Stuck throttle or sudden acceleration causes severe crashes (S2)",
      E: "Throttle input required for all acceleration scenarios (E4)",
      C: "Driver can brake and shift to neutral to regain control (C2)"
    }
  },
  
  "transmission control module": {
    S: 2, E: 4, C: 2, asil: "A",
    reasons: {
      S: "Unexpected gear changes can cause loss of control, severe injuries (S2)",
      E: "TCM operates continuously during driving with automatic transmission (E4)",
      C: "Driver can use manual mode or brakes to maintain control (C2)"
    }
  },
  
  "fuel injection system": {
    S: 1, E: 4, C: 1, asil: "A",
    reasons: {
      S: "Engine stalling or rough idle, light to moderate injuries likely (S1)",
      E: "Fuel injection operates continuously during engine operation (E4)",
      C: "Driver can easily control vehicle during fuel system issues (C1)"
    }
  },
  
  "turbocharger control": {
    S: 1, E: 3, C: 1, asil: "QM",
    reasons: {
      S: "Reduced power output, minimal injury risk during failure (S1)",
      E: "Turbo only active during high load/acceleration scenarios (E3)",
      C: "Driver easily adapts to reduced power availability (C1)"
    }
  },
  
  // ============================================================================
  // BODY CONTROL & ELECTRONICS - Comfort and utility systems
  // ============================================================================
  "body control module": {
    S: 2, E: 4, C: 3, asil: "C",
    reasons: {
      S: "Loss impacts multiple vehicle systems including lighting (S2)",
      E: "Active in all driving conditions controlling various functions (E4)",
      C: "Loss of multiple functions could be difficult to manage (C3)"
    }
  },
  
  "lighting control module": {
    S: 2, E: 4, C: 2, asil: "B",
    reasons: {
      S: "Headlight failure at night significantly increases accident risk (S2)",
      E: "Lighting system operates during all driving, especially night driving (E4)",
      C: "Driver can reduce speed and seek illuminated areas (C2)"
    }
  },
  
  "turn signal system": {
    S: 1, E: 4, C: 1, asil: "A",
    reasons: {
      S: "Increases collision risk during lane changes, light injuries likely (S1)",
      E: "Turn signals used frequently during all types of driving (E4)",
      C: "Driver can use hand signals and check mirrors more carefully (C1)"
    }
  },
  
  "windshield wiper system": {
    S: 2, E: 3, C: 2, asil: "A",
    reasons: {
      S: "Poor visibility in rain/snow increases severe accident risk (S2)",
      E: "Critical during adverse weather conditions only (E3)",
      C: "Driver can pull over or drive slowly in poor weather (C2)"
    }
  },
  
  "hvac system": {
    S: 1, E: 2, C: 1, asil: "QM",
    reasons: {
      S: "Discomfort but minimal direct injury risk from HVAC failure (S1)",
      E: "Not essential for basic vehicle operation (E2)",
      C: "Driver easily manages without climate control (C1)"
    }
  },
  
  // ============================================================================
  // SAFETY SYSTEMS - Primary occupant protection
  // ============================================================================
  "airbag system": {
    S: 3, E: 3, C: 3, asil: "C",
    reasons: {
      S: "Non-deployment in crash leads to fatal injuries (S3)",
      E: "Airbags needed during crash events - medium probability (E3)",
      C: "No driver control over airbag deployment during crash (C3)"
    }
  },
  
  "seatbelt pretensioner": {
    S: 2, E: 3, C: 3, asil: "B",
    reasons: {
      S: "Reduces crash protection effectiveness, severe injuries likely (S2)",
      E: "Critical during crash events - medium probability occurrence (E3)",
      C: "No driver control over pretensioner activation (C3)"
    }
  },
  
  "crash sensor": {
    S: 3, E: 3, C: 3, asil: "C",
    reasons: {
      S: "Failure prevents safety system activation, fatal consequences (S3)",
      E: "Must function correctly during crash scenarios (E3)",
      C: "Driver cannot compensate for sensor failure during crash (C3)"
    }
  },
  
  "rollover protection": {
    S: 3, E: 2, C: 3, asil: "B",
    reasons: {
      S: "Rollover events often fatal without proper protection (S3)",
      E: "Rollover scenarios have lower probability of occurrence (E2)",
      C: "Driver cannot control rollover protection system activation (C3)"
    }
  },
  
  // ============================================================================
  // CHASSIS & STABILITY SYSTEMS - Vehicle dynamics
  // ============================================================================
  "electronic stability control": {
    S: 2, E: 4, C: 2, asil: "C",
    reasons: {
      S: "Loss of stability control increases severe accident risk (S2)",
      E: "ESC monitors and intervenes during all driving conditions (E4)",
      C: "Skilled drivers can partially maintain control without ESC (C2)"
    }
  },
  
  "traction control": {
    S: 1, E: 4, C: 1, asil: "A",
    reasons: {
      S: "Wheel spin can cause loss of control, light to moderate injuries (S1)",
      E: "Traction control active during acceleration in various conditions (E4)",
      C: "Driver can easily modulate throttle to maintain traction (C1)"
    }
  },
  
  "suspension control module": {
    S: 1, E: 4, C: 1, asil: "A",
    reasons: {
      S: "Ride comfort affected, minimal direct injury risk (S1)",
      E: "Suspension systems operate continuously during driving (E4)",
      C: "Driver easily adapts to suspension changes (C1)"
    }
  },
  
  "wheel speed sensor": {
    S: 2, E: 4, C: 2, asil: "B",
    reasons: {
      S: "Affects ABS and ESC operation, severe injuries possible (S2)",
      E: "Wheel speed data used continuously by multiple systems (E4)",
      C: "Driver can maintain control with reduced system assistance (C2)"
    }
  },
  
  // ============================================================================
  // ADVANCED DRIVER ASSISTANCE SYSTEMS (ADAS)
  // ============================================================================
  "adaptive cruise control": {
    S: 2, E: 3, C: 2, asil: "A",
    reasons: {
      S: "Failure to maintain safe distance can cause severe rear-end collision (S2)",
      E: "ACC primarily used during highway driving scenarios (E3)",
      C: "Driver can override with brake or accelerator input (C2)"
    }
  },
  
  "automatic emergency braking": {
    S: 3, E: 3, C: 3, asil: "C",
    reasons: {
      S: "False activation or failure to activate can be fatal (S3)",
      E: "System must respond during emergency situations (E3)",
      C: "Limited time for driver intervention during emergency (C3)"
    }
  },
  
  "lane departure warning": {
    S: 1, E: 4, C: 1, asil: "A",
    reasons: {
      S: "Late warning may result in light to moderate injuries (S1)",
      E: "LDW monitors lane position during all highway driving (E4)",
      C: "Driver maintains full control and can easily correct steering (C1)"
    }
  },
  
  "lane keeping assist": {
    S: 2, E: 4, C: 2, asil: "B",
    reasons: {
      S: "Incorrect steering input can cause severe lane departure accident (S2)",
      E: "LKA operates continuously during highway driving (E4)",
      C: "Driver can override steering input with moderate effort (C2)"
    }
  },
  
  "blind spot monitoring": {
    S: 1, E: 4, C: 1, asil: "A",
    reasons: {
      S: "Failed warning increases lane change collision risk (S1)",
      E: "BSM operates continuously during all driving (E4)",
      C: "Driver can check mirrors and shoulder check manually (C1)"
    }
  },
  
  "parking assist": {
    S: 1, E: 2, C: 1, asil: "QM",
    reasons: {
      S: "Low speed parking incidents result in minor injuries (S1)",
      E: "Only used during parking maneuvers (E2)",
      C: "Driver maintains full control during parking operations (C1)"
    }
  },
  
  // ============================================================================
  // SENSOR SYSTEMS - Environmental perception
  // ============================================================================
  "forward radar": {
    S: 2, E: 4, C: 2, asil: "B",
    reasons: {
      S: "False readings affect ADAS systems, severe accidents possible (S2)",
      E: "Radar operates continuously during driving for multiple systems (E4)",
      C: "Driver can maintain control when ADAS systems degrade (C2)"
    }
  },
  
  "rear camera": {
    S: 1, E: 3, C: 1, asil: "QM",
    reasons: {
      S: "Primarily affects parking/reversing, light injuries in low speed (S1)",
      E: "Camera used during reversing and parking scenarios (E3)",
      C: "Driver can use mirrors and direct vision for reversing (C1)"
    }
  },
  
  "ultrasonic sensors": {
    S: 1, E: 2, C: 1, asil: "QM",
    reasons: {
      S: "Low speed obstacle detection, minimal injury risk (S1)",
      E: "Only active during parking and low speed maneuvering (E2)",
      C: "Driver maintains full control of vehicle movement (C1)"
    }
  },
  
  "lidar system": {
    S: 2, E: 4, C: 2, asil: "B",
    reasons: {
      S: "Critical for autonomous functions, severe accidents if failed (S2)",
      E: "LiDAR operates continuously for environmental mapping (E4)",
      C: "Driver can take manual control when autonomous systems fail (C2)"
    }
  },
  
  "camera system": {
    S: 2, E: 4, C: 2, asil: "B",
    reasons: {
      S: "Vision system failure affects multiple ADAS functions (S2)",
      E: "Cameras operate continuously for object detection and recognition (E4)",
      C: "Driver can maintain control with degraded assistance (C2)"
    }
  },
  
  // ============================================================================
  // COMMUNICATION & CONNECTIVITY SYSTEMS
  // ============================================================================
  "can bus": {
    S: 2, E: 4, C: 3, asil: "C",
    reasons: {
      S: "Communication failure affects multiple critical systems (S2)",
      E: "CAN bus active continuously for inter-system communication (E4)",
      C: "Multiple system failures difficult for driver to manage (C3)"
    }
  },
  
  "gateway module": {
    S: 2, E: 4, C: 3, asil: "C",
    reasons: {
      S: "Network isolation failure can propagate faults to safety systems (S2)",
      E: "Gateway operates continuously managing network traffic (E4)",
      C: "Complex failure modes difficult for driver to understand (C3)"
    }
  },
  
  "diagnostic system": {
    S: 1, E: 3, C: 1, asil: "QM",
    reasons: {
      S: "Delayed fault detection, but no direct injury risk (S1)",
      E: "Diagnostics run periodically during vehicle operation (E3)",
      C: "Driver can continue operation without immediate diagnostic feedback (C1)"
    }
  },
  
  "telematics unit": {
    S: 0, E: 2, C: 1, asil: "QM",
    reasons: {
      S: "Communication system failure poses no direct injury risk (S0)",
      E: "Telematics used occasionally for emergency calls and data (E2)",
      C: "Driver can operate vehicle normally without telematics (C1)"
    }
  },

  "v2x communication": {
    S: 1, E: 3, C: 1, asil: "QM",
    reasons: {
      S: "Loss of vehicle-to-vehicle warnings increases minor collision risk (S1)",
      E: "V2X operates in equipped areas and traffic scenarios (E3)",
      C: "Driver maintains situational awareness through normal observation (C1)"
    }
  },

  // ============================================================================
  // ELECTRIC VEHICLE SYSTEMS - High voltage and charging
  // ============================================================================
  "battery management system": {
    S: 3, E: 4, C: 3, asil: "D",
    reasons: {
      S: "Thermal runaway or fire can be fatal to occupants (S3)",
      E: "BMS operates continuously during EV operation (E4)",
      C: "Driver cannot control battery chemistry or thermal events (C3)"
    }
  },

  "high voltage inverter": {
    S: 2, E: 4, C: 2, asil: "C",
    reasons: {
      S: "Sudden power loss or electrical shock risk causes severe injury (S2)",
      E: "Inverter operates continuously during electric propulsion (E4)",
      C: "Driver can coast and use service brakes for emergency stop (C2)"
    }
  },

  "charging system": {
    S: 2, E: 2, C: 2, asil: "QM",
    reasons: {
      S: "Electrical shock or fire risk during charging operations (S2)",
      E: "Charging only occurs during specific stationary periods (E2)",
      C: "Operator can disconnect charging cable if issues arise (C2)"
    }
  },

  "dc-dc converter": {
    S: 1, E: 4, C: 1, asil: "A",
    reasons: {
      S: "12V system failure affects comfort but low injury risk (S1)",
      E: "DC-DC converter operates continuously to power 12V systems (E4)",
      C: "Driver can continue driving with reduced 12V system functionality (C1)"
    }
  },

  "electric motor controller": {
    S: 2, E: 4, C: 2, asil: "C",
    reasons: {
      S: "Uncontrolled acceleration or braking can cause severe accidents (S2)",
      E: "Motor controller active during all propulsion scenarios (E4)",
      C: "Driver can use friction brakes and gear selector for control (C2)"
    }
  },

  // ============================================================================
  // AUTONOMOUS DRIVING SYSTEMS - Self-driving capabilities
  // ============================================================================
  "path planning module": {
    S: 3, E: 4, C: 3, asil: "D",
    reasons: {
      S: "Incorrect path decisions can lead to fatal accidents (S3)",
      E: "Path planning operates continuously during autonomous mode (E4)",
      C: "Limited time for driver intervention in autonomous scenarios (C3)"
    }
  },

  "decision making unit": {
    S: 3, E: 4, C: 3, asil: "D",
    reasons: {
      S: "Wrong driving decisions can result in fatal collisions (S3)",
      E: "Decision module active continuously during autonomous operation (E4)",
      C: "Complex scenarios may not allow adequate driver override time (C3)"
    }
  },

  "sensor fusion module": {
    S: 3, E: 4, C: 3, asil: "D",
    reasons: {
      S: "Incorrect environmental perception leads to fatal accidents (S3)",
      E: "Sensor fusion required continuously for autonomous navigation (E4)",
      C: "Driver may not detect sensor fusion errors quickly enough (C3)"
    }
  },

  "fail-safe system": {
    S: 3, E: 3, C: 3, asil: "D",
    reasons: {
      S: "Failure to achieve safe state can be fatal (S3)",
      E: "Must activate during autonomous system failures (E3)",
      C: "Driver may not be prepared to take control during emergency (C3)"
    }
  },

  "driver monitoring system": {
    S: 2, E: 4, C: 2, asil: "B",
    reasons: {
      S: "Failure to detect driver incapacitation leads to severe accidents (S2)",
      E: "DMS operates continuously during semi-autonomous driving (E4)",
      C: "System can alert and gradually bring vehicle to stop (C2)"
    }
  },

  // ============================================================================
  // INFOTAINMENT & USER INTERFACE SYSTEMS
  // ============================================================================
  "infotainment system": {
    S: 0, E: 4, C: 1, asil: "QM",
    reasons: {
      S: "Entertainment system failure poses no direct injury risk (S0)",
      E: "Infotainment used frequently during driving for various functions (E4)",
      C: "Driver can operate vehicle without entertainment features (C1)"
    }
  },

  "navigation system": {
    S: 1, E: 4, C: 1, asil: "QM",
    reasons: {
      S: "Wrong directions may lead to minor incidents or delays (S1)",
      E: "Navigation used frequently during unfamiliar route driving (E4)",
      C: "Driver can use alternative navigation or ask for directions (C1)"
    }
  },

  "human machine interface": {
    S: 1, E: 4, C: 2, asil: "A",
    reasons: {
      S: "Confusing displays may delay driver response, light injuries (S1)",
      E: "HMI active continuously providing vehicle status information (E4)",
      C: "Driver can operate vehicle with basic instrumentation (C2)"
    }
  },

  "voice control system": {
    S: 0, E: 3, C: 1, asil: "QM",
    reasons: {
      S: "Voice system failure has no direct safety impact (S0)",
      E: "Voice control used periodically for hands-free operation (E3)",
      C: "Driver can use manual controls instead of voice commands (C1)"
    }
  },

  // ============================================================================
  // THERMAL MANAGEMENT SYSTEMS
  // ============================================================================
  "engine cooling system": {
    S: 2, E: 4, C: 2, asil: "B",
    reasons: {
      S: "Engine overheating can cause fire or roadside breakdown (S2)",
      E: "Cooling system operates continuously during engine operation (E4)",
      C: "Driver can monitor temperature and pull over safely (C2)"
    }
  },

  "battery cooling system": {
    S: 3, E: 4, C: 3, asil: "D",
    reasons: {
      S: "Battery overheating can cause thermal runaway and fire (S3)",
      E: "Battery cooling operates continuously in electric vehicles (E4)",
      C: "Driver cannot directly control battery thermal management (C3)"
    }
  },

  "cabin air filter": {
    S: 0, E: 2, C: 1, asil: "QM",
    reasons: {
      S: "Air quality affects comfort but no immediate injury risk (S0)",
      E: "Air filtration operates during HVAC system use (E2)",
      C: "Driver can open windows or adjust ventilation settings (C1)"
    }
  },

  // ============================================================================
  // LIGHTING SYSTEMS - Visibility and signaling
  // ============================================================================
  "headlight leveling": {
    S: 2, E: 4, C: 2, asil: "A",
    reasons: {
      S: "Improper beam pattern increases night collision risk (S2)",
      E: "Headlight leveling active during all night driving (E4)",
      C: "Driver can adjust speed and use high beams appropriately (C2)"
    }
  },

  "adaptive headlights": {
    S: 1, E: 4, C: 1, asil: "A",
    reasons: {
      S: "Reduced illumination in curves, light to moderate injury risk (S1)",
      E: "Adaptive lighting operates during all night driving conditions (E4)",
      C: "Driver can reduce speed and use appropriate beam selection (C1)"
    }
  },

  "daytime running lights": {
    S: 1, E: 4, C: 1, asil: "QM",
    reasons: {
      S: "Reduced visibility to others increases minor collision risk (S1)",
      E: "DRL operates continuously during daytime driving (E4)",
      C: "Driver can manually activate headlights for better visibility (C1)"
    }
  },

  "hazard warning lights": {
    S: 1, E: 2, C: 1, asil: "QM",
    reasons: {
      S: "Inability to warn others of hazard increases minor accident risk (S1)",
      E: "Hazard lights used only during emergency or breakdown situations (E2)",
      C: "Driver can use other warning methods or seek safe location (C1)"
    }
  },

  // ============================================================================
  // DOOR & ACCESS SYSTEMS - Entry and exit safety
  // ============================================================================
  "door lock system": {
    S: 1, E: 3, C: 1, asil: "QM",
    reasons: {
      S: "Door opening during driving causes light to moderate injuries (S1)",
      E: "Door locks active during driving but failure rate is low (E3)",
      C: "Driver and passengers can manually secure doors (C1)"
    }
  },

  "power window system": {
    S: 1, E: 3, C: 1, asil: "QM",
    reasons: {
      S: "Window malfunction may cause minor injuries or discomfort (S1)",
      E: "Power windows used periodically during driving (E3)",
      C: "Manual window override or alternative ventilation available (C1)"
    }
  },

  "keyless entry": {
    S: 0, E: 2, C: 1, asil: "QM",
    reasons: {
      S: "Access system failure poses no direct injury risk (S0)",
      E: "Keyless entry used only during vehicle access attempts (E2)",
      C: "Manual key backup available for vehicle access (C1)"
    }
  },

  // ============================================================================
  // FUEL SYSTEM COMPONENTS - Energy storage and delivery
  // ============================================================================
  "fuel pump": {
    S: 1, E: 4, C: 1, asil: "A",
    reasons: {
      S: "Fuel starvation causes engine stall, light injuries possible (S1)",
      E: "Fuel pump operates continuously during engine operation (E4)",
      C: "Driver can safely pull over and stop when engine stalls (C1)"
    }
  },

  "fuel level sensor": {
    S: 0, E: 4, C: 1, asil: "QM",
    reasons: {
      S: "Incorrect fuel reading causes inconvenience, no injury risk (S0)",
      E: "Fuel sensor monitors continuously during vehicle operation (E4)",
      C: "Driver can track fuel usage and plan refueling accordingly (C1)"
    }
  },

  "evaporative emission control": {
    S: 0, E: 3, C: 1, asil: "QM",
    reasons: {
      S: "Emissions system failure has no direct safety impact (S0)",
      E: "EVAP system operates during fuel handling and storage (E3)",
      C: "Driver can continue operation with minimal environmental impact (C1)"
    }
  },

  // ============================================================================
  // TIRE PRESSURE MONITORING SYSTEMS
  // ============================================================================
  "tire pressure monitoring": {
    S: 2, E: 4, C: 2, asil: "A",
    reasons: {
      S: "Undetected tire pressure loss can cause severe blowout accidents (S2)",
      E: "TPMS monitors continuously during all driving conditions (E4)",
      C: "Driver can perform regular manual pressure checks (C2)"
    }
  },

  "tire pressure sensor": {
    S: 2, E: 4, C: 2, asil: "A",
    reasons: {
      S: "Failed sensor prevents early warning of dangerous pressure loss (S2)",
      E: "Pressure sensors active continuously during driving (E4)",
      C: "Driver can monitor tire condition through visual inspection (C2)"
    }
  },

  // ============================================================================
  // EXHAUST & EMISSIONS SYSTEMS
  // ============================================================================
  "catalytic converter": {
    S: 0, E: 4, C: 1, asil: "QM",
    reasons: {
      S: "Emissions system failure poses no direct injury risk (S0)",
      E: "Catalytic converter operates continuously during engine operation (E4)",
      C: "Driver can continue operation with increased emissions (C1)"
    }
  },

  "exhaust gas recirculation": {
    S: 0, E: 4, C: 1, asil: "QM",
    reasons: {
      S: "EGR system failure affects emissions, no injury risk (S0)",
      E: "EGR operates continuously during various engine load conditions (E4)",
      C: "Driver can operate vehicle with slightly reduced fuel economy (C1)"
    }
  },

  "diesel particulate filter": {
    S: 1, E: 4, C: 1, asil: "QM",
    reasons: {
      S: "DPF clogging may cause reduced power, minimal injury risk (S1)",
      E: "DPF operates continuously during diesel engine operation (E4)",
      C: "Driver can adjust driving patterns or seek maintenance (C1)"
    }
  },

  // ============================================================================
  // SUPPLEMENTAL SYSTEMS - Additional safety and convenience
  // ============================================================================
  "horn system": {
    S: 1, E: 3, C: 1, asil: "QM",
    reasons: {
      S: "Inability to warn other drivers increases minor collision risk (S1)",
      E: "Horn used periodically for communication with other road users (E3)",
      C: "Driver can use lights or other methods to communicate intent (C1)"
    }
  },

  "rearview mirror": {
    S: 1, E: 4, C: 1, asil: "A",
    reasons: {
      S: "Reduced visibility increases lane change accident risk (S1)",
      E: "Mirrors used continuously for situational awareness (E4)",
      C: "Driver can turn head and use side mirrors for visibility (C1)"
    }
  },

  "sun visor": {
    S: 1, E: 3, C: 1, asil: "QM",
    reasons: {
      S: "Sun glare without visor may cause temporary vision loss (S1)",
      E: "Sun visors needed during specific sun angle conditions (E3)",
      C: "Driver can adjust seating position or use sunglasses (C1)"
    }
  },

  "seat adjustment": {
    S: 1, E: 2, C: 1, asil: "QM",
    reasons: {
      S: "Improper seating position may affect control, light injuries (S1)",
      E: "Seat adjustment used primarily during entry/exit (E2)",
      C: "Driver can manually adjust or maintain adequate driving position (C1)"
    }
  },

  // ============================================================================
  // ADVANCED SENSOR SYSTEMS - Next generation detection
  // ============================================================================
  "thermal imaging camera": {
    S: 2, E: 3, C: 2, asil: "A",
    reasons: {
      S: "Night vision failure increases pedestrian collision risk (S2)",
      E: "Thermal camera primarily used during night driving scenarios (E3)",
      C: "Driver can reduce speed and use standard headlights (C2)"
    }
  },

  "occupancy sensor": {
    S: 2, E: 3, C: 3, asil: "A",
    reasons: {
      S: "Airbag deployment errors can cause severe injuries (S2)",
      E: "Occupancy sensing active when passengers present (E3)",
      C: "Passenger cannot control airbag system operation (C3)"
    }
  },

  "rain sensor": {
    S: 1, E: 3, C: 1, asil: "QM",
    reasons: {
      S: "Delayed wiper activation reduces visibility, minor risk (S1)",
      E: "Rain sensor operates during precipitation conditions (E3)",
      C: "Driver can manually activate wipers when needed (C1)"
    }
  },

  "light sensor": {
    S: 1, E: 4, C: 1, asil: "QM",
    reasons: {
      S: "Delayed headlight activation slightly increases collision risk (S1)",
      E: "Light sensor monitors continuously for automatic lighting (E4)",
      C: "Driver can manually control headlight operation (C1)"
    }
  }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { componentsDB };
} else if (typeof window !== 'undefined') {
  window.componentsDB = componentsDB;
}

/**
 * Utility function to get all component names for autocomplete
 * @returns {Array<string>} Array of all component names
 */
function getAllComponentNames() {
  return Object.keys(componentsDB).sort();
}

/**
 * Utility function to filter components by ASIL level
 * @param {string} asilLevel - ASIL level to filter by (QM, A, B, C, D)
 * @returns {Array<string>} Array of component names with specified ASIL level
 */
function getComponentsByASIL(asilLevel) {
  return Object.keys(componentsDB)
    .filter(component => componentsDB[component].asil === asilLevel)
    .sort();
}

/**
 * Utility function to get components by category (based on naming patterns)
 * @param {string} category - Category keyword to search for
 * @returns {Array<string>} Array of component names containing the category keyword
 */
function getComponentsByCategory(category) {
  const searchTerm = category.toLowerCase();
  return Object.keys(componentsDB)
    .filter(component => component.toLowerCase().includes(searchTerm))
    .sort();
}

/**
 * Statistics about the components database
 * @returns {Object} Statistics object with counts and distributions
 */
function getDatabaseStatistics() {
  const components = Object.values(componentsDB);
  const totalComponents = components.length;
  
  // Count by ASIL level
  const asilCounts = {};
  components.forEach(comp => {
    asilCounts[comp.asil] = (asilCounts[comp.asil] || 0) + 1;
  });
  
  // Count by severity level
  const severityCounts = {};
  components.forEach(comp => {
    const sLevel = `S${comp.S}`;
    severityCounts[sLevel] = (severityCounts[sLevel] || 0) + 1;
  });
  
  return {
    totalComponents,
    asilDistribution: asilCounts,
    severityDistribution: severityCounts,
    highestRiskComponents: getComponentsByASIL('D'),
    lowestRiskComponents: getComponentsByASIL('QM')
  };
}

// Make utility functions available globally
if (typeof window !== 'undefined') {
  window.getAllComponentNames = getAllComponentNames;
  window.getComponentsByASIL = getComponentsByASIL;
  window.getComponentsByCategory = getComponentsByCategory;
  window.getDatabaseStatistics = getDatabaseStatistics;
}
