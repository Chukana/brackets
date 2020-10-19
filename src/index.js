module.exports = function check(str, bracketsConfig) {
    // your solution
    /*let arr = str.split();
    for (let i = 0; i < bracketsConfig.length; i++) {
        let open = bracketsConfig[i][0];
        let close = bracketsConfig[i][1];
        let a = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === open) {
                a = a + 1;
            }
            if (arr[j] === close) {
                a = a - 1;
            }
            if (a < 0) {
                return false;
            }
        }
        if (a > 0) {
            return false;
        }
    }
	return true;
	*/
	const arr = str.split();
	const counters = new Array(bracketsConfig.length);
	counters.fill(0);
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < bracketsConfig.length; j++) {
			if (bracketsConfig[j][0] !== bracketsConfig[j][1]) {
				if (arr[i] === bracketsConfig[j][0]) {
					counters[j] += 1;
				}
				if (arr[i] === bracketsConfig[j][1]) {
					counters[j] -= 1;
				}
				for (let k = 0; k < counters.length; k++) {
					if (counters[k] < 0) return false;
				}
			}
		}
	}
	for (let k = 0; k < counters.length; k++) {
		if (counters[k] > 0) return false;
	}	
	return true;
};
