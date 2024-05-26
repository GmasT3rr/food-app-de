import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-config-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './config-dialog.component.html',
  styleUrl: './config-dialog.component.scss',
})
export class ConfigDialogComponent {
  constructor(
    private _router: Router,
    public dialogRef: DialogRef<any>,
    @Inject(DIALOG_DATA) public data: any
  ) {}

  go(){
    this._router.navigateByUrl(`api/foods/plan/settings`);
  }
}
