import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BungieService } from 'src/app/services/bungie.service';
import { Subscription } from 'rxjs';
import { IGeneralUser } from 'src/app/bungie-api-shared/bungie-api-interfaces';
import { BUNGIE_CMS_ROOT } from 'src/app/bungie-api-shared/bungie-api-endpoints';

@Component({
	selector: 'app-raid-stats',
	templateUrl: './raid-stats.component.html',
	styleUrls: ['./raid-stats.component.scss']
})
export class RaidStatsComponent implements OnInit, OnDestroy {

	private _userList: IGeneralUser[] = [];
	private _subscription = new Subscription;

	constructor(
		private _bungieService: BungieService,
		private _route: ActivatedRoute
	) { }

	ngOnInit() {
		const routerSub = this._route.params.subscribe(params => {
			this.searchMembership(params['id']);
		});
		this._subscription.add(routerSub);
	}

	ngOnDestroy() {
		this._subscription.unsubscribe();
	}

	public searchMembership(membershipId: string) {
		const memberSub = this._bungieService.getMembershipInfo(membershipId).subscribe(data => {
			if (data.Response) {
				this._userList.push(data.Response.bungieNetUser);
			}
		});
		this._subscription.add(memberSub);
	}

	public get userList(): IGeneralUser[] {
		return this._userList;
	}

	public chipColour(index: number): string {
		const returnedValue = index === 0 ? 'primary' : 'accent';
		return returnedValue;
	}

	remove(user: IGeneralUser) {
		const index = this._userList.indexOf(user);

		if (index >= 0) {
			this._userList.splice(index, 1);
		}
	}

	public get BungieCMSRootPath(): string {
		return BUNGIE_CMS_ROOT;
	}

}
