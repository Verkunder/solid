// Пример кода, нарушающего принцип инверсии зависимостей

class UserService {
    constructor() {
        this.db = new Database()
    }

    getUser(id) {
        return this.db.query(`SELECT * FROM users WHERE id = ${id}`)
    }
}

class Database {
    query(sql) {
        // perform database query
    }
}

// Исправил
class UserService {
    constructor(database) {
        this.db = database
    }

    getUser(id) {
        return this.db.query(`SELECT * FROM users WHERE id = ${id}`)
    }
}

class Database {
    query(sql) {
        // perform database query
    }
}

const db = new Database()
const userService = new UserService(db)
