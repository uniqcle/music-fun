import { useEffect, useState } from "react";
import type { TrackListType } from "../types/types";
import { getTracks } from '../api/tracks'; 

export default function useTracks() {
    const [tracks, setTracks] = useState<TrackListType | null>(null);

    useEffect(function(){
        const promise = getTracks();

        promise.then((data: TrackListType) => {
            console.log(data);
            setTracks(data);
        });
    }, []);

    return {
        tracks: tracks,
		refresh: () => {
			console.log('refresh...')
		},
    };
}
