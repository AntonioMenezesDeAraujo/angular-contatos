import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Contact } from '../model/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts$: Observable<Contact[]>;

  displayedColumns = ['name', 'lastName', 'cpf', 'email', 'Ações'];

  constructor(private contactService: ContactService, 
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) {
    this.contacts$ = this.contactService.list()
    .pipe(
      catchError(error => {
        this.onError('error.load.contacts');
        return of([]);
      })
    );
  }

  onError(error: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: error
    })
  }

  ngOnInit(): void {
  }

  addContact() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
