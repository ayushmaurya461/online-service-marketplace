import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/base';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.baseUrl;

  getServices() {
    return this.http.get<any>(this.apiUrl + 'services');
  }

  searchServices(text: any = '', filters: any = {}) {
    const body = {
      searchText: text,
      filters: filters,
    };
    return this.http.post<any>(this.apiUrl, body);
  }

  updateUserDetails(patchData: any) {
    return this.http.patch(this.apiUrl + 'user/update-user', patchData);
  }

  updateUserType(patchData: any) {
    return this.http.patch(this.apiUrl + 'user/change-user-type', patchData);
  }
}
