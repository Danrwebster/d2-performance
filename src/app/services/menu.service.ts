import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ISubListItem {
	displayName: string;
	route?: string;
	mode: string;
	requiresUser: boolean;
}

export interface IMenuItem {
	displayName: string;
	route?: string;
	mode?: string;
	requiresUser: boolean;
	subList?: ISubListItem[];
}

const SIDE_NAV_MENU = [
	{
		displayName: 'All Stats',
		route: 'all-stats',
		requiresUser: true
	},
	{
		displayName: 'PvE Stats',
		requiresUser: true,
		subList: [
			{
				displayName: 'Strikes',
				route: 'strike-stats',
				mode: 'strike',
				requiresUser: true
			},
			{
				displayName: 'Nightfalls',
				route: 'nightfall-stats',
				mode: 'nightfall',
				requiresUser: true
			},
			{
				displayName: 'Raids',
				route: 'raid-stats',
				mode: 'raid',
				requiresUser: true
			},
			{
				displayName: 'All PvE',
				route: 'all-pve-stats',
				mode: 'allpve',
				requiresUser: true
			}
		]
	},
	{
		displayName: 'PvP Stats',
		requiresUser: true,
		subList: [
			{
				displayName: 'Gambit',
				route: 'gambit-stats',
				mode: 'gambit',
				requiresUser: true
			},
			{
				displayName: 'Control',
				route: 'control-stats',
				mode: 'control',
				requiresUser: true
			},
			{
				displayName: 'Clash',
				route: 'clash-stats',
				mode: 'clash',
				requiresUser: true
			},
			{
				displayName: 'Iron Banner',
				route: 'iron-banner-stats',
				mode: 'ironbanner',
				requiresUser: true
			},
			{
				displayName: 'Trials of the Nine',
				route: 'trials-stats',
				mode: 'trialsofthenine',
				requiresUser: true
			},
			{
				displayName: 'All PvP',
				route: 'all-pvp-stats',
				mode: 'allpvp',
				requiresUser: true
			}
		]
	},
	{
		displayName: 'About',
		route: 'about',
		requiresUser: false
	}
];

@Injectable({
	providedIn: 'root'
})
export class MenuService {

	private _showSideNav: BehaviorSubject<boolean>;
	private _showSearchBar: BehaviorSubject<boolean>;
	private _selected: BehaviorSubject<string>;

	private _sideNavMenu: IMenuItem[] = SIDE_NAV_MENU;

	constructor() {
		this._showSideNav = new BehaviorSubject<boolean>(false);
		this._showSearchBar = new BehaviorSubject<boolean>(false);
		this._selected = new BehaviorSubject<string>('');
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

	public get menuItems(): IMenuItem[] {
		return this._sideNavMenu;
	}

	public showSelected(): Observable<string> {
		return this._selected.asObservable();
	}

	public setSelected(newValue: string) {
		this._selected.next(newValue);
	}
}
