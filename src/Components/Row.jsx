import { useEffect, useState } from "react";

function Row({ heading, fetchUrl }) {
    const [series, setSeries] = useState([]);
    const image_baseurl = "https://image.tmdb.org/t/p/original"
    useEffect(function () {
        (async function data() {
            const response = await fetch(fetchUrl);
            const result = await response.json();
            setSeries(result.results);
            console.log(result.results);

        })();
    }, [fetchUrl])
    console.log(series.length);
    // https://image.tmdb.org/t/p/w500/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg
    //<img src="https://image.tmdb.org/t/p/w500/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg" alt="" />
    return <>
        <div className="mt-9 ml-10 overflow-hidden w-6/6 mr-10">
            <div className="text-white text-2xl  font-bold mb-6">{heading}</div>
            <div className="flex gap-8 overflow-x-scroll w-screen">
                {series.map((series) => {
                    return <img className="h-72" src={`${image_baseurl}${series.poster_path}`} alt="" key={series.index} />
                })
                }
            </div>
        </div>
    </>
}

export default Row;