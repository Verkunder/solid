class Dragon {
    constructor() {
        this.fire = new Fire()
    }

    attack = () => {
        return this.fire.attack()
    }
}

class Fire {
    attack = () => {
        return 'FIRE!'
    }
}

// Исправил

class Dragon {
    constructor(fire) {
        this.fire = fire
    }

    attack = () => {
        return this.fire.attack()
    }
}

class Fire {
    attack = () => {
        console.log('FIRE!')
    }
}

const fire = new Fire()

const Magnus = new Dragon(fire)
