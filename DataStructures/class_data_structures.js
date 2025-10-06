class Student {
    constructor(firstName,lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    fullName(){
        return `Your full name and last name is ${this.firstName} ${this.lastName}`
    }

    //static method can be used only as utility function and call on the Class itself
    //Can't call student1.enrollStudent() => give you an error
    //Here is the right way to call static => Student.enrollStudent()
    static enrollStudent(){
        return 'Student Enrolled!'
    }
}

let student1 = new Student('Bolt, Coleen')
let student2 = new Student('Bolt2', 'Coleen2', 15)


console.log(Student.enrollStudent())