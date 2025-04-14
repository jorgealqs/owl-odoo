const { Component, xml } = owl;

export class Hero extends Component {
    static template = xml`
        <section class="w-full flex flex-col-reverse md:flex-row items-center justify-between bg-white px-6 py-20 max-w-7xl mx-auto" id="hero">
            <!-- Texto -->
            <div class="text-center md:text-left md:w-1/2 space-y-6" data-aos="fade-right">
                <h1 class="text-4xl md:text-6xl font-bold leading-tight">
                    ¡Hola! Soy <span class="text-yellow-500">Jorge Quiroz</span>
                </h1>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Soy un ingeniero con sólida experiencia en desarrollo backend, especializado en <span class="font-semibold text-yellow-500">Python</span> 🐍 y experto en la implementación y personalización de <span class="font-semibold text-yellow-500">Odoo ERP</span> 📦 para automatizar y optimizar procesos empresariales. Me apasiona crear soluciones inteligentes que conecten la tecnología con la productividad real de las empresas. También tengo conocimientos en <span class="font-semibold text-yellow-500">PostgreSQL, Docker</span> y <span class="font-semibold text-yellow-500">despliegue en la nube</span>, lo que me permite entregar proyectos robustos, escalables y bien documentados.
                </p>
                <div class="flex flex-col md:flex-row items-center gap-4">
                    <a href="/portfolio/static/files/Jorge.pdf"
                        class="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md">
                        Descargar CV
                    </a>
                    <a href="#contact"
                        class="border-2 border-yellow-400 px-6 py-2 rounded-full font-semibold text-yellow-500 hover:bg-yellow-50 transition">
                        Contáctame
                    </a>
                </div>
            </div>

            <!-- Foto -->
            <div class="md:w-1/2 flex justify-center mb-10 md:mb-0" data-aos="fade-left">
                <img
                    src="/portfolio/static/image/foto.jpg"
                    alt="Foto de perfil"
                    class="w-64 h-64 rounded-full border-4 border-yellow-400 shadow-xl object-cover"
                />
            </div>
        </section>`;
}