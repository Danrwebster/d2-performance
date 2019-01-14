import { takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from './services/notification.service';
import { BungieService } from './services/bungie.service';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

	private unsubscribe$: Subject<void> = new Subject<void>();

	constructor(
		private notificationService: NotificationService,
		public bungieService: BungieService
	) {
		this.notificationService.notifyFeed.pipe(
			takeUntil(this.unsubscribe$))
			.subscribe(
				x => {
					if (x.mode === 'success') {
						console.log('success:', x.message);
					} else if (x.mode === 'info') {
						console.log('info:', x.message);
					} else if (x.mode === 'error') {
						console.log('error:', x.message);
					}
				});
	}

	ngOnInit() {

	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}
}
