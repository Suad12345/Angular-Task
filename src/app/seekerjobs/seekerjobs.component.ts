import { Component } from '@angular/core';


interface job{
  companyName: string;
  jobRole: string;
  skills: string;
  jobType:string;
  expRequired: string;
  }
@Component({
  selector: 'app-seekerjobs',
  templateUrl: './seekerjobs.component.html',
  styleUrls: ['./seekerjobs.component.css']
})
export class SeekerjobsComponent {

  jobs:any=[];
  waitforjobs:any;
  appliedmessage:any;
  alreadyapplied:any;
  errormessage:any;
  totaljobs:any;
  headers=['Company Name','Job Role','Skills','Job Type','Experience',''];
    constructor() { }
    ngOnInit() {
    this.getjobs();
    }
  
    getjobs()
    {
      // this.seekerservice.getjobs().subscribe(
      //   (response:any)=>
      // {
      //   if(response && response.length>0)
      //   {
      //     this.jobs=response;
      //     this.totaljobs=response.length;
      //   } 
      // },
      // (error)=>{
      //   console.log(error.msg);
      // }
      // );
    }
    apply(jobapply:any)
    {
      // console.log(jobapply);
      // this.seekerservice.applyjob(jobapply).subscribe(
      //   (response:any)=>{
      //     if(response.status && response.status==1){
      //       //console.log(response);
      //      // 
      //      this.appliedmessage=response.message;
      //      setTimeout(()=>{
      //       this.appliedmessage='';
      //       this.getjobs();
      //      },2000) ;
      //     }else{
      //       this.alreadyapplied=response.message; 
      //       setTimeout(()=>{
      //         this.alreadyapplied='';
      //         //this.getjobs();
      //        },1000);
      //     }
          
      //   },(err)=>{
      //     this.errormessage=err.message;
      //   }
      // );
      
    }

    job=[
      {
      "companyName":"ProKarma",
      "jobRole":"angular deeveloper",
      "skills": "angular ,JS, Node",
      "jobType":"Permanent",
      "expRequired":"1-5",
    }
  ]
    

}
