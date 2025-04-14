const { Component, xml } = owl;

export class Contact extends Component {
    static template = xml`
        <section id="contact" class="bg-white px-6 py-20">
            <div class="max-w-2xl mx-auto text-center" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-gray-800 mb-6">Contacto</h2>
                <p class="text-lg text-gray-600 mb-10">
                    ¿Tienes una idea o proyecto en mente? <br />
                    No dudes en escribirme, ¡estaré encantado de ayudarte!
                </p>

                <div class="flex justify-center gap-8 text-yellow-500 text-3xl">
                    <a href="https://wa.me/3193662738?text=Me%20gustaría%20contactarte%20sobre%20un%20proyecto" target="_blank" class="hover:text-yellow-600 transition transform hover:scale-110" title="WhatsApp">
                        <i class="bi bi-whatsapp"></i>
                    </a>
                    <a href="https://github.com/jorgealqs" target="_blank" class="hover:text-yellow-600 transition transform hover:scale-110" title="GitHub">
                        <i class="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jorgealqs" target="_blank" class="hover:text-yellow-600 transition transform hover:scale-110" title="LinkedIn">
                        <i class="bi bi-linkedin"></i>
                    </a>
                </div>

                <div class="mt-10">
                    <a href="mailto:jorgealqs.dev@gmail.com" class="inline-block bg-yellow-500 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-yellow-600 transition">
                        Envíame un correo
                    </a>
                </div>
            </div>
        </section>
    `;
}