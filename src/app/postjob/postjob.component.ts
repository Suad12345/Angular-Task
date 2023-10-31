import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { JobproviderService } from '../../jobprovider.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JobproviderService } from '../jobprovider.service';
@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent {

  postjobForm!: FormGroup;
  postedMsg:any;
  alreadyposted:any;
  errormsg:any;
  companyname:any;
  companyId:any;
  constructor(private router: Router, private recservice: JobproviderService, private fb: FormBuilder) { }

  ngOnInit() {
    //this.companyname=this.recservice.getpayload().companyName;
    //this.companyId=this.recservice.getpayload().id;
    this.postjobForm = this.fb.group({
      companyId: new FormControl(this.companyId),
      jobRole: ['', Validators.required],
      expRequired: ['', Validators.required],
      skills: ['', Validators.required],
      educationalQualifications: ['', Validators.required],
      jobDescription: ['', Validators.required],
      jobType: ['', Validators.required]
    })
  }
  logoutRecruiter() {
    // this.recservice.logout();
    // this.router.navigate(['login/rec_login'])
  }
  postajob() {
    // console.log(this.postjobForm.value);
    // this.recservice.postjob(JSON.stringify(this.postjobForm.value)).subscribe(
    //   (response:any)=>{
    //     if(response.status && response.status==1)
    //     {
    //       this.postedMsg=response.message;
    //       setTimeout(()=>{
    //         this.postedMsg='';
    //         this.router.navigate(['rdashboard/postedjobs']);
    //       },2000);
    //     }else{
    //       this.alreadyposted=response.message;
    //       setTimeout(()=>{
    //         this.alreadyposted='';
    //       },2000);
    //     }
    //   },(error)=>{
    //     this.errormsg="Internal Server Error";
    //   }
    // )
  }
}
