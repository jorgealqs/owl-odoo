import { Task } from "./task.js"
const { Component, xml, useState } = owl


export class Root extends Component {
    // Template definition using xml template syntax
    // Defines the main UI structure with:
    // - Input field for task name
    // - Color picker for task color
    // - Add button
    // - List of tasks using t-foreach directive
    static template = xml`
        <div>
            <div class="input-group-lg w-100 d-flex border rounded align-items-center">
                <input type="text" class="form-control-lg flex-fill border-0 me-1" placeholder="Add your new task" aria-label="Add your new task" aria-describedby="button-addon2" t-att-value="state.name" t-model="state.name"/>
                <input type="color" class="form-control-lg form-control-color border-0 bg-white m-0" title="Choose your favorite color" t-att-value="state.color" t-model="state.color"/>
                <button type="button" class="btn btn-primary" t-on-click="addTask">
                    <i class="bi bi-plus-lg fs-3"></i>
                </button>
            </div>
            <ul class="d-flex flex-column mt-5 p-0">
                <t t-foreach="tasks" t-as="task" t-key="task.id">
                    <Task task="task" onDelete.bind="deleteTask" onEdit.bind="editTask"/>
                </t>
            </ul>
        </div>
    `

    // Register the Task component as a child component
    static components = { Task }

    // Component initialization
    setup() {
        // Initialize component state using useState for reactivity
        this.state = useState({
            name: "",           // Task name input
            color: "#FFF000",   // Default color for new tasks
            isCompleted: false  // Task completion status
        })

        // Initialize empty tasks array with reactive properties
        this.tasks = useState([])
    }

    // Method to add new tasks
    addTask() {
        // Validate task name
        if (!this.state.name) {
            alert("Please provide name of the task")
            return
        }

        // Create new task object
        const newTask = {
            id: Date.now(),           // Unique ID using timestamp
            name: this.state.name,    // Task name
            isCompleted: false,       // Initial completion status
            color: this.state.color,  // Selected color
        }

        // Add task to array and reset input fields
        this.tasks.push(newTask)
        let state = this.state
        this.state = {...state, name:"", color: "#FFF000"}
    }

    // Method to delete a task by its ID
    deleteTask(task) {
        const index = this.tasks.findIndex(t => t.id === task.id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }

    // Method to edit an existing task
    editTask(task) {
        const index = this.tasks.findIndex(t => t.id === task.id);
        if (index !== -1) {
            this.tasks.splice(index, 1, task);
        }
    }

}
