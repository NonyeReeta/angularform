import { Component, OnInit} from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

submit(form: any){
  console.log(form)
}
 
  // form = new FormGroup({
  //   firstName: new FormControl('', [Validators.required,Validators.maxLength(15), Validators.minLength(2)]),
  //   lastName: new FormControl('', [Validators.required,Validators.maxLength(15), Validators.minLength(2)]),
  //   phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]),
  //   email: new FormControl('', [ Validators.email]),
  //   field:new FormControl('', [Validators.required,Validators.maxLength(30), Validators.minLength(3)])
  // })

}
