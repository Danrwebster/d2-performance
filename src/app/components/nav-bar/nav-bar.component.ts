import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuService } from 'src/app/services/menu.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

	private _showSearchBar: boolean;
	private _showSideNav: boolean;
	private _subscription = new Subscription;

	constructor(
		private _router: Router,
		private _menuService: MenuService
	) { }

	ngOnInit() {
		const routeSub = this._router.events.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(() => {
				this._menuService.setSideNav(false);
				this._menuService.setSearchBar(false);
			});
		this._subscription.add(routeSub);

		const sideNavSub = this._menuService.showSideNav().subscribe(value => {
			this._showSideNav = value;
		});
		this._subscription.add(sideNavSub);

		const searchBarSub = this._menuService.showSearchBar().subscribe(value => {
			this._showSearchBar = value;
		});
		this._subscription.add(sideNavSub);
	}

	ngOnDestroy() {
		this._subscription.unsubscribe();
	}

	public toggleSearch() {
		event.stopPropagation();
		this._menuService.setSearchBar(!this._showSearchBar);
		if (this._showSearchBar) {
			this._menuService.setSideNav(false);
		}
	}

	public get showSearch(): boolean {
		return this._showSearchBar;
	}

	public toggleSideNav() {
		event.stopPropagation();
		this._menuService.setSideNav(!this._showSideNav);
		if (this._showSideNav) {
			this._menuService.setSearchBar(false);
		}
	}

	public closeAll() {
		this._showSearchBar = false;
		this._menuService.setSideNav(false);
	}
}
