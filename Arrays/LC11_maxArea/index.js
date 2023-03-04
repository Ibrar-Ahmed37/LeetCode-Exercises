// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

//Approach: make pointers left and right then cacl current area by the formula and mult with right-left
//update the maxarea accordingly and then inc or dec the pointers if anyone of them is less, the greater pointer value one will be at the same place
const maxArea = (height) => {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1 ;
    while(left<right){
        const currentArea = Math.min(height[left],height[right]) * (right-left);
        maxArea = Math.max(maxArea,currentArea);

        if(height[left]>height[right]){
            right--;
        }
        else{
            left++;
        }
    }
    return maxArea;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));