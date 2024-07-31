document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculator-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const energyConsumption = parseFloat(document.getElementById('energy-consumption').value);
        const solarPanelCost = parseFloat(document.getElementById('solar-panel-cost').value);
        const averageSunHours = parseFloat(document.getElementById('average-sun-hours').value);
        
        // Simple calculation for demonstration purposes
        const systemSize = energyConsumption / (averageSunHours * 30); // kW
        const totalCost = systemSize * solarPanelCost;
        const savings = (energyConsumption * 0.12 * 12) - totalCost; // Assuming $0.12/kWh
        
        document.getElementById('savings-result').textContent = `Estimated Savings: $${savings.toFixed(2)}`;
    });
});
