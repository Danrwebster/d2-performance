import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
	selector: 'app-stats-page',
	templateUrl: './stats-page.component.html',
	styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent implements OnInit {

	private _selectedStats: string;
	private _showSideNav: boolean;

	public sideNaveMenu = [
		{
			name: 'All Stats'
		},
		{
			name: 'PvE Stats',
			subList: [
				{
					name: 'Strikes',
					mode: 'strike'
				},
				{
					name: 'Nightfalls',
					mode: 'nightfall'
				},
				{
					name: 'Raids',
					mode: 'raid'
				},
				{
					name: 'All PvE',
					mode: 'allpve'
				}
			]
		},
		{
			name: 'PvP Stats',
			subList: [
				{
					name: 'Gambit',
					mode: 'gambit'
				},
				{
					name: 'Control',
					mode: 'control'
				},
				{
					name: 'Clash',
					mode: 'clash'
				},
				{
					name: 'Iron Banner',
					mode: 'ironbanner'
				},
				{
					name: 'Trials of the Nine',
					mode: 'trialsofthenine'
				},
				{
					name: 'All PvP',
					mode: 'allpvp'
				}
			]
		}
	];

	constructor(
		private _menuService: MenuService
	) { }

	ngOnInit() {
		this.selectStats(this.sideNaveMenu[0].name, true);

		this._menuService.showSideNav().subscribe(value => {
			this._showSideNav = value;
		});
	}

	public selectStats(value: string, keepOpen: boolean) {
		this._selectedStats = value;
		if (!keepOpen) {
			this._menuService.setSideNav(false);
		}
	}

	public get statSelection(): string {
		return this._selectedStats;
	}

	public get showSideNav(): boolean {
		return this._showSideNav;
	}
}
