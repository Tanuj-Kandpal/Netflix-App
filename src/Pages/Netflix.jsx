import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Navbar from "../Components/NavBar";
import request from "../request";
import Row from "../Components/Row";

function Netflix() {

    const [netflixData, setNetflixData] = useState([]);

    const randomNum = Math.floor(Math.random() * 20);
    const image_baseuri = `https://image.tmdb.org/t/p/original/`;


    useEffect(() => {
        (async function data() {
            const response = await fetch(request.fetchNetflixOriginals);
            const res = await response.json();
            setNetflixData(res.results);
        })();
    }, []);
    const finalImage = `${image_baseuri}${netflixData[randomNum]?.backdrop_path}`;
    return <>
        <div className="bg-[#111111]">
            <div style={{
                backgroundSize: "cover",
                backgroundImage: `url("${finalImage}")`,
                backgroundRepeat: "no-repeat",
                height: "100%"
            }} >
                <Navbar />
                <Banner poster={netflixData[randomNum]?.backdrop_path} heading={netflixData[randomNum]?.original_title}
                    description={netflixData[randomNum]?.overview} />
            </div>
            <Row heading={"Netflix Originals"} fetchUrl={request.fetchNetflixOriginals} />
            <Row heading={"Trending Now"} fetchUrl={request.fetchTrending} />
        </div>


    </>
}

export default Netflix;