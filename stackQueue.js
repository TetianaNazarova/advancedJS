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
            "(": ")",
            "{": "}",
            "[": "]",
        }

        for (let i = 0; i < arrOfBrackets.length; i++) {
            if (arrOfBrackets[i] === brackets["("] || arrOfBrackets[i] === "{" || arrOfBrackets[i] === "[") {
                this.add(arrOfBrackets[i]);
            } else if (arrOfBrackets[i] === ")" && this.peek() === "(") {
                this.remove()
            }  else if (arrOfBrackets[i] === "}" && this.peek() === "{") {
                this.remove()
            }  else if (arrOfBrackets[i] === "]" && this.peek() === "[") {
                this.remove()
            } else {
                return false
            }
        }
        return this.isEmpty();
    }
}

const myStack = new StackQueue();
myStack.isBalanced(["}", "{", "[", "]"]);
myStack.isBalanced(["[", "]"]);
