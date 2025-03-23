// Import the Root component from the "components/root.js" file
import { Root } from "./components/root.js";

// Extract the mount function from the OWL framework
const { mount } = owl;

// Mount the Root component to the HTML element with the ID "main"
// The { dev: true } option enables development mode for debugging purposes
mount(Root, document.getElementById("main"), { dev: true });