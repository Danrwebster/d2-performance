import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { BungieService } from '../services/bungie.service';
import { of } from 'rxjs';
import { IBungieAPIResponse } from '../bungie-api-shared/bungie-api-interfaces';
import { switchMap } from 'rxjs/operators';
import { UserDataService } from '../services/user-data.service';
import { MenuService } from '../services/menu.service';

@Injectable()
export class UserResolver implements Resolve<IBungieAPIResponse> {
	constructor(
		private _bungieService: BungieService,
		private _userDataService: UserDataService,
		private _menuService: MenuService
	) { }

	resolve(route: ActivatedRouteSnapshot) {
		const mode = route.paramMap.get('mode');
		if (mode) {
			this._menuService.setSelected(mode);
		}
		const membershipId = route.paramMap.get('id');
		if (membershipId) {
			return this._bungieService.getMembershipInfo(membershipId).pipe(
				switchMap(response => {
					this._userDataService.addUser(response.Response);
					return of(response.Response);
				})
			);
		} else {
			console.log('User not found');
			return of(null);
		}
	}
}
