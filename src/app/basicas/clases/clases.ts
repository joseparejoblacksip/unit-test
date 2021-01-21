export class Jugador {
  hp: number;

  constructor() {
    this.hp = 100;
  }

  recibeGolpe(golpe) {
    if (golpe >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - golpe;
    }
    return this.hp;
  }
}
