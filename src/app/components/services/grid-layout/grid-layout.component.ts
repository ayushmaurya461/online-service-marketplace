import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Loader } from 'src/app/services/loader.service';
import { Notification } from 'src/app/services/notification.service';
import { environment } from 'src/environment/base';

@Component({
  selector: 'grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css'],
})
export class GridLayoutComponent implements OnInit {
  @Input() public services: any;
  public baseUrl: any;

  constructor(
    private http: HttpService,
    private router: Router,
    private loader: Loader,
    private notification: Notification
  ) {}

  ngOnInit(): void {
    this.baseUrl = environment.baseUrl;
  }

  navigateToFullDetails(id: any) {
    this.router.navigate(['service', id]);
  }
}
