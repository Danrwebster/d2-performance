import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { StatsPageComponent } from '../pages/stats-page/stats-page.component';
import { AboutPageComponent } from '../pages/about-page/about-page.component';

const routes: Routes = [
	{
		path: '',
		component: HomePageComponent,
		data: { title: 'D2 Performance' }
	},
	{
		path: 'stats/:id/:mode',
		component: StatsPageComponent,

	},
	{
		path: 'about',
		component: AboutPageComponent,

	},
	{ path: '**', component: HomePageComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
