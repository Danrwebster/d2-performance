import { Component, OnInit, OnDestroy } from '@angular/core';
import { BungieService } from 'src/app/services/bungie.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { IMembershipProfile, IHistoricalStatsAccount, IHistoricalStatValue, IHistoricalStatsByType } from 'src/app/bungie-api-shared/bungie-api-interfaces';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-all-stats',
	templateUrl: './all-stats.component.html',
	styleUrls: ['./all-stats.component.scss']
})
export class AllStatsComponent implements OnInit, OnDestroy {

	private _currentUser: IMembershipProfile;
	private _subscription = new Subscription;
	private _mergedStats: IHistoricalStatValue[] = [];
	private _generalStats: IHistoricalStatsAccount;
	private _showStats = false;

	constructor(
		private _bungieService: BungieService,
		private _userDataService: UserDataService
	) { }

	ngOnInit() {
		this._currentUser = this._userDataService.currentUser;
		const statsSub = this._bungieService
			.getGeneralStats(this._currentUser.destinyMemberships[0].membershipId, this._currentUser.destinyMemberships[0].membershipType)
			.subscribe(value => {
				this._generalStats = value.Response;
				Object.keys(this._generalStats.mergedAllCharacters.merged.allTime).map(key => {
					this._mergedStats.push(
						this._generalStats.mergedAllCharacters.merged.allTime[key]
					);
				});
				this._showStats = true;
			});
		this._subscription.add(statsSub);
	}

	ngOnDestroy() {
		this._subscription.unsubscribe();
	}

	public get showStats(): boolean {
		return this._showStats;
	}

	public get mergedStats(): IHistoricalStatValue[] {
		return this._mergedStats;
	}

	public get generalStats(): IHistoricalStatsByType {
		return this._generalStats.mergedAllCharacters.merged.allTime;
	}

	public precisionRatio(pKills: number, kills: number): string {
		return Math.round((pKills / kills) * 10000) / 100 + '';
	}
}
