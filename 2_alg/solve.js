let arr = [1,3,5,7,9];
let min = arr[0];
let max = arr[0];
let total_max = 0;
let total_min = 0;

arr.forEach(key => {
    if (key > max){
        max = key;
    }else if (key < min){
        min = key;
    }
});
arr.forEach(key => {total_max += key})
let max_sum = total_max - min;

arr.forEach(key => {total_min += key})
let min_sum = total_min - max;


console.log(min_sum,max_sum);