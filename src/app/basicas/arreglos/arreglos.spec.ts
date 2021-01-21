import { obtenerFrameworks } from './arreglos';
describe('Pruebas de arreglos', () => {
  it('Debe de retornar al menos 3 frameworks', () => {
    const res = obtenerFrameworks();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe de existir React y Vue', () => {
    const res = obtenerFrameworks();
    expect(res).toContain('React');
    expect(res).toContain('Vue');
  });
});
