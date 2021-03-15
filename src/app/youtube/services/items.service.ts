import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISearchResponse } from '../models/search-response.model';
import { ISearchParams } from '../models/search-params.model';
import { Constants } from '../../shared/consts';

@Injectable()
export class ItemsService {

    public searchUrl: string = Constants.SEARCH_URL;
    public statisticsUrl: string = Constants.STATISTICS_URL;
    public params: ISearchParams = {
        key: Constants.API_KEY,
        type: 'video',
        part: 'snippet',
        maxResults: Constants.MAX_RESULTS
      };

    constructor(private http: HttpClient) {}

    private joinQueryParams(queryValue: string): string {
        let queryArr: Array<String> = [];
        let queryKeys: Array<String> = Object.keys(this.params);
        let queryValues: Array<String> = Object.values(this.params);

        for (let i = 0; i < queryKeys.length; i += 1) {
          queryArr.push(`${queryKeys[i]}=${queryValues[i]}`);
        }
        queryArr.push(`q=${queryValue}`);
        return queryArr.join('&');
    }

    public getResponse(query: string): Observable<ISearchResponse> {
       let queryVideo: string = this.joinQueryParams(query);
       return this.http.get<ISearchResponse>(`${this.searchUrl}?${queryVideo}`);
    }

    public getStatistics(idStr: string): Observable<ISearchResponse> {
        return this.http.get<ISearchResponse>(`${this.statisticsUrl}?key=${this.params.key}&id=${idStr}&part=snippet,statistics`);
    }

    public getNextPart(query: string, next: string): Observable<ISearchResponse> {
        let queryVideo: string = this.joinQueryParams(query);
        return this.http.get<ISearchResponse>(`${this.searchUrl}?${queryVideo}&pageToken=${next}`);
    }
}
