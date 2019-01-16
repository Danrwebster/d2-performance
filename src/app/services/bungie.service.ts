import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NotificationService } from './notification.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IBungieAPIResponse } from '../bungie-api-shared/bungie-api-interfaces';
import { BUNGIE_ROOT_API, DESTINY_PLAYER_SEARCH, BUNGIE_USER_SEARCH, MEMBERSHIP_INFO } from '../bungie-api-shared/bungie-api-endpoints';
import { BUNGIE_APIKEY } from '../bungie-api-shared/bungie-api-key';

export interface IHttpOptions {
	headers: HttpHeaders;
}

@Injectable({
	providedIn: 'root'
})
export class BungieService {

	constructor(
		private http: HttpClient,
		private notificationService: NotificationService
	) { }

	public getDestinyPlayer(searchTerm: string, platform?: string): Observable<IBungieAPIResponse> {
		const platformQuery = platform ? platform : '-1';
		const query = BUNGIE_ROOT_API + DESTINY_PLAYER_SEARCH + platformQuery + '/' + encodeURIComponent(searchTerm) + '/';
		return this.http.get<any>(query, { headers: this.buildHttpHeaders() })
			.pipe(
				catchError(this.handleError('getDestinyPlayer', []))
			);
	}

	public searchBungieUsers(searchTerm: string): Observable<IBungieAPIResponse> {
		const query = BUNGIE_ROOT_API + BUNGIE_USER_SEARCH;
		const httpParams = new HttpParams()
			.set('q', searchTerm);
		return this.http.get<any>(query, { headers: this.buildHttpHeaders(), params: httpParams })
			.pipe(
				catchError(this.handleError('getBungieUser', []))
			);
	}

	public getMembershipInfo(membershipID: string, platform?: string): Observable<IBungieAPIResponse> {
		const platformQuery = platform ? platform : '-1';
		const query = BUNGIE_ROOT_API + MEMBERSHIP_INFO + encodeURIComponent(membershipID) + '/' + platformQuery + '/';
		return this.http.get<any>(query, { headers: this.buildHttpHeaders() })
			.pipe(
				catchError(this.handleError('getMembershipInfo', []))
			);
	}

	private buildHttpHeaders(): HttpHeaders {
		const httpOptions = new HttpHeaders({ 'X-API-Key': BUNGIE_APIKEY });
		return httpOptions;
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			// TODO: send the error to remote logging infrastructure
			this.notificationService.fail(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			this.notificationService.fail(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
}
