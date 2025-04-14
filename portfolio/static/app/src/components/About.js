const { Component, xml } = owl;

export class About extends Component {
    static template = xml`
    <section id="about" class="bg-white py-20 px-6">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <!-- Columna izquierda -->
            <div data-aos="fade-right">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Sobre Mí</h2>
                <p class="text-xl text-yellow-500 font-medium mb-6">
                    Desarrollador Fullstack | Especialista en Odoo ERP y Python 🐍
                </p>
                <h3 class="text-lg font-semibold text-gray-800 mb-3">Tecnologías que uso:</h3>
                <div class="flex flex-wrap gap-4 items-center">
                    <img src="https://skillicons.dev/icons?i=python,javascript,typescript,html,css,php"/>
                    <img src="https://skillicons.dev/icons?i=mysql,postgres,git,docker,linux,postman,vscode"/>
                </div>
            </div>

            <!-- Columna derecha -->
            <div data-aos="fade-left">
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    Soy un ingeniero con fuerte vocación tecnológica y más de <span class="text-yellow-500 font-semibold">6 años de experiencia</span> en el desarrollo de software empresarial. Me especializo en <span class="text-yellow-500 font-semibold">Odoo ERP</span>, <span class="text-yellow-500 font-semibold">Python</span> y soluciones backend eficientes.
                </p>
                <p class="text-lg leading-relaxed text-gray-700 mb-4">
                    He trabajado en la implementación de sistemas a medida para pymes, automatizando procesos clave como ventas, inventario, compras y contabilidad. Mi enfoque se basa en entender a fondo las necesidades del cliente para ofrecer soluciones simples, escalables y mantenibles.
                </p>
                <p class="text-lg leading-relaxed text-gray-700">
                    Soy autodidacta, detallista y disfruto resolver problemas complejos con código limpio. Me apasiona seguir aprendiendo y colaborar en proyectos donde la tecnología haga una verdadera diferencia.
                </p>
            </div>
        </div>
    </section>
    `;
}