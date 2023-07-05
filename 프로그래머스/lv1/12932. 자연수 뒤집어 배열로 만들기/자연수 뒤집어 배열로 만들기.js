function solution(n) {
    let num = n + "";
    var answer = [];
    for(let i = num.length-1; i >= 0; i--) {
        answer.push(Number(num[i]));
    }
    return answer;
}