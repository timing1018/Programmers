function solution(n, m) {
    let gcd = n;
    let lcm = m;
    
    while(lcm !== 0) {
        const num = lcm;
        lcm = gcd % lcm;
        gcd = num;
    }
    
    lcm = (n * m) / gcd;
    return [gcd, lcm];
}