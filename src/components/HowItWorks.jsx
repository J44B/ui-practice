export function HowItWorks() {
    return (
        <div id="main-page-01" className="max-w-[1440px] mx-auto bg-[#F0F0F0]">
            <div id="2022" className="flex flex-row-reverse mr-16 font-bold">
                <p>2022</p>
            </div>
            <div
                id="circle-1-container"
                className="flex flex-row justify-center"
            >
                <div
                    id="circle-1"
                    className="mt-16 w-16 h-16 rounded-full bg-white drop-shadow-2xl"
                ></div>
            </div>
            <div className="ml-4">
                <div
                    id="how-it-works"
                    className="flex flex-row place-items-baseline gap-8 "
                >
                    <h1 className="text-6xl font-bold">ui.</h1>
                    <h2 className="text-2xl">
                        How it work<b>s</b>.
                    </h2>
                </div>
                <div id="image-with-text" className="relative">
                    <p
                        id="main-text"
                        className="absolute mt-56 font-bold text-normal"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua Quis ipsum suspendisse.
                    </p>
                    <div id="ui-flipped" className="flex flex-row justify-end">
                        <img
                            src="/src/assets/images/UI-flipped.png"
                            alt=""
                            className="absolute"
                        />
                    </div>
                    <div
                        id="image-walking-man"
                        className="flex flex-row-reverse"
                    >
                        <img
                            src="/src/assets/images/walking_man_with_phone.png"
                            alt="man with phone walking"
                            className="pr-32"
                        />
                    </div>
                </div>
                <div
                    id="double-list-container"
                    className="flex flex-row gap-32"
                >
                    <div id="list-left">
                        <ul className="flex flex-col gap-8 list-image-[url(src/assets/images/list-square.png)] ml-8">
                            {/* <li className="w-2 h-2 bg-black"></li> */}
                            <li>Lorem ipsum dolor.</li>
                            {/* <li className="w-2 h-2 bg-black"></li> */}
                            <li>Lorem ipsum dolor.</li>
                        </ul>
                    </div>
                    <div id="list-right">
                        <ul className="flex flex-col gap-8 list-image-[url(src/assets/images/list-square.png)]">
                            <li>Lorem ipsum dolor.</li>
                            <li>Lorem ipsum dolor.</li>
                        </ul>
                    </div>
                </div>
                <button className="bg-[#B885FD] py-2 px-4 mt-8">
                    read more
                </button>
            </div>
            <div id="flippy" className="mt-24 flex flex-row justify-around">
                <ul>
                    <li className="rotate-90 list-image-[url(src/assets/images/list-square.png)]">
                        Never stop learning
                    </li>
                </ul>
            </div>
            <div
                id="circle-2-container"
                className="flex flex-row justify-center mr-96 mt-24"
            >
                <div
                    id="circle-2"
                    className="w-24 h-24 rounded-full bg-white drop-shadow-2xl"
                ></div>
            </div>
        </div>
    );
}
