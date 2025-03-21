import { useStore } from "../../store.js"; // Importa la función `useStore` para acceder al estado global
import { Task } from "./task.js"; // Importa el componente `Task`, que representa una tarea individual

const { Component, xml, onMounted, useRef, useState } = owl; // Importa las funcionalidades de Owl necesarias

// -------------------------------------------------------------------------
// Componente Principal: Root
// -------------------------------------------------------------------------

/**
 * `Root` es el componente principal de la aplicación de tareas.
 * - Contiene la caja de entrada para agregar nuevas tareas.
 * - Muestra la lista de tareas utilizando el componente `Task`.
 */
export class Root extends Component {
  // Definición del template del componente
  static template = xml/* xml */ `
    <div class="todo-app">
      <!-- Input para agregar nuevas tareas -->
      <input placeholder="Enter a new task" t-on-keyup="addTask" t-ref="add-input"/>

      <!-- Lista de tareas -->
      <div class="task-list">
        <t t-foreach="store.tasks" t-as="task" t-key="task.id">
          <Task task="task"/>
        </t>
      </div>

      <div class="task-panel" t-if="store.tasks.length">
        <div class="task-counter">
          <t t-esc="displayedTasks.length"/>
          <t t-if="displayedTasks.length lt store.tasks.length">
              / <t t-esc="store.tasks.length"/>
          </t>
          task(s)
        </div>
        <div>
          <span t-foreach="['all', 'active', 'completed']"
            t-as="f" t-key="f"
            t-att-class="{active: filter.value===f}"
            t-on-click="() => this.setFilter(f)"
            t-esc="f"/>
        </div>
      </div>


    </div>`;

  // Se declara que este componente usa el componente `Task`
  static components = { Task };

  // -------------------------------------------------------------------------
  // Configuración inicial del componente
  // -------------------------------------------------------------------------
  setup() {
    // Referencia al campo de entrada de texto
    const inputRef = useRef("add-input");

    // Cuando el componente se monta, enfoca automáticamente el campo de entrada
    onMounted(() => inputRef.el.focus());

    // Accede al estado global de la aplicación
    this.store = useStore();

    this.filter = useState({ value: "all" });
  }

  get displayedTasks() {
    const tasks = this.store.tasks;
    switch (this.filter.value) {
      case "active": return tasks.filter(t => !t.isCompleted);
      case "completed": return tasks.filter(t => t.isCompleted);
      case "all": return tasks;
    }
  }

  setFilter(filter) {
    this.filter.value = filter;
  }

  // -------------------------------------------------------------------------
  // Método para agregar tareas
  // -------------------------------------------------------------------------
  /**
   * `addTask(ev)`
   * - Escucha eventos en la caja de entrada.
   * - Si el usuario presiona "Enter" (código 13), agrega una nueva tarea.
   * - Limpia el campo de entrada después de agregar la tarea.
   */
  addTask(ev) {
    if (ev.keyCode === 13) { // 13 es la tecla Enter
      this.store.addTask(ev.target.value.trim()); // Agrega la tarea al store
      ev.target.value = ""; // Limpia el input después de agregar la tarea
    }
  }
}