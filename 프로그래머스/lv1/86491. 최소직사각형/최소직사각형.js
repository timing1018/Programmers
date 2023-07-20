function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    for (const [width, height] of sizes) {
        const [w, h] = [Math.max(width, height), Math.min(width, height)];
        maxWidth = Math.max(maxWidth, w);
        maxHeight = Math.max(maxHeight, h);
    }

    return maxWidth * maxHeight;
}