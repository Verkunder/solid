// Пример кода, нарушающего принцип разделения интерфейса

class Witch {
    fireAttack = () => {
        console.log('FIRE attack')
    }

    frozenAttack = () => {
        console.log('FROZEN attack')
    }

    darkAttack = () => {
        console.log('DARK attack')
    }
}

class DarkWitch extends Witch {
    fireAttack = () => {
        throw new Error('Я не бью огнем!')
    }

    frozenAttack = () => {
        throw new Error('Я не бью льдом!')
    }

    darkAttack = () => {
        console.log('DARK attack')
    }
}
// Исправил

class Witch {
    name: string

    constructor(name) {
        this.name = name
    }

    hello = () => {
        console.log(`Hello ${this.name}`)
    }
}

class DarkWitch extends Witch {
    constructor(name) {
        super(name)
    }

    darkMagic = () => {
        console.log('You Krinzhevald')
    }
}

class LightWitch extends Witch {
    constructor(name) {
        super(name)
    }

    lightMagic = () => {
        console.log('You bolshe ne Krinzhevald')
    }
}

const light = new LightWitch('Mary')
const dark = new DarkWitch('Yana')

light.lightMagic()
dark.darkMagic()
