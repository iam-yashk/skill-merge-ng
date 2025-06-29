import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { AuthLayoutComponent } from 'src/app/core/components/auth-layout/auth-layout.component';

const routes: Routes = [{ 
  path: '', 
  component: AuthLayoutComponent,
  children: [
    { path: 'login', component: LoginPage },
    // { path: 'register', component: RegisterPage}
    { path: '', redirectTo: 'login', pathMatch: 'full'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
  
}
