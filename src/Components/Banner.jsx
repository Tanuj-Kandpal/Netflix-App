
function Banner({ heading, description }) {

    return <>
        <div className="flex flex-col text-white h-screen justify-center p-14 items-start">
            <div className="text-9xl font-bold mb-3">{heading}</div>
            <div className="flex gap-5 mb-4 ">
                <button className="bg-[#2F2F34] rounded p-2 w-32 text-1xl font-semibold hover:bg-white hover:text-black">Play</button>
                <button className="bg-[#2F2F34] rounded p-2 w-32 text-center-1xl font-semibold hover:bg-white hover:text-black" >My List</button>
            </div>
            <div className="text-2xl font-bold w-1/2">{description}</div>
        </div >
    </>
}
export default Banner;