const { Component, xml, useState } = owl

export class Task extends Component {
    // Template definition: Renders a single task item with editing capabilities
    static template = xml`
        <li t-attf-style="background-color:#{state.color}" class="d-flex align-items-center justify-content-between border p-3 mb-2 rounded">
            <!-- Edit Mode: Shows input fields for name and color -->
            <div t-if="state.isEditig" class="d-flex align-items-center flew-grow-1 me-2">
                <input type="text" class="form-control me-2" t-model="state.name"/>
                <input type="color" style="width:60px" class="form-control-lg form-control-color border-0 bg-white m-0" title="Choose your favorite color" t-model="state.color"/>
            </div>
            <!-- View Mode: Shows task with checkbox -->
            <div t-if="!state.isEditig" class="form-check form-switch fs-5">
                <input class="form-check-input" type="checkbox" t-att-checked="state.isCompleted" value="" t-att-id="state.id" t-on-click="toggleTask" t-model="state.isCompleted"/>
                <label class="form-check-label" t-att-for="state.id" t-attf-class="#{props.task.isCompleted ? 'text-decoration-line-through' : '' }">
                    <t t-esc="state.name" />
                </label>
            </div>
            <!-- Action Buttons -->
            <div>
                <button t-if="!state.isEditig" class="btn btn-primary me-2" t-on-click="editTask">
                    <i class="bi bi-pencil"></i>
                </button>
                <button t-if="state.isEditig" class="btn btn-primary me-2" t-on-click="saveTask">
                    <i class="bi bi-check-lg"></i>
                </button>
                <button class="btn btn-danger" t-on-click="deleteTask">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </li>
    `
    // Define required props for the component
    static props = ["task", "onDelete", "onEdit"]

    // Component initialization
    setup() {
        // Initialize local state with task data
        this.state = useState({
            isEditig: false,      // Controls edit mode
            id: this.props.task.id,
            name: this.props.task.name,
            color: this.props.task.color,
            isCompleted: this.props.task.isCompleted,
        })
    }

    // Toggle task completion status
    toggleTask() {
        this.state.isCompleted = !this.state.isCompleted
    }

    // Delete task using parent callback
    deleteTask() {
        this.props.onDelete(this.props.task)
    }

    // Enable edit mode
    editTask() {
        this.state.isEditig = true
    }

    // Save edited task and exit edit mode
    saveTask() {
        this.state.isEditig = false
        this.props.onEdit(this.state)
    }
}
