// Пример кода, нарушающего принцип подстановки Барбары Лисков

class Healer {
    hp: number
    armor: number

    constructor(hp, armor) {
        this.hp = hp
        this.armor = armor
    }

    heal = hp => {
        this.hp = hp
    }

    armorBoost = armor => {
        this.armor = armor
    }

    attack = () => {
        return this.armor + this.hp * 1.28
    }
}

class Sorcerer extends Healer {
    constructor(hp, armor) {
        super(hp, armor)
    }

    heal = hp => {
        this.armor = hp
        this.hp = hp
    }

    armorBoost = armor => {
        this.armor = armor
        this.hp = armor
    }
}

// Исправил

class Player {
    action: () => void = () => {
        throw new Error('Не выполнено никакого действия!')
    }
}

class Murderer extends Player {
    hp: number
    damage: number
    armor: number

    constructor(hp, damage, armor) {
        super()
        this.hp = hp
        this.damage = damage
        this.armor = armor
    }

    action = () => {
        return this.damage + 10
    }
}

class DarkWarrior extends Player {
    damage: number

    constructor(damage) {
        super()
        this.damage = damage
    }

    action = () => {
        return this.damage + 100
    }
}
