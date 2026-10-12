let perform;
do{
let Num= Number(prompt("ENTER NUMBER"));
if(Num%2==0){
    alert("Number is EVEN");
}
else{
    alert("Number is odd");
}
function MT(N){
    let output= "Mutliplication Table for " + N + ":\n";
    for(let i=1;i<=10;i++){
        let result = N*i;
        output += N + "x" + i +"=" + result + "\n";
    }
    alert(output);
}
MT(Num);

let SUM =0;
for(i=1;i<=Num;i++){
    SUM+=i;
}
alert("THE SUM OF FIRST 'N' NATURAL NUMBERS IS : " + SUM);

let pat="Right Angle Triangle: \n";
for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        pat+="*";
    }
    pat+="\n";
}
alert(pat);
perform= confirm("DO YOU WANT TO RUN THE PROGRAM AGAIN?");
}
while(perform);
alert("PROGRAM PINISH !!");
