import { } from "react";
import "../Components/VideoPlayer.css"
function VideoPlayer({ videoUrl, onClose }) {
    return <>
        <div className="video-player-modal">
            <div className="video-player-content">
                <button className="close-btn" onClick={onClose}>Close</button>
                <iframe
                    width="100%"
                    height="360"
                    src={videoUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </>
}

export default VideoPlayer;