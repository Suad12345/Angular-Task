import { Component } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';
//import {JobseekerService} from '../../jobseeker.service';

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css']
})
export class JobseekerComponent {

  constructor(private router:Router,private activeroute:ActivatedRoute) { }
  username:any;
  ngOnInit() {
    this.username=localStorage.getItem('currentseeker');
  }
  logoutseeker()
  {
    // this.seekerservie.logout();
    this.router.navigate(['login'],)
  }
  jobs()
  {
  this.router.navigate(['seekerjobs'],{relativeTo:this.activeroute});
  }
  appliedjobs()
  {
    this.router.navigate(['seekjobapplication'],{relativeTo:this.activeroute});
  }
  userprofile()
  {
    this.router.navigate(['seekprofile']);
  }

  editUserprofile()
  {
    this.router.navigate(['seekeditprofile']);
  }



}
