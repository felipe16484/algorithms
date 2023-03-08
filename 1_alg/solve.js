let pos = 0;
let neg = 0;
let zero = 0;

//! El ejercicio en la página no necesita esta línea porque la función en la cual uno incluye el código ya tiene el array
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

// ? El método .toFixed()

let res_pos = pos.toFixed(6);
let res_neg = neg.toFixed(6);
let res_zero = zero.toFixed(6);

console.log(res_pos,'\n',res_neg,'\n',res_zero);