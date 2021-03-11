function chuckPushUps(string) {
    if (!string || typeof string !== 'string' && !(string instanceof String)) return 'FAIL!!';
    if (!/1/.test(string)) return 'CHUCK SMASH!!';
    return Math.max(...string.split(/\s+/).map(s => parseInt(s.replace(/[^01]+/g, ''), 2)).filter(x => x));
}
