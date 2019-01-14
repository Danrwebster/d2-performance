import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialsStatsComponent } from './trials-stats.component';

describe('TrialsStatsComponent', () => {
	let component: TrialsStatsComponent;
	let fixture: ComponentFixture<TrialsStatsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TrialsStatsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TrialsStatsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
