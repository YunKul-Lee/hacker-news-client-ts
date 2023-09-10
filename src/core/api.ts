import { NewsFeed, NewsDetail } from '../types';

export class Api {
    ajax: XMLHttpRequest;
    url: string;

    constructor(url: string) {
        this.ajax = new XMLHttpRequest();
        this.url = url;
    }

    getRequest<AjaxResponse>(url: string): AjaxResponse {
        const ajax = new XMLHttpRequest();
        ajax.open('GET', url, false);
        ajax.send();

        return JSON.parse(ajax.response);
    }
}

export class NewsFeedApi extends Api{
    getData(): NewsFeed[] {
        return this.getRequest<NewsFeed[]>(this.url);
    }
}

export class NewsDetailApi extends Api {

    getData(): NewsDetail {
        return this.getRequest<NewsDetail>(this.url);
    }
}