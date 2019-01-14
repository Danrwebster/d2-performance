import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClashStatsComponent } from './clash-stats.component';

describe('ClashStatsComponent', () => {
	let component: ClashStatsComponent;
	let fixture: ComponentFixture<ClashStatsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ClashStatsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ClashStatsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
