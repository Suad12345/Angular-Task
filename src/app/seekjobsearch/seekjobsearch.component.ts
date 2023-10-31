import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';

//import {JobseekerService} from '../../jobseeker.service';
@Component({
  selector: 'app-seekjobsearch',
  templateUrl: './seekjobsearch.component.html',
  styleUrls: ['./seekjobsearch.component.css']
})
export class SeekjobsearchComponent {

  username:any;
  // searchform: FormGroup;
  jobs:any=[];
  headers=['Job Role','Experience','Job Type','PostedDate',''];
  nojobs:any;
  successmsg:boolean=false;
  companymsg:boolean=false;
  rolemsg:boolean=false;
  latestmsg:boolean=false;
  constructor(private router:Router,private fb:FormBuilder) { }
  
    ngOnInit() {
      this.username=localStorage.getItem('currentemployee');
      // this.searchform=this.fb.group({
      //   searchdrop:[''],
      //   searchname:['']
      // });
    }
    search()
    {

    }
  }