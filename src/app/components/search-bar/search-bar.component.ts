import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BungieService } from 'src/app/services/bungie.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UserDataService } from 'src/app/services/user-data.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

	public myControl = new FormControl();
	public options: string[] = ['lafindumonde#1607', 'melllvar#1973', 'kigor#11425'];

	private _subscription = new Subscription;

	@Output() close = new EventEmitter<boolean>();

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
		const playerSub = this._bungieService.getDestinyPlayer(searchTerm).subscribe(data => {
			if (data.Response) {
				this._router.navigate( ['/stats', data.Response[0].membershipId, this._menuService.menuItems[0].route ]);
			}
		});
		this._subscription.add(playerSub);
	}

	public closeSearch(): void {
		this.close.emit(true);
	}

	public handleClick(): void {
		event.stopPropagation();
	}
}
