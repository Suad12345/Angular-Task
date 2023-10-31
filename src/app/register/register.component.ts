import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerUser:any[] =[];
  registerObj:any={
    username: '',
    email: '',
    password: '',
    
  };


  ngOnInit(): void {
  const localData =localStorage.getItem('registerUser');
  if(localData !=null){
    this.registerUser = JSON.parse(localData);
  }
  }

  onRegister(){
    this.registerUser.push(this.registerObj);
    localStorage.setItem('registerUser', JSON.stringify(this.registerUser));
    this.registerObj={
      username: '',
      email: '',
      password: '',
    };
  }
}



