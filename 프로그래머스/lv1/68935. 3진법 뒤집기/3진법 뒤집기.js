function solution(n) {
    const reversed = n.toString(3).split('').reverse().join('');
    return parseInt(reversed, 3);
}