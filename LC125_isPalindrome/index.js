const palindrome = (word) => {
    //sanitizing the input first
    //convert to lowercase and remove non-alphanumeric chars
    word = word.toLowerCase().replace(/\W_/g,"");

    let left = 0;
    let right = word.length-1;

    while(left<right)
    {
        if(word[left] !== word[right]){
            return false
            break;
        }
        left++;
        right--;
    }
    return true;
}
module.exports = palindrome;