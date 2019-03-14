const notReally = {
    x: true
}
notReally.x = false
console.log(notReally)  // { x: false }

const shallow = Object.freeze({
    x: true,
    y: [true]
})
shallow.x = false
shallow.y[0] = false
console.log(shallow)  // { x: true, y: [ false ] }

const deep = freeze({
    x: true,
    y: [true]
})
deep.x = false
deep.y[0] = false
console.log(deep)   // { x: true, y: [ true ] }

function freeze(obj) {
    if (!(obj instanceof Object)) return obj
    for (const name in obj) {
        obj[name] = freeze(obj[name])
    }
    return Object.freeze(obj)
}
