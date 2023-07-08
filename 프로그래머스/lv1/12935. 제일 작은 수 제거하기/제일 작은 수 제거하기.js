function solution(arr) {
    
    var answer = Math.min(...arr);
    
    if(arr.length <= 1) return [-1];
 
    return arr.filter((num) => num !== answer);
}