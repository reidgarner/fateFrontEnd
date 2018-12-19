import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { GetAccountUsers } from "./getaccountUsers.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "fateFrontEnd";
  constructor(private _GetAccountUsers: GetAccountUsers) {}
  ngOnInit() {
    this._GetAccountUsers.getData().subscribe(data => {
      console.log(data);
    });
  }
}
