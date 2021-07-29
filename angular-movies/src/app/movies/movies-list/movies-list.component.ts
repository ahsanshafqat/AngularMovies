import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-movies-list',
	templateUrl: './movies-list.component.html',
	styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

	constructor() { }
	@Input()
	movies;
	ngOnInit(): void {
		// setTimeout(() => {
		// 	this.movies = [{
		// 		name: "spider man",
		// 		releaseData: new Date(),
		// 		price: 1400.99
		// 	},
		// 	{
		// 		name: "Inception",
		// 		releaseData: new Date(2005, 5, 6),
		// 		price: 1400.99
		// 	}];
		// }, 3000);

	}
	remove(index: Number) {
		this.movies.splice(index, 1);
	}
}
