import { Injectable } from '@angular/core';
import { Users } from "../models/users.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: Users[] = [
  ];

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Users[]> {
    return this.http.get<Users[]>(environment.api + '/api/users');
  }

  public findById(id: number): Observable<Users> {
    return this.http.get<Users>(environment.api + '/api/users/' + id);
  }

  public save(log: Users): Observable<Users> {
    if (log.id) {
      return this.http.put<Users>(environment.api + '/api/users/' + log.id, log);

    } else {
      return this.http.post<Users>(environment.api + '/api/users/', log);
    }
  }
}
