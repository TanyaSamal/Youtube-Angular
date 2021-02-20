import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISearchResponse } from '../models/search-response.model';
import { ISearchItem } from '../models/search-item.model';
import { Constants } from '../../shared/consts';

@Injectable()
export class ItemsService {

    public searchUrl: string = 'https://www.googleapis.com/youtube/v3/search';
    public statisticsUrl: string = 'https://www.googleapis.com/youtube/v3/videos';
    public params = {
        key: 'AIzaSyCCS6lbNp7tUOZBU5dGdd87H8O_NgJsFBw',
        type: 'video',
        part: 'snippet',
        maxResults: '15'
      };

    constructor(private http: HttpClient) {}

    private joinQueryParams(queryValue) {
        let queryArr: Array<String> = [];
        let queryKeys: Array<String> = Object.keys(this.params);
        var queryValues: Array<String> = Object.values(this.params);

        for (let i = 0; i < queryKeys.length; i += 1) {
          queryArr.push(`${queryKeys[i]}=${queryValues[i]}`);
        }
        queryArr.push(`q=${queryValue}`);
      
        return queryArr.join('&');
    }

    public getResponse(query): Observable<ISearchResponse> {
       let queryVideo = this.joinQueryParams(query); 
       return this.http.get<ISearchResponse>(`${this.searchUrl}?${queryVideo}`);
    }

    public getStatistics(idStr): Observable<ISearchResponse> {
        return this.http.get<ISearchResponse>(`${this.statisticsUrl}?key=${this.params.key}&id=${idStr}&part=snippet,statistics`);
    }
}
