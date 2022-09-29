import LogIt from '../shared/LogIt'

export default function SplitString(str, delim) {

    //LogIt(`SplitString--> ${ str } delim ${delim}`)
    
    const pos = str.indexOf(delim);
    
   
    return str.slice(pos + 2,str.length);

   
}