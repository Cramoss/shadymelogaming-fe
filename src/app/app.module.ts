import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { LoginModule } from './login/login.module';
import { RegisterUserModule } from './register-user/register-user.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    RegisterUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
