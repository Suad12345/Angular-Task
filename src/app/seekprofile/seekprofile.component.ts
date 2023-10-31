import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seekprofile',
  templateUrl: './seekprofile.component.html',
  styleUrls: ['./seekprofile.component.css']
})
export class SeekprofileComponent {

  profileinfo: any;
  profilepic: any;
  picexists: boolean = false;
  successmsg: any;
  constructor( private router: Router) { }

  ngOnInit() {
    this.getprofile();

  }
  getprofile() {
    // this.seekerservice.getprofile().subscribe(
    //   (response: any) => {
    //     this.profileinfo = response;
    //     //console.log(JSON.stringify(response.profileimage));
    //     let image:any = response.profileimage;
    //     //console.log(image);
    //     if (image != "") {
    //       this.picexists = true;
    //     }
    //     else {
    //       this.picexists = false;
    //     }

    //   }, (error) => {
    //     console.log("Server Error");
    //   }
    // )
  }
  logout() {
    // this.seekerservice.logout();
    this.router.navigate(['./login']);
  }
  selectimage() {
    // if (event.target.files.length > 0) {
    //   const file = event.target.files[0];
    //   this.profilepic = file;
    // }
  }
  upload() {
    // const formdata = new FormData();
    // formdata.append('profileimage', this.profilepic);
    // this.seekerservice.uploadprofilepic(formdata).subscribe((res) => {
    //   if (res) {
    //     this.successmsg = res
    //   }
    //   setTimeout(() => {
    //     this.successmsg = '';
    //     this.getprofile();
    //   }, 2000);

    //   // setTimeout(()=>{
    //   //   this.router.navigate(['/seeker/eprofile'])
    //   // },1000);
    //   this.router.navigate(['seeker/eprofile']);
    // }, (error) => {
    //   if (error) {
    //     console.log(error);
    //   }
    // })
  }


}
