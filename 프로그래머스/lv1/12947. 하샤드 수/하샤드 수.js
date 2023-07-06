function solution(x) {
    let num = (x+"").split("").reduce((a,b)=> a + Number(b), 0)
    return (x % num) == 0 ? true : false ;
}