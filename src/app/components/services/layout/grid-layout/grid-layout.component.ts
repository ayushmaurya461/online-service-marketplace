import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css'],
})
export class GridLayoutComponent implements OnInit {
  public services: any;

  constructor(private http: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.http.getAllServices().subscribe((res: any) => {
      this.services = res.data;

      console.log(this.services);
    });
  }

  navigateToFullDetails(id: any) {
    this.router.navigate(['service', id]);
  }
}
