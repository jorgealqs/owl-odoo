const { Component, xml } = owl;
import { Hero } from "./Hero.js";
import { About } from "./About.js";
import { Navbar } from "./Navbar.js";
import { Projects } from "./Projects.js";
import { Contact } from "./Contact.js";
import { Footer } from "./Footer.js";

export class Root extends Component {
    static components = { Hero, About, Navbar, Projects, Contact, Footer };
    static template = xml`<div>
        <Navbar />
        <div class="pt-14">
            <div id="hero"><Hero /></div>
            <div id="about"><About /></div>
            <div id="projects"><Projects projects="projects"/></div>
            <div id="Contact"><Contact /></div>
            <Footer />
        </div>
    </div>`;

    setup() {
        this.projects = [
            {
                title: "Portfolio Personal",
                description: "Mi sitio web profesional hecho con OWL y TailwindCSS.",
                link: "https://miportfolio.com"
            },
            {
                title: "App de Tareas",
                description: "Gestor de tareas fullstack con Odoo y Vue.",
                link: "https://github.com/jorge/app-tareas"
            },
            {
                title: "Clon de Netflix",
                description: "Una app con streaming y login usando Firebase.",
                link: "https://github.com/jorge/netflix-clone"
            },
        ];
    }
}