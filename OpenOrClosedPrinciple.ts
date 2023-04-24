// Пример кода, нарушающего принцип открытости/закрытости

// class Character {
//     specialization: string
//     hp: number

//     constructor(specialization: string) {
//         this.specialization = specialization
//     }

//     maxHP() {
//         if (this.specialization === 'Paladin') {
//             this.hp = 870
//         }
//         if (this.specialization === 'Mage') {
//             this.hp = 320
//         }
//         if (this.specialization === 'Warrior') {
//             this.hp = 640
//         }
//     }
// }

// Исправленный код

class Character {
    hp: number

    constructor(hp: number) {
        this.hp = hp
    }
}

class Warrior extends Character {
    constructor() {
        super(640)
    }
}

class Mage extends Character {
    constructor() {
        super(320)
    }
}

class Paladin extends Character {
    constructor() {
        super(870)
    }
}
