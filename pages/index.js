import Head from "next/head";
import { MainBody } from "../components/Body";
import { Footer } from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Head>
                <title>Jordan Ko</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <MainBody />
            <Footer />
        </div>
    );
};

export default Home;
