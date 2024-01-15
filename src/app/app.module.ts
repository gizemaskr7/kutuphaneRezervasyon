import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './components/all/all.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { OdasecimComponent } from './components/odasecim/odasecim.component';
import { ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RezComponent } from "./components/rez/rez.component";

@NgModule({
    declarations: [
        AppComponent,
        AllComponent,
        RegisterComponent,
        LoginComponent,
        UserComponent,
        OdasecimComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [MatGridListModule,
        MatFormFieldModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MatSelectModule,
        FormsModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        MatInputModule, RezComponent]
})
export class AppModule { }
