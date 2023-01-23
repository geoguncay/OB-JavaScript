//facorial con el bucle while

let factorial = 1;
count = 1;


while(count <= 20){
  factorial *=count;
  console.log(factorial);
  if(count==10){
    break;
  }
  count++;
}