import { useState } from 'react';

//const tracks = null

const tracks = [
    {
        id: 1,
        title: "Musicfun soundtrack 1",
        url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
    },
    {
        id: 2,
        title: "Musicfun soundtrack instrumental",
        url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
        isSelected: true
    },
    {
        id: 3,
        title: "Musicfun soundtrack Hip Hop",
        url: " https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
    },
];

export function App() {
    

    const [selectedTrackID, setSelectedTrackID] = useState(1);


    if(tracks === null) return <span>Loading...</span>
    
    if (tracks.length === 0) return <span>No tacks</span>;

    return (
        <>
            <button onClick={() => {
                setSelectedTrackID(null)
            }}>Reset selection</button>
            <ul>
                {tracks.map((track) => {
                    return (
                        <li key={track.id} style={{
                            border: track.id === selectedTrackID ? '1px solid orange' : 'none'
                            }}>
                            <div onClick={() => {
                                setSelectedTrackID(track.id)
                            }}>{track.title}</div>
                            <audio controls src={track.url}></audio>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
