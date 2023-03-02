// 'hello' and 'eholl' are anagrams , two strings are anagram if they have same character with same frequency'
//approach used: two loop for each string and store in hm and then another loop to compare the 

const isAnagram = (s1, s2) => {
    if(s1.length !== s2.length){
        return false;
    }
    const hm1 = new Map();
    const hm2 = new Map();
    for(let i=0;i<s1.length;i++)
    {
        if(hm1.has(s1[i])){
            hm1.set(s1[i],hm1.get(s1[i])+1);
        }
        else
            hm1.set(s1[i],1);
    }
    for(let i=0;i<s2.length;i++)
    {
        if(hm2.has(s2[i])){
            hm2.set(s2[i],hm2.get(s2[i])+1);
        }
        else
            hm2.set(s2[i],1);
    }
    for(let i=0;i<s1.length;i++)
    {   
        if(hm1.get(s1[i])!== hm2.get(s1[i])){
            return false;
        }
    }
    return true;
}
console.log(isAnagram('abcde','bcaef'))
module.export = isAnagram;