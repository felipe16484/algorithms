// ! First line operation
// * S (split):  
// * 
let input = `S;M;plasticCup()\r\nC;V;mobile phone\r\nC;C;coffee machine\r\nS;C;LargeSoftwareBook\r\nC;M;white sheet of paper\r\nS;V;pictureFrame`;

function processData(input) {

    const arr = input.split('\r\n');
    const final_arr = [];
    let new_line = '';

    arr.forEach(key => {

        let new_str = '';
        
        if (key[0] === 'S'){

            if (key[2] === 'M'){

                new_str = key.toString().substring(4).split('');
                new_str.splice(new_str.length - 2, 2);
                let str = '';

                new_str.forEach((key,index) => {

                    if(key === key.toUpperCase()){
                        str = key.toLowerCase();
                        new_line += ' ';
                        new_line += str;
                    }else {
                        new_line += key;
                    }
                });

                
            }else if (key[2] === 'C'){

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
            }else if (key[2] === 'V'){

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
            }

        }else if (key[0] === 'C'){

            let str = '';

            if (key[2] === 'M'){
                
                new_str = key.substring(4).split(' ');
                for (let i = 0; i < new_str.length; i++) {
                    
                    if (i === 0){
                        new_line = new_str[i];
                    }else {
                        str = new_str[i][0].toUpperCase();
                        str += new_str[i].substring(1);     
                        new_line += str;
                    }
                }
                new_line += '()';

            }else if (key[2] === 'C'){

                new_str = key.toString().substring(4).split(' ');                
                for (let i = 0; i < new_str.length; i++) {
                    
                    str = new_str[i][0].toUpperCase();
                    str += new_str[i].substring(1);
                    new_line += str;
                    
                }

            }else if (key[2] === 'V'){

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