const UI = () => {
    return (
        <>
            <section className="bg-[#f0f0f0] p-16">
                <div className="group2 relative h-[720px]">
                    <div className="topDots flex justify-between">
                        <div className="dotLeft h-[53px] w-[53px] bg-[#f1f1f1] rounded-full shadow-md"></div>
                        <div className="dotRight h-[53px] w-[53px] bg-[#f1f1f1] rounded-full shadow-md"></div>
                    </div>

                    <div className="midDots absolute top-1/2 -translate-y-1/2 flex justify-between px-24 w-full">
                        <div className="dotLeft h-[171px] w-[171px] bg-[#f1f1f1] rounded-full shadow-md align-middle"></div>
                        <div className="dotRight h-[171px] w-[171px] bg-[#f1f1f1] rounded-full shadow-md align-middle"></div>
                    </div>

                    <div className="exploreAbout absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-24 text-center text-xl font-semibold">
                        <p className="text-4xl">Explore.</p>
                        <p className="text-4xl">About.</p>
                    </div>

                    <div className="onlineCourses absolute bottom-0 -left-16 -right-16 flex justify-between">
                        <p className="relative pl-6 -rotate-90">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-black"></span>
                            ONLINE COURSES
                        </p>
                        <p className="relative pl-6 -rotate-90">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-black"></span>
                            ONLINE COURSES
                        </p>
                    </div>

                    <div className="group2Imgs flex justify-center">
                        <img src="./src/assets/images/UI.svg" alt="" />
                    </div>
                    <div className="group2Imgs flex justify-center">
                        <img src="./src/assets/images/Arrow.svg" alt="" />
                    </div>

                    <div className="circleContainer relative">
                        <img className="absolute right-48" src="./src/assets/images/Circle-mid.svg" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default UI;
