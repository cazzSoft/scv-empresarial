/**
 * BaseComponent
 * Componente base reutilizable para la aplicación
 */
export default class BaseComponent {
  constructor(name) {
    this.name = name;
  }

  render() {
    console.log(`Rendering component: ${this.name}`);
  }
}
