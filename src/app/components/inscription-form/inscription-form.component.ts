import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GoogleFormsService } from "../../services/google-forms/google-forms.service";

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.scss']
})
export class InscriptionFormComponent implements OnInit {
  inscriptionForm = new FormGroup({
    nom: new FormControl(''),
    email: new FormControl(''),
    etudes: new FormControl(''),
    ecole: new FormControl(''),
  });

  form:string = '1FAIpQLSciLaUS_Z_P98EpvCTyBoS-ohbSaFoKpUEC-d6yDwG5nqTX0Q';
  // col = {
  //   nom : 'entry.1665484108',
  //   email : 'entry.1036246899',
  //   etudes : 'entry.49139105',
  //   ecole : 'entry.1514119634'
  // }

  col = {
    nom : 'Nom',
    email : 'Email',
    etudes : 'Etudes',
    ecole : 'Ecoles'
  }

  constructor(private googleForm : GoogleFormsService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit');
    console.warn(this.inscriptionForm.value);
    this.googleForm.sendResponse(this.form, this.col, this.inscriptionForm.value);
    setTimeout(function() {
      // replace the url in quotes below to where you want to the user to be redirected to
      //window.location = "http://www.google.com";
    }, 1000);
  }
}
