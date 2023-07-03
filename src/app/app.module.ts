import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PrivateComponent } from './components/private/private.component';

// import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PrivateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //// Import the module into the application, with configuration
    // AuthModule.forRoot({
    //   domain: 'dev-sbuzcsubxvefrita.us.auth0.com',
    //   clientId: 'ooh1vWjdGosg3MEcLrN3QshzO3y0QaeW',
    //   authorizationParams: {
    //     redirect_uri: window.location.origin,
    //   },
    // }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
