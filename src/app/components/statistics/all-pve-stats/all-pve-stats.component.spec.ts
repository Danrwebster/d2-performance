import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPveStatsComponent } from './all-pve-stats.component';

describe('AllPveStatsComponent', () => {
	let component: AllPveStatsComponent;
	let fixture: ComponentFixture<AllPveStatsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AllPveStatsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AllPveStatsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
