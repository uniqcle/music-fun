import { useEffect, useState } from "react";
import type { TrackItemType } from "../types/types";
import { getTrack } from "../api/tracks";

export default function useTrack(selectedTrack: TrackItemType | null, setIsFetching: (isFetching: boolean) => void ) {
    const [trackDetail, setTrackDetail] = useState<TrackItemType | null>(null);

    useEffect(() => {
        if (!selectedTrack) {
            return;
        }

        const promise = getTrack(selectedTrack);

        promise.then((data: TrackItemType) => {
			console.log(data);
			setTrackDetail(data)
            setIsFetching(false);
        });
    }, [selectedTrack]);

    return {
        trackDetail,
        setTrackDetail,
    };
}
