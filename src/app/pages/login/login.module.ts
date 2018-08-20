import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { 
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatDividerModule
       } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { MaterialModule } from '../../material.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
  ];
@NgModule({
    imports: [
        MatCardModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [   
        LoginComponent, HomeSliderComponent,HomeComponent,AboutComponent,ContactComponent, ContactUsComponent, AboutUsComponent
    ],
    entryComponents:[AboutUsComponent,ContactUsComponent],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class LoginModule {
}
