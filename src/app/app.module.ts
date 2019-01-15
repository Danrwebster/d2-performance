import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatAutocompleteModule,
	MatFormFieldModule,
	MatInputModule,
	MatMenuModule,
	MatSidenavModule,
	MatToolbarModule,
	MatCardModule,
	MatExpansionModule,
	MatListModule,
	MatButtonModule,
	MatChipsModule,
	MatIconModule,
	MatSnackBarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BungieService } from './services/bungie.service';
import { NotificationService } from './services/notification.service';
import { HttpClientModule } from '@angular/common/http';
import { ThemeBackgroundPipe } from './pipes/theme-background.pipe';
import { StyleURLPipe } from './pipes/style-url.pipe';
import { RaidStatsComponent } from './components/statistics/raid-stats/raid-stats.component';
import { AllStatsComponent } from './components/statistics/all-stats/all-stats.component';
import { MenuService } from './services/menu.service';
import { StrikeStatsComponent } from './components/statistics/strike-stats/strike-stats.component';
import { NightfallStatsComponent } from './components/statistics/nightfall-stats/nightfall-stats.component';
import { AllPveStatsComponent } from './components/statistics/all-pve-stats/all-pve-stats.component';
import { ControlStatsComponent } from './components/statistics/control-stats/control-stats.component';
import { ClashStatsComponent } from './components/statistics/clash-stats/clash-stats.component';
import { IronBannerStatsComponent } from './components/statistics/iron-banner-stats/iron-banner-stats.component';
import { TrialsStatsComponent } from './components/statistics/trials-stats/trials-stats.component';
import { AllPvpStatsComponent } from './components/statistics/all-pvp-stats/all-pvp-stats.component';
import { GambitStatsComponent } from './components/statistics/gambit-stats/gambit-stats.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent,
		HomePageComponent,
		SearchBarComponent,
		ThemeBackgroundPipe,
		StyleURLPipe,
		RaidStatsComponent,
		AllStatsComponent,
		StrikeStatsComponent,
		NightfallStatsComponent,
		AllPveStatsComponent,
		ControlStatsComponent,
		ClashStatsComponent,
		IronBannerStatsComponent,
		TrialsStatsComponent,
		AllPvpStatsComponent,
		GambitStatsComponent,
		StatsPageComponent,
		AboutPageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatAutocompleteModule,
		MatFormFieldModule,
		MatInputModule,
		MatMenuModule,
		MatSidenavModule,
		MatToolbarModule,
		MatCardModule,
		MatExpansionModule,
		MatListModule,
		MatButtonModule,
		MatChipsModule,
		MatIconModule,
		MatSnackBarModule,
		HttpClientModule
	],
	providers: [
		BungieService,
		NotificationService,
		MenuService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
