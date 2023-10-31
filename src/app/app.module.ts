import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { JobseekerComponent } from './jobseeker/jobseeker.component';

import { ReactiveFormsModule } from '@angular/forms';

import { SeekerjobsComponent } from './seekerjobs/seekerjobs.component';
import { SeekprofileComponent } from './seekprofile/seekprofile.component';
import { SeekjobapplicationComponent } from './seekjobapplication/seekjobapplication.component';
import { SeekjobsearchComponent } from './seekjobsearch/seekjobsearch.component';
import { SeekeditprofileComponent } from './seekeditprofile/seekeditprofile.component';
import { JobproviderComponent } from './jobprovider/jobprovider.component';
import { AppliedseekerComponent } from './appliedseeker/appliedseeker.component';
import { PostedjobsComponent } from './postedjobs/postedjobs.component';
import { JobseekerService } from './jobseeker.service';
import { JobproviderService } from './jobprovider.service';
import { PostjobComponent } from './postjob/postjob.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    JobseekerComponent,
    
    SeekerjobsComponent,
    SeekprofileComponent,
    SeekjobapplicationComponent,
    SeekjobsearchComponent,
    SeekeditprofileComponent,
    JobproviderComponent,
    PostjobComponent,
    AppliedseekerComponent,
    PostedjobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RadioButtonModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [JobseekerService,JobproviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
