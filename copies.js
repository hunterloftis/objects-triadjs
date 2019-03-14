const original = {
    name: 'Braden',     // primitive
    twitter: '@braidn'  // primitive
}

const copyFail = original
copyFail.twitter = '@hunterloftis'
console.log( original.twitter ) // @hunterloftis

// instead, use:
const copy1 = Object.assign({}, original)
const copy2 = { ...original }


const meeting = {
    title: 'Morning Standup',   // primitive
    days: ['Mon', 'Wed', 'Fri'] // Object
}

const copyShallowFail = { ...meeting }
copyShallowFail.days[1] = 'Thurs'
console.log( meeting.days ) // [ 'Mon', 'Thurs', 'Fri' ]

// instead, use:
const copy = JSON.parse(JSON.stringify(meeting))
