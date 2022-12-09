import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl , Validators } from '@angular/forms';
import  Swal  from 'sweetalert2';
import { LoginService } from '../../Services/login/login.service';
import { Router } from '@angular/router';
import { responseApi } from '../../interfaces/responseApi';
import { UserService } from '../../Services/user/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : boolean = true

  formlogin = new FormGroup({
    email : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  formuser = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password_confirmation: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    description: new FormControl(''),
  })

  constructor(
    private serviceUser: UserService,
    private serviceLogin : LoginService ,
    private route : Router
  ) { }

  ngOnInit() {
    this.redirecto()
  }

  loginUser(form: any) {
    if (this.formlogin.valid) {
      this.serviceLogin.login(form).subscribe(data => {
        if (data.status === 'success') {
          localStorage.setItem('token' , data.results.token)
          this.route.navigate(['/dashboard'])
        }else {
          Swal.fire({
            position: 'center',
            icon: 'info',
            text : 'contraseña o email incorrectos' ,
            title: 'info',
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

  irAREgister () {
    this.route.navigate(['dashboard/registerUser'])
  }

  registerUser(form: any) {

    if (this.formuser.valid) {
      this.serviceUser.resgisterUser(form).subscribe(data => {

        if (data.status === 'success') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            text : "tu cuenta fue creada de forma exitosa" ,
            title: 'info',
            showConfirmButton: true,
          })
          this.change(false)
        }else {
          Swal.fire({
            position: 'center',
            icon: 'info',
            text : data.message.name
            ||data.message.email
            ||data.message.address
            ||data.message.password
            ||data.message.birthdate
            ||data.message.city,
            title: 'info',
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

  change(boolean : boolean) {
    boolean == true ? this.login = false : this.login = true
  }


}
