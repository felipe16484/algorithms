const arr = [10,5,20,20,4,5,2,25,1]

function breakingRecords(scores) {
    // Write your code here
    let min = scores[0];
    let max = scores[0];
    let min_count = 0;
    let max_count = 0;
    let arr = [];
        
    scores.forEach( (key) => {
        
        if(key > max){
            max=key;
            max_count++;
        }else if (key < min){
            min=key;
            min_count++;            
        }
    })
    
    arr.push(max_count);
    arr.push(min_count);
    
    console.log(arr);
}

breakingRecords(arr);
