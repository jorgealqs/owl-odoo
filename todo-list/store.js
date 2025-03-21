const { useState, reactive, useEnv } = owl;

// -------------------------------------------------------------------------
// Store - Estado centralizado de la aplicación
// -------------------------------------------------------------------------

/**
 * Hook `useStore`
 * Permite acceder al `store` global dentro de los componentes de Owl.
 * Se obtiene desde el entorno (`env.store`).
 *
 * @returns {TaskList} - Instancia reactiva del TaskList almacenado en el entorno.
 */
export function useStore() {
  const env = useEnv();
  return useState(env.store);
}

// -------------------------------------------------------------------------
// TaskList - Lógica de la lista de tareas
// -------------------------------------------------------------------------

/**
 * Clase `TaskList`
 * Representa una lista de tareas con métodos para agregar, eliminar y modificar tareas.
 */
class TaskList {
  /**
   * Constructor
   * @param {Array} tasks - Lista de tareas inicial (opcional).
   */
  constructor(tasks) {
    this.tasks = tasks || []; // Lista de tareas (inicializa con datos existentes si hay).

    // Calcula el próximo ID basado en las tareas existentes.
    const taskIds = this.tasks.map((t) => t.id);
    this.nextId = taskIds.length ? Math.max(...taskIds) + 1 : 1;
  }

  /**
   * Agrega una nueva tarea a la lista.
   * @param {string} text - Texto de la nueva tarea.
   */
  addTask(text) {
    text = text.trim(); // Elimina espacios en blanco al inicio y final.
    if (text) {
      this.tasks.push({
        id: this.nextId++, // Asigna un nuevo ID autoincremental.
        text: text,
        isCompleted: false, // La tarea comienza como no completada.
      });
    }
  }

  /**
   * Alterna el estado de completado de una tarea.
   * @param {Object} task - Tarea a modificar.
   */
  toggleTask(task) {
    task.isCompleted = !task.isCompleted;
  }

  /**
   * Elimina una tarea de la lista.
   * @param {Object} task - Tarea a eliminar.
   */
  deleteTask(task) {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}

/**
 * Función `createTaskStore`
 * Crea una instancia reactiva de `TaskList`, con persistencia en `localStorage`.
 *
 * @returns {TaskList} - Instancia reactiva de `TaskList`.
 */
export function createTaskStore() {
  /**
   * Guarda la lista de tareas en `localStorage` para persistencia.
   */
  const saveTasks = () => localStorage.setItem("todoapp", JSON.stringify(taskStore.tasks));

  // Recupera las tareas almacenadas en `localStorage` al iniciar.
  const initialTasks = JSON.parse(localStorage.getItem("todoapp") || "[]");

  // Crea una instancia reactiva de `TaskList`, con persistencia automática.
  const taskStore = reactive(new TaskList(initialTasks), saveTasks);

  // Guarda las tareas inmediatamente después de la inicialización.
  saveTasks();

  return taskStore;
}