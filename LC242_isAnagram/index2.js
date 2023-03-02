//2nd way of solving isAnagram through 2 for loops (without using the third for loop)
//get the hm store first string chars and freq and then go to seond loop and if there is any out of bound char in s2 ,return false, else -- if mathces and match till it gets to zero , after 0 return false
const isAnagram = (s1,s2) => {
    if(s1.length!==s2.length){
        return false;
    }
    let hm =  new Map();
    for(let i=0;i<s1.length;i++){
        hm.has(s1[i]) ? hm.set(s1[i],hm.get(s1[i])+1) : hm.set(s1[i],1);
    }
    console.log(hm)
    for(let i=0;i<s2.length;i++){
        if(hm.has(s2[i]) && hm.get(s2[i])>0)
            hm.set(s2[i], hm.get(s2[i])-1)
        else
            return false;
    }
    return true;
}

console.log(isAnagram('aacc','ccac'));
module.export = isAnagram;