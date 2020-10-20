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
	function peek(stack) {
		return stack[stack.length - 1]
	}

	// creating stack
    let stack = [];
    stack.push();
    stack.pop();
    // iterate for each letter of the str
    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i);
        //if letter is an opening paren push it to the stack
        if (letter === "(") {
            stack.push(letter);
        } else if (letter === ")") {
            //if letter is an closing parent make sure it has a matching paren
            if (peek(stack) === "(") {
                stack.pop();
            } else {
                return false;
            }
		} 
		if (letter === "[") {
            stack.push(letter);
        } else if (letter === ']') {
			if (peek(stack) === '[') {
				stack.pop();
			} else {
				return false;
			}
		}
		if (letter === "{") {
            stack.push(letter);
        } else if (letter === '}') {
			if (peek(stack) === '{') {
				stack.pop();
			} else {
				return false;
			}
		}
    }
    return stack.length === 0;
};
