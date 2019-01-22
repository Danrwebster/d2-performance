import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { BungieService } from 'src/app/services/bungie.service';
import { UserDataService } from 'src/app/services/user-data.service';
import {
	IMembershipProfile,
	IHistoricalStatsAccount,
	IHistoricalStatValue,
	IHistoricalStatsByType
} from 'src/app/bungie-api-shared/bungie-api-interfaces';
import { Subscription } from 'rxjs';

interface IGoogleChartData {
	chartType: string;
	dataTable: any;
	options: any;
}

@Component({
	selector: 'app-all-stats',
	templateUrl: './all-stats.component.html',
	styleUrls: ['./all-stats.component.scss']
})
export class AllStatsComponent implements OnInit, OnDestroy {

	@ViewChild('weaponKillChart') weaponKillChart;

	private _currentUser: IMembershipProfile;
	private _subscription = new Subscription;
	private _mergedStats: IHistoricalStatValue[] = [];
	private _generalStats: IHistoricalStatsAccount;
	private _showStats = false;
	private _weaponTypeKills: IGoogleChartData;
	private _redraw = true;

	constructor(
		private _bungieService: BungieService,
		private _userDataService: UserDataService
	) {
		this._weaponTypeKills = {
			chartType: 'Bar',
			dataTable: [],
			options: {
				bars: 'horizontal',
				height: '600'
			}
		};
	}

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
				this.initChartData();
				this._showStats = true;
			});
		this._subscription.add(statsSub);
	}

	ngOnDestroy() {
		this._subscription.unsubscribe();
	}

	@HostListener('window:resize', ['$event'])
	onResize() {
		this.weaponKillChart.redraw();
	}

	public chartReady(event: Event) {
		if (this._redraw) {
			this._redraw = false;
			this.weaponKillChart.wrapper.getDataTable().sort({ column: 1, desc: true });
			this.weaponKillChart.redraw();
		}
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

	public initChartData() {
		this._weaponTypeKills.dataTable = [
			[
				'Weapon Category', 'Kills'
			],
			[
				this.generalStats.weaponKillsAutoRifle.statId.substring(11),
				this.generalStats.weaponKillsAutoRifle.basic.value
			],
			[
				this.generalStats.weaponKillsBeamRifle.statId.substring(11),
				this.generalStats.weaponKillsBeamRifle.basic.value
			],
			[
				this.generalStats.weaponKillsBow.statId.substring(11),
				this.generalStats.weaponKillsBow.basic.value
			],
			[
				this.generalStats.weaponKillsFusionRifle.statId.substring(11),
				this.generalStats.weaponKillsFusionRifle.basic.value
			],
			[
				this.generalStats.weaponKillsGrenadeLauncher.statId.substring(11),
				this.generalStats.weaponKillsGrenadeLauncher.basic.value
			],
			[
				this.generalStats.weaponKillsHandCannon.statId.substring(11),
				this.generalStats.weaponKillsHandCannon.basic.value
			],
			[
				this.generalStats.weaponKillsPulseRifle.statId.substring(11),
				this.generalStats.weaponKillsPulseRifle.basic.value
			],
			[
				this.generalStats.weaponKillsRocketLauncher.statId.substring(11),
				this.generalStats.weaponKillsRocketLauncher.basic.value
			],
			[
				this.generalStats.weaponKillsScoutRifle.statId.substring(11),
				this.generalStats.weaponKillsScoutRifle.basic.value
			],
			[
				this.generalStats.weaponKillsShotgun.statId.substring(11),
				this.generalStats.weaponKillsShotgun.basic.value
			],
			[
				this.generalStats.weaponKillsSideArm.statId.substring(11),
				this.generalStats.weaponKillsSideArm.basic.value
			],
			[
				this.generalStats.weaponKillsSniper.statId.substring(11),
				this.generalStats.weaponKillsSniper.basic.value
			],
			[
				this.generalStats.weaponKillsSubmachinegun.statId.substring(11),
				this.generalStats.weaponKillsSubmachinegun.basic.value
			],
			[
				this.generalStats.weaponKillsSword.statId.substring(11),
				this.generalStats.weaponKillsSword.basic.value
			],
			[
				this.generalStats.weaponKillsTraceRifle.statId.substring(11),
				this.generalStats.weaponKillsTraceRifle.basic.value
			]
		];
	}

	public get weaponTypeKills(): IGoogleChartData {
		return this._weaponTypeKills;
	}
}
