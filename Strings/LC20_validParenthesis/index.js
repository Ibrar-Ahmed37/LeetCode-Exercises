// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true

//Approach: I will use a stack and push the left elements in there( '(' , '{' , '[' ) and whenever a right element  ( ')' , '}' , ']' )  comes i pop the top of stack and compare if not equal to the left element then return false
// else continue popping the stack top and at the end compare the length of stack( imp ) to equal to 0 so we know there were equal open and left elements there

const validParenthesis = s => {
    if(!s){
        return true;
    }
    let stack = [];
    let hashMap = {'(':')','[':']','{':'}'};
    for(let i=0;i<s.length;i++){
        let char = s[i];
        if(hashMap[char]){
            stack.push(char);
        }
        else if(hashMap[stack.pop()] !== char){
            return false;
        }
    }
    return stack.length===0;
}

console.log(validParenthesis('()[]{}'))