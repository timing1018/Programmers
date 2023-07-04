function solution(n)
{
    var answer = 0;
    const str = String(n);
    const mapfn = (arg) => Number(arg);
    const newArr = str.split('').map(mapfn);
    
    for(let i = 0; i < newArr.length; i++) {
        answer += newArr[i];
    }

    return answer;
}