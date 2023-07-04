function solution(n)
{
    var answer = 0;
    n = n + ""; // 문자열 변환
    
    for(let i = 0; i < n.length; i++) {
        answer += Number(n[i]);
    }

    return answer;
}

// function solution(n)
// {
//     var answer = 0;
//     const str = String(n);
//     const mapfn = (arg) => Number(arg);
//     const newArr = str.split('').map(mapfn);
    
//     for(let i = 0; i < newArr.length; i++) {
//         answer += newArr[i];
//     }

//     return answer;
// }