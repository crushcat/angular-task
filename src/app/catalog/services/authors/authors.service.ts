import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loadingService/loading.service';
import { IAuthor } from '../../interfaces/authors.model';

const SERVER_URL = "http://localhost:3004/authors"

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  authorsList: IAuthor[];

  getAuthors(textFragment: string) : Observable<IAuthor[]> {
    this.loader.set(true);
    return this.http.get<IAuthor[]>(SERVER_URL, { params: {textFragment}});
  }

  constructor(
    private http: HttpClient,
    private loader: LoadingService
    ) { }
}
