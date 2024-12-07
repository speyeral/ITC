let payroll = [];

function initpayroll() {
  showpayroll();
}

function addtopayroll() {
  const employeeName = document.getElementById("emname").value;
  const daysWorked = parseInt(document.getElementById("days").value);
  const dailyRate = parseInt(document.getElementById("drate").value);
  const deductionAmt = parseInt(document.getElementById("damount").value);

  if (!employeeName || !daysWorked || !dailyRate || !deductionAmt) {
    alert("Please fill in all fields.");
    return;
  }

  const payrollLine = {
    employeeName,
    daysWorked,
    dailyRate,
    deductionAmt,
    grossPay() {
      return daysWorked * dailyRate;
    },
    netPay() {
      return this.grossPay() - deductionAmt;
    }
  };

  payroll.push(payrollLine);
  document.getElementById("items").value = payroll.length;
  showpayroll();
}

function deletelinenum() {
  const lineNo = parseInt(document.getElementById("dellinenum").value);

  if (isNaN(lineNo) || lineNo < 1 || lineNo > payroll.length) {
    alert("Invalid line number. Please enter a valid number.");
    return;
  }

  if (confirm("Delete line no. " + lineNo + "?")) {
    payroll.splice(lineNo - 1, 1);
    document.getElementById("items").value = payroll.length;
    showpayroll();
  }
}

function showpayroll() {
  let theader = "<thead><tr><th>Line No.</th><th>Employee Name</th><th>Days Worked</th><th>Daily Rate</th><th>Gross Pay</th><th>Deduction Amount</th><th>Net Pay</th></tr></thead>";
  let tbody = "";
  let tfooter = `<tfoot></tfoot>`;
  let totalAmount = 0;

  payroll.forEach((line, index) => {
    totalAmount += line.netPay();
    tbody += `<tr><td>${index + 1}</td><td>${line.employeeName}</td><td>${line.daysWorked}</td><td>${line.dailyRate}</td><td>${line.grossPay()}</td><td>${line.deductionAmt}</td><td>${line.netPay()}</td></tr>`;
  });

  document.getElementById("table").innerHTML = `<table>${theader}${tbody}${tfooter}</table>`;
}

window.onload = initpayroll;