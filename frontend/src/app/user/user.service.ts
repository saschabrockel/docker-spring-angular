import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

const USER_API = environment.apiUrl + "/api/user";
const SAVE_USER_API = USER_API + "/create";
const GET_ALL_USER_API = USER_API + "/get-all";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient) {}

  /**
   * Sends a request to the backend. Saves a user.
   * @param username The username for the user.
   * @param email The email for the user.
   */
  saveUser(username: string, email: string): Observable<any> {
    return this.http.post<any>(
      SAVE_USER_API,
      {
        username: username,
        email: email,
      },
      this.httpOptions
    );
  }

  /**
   * Sends a request to the backend. Gets all users.
   */
  getAllUsers(): Observable<any> {
    return this.http.get<any>(GET_ALL_USER_API, this.httpOptions);
  }
}
