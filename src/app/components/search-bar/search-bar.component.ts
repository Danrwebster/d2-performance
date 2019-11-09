import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BungieService } from 'src/app/services/bungie.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IBungieNetUser } from 'src/app/bungie-api-shared/bungie-api-interfaces';
import { MenuService } from 'src/app/services/menu.service';

interface IUserName {
	displayName: string;
	platformName: string;
}

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

	public myControl = new FormControl();
	public options: IBungieNetUser[] = [];

	private _subscription = new Subscription;

	@Output() close = new EventEmitter<boolean>();
	@ViewChild('playerSearch', { static: true }) inputField: ElementRef;

	constructor(
		private _bungieService: BungieService,
		private _router: Router,
		private _menuService: MenuService
	) { }

	ngOnInit() {
		const routerSub = this._router.events.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe((event: NavigationEnd) => {
				if (event.url === '/') {
					this.myControl.reset();
				}
			});
		this._subscription.add(routerSub);
	}

	ngOnDestroy() {
		this._subscription.unsubscribe();
	}

	public searchPlayer(searchTerm: string): void {
		const playerSearchSub = this._bungieService.searchBungieUsers(searchTerm).subscribe(data => {
			if (data.Response) {
				this.options = data.Response;
				if (this.options.length === 1) {
					this.getPlayer(this.getUserName(this.options[0]));
				}
			}
		});
		this._subscription.add(playerSearchSub);
	}

	public getPlayer(userName: string): void {
		const getPlayerSub = this._bungieService.getDestinyPlayer(userName).subscribe(data => {
			if (data.Response) {
				this._router.navigate(['/stats', data.Response[0].membershipId, this._menuService.menuItems[0].route]);
			}
		});
		this._subscription.add(getPlayerSub);
	}

	public closeSearch(): void {
		this.close.emit(true);
	}

	public handleClick(): void {
		event.stopPropagation();
	}

	public getPlatformName(user: IBungieNetUser): string {
		if (user.blizzardDisplayName) {
			return 'PC';
		}
		if (user.xboxDisplayName) {
			return 'XBOX';
		}
		if (user.psnDisplayName) {
			return 'PSN';
		}
	}

	public getUserName(user: IBungieNetUser): string {
		if (user.blizzardDisplayName) {
			return user.blizzardDisplayName;
		}
		if (user.xboxDisplayName) {
			return user.xboxDisplayName;
		}
		if (user.psnDisplayName) {
			return user.psnDisplayName;
		}
	}

	public showUser(user: IBungieNetUser): boolean {
		let platformDefined = false;

		if (user.blizzardDisplayName) {
			platformDefined = true;
		}
		if (user.xboxDisplayName) {
			platformDefined = true;
		}
		if (user.psnDisplayName) {
			platformDefined = true;
		}

		return platformDefined;
	}
}
