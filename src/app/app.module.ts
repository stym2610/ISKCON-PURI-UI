import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { DonateComponent } from './views/donate/donate.component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { AboutIskconComponent } from './views/about-iskcon/about-iskcon.component';
import { AboutIskconPuriComponent } from './views/about-iskcon-puri/about-iskcon-puri.component';
import { OurMissionComponent } from './views/our-mission/our-mission.component';
import { FounderAcharyaComponent } from './views/founder-acharya/founder-acharya.component';
import { ContactComponent } from './views/contact/contact.component';
import { FormOverleyComponent } from './views/donate/form-overley/form-overley.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DietySevaComponent } from './views/donate/diety-seva/diety-seva.component';
import { DonateTemplateComponent } from './reusable/donate-template/donate-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonateComponent,
    AboutIskconComponent,
    AboutIskconPuriComponent,
    OurMissionComponent,
    FounderAcharyaComponent,
    ContactComponent,
    FormOverleyComponent,
    DietySevaComponent,
    DonateTemplateComponent
  ],
  imports: [
    BrowserModule,
    NzPopoverModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about-iskcon', component: AboutIskconComponent},
      {path: 'about-iskcon-puri', component: AboutIskconPuriComponent},
      {path: 'our-mission', component: OurMissionComponent},
      {path: 'founder-acharya', component: FounderAcharyaComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'donate', component: DonateComponent},
      {path: 'donate/deity-seva', component: DietySevaComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
