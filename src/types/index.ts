import View from "../core/view";


export interface NewsStore {
   getAllFeeds: () => NewsFeed[];
   getFeed: (position: number) => NewsFeed;
   setFeeds: (feeds: NewsFeed[]) => void;
   makeRead: (id: number) => void;
   hasFeeds: boolean;
   currentPage: number;
   numberOfFeed: number;
   prevPage: number;
   nextPage: number;
}

// export interface Store {
//     currentPage: number;
//     lastPage: number;
//     feeds: NewsFeed[];
// }

export interface News {
    readonly id: number;
    readonly time_ago: string;
    readonly title: string;
    readonly url: string;
    readonly user: string;
    readonly content: string;
}

// 인터섹션 타입알리아스
export interface NewsFeed extends News {
    readonly comments_count: number;
    readonly points: number;
    read?: boolean;
}

export interface NewsDetail extends News {
    readonly comments: NewsComment[];
}

export interface NewsComment extends News {
    readonly comments: NewsComment[];
    readonly level: number;
}

export interface RouteInfo {
    path: string;
    page: View;
}