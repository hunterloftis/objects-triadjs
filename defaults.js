const defaults = {
    port: 80,
    hotReload: false,
    start: 'node server.js'
}

const staging = Object.assign({}, defaults, {
    port: 3000,
    hotReload: true
})

console.log(staging)