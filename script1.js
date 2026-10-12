
const menu = [
  { item: "Chips", price: 20 },
  { item: "Soda", price: 35 },
  { item: "Chocolate", price: 50 },
  { item: "Cookies", price: 40 },
  { item: "Juice", price: 30 }
];


function displayMenu() {
  console.log("Available Items:");
  menu.forEach((m, i) => console.log(`${i + 1}. ${m.item} - ₹${m.price}`));
}


function calculateChange(amount, price) {
  return amount - price;
}


function countdown() {
  for (let i = 3; i >= 1; i--) {
    console.log(`Preparing your item in ${i}...`);
  }
  console.log("Your item is ready! Enjoy!");
}


function vendingMachine() {
  let continueProcess = true;

  while (continueProcess) {
    displayMenu();
    let choice = parseInt(prompt("Enter the item number (1-5):"));
    let money = parseFloat(prompt("Enter the amount of money you have:"));

    if (isNaN(choice) || choice < 1 || choice > 5) {
      alert("Invalid item number. Please try again.");
      continue;
    }

    if (isNaN(money) || money <= 0) {
      alert("Invalid money amount. Please enter a positive value.");
      continue;
    }

    let selectedItem = menu[choice - 1];
    let price = selectedItem.price;

    if (money < price) {
      alert("Insufficient funds. Please add more money.");
    } else {
      let change = calculateChange(money, price);
      alert(`You purchased ${selectedItem.item}. Your change is ₹${change}.`);
      countdown();
    }

    let again = confirm("Do you want to buy another item?");
    if (!again) {
      alert("Thank you for using the vending machine. Goodbye!");
      continueProcess = false;
    }
  }
}


vendingMachine();
