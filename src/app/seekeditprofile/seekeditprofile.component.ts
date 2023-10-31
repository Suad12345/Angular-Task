import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {first} from "rxjs/operators";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-seekeditprofile',
  templateUrl: './seekeditprofile.component.html',
  styleUrls: ['./seekeditprofile.component.css']
})
export class SeekeditprofileComponent {
  profileinfo: any;
  SeekProfileForm!: FormGroup;
  updated: any;
  userdata:any={};
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    // this.getprofile();
    // this.SeekProfileForm = this.fb.group({
    //    _id: this.seekerservice.getpayload().id,
    //   username: [''],
    //   password: ['', Validators.compose([Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"), Validators.minLength(8)])],
    //   mail: ['', Validators.compose([Validators.email])],
    //   gender: [''],
    //   mobile: [''],
    //   hometown: [''],
    //   interests: [''],
    //   experience: [''],
    //   maritalStatus: [''],
    //   nationality: [''],
    //   languages: [''],
    //   currentLocation: [''],
    //   lastjobexp: [''],
    //   lastjobDesig: [''],
    //   department: [''],
    //   reasonsforleaving: ['']
    // });
  }
  getprofile() {
    // this.seekerservice.getprofile().subscribe(
    //   (response: any) => {
    //     this.profileinfo = response;
    //     this.userdata=response;
    //     console.log(this.userdata);
    //     this.SeekProfileForm.patchValue({
    //       _id: this.seekerservice.getpayload().id,
    //       username: this.userdata.username,
    //       mail: this.userdata.mail,
    //       gender: this.userdata.gender,
    //       mobile: this.userdata.mobile,
    //       hometown: this.userdata.hometown,
    //       interests: this.userdata.interests,
    //       experience: this.userdata.experience,
    //       maritalStatus: this.userdata.maritalStatus,
    //       nationality: this.userdata.nationality,
    //       languages: this.userdata.languages,
    //       currentLocation: this.userdata.currentLocation,
    //       lastjobexp: this.userdata.lastjobexp,
    //       lastjobDesig: this.userdata.lastjobDesig,
    //       department: this.userdata.department,
    //       reasonsforleaving: this.userdata.reasonsforleaving
    
    //     });
    //     this.SeekProfileForm.setValue({
    //       password: this.userdata.password
    //     });
    
    //   }, (error) => {
    //     console.log("Server Error");
    //   }
    // )
  }

  updateprofile() {
  // this.seekerservice.Empupdateprofile(JSON.stringify(this.SeekProfileForm.value)).subscribe((response) => {

  //   this.updated = response;
  //  // localStorage.setItem('currentemployee',this.EmpProfileForm.value.username);
  //   //this.EmpProfileForm.setValue(response);
  //   this.router.navigate(['seeker/eprofile'])
  //   console.log(this.SeekProfileForm.value.username);
  // },
  //   (error) => {
  //     console.log(error);
  
  //   })

  }

}
