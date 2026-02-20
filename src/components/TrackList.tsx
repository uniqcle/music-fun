import { useEffect } from "react";
import TrackItem from "./TrackItem";

export default function TrackList({
    tracks,
    selectedTrack,
    setSelectedTrack,
    setTracks,
    setIsFetching,
}) {
    const onResetClick = () => {
        setSelectedTrack(null);
    };

    const onSelectedTrack = (track) => {
        setIsFetching(true);
        setSelectedTrack?.(track);
    };

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
            <button onClick={onResetClick}>Reset selection</button>

            <ul>
                {tracks.map((track) => {
                    return (
                        <TrackItem
                            key={track.id}
                            track={track}
                            selectedTrack={selectedTrack}
                            onSelectedTrack={onSelectedTrack}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
