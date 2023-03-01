//THis is the Program to return the longest common substring without repititions
//I have used the sliding window approach here , the window slides and will update the maxlength if the window length is more than the last maxlength(initially set to 0)

const longestSubstring = (s) =>{
    let startIndex = 0;
    let hashMap = new Map()
    let maxlength = 0;
    let windowLength = 0;
    for( let i=0; i<s.length; i++){
        if(hashMap.has(s[i])){
            if(hashMap.get(s[i])+1>=startIndex)
            {
                startIndex = hashMap.get(s[i])+1;
            }
            console.log(maxlength)
            console.log("SI "+startIndex);
            hashMap.set(s[i],i);
        }
        //if the char is not in the hashmap before
        else{
            hashMap.set(s[i],i);
        }
        windowLength = i - startIndex+1;
        if(windowLength>maxlength){
            maxlength=windowLength;
        }
    }
    console.log("MAX IS "+maxlength);
    console.log("SI IS "+startIndex);
}
longestSubstring('hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
module.exports = longestSubstring;