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
import { LayoutComponent } from './components/services/layout/layout.component';
import { ListLayoutComponent } from './components/services/layout/list-layout/list-layout.component';
import { GridLayoutComponent } from './components/services/layout/grid-layout/grid-layout.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './shared/user/user.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ProfileComponent } from './components/profile/profile.component';
import { ServiceFullDetailsComponent } from './components/service-full-details/service-full-details.component';

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
    LayoutComponent,
    ListLayoutComponent,
    GridLayoutComponent,
    UserComponent,
    ProfileComponent,
    ServiceFullDetailsComponent,
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
  ],
  providers: [
    DataViewLayoutOptions,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}