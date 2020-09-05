import { UserService } from "./user.service";
import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];

  constructor(
    public translate: TranslateService,
    private userService: UserService
  ) {}

  ngOnInit() {}
}
