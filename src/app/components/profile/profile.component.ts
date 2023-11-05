import { Component, HostListener, OnInit } from '@angular/core';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { User } from 'src/app/shared/user/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @HostListener('window: resize', ['$event']) onResize(_event: any) {
    this.checkDialogWidth();
  }
  user: any;
  dialogWidth = '';
  userType = false;
  activeUserType = false;

  constructor(
    private authService: AuthService,
    public messageService: MessageService,
    private http: HttpService,
    public confirmService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.checkDialogWidth();
    this.authService.user.subscribe((res: any) => {
      this.user = res;
      if (this.user) {
        this.activeUserType = this.userType = res.userType ? true : false;
      }
    });
  }

  changeUserType() {
    const patchData = {
      id: this.user.id,
      userType: this.userType ? 1 : 0,
    };
    const userType = this.userType ? 'Normal User' : 'Service Provider';
    this.confirmService.confirm({
      message:
        'Are you sure that you want to switch the user type to ' + userType,
      header: 'Switch User Type',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.http.updateUserType(patchData).subscribe((res: any) => {
          this.activeUserType = this.userType ? true : false;
          const userData = localStorage.getItem('userData');
          if (!userData) {
            return;
          } else {
            const loadedData: {
              email: string;
              name: string;
              id: string;
              token: string;
              userType: number;
            } = JSON.parse(userData);

            const user = new User(
              res.user.email,
              res.user.name,
              loadedData.token,
              res.user._id,
              res.user.userType
            );
            this.authService.user.next(user);
            localStorage.setItem('userData', JSON.stringify(user));
          }
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Message Content',
          });
        });
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.userType = !this.userType;
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });
  }

  logout() {
    this.authService.logout();
  }

  checkDialogWidth() {
    if (window.innerWidth < 768) {
      this.dialogWidth = '90vw';
    } else {
      this.dialogWidth = '550px';
    }
  }
}
