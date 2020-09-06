import { UserService } from "./user.service";
import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { SaveDialogComponent } from "./save-dialog/save-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];
  dataInitialized: boolean = false;

  constructor(
    public translate: TranslateService,
    private userService: UserService,
    public saveDialog: MatDialog,
    public snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initTable();
  }

  /** Loads data for table and sets displayedColumns */
  initTable() {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource<any>(data);
        this.setDataInitialized();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  setDataInitialized() {
    if (!this.dataInitialized) {
      this.displayedColumns = ["username", "email", "created"];
      this.dataInitialized = true;
    }
  }

  async openSaveDialog(): Promise<any> {
    const dialogRef = this.saveDialog.open(SaveDialogComponent, {
      disableClose: true,
      data: {
        username: "",
        email: "",
      },
    });

    return dialogRef
      .afterClosed()
      .toPromise()
      .then((result) => {
        return Promise.resolve(result);
      });
  }

  async onSaveUser() {
    const result = await this.openSaveDialog();
    if (result === undefined) {
      this.snackbar.open(
        this.translate.instant("SNACKBAR.ABORTED"),
        this.translate.instant("SNACKBAR.CLOSE"),
        {
          duration: 5000,
        }
      );
      return;
    }

    this.userService.saveUser(result.username, result.email).subscribe(
      (res) => {
        this.snackbar.open(
          this.translate.instant("SNACKBAR.SAVE_SUCCESS"),
          this.translate.instant("SNACKBAR.CLOSE"),
          {
            duration: 5000,
          }
        );
        this.initTable();
      },
      (err) => {
        this.snackbar.open(
          this.translate.instant("SNACKBAR.ERROR"),
          this.translate.instant("SNACKBAR.CLOSE"),
          {
            duration: 5000,
          }
        );
        console.log(err);
      }
    );
  }
}
