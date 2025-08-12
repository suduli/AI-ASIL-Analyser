document.addEventListener("DOMContentLoaded", () => {
  const featureInput = document.getElementById("featureInput");
  const analyzeBtn = document.getElementById("analyzeBtn");
  const secTable = document.getElementById("secTable");
  const asilLevel = document.getElementById("asilLevel");
  const sourceTag = document.getElementById("sourceTag");
  const reasoning = document.getElementById("reasoning");

  // Populate datalist
  const list = document.getElementById("componentList");
  Object.keys(componentsDB).forEach(key => {
    const opt = document.createElement("option");
    opt.value = key;
    list.appendChild(opt);
  });

  function calcASIL(S, E, C) {
    // Simple ISO 26262 matrix logic placeholder
    const matrix = {
      "S3E4C3": "D",
      "S2E4C3": "C",
      "S3E4C2": "C"
      // Expand as needed
    };
    return matrix[`S${S}E${E}C${C}`] || "QM";
  }

  function renderTable(S, E, C, reasons) {
    secTable.innerHTML = `
      <tr><td>Severity</td><td>S${S}</td><td>${reasons?.S || ""}</td></tr>
      <tr><td>Exposure</td><td>E${E}</td><td>${reasons?.E || ""}</td></tr>
      <tr><td>Controllability</td><td>C${C}</td><td>${reasons?.C || ""}</td></tr>
    `;
  }

  analyzeBtn.addEventListener("click", () => {
    const feature = featureInput.value.trim().toLowerCase();
    if (componentsDB[feature]) {
      const { S, E, C, asil, reasons } = componentsDB[feature];
      renderTable(S, E, C, reasons);
      asilLevel.textContent = asil;
      sourceTag.textContent = "Source: Database";
      reasoning.textContent = "Using predefined ISO 26262 database entry.";
    } else {
      asilLevel.textContent = "QM";
      sourceTag.textContent = "Source: AI (to be integrated)";
      reasoning.textContent = "Fetching AI analysis...";
    }
  });
});
