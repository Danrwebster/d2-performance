import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidStatsComponent } from './raid-stats.component';

describe('RaidStatsComponent', () => {
	let component: RaidStatsComponent;
	let fixture: ComponentFixture<RaidStatsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RaidStatsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RaidStatsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
