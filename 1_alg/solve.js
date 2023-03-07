let pos;
let neg;
let zero;

let arr = [1,1,0,-1,-1];

arr.forEach(key => {
    if(key > 0){
        pos++;
    }else if (key < 0){
        neg++;
    }else{
        zero++;
    }
});

pos  = pos/arr.length;
neg  = neg/arr.length;
zero = zero/arr.length;

pos = pos.toFixed(6);
neg = neg.toFixed(6);
zero = zero.toFixed(6);

console.log(pos,' ',neg,' ',zero);