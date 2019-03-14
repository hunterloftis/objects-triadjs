const obj = {
    name: 'obj',
    speak() {
        console.log(this.name)
    }
}

obj.speak()

const s = obj.speak
s()

class test {
    constructor() {
        this.name = 'test'
    }
    speak() {
        console.log(this.name)
    }
}

const t = new test()
t.speak()

const t2 = t.speak
t2()