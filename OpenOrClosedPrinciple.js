// Пример кода, нарушающего принцип открытости/закрытости

class Shape {
    constructor(type) {
        this.type = type
    }

    draw() {
        if (this.type === 'circle') {
            console.log('Drawing a circle')
        } else if (this.type === 'square') {
            console.log('Drawing a square')
        } else if (this.type === 'triangle') {
            console.log('Drawing a triangle')
        }
    }
}

// Исправленный код

class Shape {
    constructor(type) {
        this.type = type
    }

    draw() {
        console.log('Drawing a ' + this.type)
    }
}

class Circle extends Shape {
    constructor() {
        super('circle')
    }
}

class Square extends Shape {
    constructor() {
        super('square')
    }
}

class Triangle extends Shape {
    constructor() {
        super('triangle')
    }
}
