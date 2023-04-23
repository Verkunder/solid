// Пример кода, нарушающего принцип подстановки Барбары Лисков

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    setWidth(width) {
        this.width = width
    }

    setHeight(height) {
        this.height = height
    }

    area() {
        return this.width * this.height
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size)
    }

    setWidth(width) {
        this.width = width
        this.height = width
    }

    setHeight(height) {
        this.width = height
        this.height = height
    }
}

// Исправил

class Shape {
    area() {
        throw new Error('Method not implemented')
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super()
        this.width = width
        this.height = height
    }

    setWidth(width) {
        this.width = width
    }

    setHeight(height) {
        this.height = height
    }

    area() {
        return this.width * this.height
    }
}

class Square extends Shape {
    constructor(size) {
        super()
        this.size = size
    }

    setSize(size) {
        this.size = size
    }

    area() {
        return this.size * this.size
    }
}
