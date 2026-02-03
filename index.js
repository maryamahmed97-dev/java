let monthlyCost = 350;
let monthsNumbers = +prompt("Enter number of months? ");
let finalPrice = monthlyCost * monthsNumbers;
let discount = 0;
let wantsPt = confirm("Do you want personal training?");
let PersonalTrainingCost = 200;
let vat = 0;

if (monthsNumbers >= 6 && monthsNumbers < 12) {
  discount = (10 / 100) * finalPrice;
} else if (monthsNumbers >= 12) {
  discount = (15 / 100) * finalPrice;
}
finalPrice = finalPrice - discount;

if (wantsPt == true) {
  finalPrice = finalPrice + PersonalTrainingCost;
}

vat = 0.14 * finalPrice;

console.log("Discount:", discount);
console.log("Vat:", vat);
console.log("Final price:", finalPrice);
