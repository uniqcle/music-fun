import { useEffect } from "react";
import TrackItem from "./TrackItem";
import type {
    TrackListType,
    TrackItemType,
    PropsTrackList,
} from "../types/types";
import { getTracks } from "../api/tracks";

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
        const promise = getTracks();

        promise.then((data: TrackListType) => {
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
                    tracks?.data.map((track: TrackItemType) => {
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
