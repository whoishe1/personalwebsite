import { Data } from "../data/ProjectData";

export const MainBody = () => {
    const data = Data;
    return (
        <main className="space-y-6 pt-5 md:pt-10">
            <section id="info">
                <div className="flex flex-col items-left max-w-screen-lg mx-auto px-5 lg:px-0">
                    <h1 className="text-4xl font-bold text-left lg:text-5xl">
                        <span className="bg-blue-800 bg-clip-text text-transparent">Jordan Ko</span>
                    </h1>
                    <h2 className="text-xl font-semibold leading-tight text-gray-600 text-justify pt-5">
                        Hi, I'm Jordan 👋. I'm a data / business intelligence analyst that also
                        enjoys frontend web development and data engineering.
                    </h2>
                </div>
            </section>
            <section id="Projects">
                <div className="max-w-screen-lg mx-auto px-5 lg:px-0">
                    <h2 className="text-3xl font-bold pb-6 pt-6">Projects</h2>
                    <p className="text-xl text-gray-600">Here are some my projects.</p>
                    <div className="grid grid-cols-none gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {data.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                className="inline-block w-full text-gray-800 border border-gray-700 rounded-lg outline-none bg-next hover:border-gray-400 md:w-60 focus:ring focus:ring-gray-300"
                                target="_blank"
                            >
                                <div className="p-4">
                                    <div className="font-semibold">{item.name}</div>
                                    <div className="inline-flex py-2 text-sm text-gray-600">
                                        {item.description}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="max-w-screen-lg mx-auto px-5 lg:px-0">
                    <h1 className="text-3xl font-bold pb-6 pt-6">Contact</h1>
                    <h2 className="text-xl text-gray-600">
                        If you have any questions feel free to contact me.
                    </h2>
                    <span className="inline-block pt-2 text-xl text-green-600 font-bold hover:text-green-800 hover:underline">
                        kojordan9112@gmail.com
                    </span>
                </div>
            </section>
        </main>
    );
};
