import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private API = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private httpClient: HttpClient) {}

  public getPosts() {
    return this.httpClient.get(this.API);
  }

  public getselectedPost(id: any) {
    return this.httpClient.get(this.API + id);
  }

  public comments(id: any) {
    return this.httpClient.get(this.API + id + '/comments');
  }

  public setpost(selectedItem: any) {
    localStorage.setItem('SelectedItem', JSON.stringify(selectedItem));
  }

  public getpost(): any {
    const selectedItem = localStorage.getItem('SelectedItem');
    return selectedItem ? JSON.parse(selectedItem) : null;
  }
}
