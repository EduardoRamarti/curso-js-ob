let i = 1;
let counter = 1;
while(true){
    if (i === 11){
        break;
    }else{
        counter *=i;
        i++;
    }
}
console.log(counter);