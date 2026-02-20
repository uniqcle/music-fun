
const TrackItem = ({ track, selectedTrack, onSelectedTrack }) => {
 

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
                onClick={() => onSelectedTrack(track)}
            >
                {track.attributes.title}
            </div>
            <audio controls src={track.attributes.attachments[0].url}></audio>
        </li>
    );
};

export default TrackItem;