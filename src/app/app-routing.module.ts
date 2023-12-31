import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ServiceFullDetailsComponent } from './components/service-full-details/service-full-details.component';
import { EditServiceProfileComponent } from './components/profile/edit-service-profile/edit-service-profile.component';
import { AboutComponent } from './components/about/about.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'service/:id', component: ServiceFullDetailsComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'edit-service-profile/:id',
    component: EditServiceProfileComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
