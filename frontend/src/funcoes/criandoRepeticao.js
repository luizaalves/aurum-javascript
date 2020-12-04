/**
 * @param {string} string  
 * @param {number} times 
 * @return {string}  
 */
const replaceChar = (string, times) => {
    for(let i=0;i<string.length;i++){
        if(string[i]==='?'){
            if(i===0){
                string = string.substring(1);
                console.log(string[string.length-1]);
                for(let k=1;k<string.length;k++){
                    if(string[string.length-k]!=='?'){
                        var strTemp='';
                        for(let j=0;j<times;j++){
                            strTemp=strTemp + string[string.length-k];
                        }
                        string=strTemp+string;
                        break;
                    }
                }
                
            }else{
                var pieceOne=string.substring(0,i);
                var pieceTwo=string.substring(i+1,string.length);
                for(let j=0;j<times;j++){
                    pieceOne=pieceOne+ string[i-1];
                }
                string = pieceOne+pieceTwo;
                console.log(string);
            }
            
        }
    }
    return string;
}

export default replaceChar;