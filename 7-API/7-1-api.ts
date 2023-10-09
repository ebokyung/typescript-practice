Array; //ctrl + click
[1, 2].map;

type Student = {
    passed: boolean;
}

// every
const student: Student[] = [{passed: true}, {passed: true}, {passed: false}];
const result = student.every(student => {
    return student.passed;
})
console.log(result);

// every - type확인
class Animal {}
class Cat extends Animal {
    isCat: boolean = true;
}
class Dog extends Animal {
    isDog: boolean = false;
}
const animals: Animal[] = [new Cat(), new Dog(), new Cat()];
function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat));