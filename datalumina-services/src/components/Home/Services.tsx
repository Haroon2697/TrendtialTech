import Slider from "../Home/Slider";

const Services= () => {
    return (
        <section className="h-screen w-screen bg-gradient-to-br from-transparent via-[rgb(0,1,15)] to-[rgb(0,1,15)] flex flex-col px-4">
            <div className="ml-20 mt-20">
                <h1 className="text-4xl font-bold text-white mb-6">Services</h1>
                <p className="text-gray-300 max-w-3xl leading-relaxed">
                    From building enterprise-grade AI platforms to guiding digital transformation and upskilling development teams, we help you move beyond any boundaries of what's possible, pointing you to AI and data technologies that make sense in helping you grow.
                </p>
            </div>
            <Slider />
        </section>
    );
};

export default Services;
