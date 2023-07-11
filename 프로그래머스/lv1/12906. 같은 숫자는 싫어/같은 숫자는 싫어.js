function solution(arr)
{
    const answer = [];
    let n = [];
    
    for(let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if(num !== n) {
            answer.push(num);
            n = num;
       }
    }
    return answer;
}