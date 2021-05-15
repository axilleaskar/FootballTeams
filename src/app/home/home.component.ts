import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { DetailsDialogComponent } from "../details-dialog/details-dialog.component";
import { GlobalService } from "../services/global.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  capacity = [10000, 45000, 60000];
  teams: any = [];
  displayedTeams = [];
  isDarkMode: boolean;
  formGroup: FormGroup;
  control = new FormControl("");
  select = new FormControl("");

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      input: [""],
      select: [""],
    });
    this.globalService
      .doAction("GET", "http://localhost:8081/getAllTeams")
      .subscribe((resp: any) => {
        this.teams = resp.teams;
        this.displayedTeams = this.teams;
      });
    this.formGroup.valueChanges.subscribe((resp) => {
      this.displayedTeams = this.teams.filter(
        (team) =>
          team.strAlternate.toLowerCase().includes(resp.input.toLowerCase()) &&
          team.intStadiumCapacity > resp.select
      );
    });
  }

  getMode() {
    return JSON.parse(this.globalService.getLocalStorageItem("mode"));
  }

  openDialog(id) {
    this.dialog.open(DetailsDialogComponent, { panelClass: this.getMode() ? 'darkMode' : null, data: id });
  }
}
