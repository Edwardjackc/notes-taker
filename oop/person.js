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
  getYearsLeft(){
    return 65 - this.age 
  }
}

const me  = new Employee('Edward', 'Cheatham', 35,'Student', ['Learning', 'Riding'])
me.setName('Edward Cheatham')
console.log(me.getBio())
console.log(me.getYearsLeft)

const person2 = new Person ('Taiven', 'Rod', 24, ['Teach'])
console.log(person2.getBio())




