import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { BrowserModule } from '@angular/platform-browser';
import { TabMenuModule } from 'primeng/tabmenu';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ChipsModule } from 'primeng/chips';
import { MultiSelectModule } from 'primeng/multiselect';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { ServicesComponent } from './components/services/services.component';
import { FeaturedComponent } from './components/home/featured/featured.component';
import { ServiceOptionsComponent } from './components/home/service-options/service-options.component';
import { FormsModule } from '@angular/forms';
import { GridLayoutComponent } from './components/services/grid-layout/grid-layout.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './shared/user/user.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ProfileComponent } from './components/profile/profile.component';
import { ServiceFullDetailsComponent } from './components/service-full-details/service-full-details.component';
import { ServiceProfileComponent } from './components/profile/service-profile/service-profile.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EditServiceProfileComponent } from './components/profile/edit-service-profile/edit-service-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    ServicesComponent,
    FeaturedComponent,
    ServiceOptionsComponent,
    GridLayoutComponent,
    UserComponent,
    ProfileComponent,
    ServiceFullDetailsComponent,
    ServiceProfileComponent,
    EditServiceProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TabMenuModule,
    GalleriaModule,
    CarouselModule,
    TagModule,
    ButtonModule,
    CardModule,
    RatingModule,
    DataViewModule,
    DropdownModule,
    InputTextModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    ChipsModule,
    MultiSelectModule,
  ],
  providers: [
    DataViewLayoutOptions,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    ConfirmationService,
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
