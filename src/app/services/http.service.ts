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
      query: text,
      filters: filters,
    };
    return this.http.post<any>(this.apiUrl + 'services/search', body);
  }

  getUserDetails(id: any) {
    return this.http.post(this.apiUrl + 'user/get', { id: id });
  }

  updateUserProfileImage(body: any) {
    const data = new FormData();
    data.append('id', body.id);
    data.append('file', body.file);
    return this.http.post(this.apiUrl + 'user/update-profile', data);
  }

  updateUserDetails(patchData: any) {
    return this.http.post(this.apiUrl + 'user/update', patchData);
  }

  updateUserType(patchData: any) {
    return this.http.patch(this.apiUrl + 'user/change-user-type', patchData);
  }

  updateServiceInUser(body: any) {
    return this.http.post(this.apiUrl + 'user/update-service', body);
  }

  postReview(body: any) {
    return this.http.post(this.apiUrl + 'services/review', body);
  }

  getServiceDetails(id: any) {
    return this.http.post(this.apiUrl + 'services/get', { id: id });
  }

  getAllServices() {
    return this.http.get(this.apiUrl + 'services');
  }

  postService(data: any) {
    return this.http.post(this.apiUrl + 'services', data);
  }

  getFeatured(name: string) {
    return this.http.post(this.apiUrl + 'services/featured', {
      serviceName: name,
    });
  }

  updateServiceProfileImage(body: any) {
    const data = new FormData();
    data.append('id', body.id);
    data.append('file', body.file);
    return this.http.post(this.apiUrl + 'services/update-profile', data);
  }
}
