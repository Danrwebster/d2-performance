import { Injectable } from '@angular/core';
import { IMembershipProfile } from '../bungie-api-shared/bungie-api-interfaces';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserDataService {

	private _userList: IMembershipProfile[] = [];
	private _userStream = new Subject<IMembershipProfile>();
	public userSource$ = this._userStream.asObservable();

	constructor() { }

	public addUser(newUser: IMembershipProfile): void {
		this._userList.push(newUser);
		this._userStream.next(newUser);
	}

	public get currentUser(): IMembershipProfile {
		if (this._userList.length > 0) {
			return this._userList[this._userList.length - 1];
		} else {
			return undefined;
		}
	}
}
