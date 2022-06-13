import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactsFormComponent } from './contacts-form/contacts-form.component';

const routes: Routes = [
  { path: '', component: ContactComponent },
  { path: 'new', component: ContactsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
