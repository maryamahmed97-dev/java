let itemPrice = +prompt("enter item price?");
let quantity = +prompt("Enter quantity?");
let coupon = +prompt("Enter coupon discount % (لو مفيش 0)");

let finalPrice = itemPrice * quantity;
let discount = finalPrice * (coupon / 100);
let vat = 0;

finalPrice = finalPrice - discount;
if (finalPrice >= 1000) {
  shipping = 0;
} else {
  shipping = 60;
}
finalPrice = finalPrice + shipping;
vat = (14 / 100) * finalPrice;
finalPrice = finalPrice + vat;

console.log("Item Price:" + itemPrice);
console.log("Quantity:" + quantity);
console.log("Discount:" + discount);
console.log("Vat:" + vat);
console.log("Final price:" + finalPrice);