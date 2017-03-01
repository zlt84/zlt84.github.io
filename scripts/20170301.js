var baratok = {
  kulcs1: 'Barát János',
  kulcs2: 'Barát Béla'
}

for (var kulcs in baratok) {
  var name = baratok[kulcs]

  console.log('Kulcs: ' + kulcs + ', hozzá tartozó név: ' + name)
}


// A ciklus végigmegy az objektum összes kulcsán, amivel aztán azt csinálsz, amit akarsz, valamint a kulccsal el tudod kérni a kulcshoz tartozó értéket.
// Az objectek 'key - value' párként működnek.

// Egy tömbbön is végigmehetsz így, viszont ott ez a pereferált:
// for (var i = 0; i < myArray.length; i++) {
// itt az 'i' változó a kulcs
// az érték pedig a myArray[i]


var friends = {
  bill: {
    firstName: 'Bill',
    lastName: 'Kazmayer',
    number: '754 6321',
    address: ['1223 Budapest', 'Sajtlapátoló utca 12.']
  },
  steve: {
    firstName: 'Steve',
    lastName: 'Strange',
    number: '888 9898',
    address: ['2040 Budaörs', 'Kalács Kristóf sétány 44.']
  },
}

var list = function (obj) {
  for (var prop in obj) {
    console.log(prop)
  }
}


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (var i = 0; i < 20; i++) {
  if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
    console.log('FizzBuzz')
  } else if (numbers[i] % 3 === 0) {
    console.log('Fizz')
  } else if (numbers[i] % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(numbers[i])
  }
}
