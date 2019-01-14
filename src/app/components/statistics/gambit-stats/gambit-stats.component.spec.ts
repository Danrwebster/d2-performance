import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GambitStatsComponent } from './gambit-stats.component';

describe('GambitStatsComponent', () => {
	let component: GambitStatsComponent;
	let fixture: ComponentFixture<GambitStatsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GambitStatsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GambitStatsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
