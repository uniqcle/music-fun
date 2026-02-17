import { useEffect } from "react";

export default function TrackDetail({ selectedTrack, isFetching, setIsFetching }) {
    useEffect(() => {
        if (!selectedTrack) {
            return;
        }

        fetch(
            `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrack.id}`,
            {
                headers: {
                    "api-key": "f212af60-d0e2-4231-a1b2-6ceaff923b72",
                    origin: "http://localhost",
                },
            },
        )
            .then((response) => response.json())
            .then((data) => {
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
