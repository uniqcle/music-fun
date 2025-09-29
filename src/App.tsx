import { useState, useEffect } from "react";

//const tracks = null

const tracks = [
    {
        id: 1,
        title: "Musicfun soundtrack 1",
        url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
        id: 2,
        title: "Musicfun soundtrack instrumental",
        url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
        isSelected: true,
    },
    {
        id: 3,
        title: "Musicfun soundtrack Hip Hop",
        url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
];

export function App() {
    const [selectedTrackID, setSelectedTrackID] = useState(1);
    const [tracks, setTracks] = useState(null);

    const effect = () => {
        fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
            headers: {
                "api-key": "f212af60-d0e2-4231-a1b2-6ceaff923b72",
                origin: "http://localhost",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setTracks(data.data);
            });
    };

    useEffect(effect, []);

    if (tracks === null) return <span>Loading...</span>;

    if (tracks.length === 0) return <span>No tacks</span>;

    return (
        <>
            <button
                onClick={() => {
                    setSelectedTrackID(null);
                }}
            >
                Reset selection
            </button>
            <ul>
                {tracks.map((track) => {
                    return (
                        <li
                            key={track.id}
                            style={{
                                border:
                                    track.id === selectedTrackID
                                        ? "1px solid orange"
                                        : "none",
                            }}
                        >
                            <div
                                onClick={() => {
                                    setSelectedTrackID(track.id);
                                }}
                            >
                                {track.attributes.title}
                            </div>
                            <audio
                                controls
                                src={track.attributes.attachments[0].url}
                            ></audio>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
