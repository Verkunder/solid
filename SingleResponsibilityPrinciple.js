// Пример кода нарушающего принцип единственной ответственности

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    save() {
        // код для сохранения пользователя в базу данных
    }

    sendEmail(subject, message) {
        // код для отправки электронной почты
    }
}

// Пример исправленного кода

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    save() {
        // код для сохранения пользователя в базу данных
    }
}

class EmailSender {
    sendEmail(user, subject, message) {
        // код для отправки электронной почты
    }
}
