class Student {

    name;
    age;
    matricNumber;
    gender;
    department;
    fullName;

    constructor(name, matricNumber, gender) { 
        this.name = name;
        this.gender = gender
        this.matricNumber = matricNumber;
        return this;
    }

    setDepartment(department){
        this.department = department;
        return this
    }

    setFullName(firstName, lastName){
        this.fullName = `${firstName.trim()} ${lastName.trim()}`
        return this;
    }

    setAge(age){
        this.age = age;
        return this;
    }
}


