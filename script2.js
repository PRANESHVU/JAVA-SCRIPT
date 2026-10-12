let Calculate;
do{
let Name=prompt("Name of the student");
let m1=  Number(prompt ("Mark 1"));
let m2=  Number(prompt ("Mark 2"));
let m3=  Number(prompt ("Mark 3"));
if (m1< 0 || m1 > 100 || m2< 0 || m2 > 100 || m3< 0 || m3 > 100){
   alert("ERROR");
}
else{
function op(a,b,c){
    let Total=a+b+c;
    let Avg=Total/3;
    return{T:Total,A:Avg};
   }
let fun= op(m1,m2,m3); 
let TOTAL=fun.T;
let AVERAGE=fun.A;
let Grade;
     if( AVERAGE >=90){
        Grade='A';
     }
     else if( AVERAGE >=75){
        Grade='B';
     }
     else if( AVERAGE >=50){
        Grade='C';
     }
     else if( AVERAGE <50){
        Grade='F';
     }
 alert("NAME:"+ Name +"\n"+
      "TOTAL:"+ TOTAL +"\n"+
      "AVERAGE:"+ AVERAGE +"\n"+
      "GRADE:"+ Grade);
     }
Calculate= confirm("Do You Want To Calculate Marks For Another Student?");
 }
 while(Calculate);
 alert("PROGRAM PINISH!!")
