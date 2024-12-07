function compintax() {
    var taxableIncome = document.getElementById("taxin").value * 1;
    var incomeTax = 0;
  
    if (taxableIncome < 0) {
      alert("Please enter a valid positive number to compute taxable income.");
      incomeTax = "";
      return;
    }
  
    if (taxableIncome <= 250000) {
      incomeTax = 0;
    } else if (taxableIncome <= 400000) {
      incomeTax = 0.20 * (taxableIncome - 250000);
    } else if (taxableIncome <= 800000) {
      incomeTax = 30000 + 0.25 * (taxableIncome - 400000);
    } else if (taxableIncome <= 2000000) {
      incomeTax = 130000 + 0.30 * (taxableIncome - 800000);
    } else if (taxableIncome <= 8000000) {
      incomeTax = 490000 + 0.32 * (taxableIncome - 2000000);
    } else {
      incomeTax = 2410000 + 0.35 * (taxableIncome - 8000000);
    }
  
    document.getElementById("intax").value = incomeTax;
  }