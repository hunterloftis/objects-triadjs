const dynamic = 'neat'
const key = 1
const color = '#f00'

const obj = {
    name: 'value',
    'keys are strings': true,
    inner: 100,
    pad: 20,
    color,   // color: color
    [dynamic + key]: 'is new',  // "neat1"
    
    log() {
        console.log(this.name)   // "value"
    },
    get width() {  // x = obj.width
        return this.inner * this.pad * 2
    },
    set width(w) {  // obj.width = 75
        this.inner = w - (this.pad * 2)
    }
}
