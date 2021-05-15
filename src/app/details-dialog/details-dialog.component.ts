import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { GlobalService } from "../services/global.service";

@Component({
  selector: "app-details-dialog",
  templateUrl: "./details-dialog.component.html",
  styleUrls: ["./details-dialog.component.scss"],
})
export class DetailsDialogComponent implements OnInit {
  constructor(
    private globalService: GlobalService,
    public dialogRef: MatDialogRef<DetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data)
  }

  getMode(){
    return JSON.parse(this.globalService.getLocalStorageItem("mode"));
  }
}
