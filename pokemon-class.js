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
		 ((Pokemon.defense > this.attack) || (Pokemon.defense === this.attack)) ?
			DAMAGE = 0 : DAMAGE = (this.attack - Pokemon.defense);

		Pokemon.takeDamage(DAMAGE);
	}
	display() {
		return `${this.name.toUpperCase()} (${this.type.toUpperCase()}) ${this.health}/${this.startingHealth}`;
	}
 }

 const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
 console.log(charmander.name);    // charmander
 console.log(charmander.attack);  // 12
 console.log(charmander.defense); // 8
 console.log(charmander.health);  // 30
 console.log(charmander.type);    // fire