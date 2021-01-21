# Pruebas unitarias

## Ventajas:
•	Ayuda a encontrar errores
•	Permite probar código escrito por otros programadores
•	Permite detectar errores antes de que sucedan en producción
•	Ayuda a generar un código más limpio, reportes y estadísticas

## Desventajas:
•	No garantiza código libre de errores
•	Probar todo el código, puede ser un trabajo aún más largo que la misma aplicación
•	Costos de producción pueden aumentar
•	No es muy útil si trabajas solo

## ¿Qué debo probar?
La ruta crítica si no hay mucho tiempo.

## ¿Qué tipos de pruebas existen?
•	Automáticas
•	Manuales

## Las automáticas tienen estas diferentes pruebas:
Unitarias: Son pruebas aisladas sin presencia de recursos externos, como llamadas a un API u otro componente o servicio.
•	Nos ayudan a probar rápidamente métodos y funciones.
•	Podemos escribir muchas pruebas rápidamente
•	Podemos someter a pruebas de estrés nuestros métodos
•	No sabríamos los tiempos de respuesta de servicios o APIs

Integración: Cuando se prueban 2 o más componentes que trabajan en conjunto.

End to End: Se realizan directamente en la aplicación, son para probar algo en específico, estas pruebas tardan mucho más, no son recomendadas.

## Jasmine
Jasmine es un framework que trae por defecto Angular para pruebas unitarias, este framework por defecto va a buscar todos los archivos .spec que estén en nuestra aplicación.

Si no se desea realizar alguna prueba, dentro del archivo .spec en donde se describe el componente se coloca una x al inicio del describe, debe quedar así xdescribe.

Todas las pruebas tienen dos partes: describe() e it()
describe(): sirve para agrupar pruebas
it(): es una prueba
expect(): Son utilizadas para dar mensajes de pruebas exitosas
Existen otros operadores que son:
beforeAll(); Antes de todos
beforeEach(); Antes de cada uno
afterAll(); Después de todos
afterEach(); Después de cada uno
ng test --code-coverage: Esto va a evaluar todas las líneas de código y dirá cuales se están evaluando y cuales no
