/**
 * @param {string} string  
 * @param {number} limit 
 * @return {string}  
 */
const removeRepeated = (string, limit) => {
    for(let i=0;i<string.length;i++){
        let count = 1;
        if(i+1!=string.length){
            for(let j=i+1;j<string.length;j++){
                if(string[i]==string[j]){
                    if(count==limit){
                        var pieceOne=string.substring(0,j-1);
                        var pieceTwo=string.substring(j+1,string.length);
                        string = pieceOne+pieceTwo;
                    }else count++;
                }else break;
            }
        }
    }
    return string;
}

export default removeRepeated;