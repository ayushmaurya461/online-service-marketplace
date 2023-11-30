import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environment/base';

@Component({
  selector: 'grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css'],
})
export class GridLayoutComponent implements OnInit {
  public services: any;
  public baseUrl: any;

  constructor(private http: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.baseUrl = environment.baseUrl;
    this.http.getAllServices().subscribe((res: any) => {
      this.services = res.data;

      console.log(this.services);
    });
  }

  navigateToFullDetails(id: any) {
    this.router.navigate(['service', id]);
  }
}
