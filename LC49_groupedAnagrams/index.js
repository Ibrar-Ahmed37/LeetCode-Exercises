//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
//Input: strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const groupedAnagrams = (strs) => {
    
    const groupedObj =  {};
    for(let i=0;i<strs.length;i++){
        let word = strs[i];
        let extractedWord = word.split('').sort().join(''); //example : eat , first make it to e,a,t via split then sort all chars and then combine chars into string via join
        if(!groupedObj[extractedWord])
             groupedObj[extractedWord]=[];
        groupedObj[extractedWord].push(word);
    }
    return Object.values(groupedObj) //built in js method 
}

console.log(groupedAnagrams(['abc','cat','sad','das','bat','tab','cab']));