import { takeUntil, filter } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from './services/notification.service';
import { Subject, Subscription } from 'rxjs';
import { MenuService, IMenuItem } from './services/menu.service';
import { UserDataService } from './services/user-data.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

	private _unsubscribe$: Subject<void> = new Subject<void>();
	private _showSideNav: boolean;
	private _selected: string;
	private _subscription = new Subscription;

	constructor(
		private _notificationService: NotificationService,
		private _menuService: MenuService,
		private _userDataService: UserDataService,
		private _router: Router,
		private _route: ActivatedRoute
	) {
		this._notificationService.notifyFeed.pipe(
			takeUntil(this._unsubscribe$))
			.subscribe(
				x => {
					if (x.mode === 'success') {
						console.log('success:', x.message);
					} else if (x.mode === 'info') {
						console.log('info:', x.message);
					} else if (x.mode === 'error') {
						console.log('error:', x.message);
					}
				});
	}

	ngOnInit() {
		const sideNavSub = this._menuService.showSideNav().subscribe(value => {
			this._showSideNav = value;
		});
		this._subscription.add(sideNavSub);

		const showSelectedSub = this._menuService.showSelected().subscribe(value => {
			this._selected = value;
		});
		this._subscription.add(showSelectedSub);

		const routeSub = this._router.events.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(() => {
				switch (this._router.url) {
					case '/':
						this._menuService.setSelected('');
						break;
					case '/about':
						this._menuService.setSelected('about');
						break;
				}
			});
		this._subscription.add(routeSub);

		const paramSub = this._route.params.subscribe(params => {
			this._menuService.setSelected(params['mode']);
		});
		this._subscription.add(paramSub);
	}

	public menuSelect(value: string, disabled: boolean): void {
		if (!disabled) {
			this._menuService.setSelected(value);
			if (value !== 'about') {
				this._router.navigate(['/stats', this._userDataService.currentUser.destinyMemberships[0].membershipId, value]);
			} else {
				this._router.navigate(['/about']);
			}
		}
	}

	public get showSideNav(): boolean {
		return this._showSideNav;
	}

	public get sideNavMenu(): IMenuItem[] {
		return this._menuService.menuItems;
	}

	public closeSideNav(): void {
		this._menuService.setSideNav(false);
	}

	public selected(route: string): boolean {
		return route === this._selected;
	}

	ngOnDestroy() {
		this._subscription.unsubscribe();
		this._unsubscribe$.next();
		this._unsubscribe$.complete();
	}

	public disabled(requiresUser: boolean): boolean {
		if (!requiresUser) {
			return false;
		} else {
			return this._userDataService.currentUser === undefined;
		}
	}
}
