// ! First line operation
// * S (split):  
// * 
let input = `S;M;plasticCup()\r\nC;V;mobile phone\r\nC;C;coffee machine
S;C;LargeSoftwareBook\r\nC;M;white sheet of paper\r\nS;V;pictureFrame`;

function processData(input) {

    const arr = input.split('\r\n');
    const final_arr = [];
    let new_line = '';
    
    arr.forEach(key => {

        let new_str = '';
        
        if (key[0] === 'S'){

           new_str = key.toString().substring(4);
           
            for (let i = 0; i < new_str.length; i++) {
                if(new_str[i] === new_str[i].toUpperCase()){
                    if (i === 0) {
                        new_line += new_str[i].toLowerCase();
                    } else {
                        new_line += " " + new_str[i].toLowerCase();
                    }
                } else {
                    new_line += new_str[i];
                }
            }

        }else if (key[0] === 'C'){
            
            if (key[2] === 'M'){

                let str = '';
                new_str = key.toString().substring(4).split(' ');      
                for (let i = 0; i < new_str.length; i++) {
                    if (i === 0){
                        new_line += new_str[i];
                    }else {                        
                        str = new_str[i][0].toUpperCase();
                        str += new_str[i].substring(1);
                        new_line += str + '()';
                    }
                }
                
            }else if (key[2] === 'C'){

                let str = '';
                new_str = key.toString().substring(4).split(' ');                
                for (let i = 0; i < new_str.length; i++) {
                    
                    str = new_str[i][0].toUpperCase();
                    str += new_str[i].substring(1);
                    new_line += str;
                    
                }

            }else if (key[2] === 'V'){

                let str = '';
                new_str = key.toString().substring(4).split(' ');                 
                for (let i = 0; i < new_str.length; i++) {
                    if (i === 0){
                        new_line += new_str[i];
                    }else {
                        
                        str = new_str[i][0].toUpperCase();
                        str += new_str[i].substring(1);
                        new_line += str;
                    }
                }
            }
        }
        final_arr.push(new_line);
        new_line = '';
    });

    final_arr.forEach(key => {
        console.log(key);
    })
}

processData(input);