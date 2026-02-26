import { useEffect } from "react";
import type { TrackItemType, PropTrackDetail } from "../types/types";
import { getTrack } from "../api/tracks";

export default function TrackDetail({
    selectedTrack,
    isFetching,
    setIsFetching,
}: PropTrackDetail) {
    useEffect(() => {
        if (!selectedTrack) {
            return;
        }

        const promise = getTrack(selectedTrack);

        promise.then((data: TrackItemType) => {
            console.log(data);
            setIsFetching(false);
        });
    }, [selectedTrack]);

    return (
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
                                <h3>{selectedTrack.attributes.title}</h3>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
