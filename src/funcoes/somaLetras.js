/**
 * @param {string} string1 
 * @param {string} string2
 * @return {number}  
 */
const lettersSum = (string1, string2) => {
    var alfabeto ='abcdefghijklmnopqrtuvwyxz'
    var listaAlfabeto=[];
    for(let i=0;i<26;i++){
        listaAlfabeto.push(alfabeto[i]);
    }
    var menor1=listaAlfabeto.indexOf(string1[0]);
    var maior1=listaAlfabeto.indexOf(string1[0]);
    var menor2=listaAlfabeto.indexOf(string2[0]);
    var maior2=listaAlfabeto.indexOf(string2[0]);
    for(let i=1;i<string1.length;i++){
        var pos1 = listaAlfabeto.indexOf(string1[i]);
        var pos2 = listaAlfabeto.indexOf(string2[i]);
        if(pos1<menor1){
            menor1=pos1;
        }else if(pos1>maior1){
            maior1=listaAlfabeto[pos1];
        }if(pos2<menor2){
            menor2=pos2;
        }else if(pos2>maior2){
            maior2=pos2;
        }
    }
    var resultado = ((maior1+1) * (menor2+1))+((maior2+1) * (menor1+1));
    return Number(resultado);
}

export default lettersSum;