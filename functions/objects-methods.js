let restaurant = {
  name: 'Eds burgers',
  guestCapacity: 75,
  guestCount : 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount
    return partySize <= seatsLeft
  },
  seatParty : function (partySize) {
    this.guestCount = this.guestCount + partySize
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize
  }

}


//seatParty  true 


//removeParty  false 


// restaurant.seatParty(72)

console.log(restaurant.checkAvailability(76))
