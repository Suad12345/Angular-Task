import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { JobsComponent } from './jobseeker/jobs/jobs.component';
import { SeekerjobsComponent } from './seekerjobs/seekerjobs.component';
import { SeekjobapplicationComponent } from './seekjobapplication/seekjobapplication.component';
import { SeekprofileComponent } from './seekprofile/seekprofile.component';
import { SeekeditprofileComponent } from './seekeditprofile/seekeditprofile.component';
import { SeekjobsearchComponent } from './seekjobsearch/seekjobsearch.component';
import { JobproviderComponent } from './jobprovider/jobprovider.component';
import { PostjobComponent } from './postjob/postjob.component';
import { AppliedseekerComponent } from './appliedseeker/appliedseeker.component';
import { PostedjobsComponent } from './postedjobs/postedjobs.component';

const routes: Routes = [
{path: '', redirectTo:'home', pathMatch:'full'},
{path: '', component:HomeComponent},
{path: 'login', component:LoginComponent},
{path: 'register', component:RegisterComponent},
{path:'jobseeker',component:JobseekerComponent},
{path:'seekerjobs',component:SeekerjobsComponent},
{path:'seekjobapplication',component:SeekjobapplicationComponent},
{path:'seekprofile',component:SeekprofileComponent},
{path:'seekeditprofile',component:SeekeditprofileComponent},
{path:'seekjobsearch',component:SeekjobsearchComponent},
{path:'jobprovider',component:JobproviderComponent},
{path:'postjob',component:PostjobComponent},
{path:'appliedseeker',component:AppliedseekerComponent},
{path:'postedjobs',component:PostedjobsComponent},
//{path:'postejobs',component:},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
