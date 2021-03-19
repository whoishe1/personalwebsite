export const Header = () => {
    return (
        <header className="sticky top-0 z-30 px-4 mb-6 bg-gray-50 sm:px-8">
            <div className="flex flex-col items-center justify-between max-w-screen-lg py-3 mx-auto md:flex-row">
                <a href="#Home" className="m-2 leading-tight text-xl md:text-lg">
                    <span className="bg-clip-text text-transparent bg-blue-800 font-bold">
                        Jordan Ko
                    </span>
                </a>
                <nav>
                    <a
                        href="#Home"
                        id="Home"
                        className="p-1 m-2 rounded hover:bg-gray-200 focus:bg-gray-300 focus:outline-none"
                    >
                        Home
                    </a>
                    <a
                        href="#Projects"
                        className="p-1 m-2 rounded hover:bg-gray-200 focus:bg-gray-300 focus:outline-none"
                    >
                        Projects
                    </a>
                    <a
                        href="#Contact"
                        className="p-1 m-2 rounded hover:bg-gray-200 focus:bg-gray-300 focus:outline-none"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};
