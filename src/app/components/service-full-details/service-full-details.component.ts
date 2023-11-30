import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environment/base';

@Component({
  selector: 'app-service-full-details',
  templateUrl: './service-full-details.component.html',
  styleUrls: ['./service-full-details.component.css'],
})
export class ServiceFullDetailsComponent implements OnInit {
  details!: any;
  id: any;
  baseUrl = '';
  constructor(private http: HttpService, private router: Router) {
    this.id = router.url.split('/')[2];
  }
  ngOnInit(): void {
    this.baseUrl = environment.baseUrl;
    this.http.getServiceDetails(this.id).subscribe({
      next: (res: any) => {
        this.details = res.service;
        console.log(this.details);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
