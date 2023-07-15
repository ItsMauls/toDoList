const list = []

module.exports = class List {
    constructor(list) {
        this.list = list
    }


    save() {
        list.push(this)
    }

    static fetchAll() {
        return list
    }
}