const componentsDB = {
  "brake system": { S: 3, E: 4, C: 3, asil: "D",
    reasons: {
      S: "Failure can cause fatal accidents (ISO 26262: S3)",
      E: "Braking is required in all driving scenarios (E4)",
      C: "Hard to control without functioning brakes (C3)"
    } 
  },
  "body control module": { S: 2, E: 4, C: 3, asil: "C",
    reasons: {
      S: "Loss impacts multiple vehicle systems (S2)",
      E: "Active in all driving conditions (E4)",
      C: "Loss of function could be difficult to manage (C3)"
    }
  }
  // Add more components here
};
