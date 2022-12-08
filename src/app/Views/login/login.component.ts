import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl , Validators } from '@angular/forms';
import  Swal  from 'sweetalert2';
import { LoginService } from '../../Services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formlogin = new FormGroup({
    email : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(
    private serviceLogin : LoginService
  ) { }

  ngOnInit() { }

  loginUser(form: any) {
    console.log(form);
    if (this.formlogin.valid) {
      this.serviceLogin.login(form).subscribe(data => {
        console.log();
      })
    }else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title:  "todos los campos son obligatorios ",
        showConfirmButton: true,
      })
    }
  }

}
