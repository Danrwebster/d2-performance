import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPvpStatsComponent } from './all-pvp-stats.component';

describe('AllPvpStatsComponent', () => {
	let component: AllPvpStatsComponent;
	let fixture: ComponentFixture<AllPvpStatsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AllPvpStatsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AllPvpStatsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
