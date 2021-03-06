export interface ISearchItem {
    kind: string;
    etag: string;
    id: IVideoId;
    snippet: ISnippet;
    statistics: IStatistisc;
}

interface IVideoId {
    kind: string;
    videoId: string;
}

interface ISnippet {
    publishedAt: string;
    publishTime: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: IThumbnails;
    channelTitle: string;
    tags: Array<string>;
    categoryId: string;
    liveBroadcastContent: string;
    localized: Ilocalized;
    defaultAudioLanguage: string;
}

interface Ilocalized {
    title: string;
    description: string;
}

interface IThumbnails {
    default: IThumbnail;
    medium: IThumbnail;
    high: IThumbnail;
    standard: IThumbnail;
    maxres: IThumbnail;
}

interface IThumbnail {
    url: string;
    width: number;
    height: number;
}

export interface IStatistisc {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
}
