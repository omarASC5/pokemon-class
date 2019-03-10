 class Pokemon {
	constructor(name, attack, defense, health, type) {
		this.name = name;
		this.attack = attack;
		this.defense = defense;
		this.health = health;
		this.type = type;
		this.startingHealth = this.health;
	}
	takeDamage(damage) {
		this.health-=damage;
		if (this.health < 0) {
			this.health = 0;
		}
	}
	attackOpponent(Pokemon) {
		let DAMAGE;
		// If the Pokemon has more defense than the attack --> Take no damage
		 ((Pokemon.defense > this.attack) || (Pokemon.defense === this.attack)) ?
			DAMAGE = 0 : DAMAGE = (this.attack - Pokemon.defense);

		Pokemon.takeDamage(DAMAGE);
	}
	display() {
		return `${this.name.toUpperCase()} (${this.type.toUpperCase()}) ${this.health}/${this.startingHealth}`;
	}
 }
