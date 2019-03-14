const obj = {
    _val: 0,
    _edits: 0,
    log() {
        console.log(`${this._val} after ${this._edits} edits`)
    },
    set val(v) {
        this._val = v
        this._edits++
    },
    get val() {
        return this._val
    }
}

obj.log()               // 0 after 0 edits

obj.val = 10            // obj.val(10)
obj.log()               // 10 after 1 edits

obj.val = obj.val + 5   // obj.val() + 5
obj.log()               // 15 after 2 edits