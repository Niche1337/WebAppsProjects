const taxing = taxe => {
    
  let tax = parseInt(taxe);

  if (num > 10000 && num <= 30000) {
    tax += Math.floor(num - 10000 * 0.1);
  }

  if (num > 30000 && num <= 100000) {
    tax += Math.floor(num - 30000 * 0.25) + 2000;
  }

  if (num > 100000) {
    tax += Math.floor(num - 100000 * 0.4) + 19500;
  }
  return tax;

}

const printTax = () => {
  alert(taxing(document.getElementById("preTaxValue").value));
  var htmlText = "<p>" + taxing(document.getElementById("preTaxValue").value) + "</p>";
  document.getElementById("taxValue").innerHTML = htmlText;
}

document.getElementById("loadValue").addEventListener("click", printTax, false);
