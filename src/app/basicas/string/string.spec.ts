import { mensaje } from './string';
// describe('Pruebas de strings');
// it('Debe regresar un string');


describe('Pruebas de strings', () => {
  it('Debe regresar un string', () => {
    const resp = mensaje('José');
    expect(typeof resp).toBe('string');
  });

  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'José';
    const resp = mensaje(nombre);
    expect(resp).toContain(nombre);
  });
});

