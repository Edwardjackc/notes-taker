//myPerson --> Person.prototype --> Object.prototype --> null


class Person { 
  constructor(firstName, lastName, age, likes = []) { 
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => { 
      bio += ` ${this.firstName} likes to ${like}.`
    })

  return bio

  }
setName(fullName) { 
  const names = fullName.split(' ')
  this.firstName = names[0]
  this.lastName = names [1]
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }
  getBio() {
    return  `${this.firstName} ${this.lastName} is a ${this.position}.`
  }
  getYearsLeft() {
    return 65 - this.age 
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) { 
    super(firstName, lastName, age, likes)
    this.grade = grade
  }
  updateGrade(change){
    this.grade += change 
  }
  getBio() {
    const status = this.grade >= 70 ? 'passing' : 'failing'
    return `${this.firstName} is ${status} the class`
  }
}


const me  = new Employee('Edward', 'Cheatham', 35,'Student', ['Learning', 'Riding'])
me.setName('Edward Cheatham')
console.log(me.getBio())
console.log(me.getYearsLeft(2))


const person2 = new Person ('Taiven', 'Smith', 24, ['Teach'])
console.log(person2.getBio())

const person3 = new Student ('Ollie', 'Smith',1, 'Dog', 22)
person3.updateGrade (- 22)
console.log(person3.getBio())


//create class for Student 
// track student grade 0- 100 
// override vio to print message pass or fialing , 70 and above 
// crete updateGrade that takes the amount to add or remove from grade. 
