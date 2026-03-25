class Stack {
    constructor() {
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

const myStack = new Stack();
myStack.isBalanced(["}", "{", "[", "]"]);
myStack.isBalanced(["[", "]"]);


class Queue {
    constructor() {
        this.elements = [];
        this.head = null;
        this.tail = null;

    }

    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }

    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }

    peek() {
        return this.elements[this.head];
    }

    get length() {
       return this.tail - this.head;
    }

    get isEmpty() {
        return this.length === 0;
    }
}

const myQueue = new Queue();

for (let i = 0; i <= 10; i++) {
    myQueue.enqueue(i);
}

while (!myQueue.isEmpty) {
    myQueue.dequeue();
}