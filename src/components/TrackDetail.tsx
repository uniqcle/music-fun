import type { PropTrackDetail } from "../types/types";
import useTrack from "../hooks/useTrackDetail";

export default function TrackDetail({
    selectedTrack,
    isFetching,
    setIsFetching,
}: PropTrackDetail) {
    const { trackDetail } = useTrack(selectedTrack, setIsFetching);

    console.log(trackDetail);

    return (
        <div>
            {isFetching ? (
                <h2>Загрузка</h2>
            ) : (
                <>
                    <h2>Details</h2>
                    <div>
                        {!selectedTrack && "Track is not selected"}
                        {trackDetail && (
                            <div>
                                <h3>{trackDetail?.data.attributes.title}</h3>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
