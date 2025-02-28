const Insights = () => {
    return (
        <section className="w-screen h-screen bg-dark-blue text-white flex flex-col items-center justify-center">
            <div className="h-[85%] w-[70%]">
                <h1 className="font-bold text-2xl mb-4">Our latest insights</h1>
                <div className="grid h-[95%] w-[100%] gap-4 grid-cols-3 grid-rows-2">
                    <div className="bg-black border border-white border-opacity-50 rounded col-span-1 row-span-2"></div>
                    <div className="bg-black border border-white border-opacity-50 rounded col-span-1 row-span-2"></div>
                    <div className="bg-black border border-white border-opacity-50 rounded col-span-1 row-span-1"></div>
                    <div className="bg-black border border-white border-opacity-50 rounded col-span-1 row-span-1"></div>
                </div>
            </div>
        </section>
    );
};

export default Insights;
