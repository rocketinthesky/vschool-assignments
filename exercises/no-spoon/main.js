var chair = {
  weightInLbs: 15,
  isBorrowed: true,
  brandName: null,
  portability: function(){
    chair.weightInLbs <= 5 ? console.log('You could carry that around') : console.log("You probably don't want to carry that with you all day");
  }
}

var monitor = {
  weightInLbs: 7,
  isBorrowed: true,
  brandName: 'Asus',
  portability: function(){
    monitor.weightInLbs <= 5 ? console.log('You could carry that around') : console.log("You probably don't want to carry that with you all day");
  }
}

var laptop = {
  weightInLbs: 4,
  isBorrowed: false,
  brandName: 'Apple',
  portability: function(){
    laptop.weightInLbs <= 5 ? console.log('You could carry that around') : console.log("You probably don't want to carry that with you all day");
  }
}

var mouse = {
  weightInLbs: 1,
  isBorrowed: false,
  brandName: 'Apple',
  portability: function(){
    mouse.weightInLbs <= 5 ? console.log('You could carry that around') : console.log("You probably don't want to carry that with you all day");
  }
}

var desk = {
  weightInLbs: 30,
  isBorrowed: true,
  brandName: null,
  portability: function(){
    desk.weightInLbs <= 5 ? console.log('You could carry that around') : console.log("You probably don't want to carry that with you all day");
  }
}

var powerCord = {
  weightInLbs: 2,
  isBorrowed: true,
  brandName: null,
  portability: function(){
    powerCord.weightInLbs <= 5 ? console.log('You could carry that around') : console.log("You probably don't want to carry that with you all day");
  }
}

var bottle = {
  weightInLbs: 2,
  isBorrowed: false,
  brandName: 'Perrier',
  portability: function(){
    bottle.weightInLbs <= 5 ? console.log('You could carry that around') : console.log("You probably don't want to carry that with you all day");
  }
}

var backpack = {
  weightInLbs: 5,
  isBorrowed: false,
  brandName: 'Targus',
  portability: function(){
    backpack.weightInLbs <= 5 ? console.log('You could carry that around') : console.log("You probably don't want to carry that with you all day");
  }
}

var jacket = {
  weightInLbs: 3,
  isBorrowed: false,
  brandName: 'Russell',
  portability: function(){
    jacket.weightInLbs <= 5 ? console.log('You could carry that around') : console.log("You probably don't want to carry that with you all day");
  }
}

var wallet = {
  weightInLbs: 1,
  isBorrowed: false,
  brandName: 'Cuoiera Fiorentina',
  portability: function (){
    wallet.weightInLbs <= 5 ? console.log('You could carry that around') : console.log("You probably don't want to carry that with you all day");
  }
}

desk.portability();
