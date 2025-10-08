import { useState, useEffect } from "react";

 

export function App() {
    const [tracks, setTracks] = useState(null);
    const [selectedTrack, setSelectedTrack] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

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
                    setSelectedTrack(null);
                }}
            >
                Reset selection
            </button>
            <div style={{ display: "flex", gap: "30px" }}>
                <ul>
                    {tracks.map((track) => {
                        return (
                            <li
                                key={track.id}
                                style={{
                                    border:
                                        track.id === selectedTrack?.id
                                            ? "1px solid orange"
                                            : "none",
                                }}
                            >
                                <div
                                    onClick={() => {
                                        setIsFetching(true);
                                        fetch(
                                            `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${track.id}`,
                                            {
                                                headers: {
                                                    "api-key":
                                                        "f212af60-d0e2-4231-a1b2-6ceaff923b72",
                                                    origin: "http://localhost",
                                                },
                                            }
                                        )
                                            .then((response) => response.json())
                                            .then((data) => {
                                                console.log(data);
                                                setSelectedTrack(track);
                                                setIsFetching(false);
                                            });
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
                <div>
                    {isFetching ? (
                        <h2>Загрузка</h2>
                    ) : (
                        <>
                            <h2>Details</h2>
                            <div>
                                {selectedTrack === null
                                    ? "Track is not selected"
                                    : selectedTrack.attributes.title}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
