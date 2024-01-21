import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  voucherno: string = "";
  cusmobile: string = "";
  startDate: Date = new Date ;
  endDate: Date = new Date ;
  includeStartDate: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  search(): void {
    // Perform the search and pass the parameters back to the main component
    this.dialogRef.close({
      voucherno: this.voucherno,
      cusmobile: this.cusmobile,
      startDate: this.startDate,
      endDate: this.endDate,
      includeStartDate: this.includeStartDate
    });
  }
}
