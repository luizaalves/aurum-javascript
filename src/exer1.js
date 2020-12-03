/**
 * @param {string} string  
 * @param {number} limit 
 * @return {string}  
 */
const removeRepeated = (string, limit) => {
    for(let i=0;i<string.length;i++){
        let count = 1;
        if(i+1!=string.length){
            let j = i+1;
            while(j<string.length){
                if(string[i]==string[j]){
                    if(count==limit){
                        var pieceOne=string.substring(0,j);
                        var pieceTwo=string.substring(j+1,string.length);
                        string = pieceOne+pieceTwo;
                    }else {
                        count++;
                        j++;
                    }
                }else break;
            }
        }
    }
    return string;
}

//export default removeRepeated;
module.exports = removeRepeated;