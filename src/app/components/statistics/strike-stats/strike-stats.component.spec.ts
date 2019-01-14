import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrikeStatsComponent } from './strike-stats.component';

describe('StrikeStatsComponent', () => {
	let component: StrikeStatsComponent;
	let fixture: ComponentFixture<StrikeStatsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [StrikeStatsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(StrikeStatsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
