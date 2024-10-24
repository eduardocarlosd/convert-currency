import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-conversao-moedas',
  templateUrl: './conversao-moedas.component.html',
  styleUrl: './conversao-moedas.component.scss'
})
export class ConversaoMoedasComponent {
  private _snackBar = inject(MatSnackBar);
message: any;
action: any;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  

}
