import { useEffect } from "react";



export default function TrackList({
    tracks,
    selectedTrack,
    setSelectedTrack,
    setTracks,
    setIsFetching,
}) {
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
        <div>
            <button
                onClick={() => {
                    setSelectedTrack(null);
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
        </div>
    );
}
