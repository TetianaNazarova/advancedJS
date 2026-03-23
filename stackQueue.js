class StackQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.stack = [];
    }

    add(value) {
        this.stack.push(value);
    }

    remove() {
        if (this.stack.length === 0) {
            return false;
        }
        this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    isBalanced(arrOfBrackets) {
        const brackets = {
            ")": "(",
            "}": "{",
            "]": "[",
        }

        for (let char of arrOfBrackets) {
            if (char in brackets) {
                if (brackets[char] === this.peek()) {
                    this.remove();
                } else {
                    return false;
                }
            } else {
                this.add(char);
            }
        }
        return this.isEmpty();
    }
}

const myStack = new StackQueue();
myStack.isBalanced(["}", "{", "[", "]"]);
myStack.isBalanced(["[", "]"]);
