
function Banner({ poster, heading, description }) {

    const image_baseuri = `https://image.tmdb.org/t/p/original/`;
    const finalImage = `${image_baseuri}${poster}`;
    return <>
        <div className="flex flex-col text-white h-screen justify-center p-14 items-start">
            <div className="text-9xl font-bold">{heading}</div>
            <div className="flex gap-5 mt-2 mb-2 ">
                <button className="bg-[#2F2F34] rounded p-2 text-1xl font-semibold hover:bg-white hover:text-black">Play</button>
                <button className="bg-[#2F2F34] rounded p-2 text-1xl font-semibold hover:bg-white hover:text-black" >My List</button>
            </div>
            <div className="text-2xl font-bold w-1/2">{description}</div>
        </div >
    </>
}
export default Banner;