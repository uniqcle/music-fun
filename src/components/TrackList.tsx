import { useEffect } from "react";
import TrackItem from "./TrackItem";
import type {
    TrackListType,
    TrackItemType,
    PropsTrackList,
} from "../types/types";

export default function TrackList({
    tracks,
    selectedTrack,
    setSelectedTrack,
    setTracks,
    setIsFetching,
}: PropsTrackList) {
    const onResetClick = () => {
        setSelectedTrack(null);
    };

    const onSelectedTrack = (track: TrackItemType) => {
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
            .then((data: TrackListType) => {
                console.log(data);
                setTracks(data);
            });
    };

    useEffect(effect, []);

    if (tracks === null) return <span>Loading...</span>;

    if (tracks?.data.length === 0) return <span>No tacks</span>;

    return (
        <div>
            <button onClick={onResetClick}>Reset selection</button>

            <ul>
                {tracks &&
                    tracks.map((track: TrackItemType) => {
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
