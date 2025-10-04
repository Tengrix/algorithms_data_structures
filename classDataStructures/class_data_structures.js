class Student {
    constructor(firstName,lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    fullName(){
        return `Your full name and last name is ${this.firstName} ${this.lastName}`
    }
}

let student1 = new Student('Bolt, Coleen')
let student2 = new Student('Bolt2', 'Coleen2', 15)

console.log(student2.fullName())