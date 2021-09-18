import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private API = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) { }

  public getPosts(){
    return this.httpClient.get(this.API);
  }

}
