function getOrdinalSuffix(n) {
    const suffix = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];
    if (n % 100 >= 11 && n % 100 <= 13) {
      return 'th';
    } else {
      return suffix[n % 10];
    }
  }
  
  function hideNumbers() {
    document.getElementById("nfact").textContent = "";
    document.getElementById("nfacttitle").textContent = "";
    document.getElementById("nsum").textContent = "";
    document.getElementById("nsumtitle").textContent = "";
    document.getElementById("navg").textContent = "";
    document.getElementById("navgtitle").textContent = "";
  }
  
  function showNumbers() {
    const n = parseInt(document.getElementById("n").value);
    const max = 999999999;
  
    if (n > max) {
      alert("Please enter up to 9 digits only.");
      document.getElementById("n").value = "";
      return;
    }
  
    if (isNaN(n)) {
      document.getElementById("nfact").textContent = "";
      document.getElementById("nfacttitle").textContent = "";
      document.getElementById("nsum").textContent = "";
      document.getElementById("nsumtitle").textContent = "";
      document.getElementById("navg").textContent = "";
      document.getElementById("navgtitle").textContent = "";
      return;
    }
  
    let i = 1;
    let nfact = 1;
    while (i <= n) {
      nfact *= i;
      i++;
    }
  
    i = 1;
    let nsum = 0;
    do {
      nsum += i;
      i++;
    } while (i <= n);
  
    let navg = 0;
    for (i = 1; i <= n; i++) {
      navg += i;
    }
    navg /= n;
  
    document.getElementById("nfact").textContent = nfact;
    document.getElementById("nfacttitle").innerHTML = "The " + n + getOrdinalSuffix(n) + " factorial number is:";
    document.getElementById("nsum").textContent = nsum;
    document.getElementById("nsumtitle").innerHTML = "The sum of the first " + n + " numbers is:";
    document.getElementById("navg").textContent = navg;
    document.getElementById("navgtitle").innerHTML = "The average of the first " + n + " numbers is:";
  }