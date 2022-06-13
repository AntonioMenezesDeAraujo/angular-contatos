import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ContactService,
    private _snackBar: MatSnackBar,
    private location: Location) { 
    this.form = this.formBuilder.group({
      name: [null],
      lastName: [null],
      cpf: [null],
      email: [null],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value)
    .subscribe(result => {
      this._snackBar.open("Curso salvo com sucesso!", '', {duration: 1000});
      this.location.back();
    },
    error => {
      this._snackBar.open("Erro ao salvar", '', {duration: 1000})
    })
  }

  onCancel() {
    this.location.back();
  }

}
