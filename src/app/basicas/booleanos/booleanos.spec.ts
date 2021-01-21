import { usuarioIngresado, cerrarSesion } from './booleanos';
describe('Pruebas de booleanos', () => {
  it('Debe de retornar true', () => {
    const res = usuarioIngresado();
    expect(res).toBeTruthy();
    // expect(res).toBe(true);
  });

  it('Debe de retornar false', () => {
    const res = cerrarSesion();
    expect(res).toBeFalsy();
  });
});
