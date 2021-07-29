import { Injectable } from '@angular/core';
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs/';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler,
	): Observable<HttpEvent<any>> {
		const baseUrl = 'https://api.themoviedb.org/3';
		const key = '4590ca49cfb9d8d4924974c550446307';
		const apiReq = req.clone({
			url: `${baseUrl}${req.url}`,
			params: (req.params ? req.params : new HttpParams()).set('api_key', key),
		});
		return next.handle(apiReq);
	}
}
