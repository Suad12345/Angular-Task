import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ingredient!: string;

  registerUser:any[] =[];
  loginUser:any[] =[];
  loginObj:any={

    username: '',
    password: '',
    
  };

  
constructor(){}

onLogin(){
debugger
const isUserExist =this.registerUser.find(m => m.username == this.loginObj.username && m.password == this.loginObj.password);
if (isUserExist != undefined){
alert('User Login Successfully');
}
else{
  alert('Wrong credintials');
}
}

ngOnInit(): void {
  
}
    

}


