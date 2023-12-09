class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 100;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log('Mi nombre es ${this.nombre}');
    }

    showStats() {
        console.log('Mi nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}');
    }

    drinkSake() {
        this.salud += 10;
    }
}

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduría = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log('[${this.nombre}] Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.');
    }
}

const miNinja = new Ninja("Hyabusa");
miNinja.sayName();
miNinja.showStats();
miNinja.drinkSake();

const superSensei = new Sensei("Master Splinter");
superSensei.sayName();
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();


