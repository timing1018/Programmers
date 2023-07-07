function solution(absolutes, signs) {
    
    let num = absolutes.map((value, index) => {
        return signs[index] ? value : -value;
    });
    return num.reduce((a, b) => a + b, 0);
}