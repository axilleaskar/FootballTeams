import { Component, OnInit, Renderer2 } from "@angular/core";
import { GlobalService } from "./services/global.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "FootballTeams";

  darkMode: boolean;

  constructor(private globalService:GlobalService,private renderer: Renderer2){}
  ngOnInit(): void {
    if (this.globalService.getLocalStorageItem('mode')) {

      this.darkMode = JSON.parse(this.globalService.getLocalStorageItem('mode'));
    } else {
      this.darkMode = false;
    }
    this.changeBody()

  }

  toggleMode(){

    this.darkMode = !this.darkMode
    this.changeBody()
    this.globalService.setLocalStorageItem('mode', JSON.stringify(this.darkMode))
    // localStorage.setItem('mode', JSON.stringify(this.darkMode))
  }

  changeBody(){
    this.darkMode ? this.renderer.addClass(document.body, 'dark-body') : this.renderer.removeClass(document.body, 'dark-body');
  }
}
