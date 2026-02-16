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

    useEffect(() => {
        if (!selectedTrack) {
            return;
        }

        fetch(
            `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrack.id}`,
            {
                headers: {
                    "api-key": "f212af60-d0e2-4231-a1b2-6ceaff923b72",
                    origin: "http://localhost",
                },
            },
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setIsFetching(false);
            });
    }, [selectedTrack]);
    

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
                                        setSelectedTrack(track);
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
                                {!selectedTrack && "Track is not selected"}
                                {selectedTrack && (
                                    <div>
                                        <h3>
                                            {selectedTrack.attributes.title}
                                        </h3>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
