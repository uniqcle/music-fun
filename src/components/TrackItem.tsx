
import type { PropTrackItem } from "../types/types";

const TrackItem = ({
    track,
    selectedTrack,
    onSelectedTrack,
}: PropTrackItem) => {
    return (
        <>
            {track && (
                <li
                    key={track.id}
                    style={{
                        border:
                            track.id === selectedTrack?.id
                                ? "1px solid orange"
                                : "none",
                    }}
                >
                    <div onClick={() => onSelectedTrack(track)}>
                        {track.attributes.title}
                    </div>

                    <audio
                        controls
                        src={track.attributes.attachments[0]!.url}
                    ></audio>
                </li>
            )}
        </>
    );
};

export default TrackItem;