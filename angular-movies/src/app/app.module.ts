import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './services/apiInterceptor';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actorscomponent';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { IndexMovieTheaterComponent } from './movie-theaters/index-movie-theater/index-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';


@NgModule({
	declarations: [
		AppComponent,
		MoviesListComponent,
		MenuComponent,
		RatingComponent,
		HomeComponent,
		IndexGenresComponent,
		CreateGenreComponent,
		IndexActorsComponent,
		CreateActorComponent,
		CreateMovieTheaterComponent,
		IndexMovieTheaterComponent,
		CreateMovieComponent,
		EditActorComponent,
		EditGenreComponent,
		EditMovieComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
