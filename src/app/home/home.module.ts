import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { PlayerMonthComponent } from './components/player-month/player-month.component';
import { RecentlyPlayedComponent } from './components/recently-played/recently-played.component';
import { FeaturedGalleryComponent } from './components/featured-gallery/featured-gallery.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [MainHomeComponent, PlayerMonthComponent, RecentlyPlayedComponent, FeaturedGalleryComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    NgImageSliderModule
  ]
})
export class HomeModule { }
