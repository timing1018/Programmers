function solution(s) {
    var answer = Math.floor(s.length / 2);
    
    if(s.length % 2 == 0) {
        return s.substring(answer - 1, answer + 1);
    } else {
        return s.charAt(answer);
    }
}