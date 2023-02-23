
const longestPalindrome = (s) => {
    let startIndex = 0;
    let maxlength = 1;
    let currentPalLength = 0;
    const expandAroundMiddle = (left,right) =>{
        while(left>=0 && right<s.length && s[left]===s[right]){
            currentPalLength = right - left + 1;
            if(currentPalLength > maxlength){
                maxlength = currentPalLength;
                startIndex = left;
            }
            left--;
            right++;
        }
    }

    for(let i=0;i<s.length;i++){
        expandAroundMiddle(i,i+1);  //for odd ones 'daadc'
        expandAroundMiddle(i-1,i+1);    //for even ones 'mamc'
    }
    console.log(s.slice(startIndex,startIndex+maxlength))
}
longestPalindrome("abad");
module.exports = longestPalindrome;