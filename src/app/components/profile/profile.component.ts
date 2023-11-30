import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { Loader } from 'src/app/services/loader.service';
import { Notification } from 'src/app/services/notification.service';
import { User } from 'src/app/shared/user/user';
import { environment } from 'src/environment/base';

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
  editingStarted = false;
  activeUserType = false;
  baseUrl: string = '';
  newUserDetails: any;

  constructor(
    private authService: AuthService,
    public messageService: MessageService,
    private http: HttpService,
    public confirmService: ConfirmationService,
    private router: Router,
    private loader: Loader,
    private notification: Notification
  ) {}

  ngOnInit(): void {
    this.loader.show();
    this.checkDialogWidth();
    this.authService.user.subscribe((res: any) => {
      if (res?.id)
        this.http.getUserDetails(res.id).subscribe({
          next: (res: any) => {
            this.user = res;
            this.userType = res.userType;
            this.newUserDetails = {
              email: res?.email ?? '',
              mobile: res?.mobile ?? '',
              city: res?.city ?? '',
              state: res?.state ?? '',
              address: res?.address ?? '',
            };
            this.loader.hide();
          },
          error: (error) => {
            this.loader.hide();
            this.notification.error('Failed to load details.');
          },
        });
    });
    this.baseUrl = environment.baseUrl;
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
        this.loader.show();
        this.http.updateUserType(patchData).subscribe({
          next: (res: any) => {
            this.activeUserType = this.userType ? true : false;
            this.loader.hide();
            this.notification.success('Changed user type');
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
          },
          error: (err) => {
            this.loader.hide();
            this.notification.error('Failed to change user type');
          },
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

  naviagteToEditProfile(id: any) {
    if (!id) {
      id = 0;
    }
    this.router.navigate(['edit-service-profile/' + id]);
  }

  logout() {
    this.authService.logout();
  }

  startEditing() {
    this.editingStarted = true;
  }
  saveEdited() {
    this.loader.show();
    this.http
      .updateUserDetails({ id: this.user?.id, user: this.newUserDetails })
      .subscribe({
        next: (res: any) => {
          this.loader.hide();
          this.notification.success('Details updated successfully.');
          this.editingStarted = false;
          this.user = res.user;
          this.newUserDetails = this.user;
        },
        error: () => {
          this.loader.hide();
          this.notification.error('Failed to update the details');
        },
      });
  }

  cancelEditing() {
    this.editingStarted = false;
    this.newUserDetails = {
      email: this.user?.email ?? '',
      mobile: this.user?.mobile ?? '',
      city: this.user?.city ?? '',
      state: this.user?.state ?? '',
      addresss: this.user?.address ?? '',
    };
  }

  triggerupdateProfile() {
    (document.querySelector('#file') as HTMLInputElement).click();
  }
  onFileSelected(evnt: any) {
    this.loader.show();
    const file = evnt.target.files[0];
    if (file) {
      this.http
        .updateUserProfileImage({ id: this.user?.id, file: file })
        .subscribe({
          next: (res: any) => {
            this.loader.hide();
            this.notification.success('Image updated successfully.');
            this.user.image = res.image;
          },
          error: (err) => {
            this.loader.hide();
            this.notification.error('Failed to update image');
          },
        });
    }
  }

  checkDialogWidth() {
    if (window.innerWidth < 768) {
      this.dialogWidth = '90vw';
    } else {
      this.dialogWidth = '550px';
    }
  }
}
