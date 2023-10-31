import { Component } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-seekjobapplication',
  templateUrl: './seekjobapplication.component.html',
  styleUrls: ['./seekjobapplication.component.css']
})
export class SeekjobapplicationComponent {

  headers=['Company Name','Job Role','Job Type','Experience',''];
  applied:any =[];
  nojobs:any;
  errormsg:any;
  successmsg: boolean = false;
  constructor(private router:Router,private activeroute:ActivatedRoute) { }
  
    ngOnInit() {
      this.appliedjobs();
    }
    appliedjobs()
    {
      // this.seekerservice.getappliedjobs().subscribe(
      //   (response:any)=>{
      //     if(response.status && response.status===1)
      //     this.nojobs=response.message;
      //   else{
      //     this.applied=response;
      //     this.successmsg=true;
      //     //console.log(this.applied);
      //   }
      // },(error)=>{
      //   this.errormsg=error;
      // }
      // )
    }

}
