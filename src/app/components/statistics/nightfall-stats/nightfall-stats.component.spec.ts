import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightfallStatsComponent } from './nightfall-stats.component';

describe('NightfallStatsComponent', () => {
	let component: NightfallStatsComponent;
	let fixture: ComponentFixture<NightfallStatsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NightfallStatsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NightfallStatsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
