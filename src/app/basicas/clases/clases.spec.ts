import { Jugador } from './clases';
describe('Pruebas de clases', () => {
  let jugador = new Jugador();

  beforeAll(() => {
    // console.log('beforeAll');
  });
  beforeEach(() => {
    // console.log('beforeEach');
    // jugador.hp = 100;
    jugador = new Jugador();
  });
  afterAll(() => {
    // console.log('afterAll');
  });
  afterEach(() => {
    // console.log('afterEach');
  });

  it('Debe de retornar 80 de hp si recibe 20 de golpe', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeGolpe(20);
    expect(resp).toBe(80);
  });
  it('Debe de retornar 50 de hp si recibe 50 de golpe', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeGolpe(50);
    expect(resp).toBe(50);
  });
  it('Debe de retornar 0 de hp si recibe 300 de golpe', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeGolpe(300);
    expect(resp).toBe(0);
  });
});
