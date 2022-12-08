import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Views/users/users.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { routingComponents } from './app-routing.module';
import { LoginComponent } from './Views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DashboardComponent,
    routingComponents,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
