import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from '../shared-data/user-dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient,
              @Inject('BACKEND_URL') private url: string) {
   }


  // get all
  getUsers(): Observable<UserDto[]> {
    return this.http.get(`${this.url}/users`)
      .pipe(
        map((jsonUsers: any[]) => jsonUsers.map(jsonUser => new UserDto(jsonUser)))
      );
  }

  // get par Id
  getOneUser(userLoginId: any): Observable<UserDto> {
    return this.http.get(`${this.url}/users/login/${userLoginId}`)
      .pipe(
        map(jsonUser => new UserDto(jsonUser)));
  }

  // post new Id
  postUser(id: string,
           login: string,
           password: string,
           userName: string,
           userSurname: string,
           avatarImageURL: string,
           email: string): Observable<any> {
    return this.http.post(`${this.url}/users`, {
      'id': id,
      'login': login,
      'password': password,
      'userName': userName,
      'userSurname': userSurname,
      'avatarImageURL': avatarImageURL,
      'email': email })
      .pipe(
        map((result: any) => new UserDto(result)),
      );
  }

  // del par Id
  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${this.url}/users/${userId}`);
  }



}
