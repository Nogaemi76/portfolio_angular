import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from './components/shared/slider/slider.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/shared/layout/header/header.component";
import { BurgerMenuComponent } from './components/shared/layout/header/burger-menu/burger-menu.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { WorksComponent } from './components/pages/works/works.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutSkillsComponent } from './components/pages/about/about-skills/about-skills.component';
import { AboutAboutComponent } from './components/pages/about/about-about/about-about.component';
import { AboutEducationComponent } from './components/pages/about/about-education/about-education.component';
import { AboutExperienceComponent } from './components/pages/about/about-experience/about-experience.component';
import { AboutExperienceDetailComponent } from './components/pages/about/about-experience/about-experience-detail/about-experience-detail.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BurgerMenuComponent,
        HomeComponent,
        AboutComponent,
        WorksComponent,
        ContactComponent,
        AboutSkillsComponent,
        AboutAboutComponent,
        AboutEducationComponent,
        AboutExperienceComponent,
        AboutExperienceDetailComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        SliderModule
    ]
})
export class AppModule { }
