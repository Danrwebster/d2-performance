import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
	selector: 'app-about-page',
	templateUrl: './about-page.component.html',
	styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

	constructor(
		private _menuService: MenuService
	) { }

	ngOnInit() {
	}

}
