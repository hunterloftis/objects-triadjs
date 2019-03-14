// un-trusted data from the user
const userParams = {
    id: 1234,
    dev: true,
    name: 'Cody',
    role: 'admin',
}

function blacklist({ id, role, ...safe }) {
    return safe
}

function whitelist({name, dev}) {
    return {name, dev}
}

// these are equivalent
console.log( blacklist(userParams) )
console.log( whitelist(userParams) )

