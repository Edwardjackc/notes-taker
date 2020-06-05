const data = {
  get location() {
    return   'This is a test'
  },
  set location(value) { 
    value = value.trim()

  }
}


// code that uses the data object 
data.location = 'Denver '

console.log(data)

// setter gets called with an argument