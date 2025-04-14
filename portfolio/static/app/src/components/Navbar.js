const { Component, xml, useState, onMounted } = owl;

export class Navbar extends Component {
    static template = xml`
    <nav class="fixed w-full top-0 z-50 bg-white shadow-md transition-all duration-300" t-att-class="state.scrolled ? 'py-2' : 'py-4'">
        <div class="max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300">
            <a href="#" class="text-2xl font-bold text-yellow-500 transition-all duration-300">JorgeDev</a>

            <button class="md:hidden text-gray-700 focus:outline-none" t-on-click="toggleMenu">
                <i class="bi" t-att-class="state.showMenu ? 'bi-x' : 'bi-list'" style="font-size: 1.5rem;"></i>
            </button>

            <ul class="hidden md:flex space-x-6 text-gray-700 font-medium">
                <li><a href="#hero" class="hover:text-yellow-500 transition">Inicio</a></li>
                <li><a href="#about" class="hover:text-yellow-500 transition">Sobre mí</a></li>
                <li><a href="#projects" class="hover:text-yellow-500 transition">Proyectos</a></li>
                <li><a href="#contact" class="hover:text-yellow-500 transition">Contacto</a></li>
                <li>
                    <a href="/portfolio/static/files/Jorge.pdf" class="bg-yellow-400 text-black px-4 py-1 rounded-full font-semibold hover:bg-yellow-300 transition shadow-sm text-sm">
                        CV
                    </a>
                </li>
            </ul>
        </div>

        <div t-if="state.showMenu" class="md:hidden bg-white px-6 pb-4 shadow-md animate-fade-in-down">
            <ul class="flex flex-col space-y-3 text-gray-700 font-medium">
                <li><a href="#hero" class="hover:text-yellow-500 transition" t-on-click="handleLinkClick">Inicio</a></li>
                <li><a href="#about" class="hover:text-yellow-500 transition" t-on-click="handleLinkClick">Sobre mí</a></li>
                <li><a href="#projects" class="hover:text-yellow-500 transition" t-on-click="handleLinkClick">Proyectos</a></li>
                <li><a href="#contact" class="hover:text-yellow-500 transition" t-on-click="handleLinkClick">Contacto</a></li>
                <li><a href="/portfolio/static/files/Jorge.pdf" class="bg-yellow-400 text-black text-center px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition shadow-sm" t-on-click="handleLinkClick">Descargar CV</a></li>
            </ul>
        </div>
    </nav>
    `;

    setup() {
        this.state = useState({
            showMenu: false,
            scrolled: false,
        });

        onMounted(() => {
            window.addEventListener("scroll", this.onScroll);
        });
    }

    toggleMenu() {
        this.state.showMenu = !this.state.showMenu;
    }

    handleLinkClick() {
        this.state.showMenu = false;
    }

    onScroll = () => {
        this.state.scrolled = window.scrollY > 20;
    };
}