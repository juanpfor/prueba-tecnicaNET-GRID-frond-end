import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl , Validators } from '@angular/forms';
import  Swal  from 'sweetalert2';
import { LoginService } from '../../Services/login/login.service';
import { Router } from '@angular/router';
import { responseApi } from '../../interfaces/responseApi';


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
    private serviceLogin : LoginService ,
    private route : Router
  ) { }

  ngOnInit() {
    this.redirecto()
  }

  loginUser(form: any) {
    console.log(form);
    if (this.formlogin.valid) {
      this.serviceLogin.login(form).subscribe(data => {
        if (data.status === 'success') {
          localStorage.setItem('token' , data.results.token)
          this.route.navigate(['/dashboard'])
        }else {
          Swal.fire({
            position: 'center',
            icon: 'info',
            title:  "todos los campos son obligatorios ",
            text : data.message,
            showConfirmButton: true,
          })
        }
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

  redirecto() {

    localStorage.getItem('token') == null || '' ? false : this.route.navigate(['/dashboard'])
  }

}
