import TrackItem from "./TrackItem";
import type { TrackItemType, PropsTrackList } from "../types/types";
import useTracks from "../hooks/useTracks";

export default function TrackList({
    selectedTrack,
    setSelectedTrack,
    setIsFetching,
}: PropsTrackList) {
    const onResetClick = () => {
        setSelectedTrack(null);
    };

    const onSelectedTrack = (track: TrackItemType) => {
        setIsFetching(true);
        setSelectedTrack?.(track);
    };

    const { tracks } = useTracks();

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
