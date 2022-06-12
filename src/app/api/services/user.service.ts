import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  createUser(body: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/user`, body);
  }

  updateUser(id:any,body: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}/user/${id}`, body);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/user`,);
  }

  getUser(id:any): Observable<any> {
    return this.http.get(`${this.BASE_URL}/user/${id}`,);
  }

  deleteUser(id:any): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/user/${id}`,);
  }
}
