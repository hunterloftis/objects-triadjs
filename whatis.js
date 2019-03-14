const objs = [
    function () {},
    () => {},
    new Buffer.from('foo'),
    [1, 2, 3],
    new Set([1, 2, 3]),
    new Error('darn'),
    new Map(),
    new Number(42),
]

const non = [
    true,
    null,
    undefined,
    42,
    'foo',
    Symbol('bar'),
]

console.log("\n=== Objects ===")
checkAll(objs)

console.log("\n=== Non-Objects ===")
checkAll(non)

function checkAll(things) {
    things.forEach(thing => console.log('is', thing, 'an Object?', thing instanceof Object))
}

