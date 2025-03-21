import { useStore } from "../../store.js"
const { Component, xml } = owl;

// -------------------------------------------------------------------------
// Task Component
// -------------------------------------------------------------------------
export class Task extends Component {
  static template = xml/* xml */ `
    <div class="task" t-att-class="props.task.isCompleted ? 'done' : ''">
      <input type="checkbox" t-att-checked="props.task.isCompleted"
            t-att-id="props.task.id"
            t-on-click="() => store.toggleTask(props.task)"/>
       <label t-att-for="props.task.id"><t t-esc="props.task.text"/></label>
      <span class="delete" t-on-click="() => store.deleteTask(props.task)">
            <i class="bi bi-trash"></i>
        </span>
    </div>`;

  static props = ["task"];

  setup() {
    this.store = useStore();
  }
}