import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from 'src/services/admin.guard';
import { UserGuard } from 'src/services/user.guard';
import { LoginGuard } from 'src/services/login.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';

const routes: Routes = [
  {path:'signup', component:SignupComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent, pathMatch:'full',canActivate : [LoginGuard]},
  {path:'', component:HomeComponent, pathMatch:'full'},

  {path : 'admin',component : AdminDashboardComponent,canActivate : [AdminGuard],
      children :[
        {
          path : '',
          component : WelcomeComponent
        },
        {
          path : 'profile',
          component:ProfileComponent
        },
        {
          path:"categories",
          component:ViewCategoriesComponent
        },
        {
          path:"add-category",
          component:AddCategoryComponent
        },
        // {
        //   path : "delete-category",
        //   component : DeleteCategoryComponent
        // }
      
      ]
      // We configure all routes of admin here
  },
  {path : 'user-dashboard',component : UserDashboardComponent,pathMatch:'full',canActivate : [UserGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
