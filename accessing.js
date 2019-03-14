const obj = {
    width: 100,
    'window height': 150,
}

console.log( obj.width )  // 100

console.log( obj['window height'] )   // 150

// [ 'width', 'window height' ]
console.log( Object.keys(obj) )

// obj.width = 100
// obj.window height = 150
for (const key of Object.keys(obj)) {
    console.log(`obj.${key} = ${obj[key]}`)
}


const ctx = {
    beginPath() {},
    arc() {},
    fill() { console.log(`filling circle with ${this.fillStyle}`)}
}


const user = {
    name: 'Angie',
    profession: 'artist'
}

const { name, profession, loggedIn = false } = user
console.log(name) // Angie
console.log(profession) // artist
console.log(loggedIn) // false

const abcd = { a: 1, b: 2, c: 3, d: 4 }
const {a, b, ...etc} = abcd
console.log(a) // 1
console.log(b) // 2
console.log(etc) // { c: 3, d: 4 }

function drawCircle({ x, y, radius, color='#F00'}) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    ctx.fill()
}
drawCircle({ x: 50, y: 75, radius: 10 })

