import Head from "next/head";
import { MainBody } from "../components/Body";
// import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Head>
                <title>Jordan Ko</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            {/* <Header /> */}
            <MainBody />
            <Footer />
        </div>
    );
};

export default Home;
