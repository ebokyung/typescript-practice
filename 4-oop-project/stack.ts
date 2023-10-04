{
interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

class OneNode {
    constructor(private pre: any, private value: string){}
}

class StackImpl implements Stack {
    private _size: number = 0;
    get size() {
        return this._size;
    }
    private head: any = null;
    constructor(){}
    push(value: string): void{
        // 스택에 더 넣을 수 있는지 확인
        const newNode = new OneNode(this.head, value)
        this.head = newNode;
        this._size++;
    }
    pop(): string {
        // 스택이 비었는지 확인
        const curNode = this.head;
        this.head = curNode.pre;
        this._size--;
        return curNode.value;
    }
}

const stack = new StackImpl();
console.log(stack.size)
stack.push('1')
stack.push('2')
console.log(stack.size)
stack.push('3')
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.size)
console.log(stack.pop())
}