process.stdin.setEncoding('utf8');
process.stdin.on('data', data => { // 입력받은 숫자 "data"에 저장
    const n = data.split(" "); // data 배열로 변환
    const a = Number(n[0]), b = Number(n[1]); // a=몇개의 별 , b=몇 줄
    
    for (let i = 0; i < b; i++) {
        let star = '';
        for (let j = 0; j < a; j++) {
            star += '*';
        }
        console.log(star);
    }
});