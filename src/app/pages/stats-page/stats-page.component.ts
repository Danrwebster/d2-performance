import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMembershipProfile, IBungieNetUser } from 'src/app/bungie-api-shared/bungie-api-interfaces';
import { BUNGIE_CMS_ROOT } from 'src/app/bungie-api-shared/bungie-api-endpoints';
import { Subscription } from 'rxjs';
import { BungieService } from 'src/app/services/bungie.service';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';
import { MenuService } from 'src/app/services/menu.service';

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
		private _bungieService: BungieService,
		private _route: ActivatedRoute,
		private _userDataService: UserDataService,
		private _menuService: MenuService
	) { }

	ngOnInit() {
		const paramSub = this._route.params.subscribe(params => {
			this.searchMembership(params['id']);
		});
		this._subscription.add(paramSub);

		const showSelectedSub = this._menuService.showSelected().subscribe(value => {
			this._selected = value;
		});
		this._subscription.add(showSelectedSub);
	}

	ngOnDestroy() {
		this._subscription.unsubscribe();
	}

	public searchMembership(membershipId: string) {
		const memberSub = this._bungieService.getMembershipInfo(membershipId).subscribe(data => {
			if (data.Response) {
				if (data.Response !== this._userDataService.currentUser) {
					this._userDataService.addUser(data.Response);
					this._currentUser = this._userDataService.currentUser;
				}
			}
		});
		this._subscription.add(memberSub);
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
