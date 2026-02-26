import type { TrackItemType, TrackListType } from "../types/types";


export const getTracks = () => {
	const promise: Promise<TrackListType> =  fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
				headers: {
					"api-key": "f212af60-d0e2-4231-a1b2-6ceaff923b72",
					origin: "http://localhost",
				},
			})
		.then((response) => response.json())
	
	return promise; 
}


export const getTrack = (selectedTrack: TrackItemType) => {
    const promise: Promise<TrackItemType> = fetch(
        `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrack.id}`,
        {
            headers: {
                "api-key": "f212af60-d0e2-4231-a1b2-6ceaff923b72",
                origin: "http://localhost",
            },
        },
    ).then((response) => response.json());

    return promise;
};
