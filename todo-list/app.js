import { createTaskStore } from "./store.js"; // Importa la función para crear el store de tareas
import { Root } from "./static/components/root.js"; // Importa el componente principal de la aplicación

const { mount } = owl; // Importa la función `mount` de Owl para renderizar la aplicación

// -------------------------------------------------------------------------
// Configuración del entorno (Environment Setup)
// -------------------------------------------------------------------------

/**
 * `env` (entorno de la aplicación)
 * - Define un objeto que contiene el estado global (`store`) de la aplicación.
 * - Este `store` se crea mediante `createTaskStore()`, que gestiona la lista de tareas.
 */
const env = {
  store: createTaskStore(), // Crea y almacena el store de tareas en el entorno.
};

// -------------------------------------------------------------------------
// Montaje de la aplicación (App Mounting)
// -------------------------------------------------------------------------

/**
 * `mount(Root, document.body, { dev: true, env })`
 * - Monta el componente `Root` en el elemento `<body>`, iniciando la aplicación.
 * - Se pasa el `env` para que todos los componentes puedan acceder al `store`.
 * - `{ dev: true }` habilita el modo de desarrollo en Owl para facilitar la depuración.
 */
mount(Root, document.body, { dev: true, env });