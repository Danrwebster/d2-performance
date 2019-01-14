import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MenuService {

	private _showSideNav: BehaviorSubject<boolean>;
	private _showSearchBar: BehaviorSubject<boolean>;

	constructor() {
		this._showSideNav = new BehaviorSubject<boolean>(false);
		this._showSearchBar = new BehaviorSubject<boolean>(false);
	}

	public showSideNav(): Observable<boolean> {
		return this._showSideNav.asObservable();
	}

	public setSideNav(newValue: boolean) {
		this._showSideNav.next(newValue);
	}

	public showSearchBar(): Observable<boolean> {
		return this._showSearchBar.asObservable();
	}

	public setSearchBar(newValue: boolean) {
		this._showSearchBar.next(newValue);
	}
}
