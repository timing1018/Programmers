function solution(n) {
    arr = (n+"").split("").sort((a, b) => b - a).join("");
    return Number(arr);
}