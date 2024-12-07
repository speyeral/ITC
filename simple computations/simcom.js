function compcel() { // Fahrenheit to Celsius
    var fahrenheit = document.getElementById("fah").value * 1;
  
    let celsius = (fahrenheit - 32) * 5 / 9;
  
    document.getElementById("cellabel").innerHTML = 'The conversion of ' + fahrenheit + ' Fahrenheit into Celsius is:';
    document.getElementById("celsius").value = celsius.toFixed(2);
  }
  
  function celfor() {
    var fahrenheit = document.getElementById("fah").value * 1;
  
    document.getElementById("cellabel").innerHTML = 'To convert ' + fahrenheit + ' Fahrenheit into Celsius, subtract ' + fahrenheit + ' by 32 and multiply it by 5/9, which results in:';
  }
  
  function compfah() { // Celsius to Fahrenheit
    var celsius = document.getElementById("c").value * 1;
  
    let fahrenheit = (celsius * 9 / 5) + 32;
  
    document.getElementById("fahlabel").innerHTML = 'The conversion of ' + celsius + ' Celsius into Fahrenheit is:';
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  }
  
  function fahfor() {
    var celsius = document.getElementById("c").value * 1;
  
    document.getElementById("fahlabel").innerHTML = 'To convert ' + celsius + ' Celsius into Fahrenheit, add ' + celsius + ' by 32 and multiply it by 9/5, which results in:';
  }
  
  function compfet() { // Meters to Feet
    var meters = document.getElementById("m").value * 1;
  
    let feet = meters * 3.281;
  
    document.getElementById("fetlabel").innerHTML = 'The conversion of ' + meters + ' meters into feet is:';
    document.getElementById("feet").value = feet.toFixed(2);
  }
  
  function fetfor() {
    var meters = document.getElementById("m").value * 1;
  
    document.getElementById("fetlabel").innerHTML = 'To convert ' + meters + ' meters into feet, multiply ' + meters + ' by 3.281, which results in:';
  }
  
  function compmet() { // Feet to Meters
    var feet = document.getElementById("f").value * 1;
  
    let meters = feet / 3.281;
  
    document.getElementById("metlabel").innerHTML = 'The conversion of ' + feet + ' feet into meters is:';
    document.getElementById("meters").value = meters.toFixed(2);
  }
  
  function metfor() {
    var feet = document.getElementById("f").value * 1;
  
    document.getElementById("metlabel").innerHTML = 'To convert ' + feet + ' feet into meters, divide ' + feet + ' by 3.281, which results in:';
  }