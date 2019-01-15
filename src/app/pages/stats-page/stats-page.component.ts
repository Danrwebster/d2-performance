import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMembershipProfile, IBungieNetUser } from 'src/app/bungie-api-shared/bungie-api-interfaces';
import { BUNGIE_CMS_ROOT } from 'src/app/bungie-api-shared/bungie-api-endpoints';
import { Subscription } from 'rxjs';
import { BungieService } from 'src/app/services/bungie.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';
import { MenuService } from 'src/app/services/menu.service';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-stats-page',
	templateUrl: './stats-page.component.html',
	styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent implements OnInit, OnDestroy {

	private _currentUser: IMembershipProfile;
	private _subscription = new Subscription;
	private _selected: string;

	constructor(
		private _router: Router,
		private _route: ActivatedRoute,
		private _menuService: MenuService
	) { }

	ngOnInit() {
		this._currentUser = this._route.snapshot.data.MembershipProfile;

		const showSelectedSub = this._menuService.showSelected().subscribe(value => {
			this._selected = value;
		});
		this._subscription.add(showSelectedSub);

		const routeSub = this._router.events.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(() => {
				this._currentUser = this._route.snapshot.data.MembershipProfile;
			});
		this._subscription.add(routeSub);
	}

	ngOnDestroy() {
		this._subscription.unsubscribe();
	}

	public get currentUser(): IBungieNetUser {
		if (this._currentUser) {
			return this._currentUser.bungieNetUser;
		} else {
			return undefined;
		}
	}

	public get BungieCMSRootPath(): string {
		return BUNGIE_CMS_ROOT;
	}

	public get selected(): string {
		return this._selected;
	}

}
