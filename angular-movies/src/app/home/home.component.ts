import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private movieService: MovieService) { }

	ngOnInit(): void {
		this.movieService
			.getTrendings(1)
			.subscribe((data) => (this.moviesInTheater = data.results));
	}
	moviesInTheater;
	//moviesFutureReleases;

	handleRating(rate: number) {
		alert(`the user selected ${rate}`)
	}

}
