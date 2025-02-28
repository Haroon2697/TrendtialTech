const AboutUs = () => {
    const sections = [
        {
            title: "Established Expertise",
            items: [
                {
                    heading: "Technical Excellence",
                    description: "With deep expertise in software architecture and AI systems, our engineering team brings over a decade of hands-on experience building to the table."
                },
                {
                    heading: "Data and AI Mastery",
                    description: "Operating at the forefront of AI advancements, we are continuously exploring new frontiers and incorporating cutting-edge tech into our solutions."
                },
                {
                    heading: "Strategic Guidance",
                    description: "A blend of AI engineering, software development, and strategic consulting enables us to deliver end-to-end solutions that drive real business value."
                }
            ]
        },
        {
            title: "Proven Track Record",
            items: [
                {
                    heading: "Real-World Impact",
                    description: "We are successfully implementing AI solutions across various industries, transforming complex challenges into practical advantages."
                },
                {
                    heading: "Building in Public",
                    description: "With over 4 million views across hundreds of tutorials, you can see exactly how we build our solutions and communicate our results."
                },
                {
                    heading: "Value Creation",
                    description: "We specialize in identifying and implementing AI solutions that deliver measurable business results and sustainable, competitive advantages."
                }
            ]
        }
    ];

    return (
        <section className="bg-gradient-to-bl from-transparent via-[rgb(0,1,15)] to-[rgb(0,1,15)] container mt-20 flex flex-col px-7 sm:mt-40">
            <h2 className="mb-4 mt-8 aos-init aos-animate font-semibold" data-aos="fade-down">
                Why our clients trust us
            </h2>
            <p className="subtitle-3 max-w-[680px] aos-init aos-animate" data-aos="fade-down">
                At Datalumina, we bring together a decade of AI engineering, software development, and enterprise consulting experience to help you cut through the noise and transform possibilities into practical solutions.
            </p>
            <div className="shrink-0 bg-white/15 h-[1px] w-full my-8" role="none"></div>

            {sections.map((section, index) => (
                <div key={index}>
                    <div data-aos="fade-down" data-aos-delay={200 * (index + 1)} className="flex flex-col gap-5 aos-init aos-animate">
                        <h3 className="text-gradient max-w-max font-semibold">{section.title}</h3>
                        <div className="grid gap-4 md:grid-cols-3 md:justify-between">
                            {section.items.map((item, i) => (
                                <div key={i} className="space-y-2.5 md:max-w-[338px]">
                                    <p className="subtitle-1 flex items-center font-semibold">
                                        {item.heading}
                                    </p>
                                    <p className="body-2 text-white/60">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="shrink-0 bg-white/15 h-[1px] w-full my-8" role="none"></div>
                </div>
            ))}
        </section>
    );
};

export default AboutUs;
