import { Component,OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import{JobproviderService} from '../jobprovider.service';
@Component({
  selector: 'app-appliedseeker',
  templateUrl: './appliedseeker.component.html',
  styleUrls: ['./appliedseeker.component.css']
})
export class AppliedseekerComponent implements OnInit {

  headers=['SeekerName','SeekerMail','SeekerMobile','SeekerLoc','Interests','AppliedFor',''];
  seekersInfo:any=[];
  seekerinterest:any;
  notapplied:any;
  errormsg:any;
  constructor(private router:Router,private activeroute:ActivatedRoute,private recservice:JobproviderService) { }

  ngOnInit() {
  //  setTimeout(()=>{
  //   this.getSeekers();
  //  },5000);
   this.getSeekers();
  }
getSeekers()
{
  // this.recservice.getseekers().subscribe(
  //   (response:any)=>{
  //     if(response.status && response.status===1)
  //     {
  //       this.seekersInfo=response.employeearray;
  //      // this.seekerinterest=response.employeearray.details.interests;
  //       console.log(this.seekersInfo);
  //     }
  //     else{
  //       this.notapplied=response.message;
  //       console.log(this.notapplied);
  //     }

  //   },(error:any)=>{
  //     this.errormsg="Internal Server Error/Server Issues";
  //   }
  // )
}
 call_for_interview(){
 window.alert("Yor selected");
}
reject(){
 window.alert("your rejected");
}

}
