const UIcourse = () => {
    return (
        <>
            <section className="bg-[#f0f0f0] p-16 pt-64">
                <div className="textContainer flex justify-between">
                    <div className="textLeft flex items-end">
                        <h2 className="leading-none mb-32">
                            <span className="text-[6.73rem]">UI.</span>
                            <span className="text-[3.73rem] relative -bottom-1">
                                {' '}
                                Course
                            </span>
                        </h2>
                    </div>

                    <div>
                        <p className="relative pl-6">
                            <span className="absolute left-0 top-0 mt-1 w-3 h-3 bg-black"></span>
                            <span>START</span>{' '}
                            <span className="block">LEARNING</span>
                        </p>
                    </div>
                </div>

                <div className="cardContainer flex justify-evenly gap-32 px-8">
                    <div className="card level01 shadow-2xl items-center text-center py-12 px-6 rounded-3xl border-2 border-white hover:border-[#b885fd] justify-center space-y-4">
                        <h3 className="text-2xl">
                            <span className="font-bold">Level</span> .01
                        </h3>
                        <img
                            className="lineImg mx-auto"
                            src="./src/assets/images/Line.svg"
                            alt=""
                        />
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et.
                        </p>
                        <button className="bg-[#b885fd] text-white py-4 px-6">
                            READ MORE
                        </button>
                    </div>

                    <div className="card level02 shadow-2xl items-center text-center py-12 px-6 rounded-3xl border-2 border-white hover:border-[#b885fd] space-y-4">
                        <h3 className="text-2xl">
                            <span className="font-bold">Level</span> .02
                        </h3>
                        <img
                            className="mx-auto"
                            src="./src/assets/images/Line.svg"
                            alt=""
                        />
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et.
                        </p>
                        <button className="bg-[#b885fd] text-white py-4 px-6">
                            READ MORE
                        </button>
                    </div>

                    <div className="card level03 shadow-2xl items-center text-center py-12 px-6 rounded-3xl border-2 border-white hover:border-[#b885fd] space-y-4">
                        <h3 className="text-2xl">
                            <span className="font-bold">Level</span> .03
                        </h3>
                        <img
                            className="mx-auto"
                            src="./src/assets/images/Line.svg"
                            alt=""
                        />
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et.
                        </p>
                        <button className="bg-[#b885fd] text-white py-4 px-6">
                            READ MORE
                        </button>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-24">
                    <div className="3dots flex gap-4">
                        <div className="bg-slate-400 h-2 w-2 rounded-full"></div>
                        <div className="bg-slate-400 h-2 w-2 rounded-full"></div>
                        <div className="bg-slate-400 h-2 w-2 rounded-full"></div>
                    </div>
                </div>
                <div className="flex justify-between -m-16">
                    <img src="./src/assets/images/Circle-left.svg" alt="" />
                    <img src="./src/assets/images/Circle-right.svg" alt="" />
                </div>
            </section>
        </>
    );
};

export default UIcourse;
