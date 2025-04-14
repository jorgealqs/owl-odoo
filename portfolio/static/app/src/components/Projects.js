const { Component, xml } = owl;

export class Projects extends Component {
    static props = ['projects'];
    static template = xml`
        <section class="max-w-7xl mx-auto px-6 py-16" id="projects">
            <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">Proyectos</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <t t-foreach="props.projects" t-as="project" t-key="project.title">
                <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                        <img alt="project.title" class="w-full h-48 object-cover" />
                        <div class="p-6 flex flex-col justify-between h-full">
                            <div>
                                <h3 class="text-xl font-semibold text-yellow-500 mb-2">
                                    <t t-esc="project.title" />
                                </h3>
                                <p class="text-gray-700 text-sm mb-4 leading-relaxed">
                                    <t t-esc="project.description" />
                                </p>
                            </div>
                            <a t-att-href="project.link" target="_blank" class="mt-auto inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-600 transition">
                                Ver más
                            </a>
                        </div>
                    </div>
                </t>
            </div>
        </section>
    `;
}