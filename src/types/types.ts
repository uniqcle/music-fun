
type Attachments = {
    id: string;
    addedAt?: Date;
    updatedAt?: Date;
    version: number;
    url: string
    contentType: string;
    originalName: string;
    fileSize: number;
};

export type TrackItemType = {
	id: string;
    attributes: {
        title: string;
        lyrics?: null | string;
        attachments: Attachments[];
    };
}

export type TrackListType = {
	data: Array<TrackItemType>; 
};

export type PropsTrackList = {
    tracks: TrackListType | null;
    selectedTrack: TrackItemType | null;
    setSelectedTrack: (track: TrackItemType | null) => void;
    setTracks: (tracks: TrackListType ) => void;
    setIsFetching: (isFetching: boolean) => void;
};


export type PropTrackItem = {
    track: TrackItemType;
    selectedTrack: TrackItemType | null;
    onSelectedTrack: (track: TrackItemType) => void;
};

export type PropTrackDetail = {
    selectedTrack: TrackItemType | null;
    isFetching: boolean;
    setIsFetching: (isFetching: boolean) => void;
};