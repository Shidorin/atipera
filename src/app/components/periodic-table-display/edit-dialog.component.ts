import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodicElement } from '../../interfaces';
import { FormsModule } from '@angular/forms';

import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'edit-dialog',
  template: `
    <h1 mat-dialog-title>Edit {{ data.column }}</h1>
    <div mat-dialog-content>
      <mat-form-field>
        <input matInput [(ngModel)]="data.element" />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button (click)="onSaveClick()">Save</button>
    </div>
  `,
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class EditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { element: PeriodicElement; column: keyof PeriodicElement }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.data.element);
  }
}
