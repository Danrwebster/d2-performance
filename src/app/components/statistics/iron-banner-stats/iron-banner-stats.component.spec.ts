import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IronBannerStatsComponent } from './iron-banner-stats.component';

describe('IronBannerStatsComponent', () => {
	let component: IronBannerStatsComponent;
	let fixture: ComponentFixture<IronBannerStatsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [IronBannerStatsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IronBannerStatsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
