import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  visible: boolean = false;
  isAuthenticated = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated.subscribe((res) => {
      this.isAuthenticated = res;
    });
  }

  itemChange(evnt: any) {
    this.router.navigate([evnt.url]);
  }

  showDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
    this.isAuthenticated = true;
  }

  hideMenu() {
    const navigations = document.querySelector('.mini-navigations');
    navigations?.classList.remove('show');
    navigations?.classList.add('hide');
  }

  toggleNavigations() {
    const navigations = document.querySelector('.mini-navigations');
    if (navigations?.classList.contains('hide')) {
      navigations.classList.remove('hide');
      navigations.classList.add('show');
    } else {
      navigations?.classList.remove('show');
      navigations?.classList.add('hide');
    }
  }
}
