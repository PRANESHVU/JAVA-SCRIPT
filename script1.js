console.log("1.Milkshake-70Rs")
console.log("2.Brownie-50Rs")
console.log("3.Hide&Seek-30Rs")
console.log("4.Soan Papdi-40Rs")
console.log("5.Fizz-20Rs")


let PRICE ={1: 70, 2: 50, 3: 30, 4: 40, 5: 20};

let ORDER;
do{
let ITEM = Number(prompt("SLECT AN ITEM(1-5):"));
let MONEY= Number(prompt("HOW MUCH MONEY DO YOU HAVE?"));

if( Number.isNaN(ITEM) || ITEM > 5 || ITEM <= 0){
    alert("THE ENTERED VALUE IS INVALID!!");
}
else{
    function Change(M,I){
        let itemPrice = PRICE[I]; 
        
        if(M < itemPrice){
            alert("INSUFFICIENT BALANCE!!");
        }
        else{
            alert("ITEM PRICE : " + itemPrice);
            alert("YOUR CAHNGE IS : " + (M - itemPrice));
            
            let currentCount = 3;
            const countdownTimer = setInterval(() => {
              if (currentCount > 0) {
                console.log(currentCount);
                currentCount = currentCount - 1; 
              } else {
                clearInterval(countdownTimer);
                alert("Your Item Is Dispensed !!");
              }
            }, 500);
        }
    }
    
    Change(MONEY, ITEM);

    ORDER = confirm("DO YOU WANT TO ORDER AGAIN?");
}
}
while(ORDER);
alert("ARIGATO GOZAIMASU !!");

