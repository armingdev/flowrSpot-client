import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const reqUrl = environment.apiUrl;
    req = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Bearer ' + localStorage.getItem('access_token')
      ),
      url: req.url
    });
    return next.handle(req);
  }
}
