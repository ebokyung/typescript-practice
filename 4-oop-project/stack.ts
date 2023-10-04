{
interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

class OneNode {
    constructor(private pre: any, private value: string){}
}

class Stack implements Stack {
    // private size: number = 0;
    private head: any = null;
    constructor(){}
    push(value: string): void{
        const newNode = new OneNode(this.head, value)
        this.head = newNode;
        // this.size++;
    }
    pop(): string {
        const curNode = this.head;
        this.head = curNode.pre;
        // this.size--;
        return curNode.value;
    }
}

const stack = new Stack();
stack.push('1')
stack.push('2')
stack.push('3')
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
}