import { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import TrackList from "./components/TrackList";
import TrackDetail from "./components/TrackDetail";

export function App() {
    const [tracks, setTracks] = useState(null);
    const [selectedTrack, setSelectedTrack] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    return (
        <div>
            <Header />
            <SideBar />
            <div style={{ display: "flex", gap: "30px" }}>
                <TrackList
                    tracks={tracks}
                    selectedTrack={selectedTrack}
                    setSelectedTrack={setSelectedTrack}
                    setTracks={setTracks}
                    setIsFetching={setIsFetching}
                />
                <TrackDetail
                    selectedTrack={selectedTrack}
                    isFetching={isFetching}
                    setIsFetching={setIsFetching}
                />
            </div>
        </div>
    );
}
