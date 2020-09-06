import { TranslateService } from "@ngx-translate/core";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface SaveDialogData {
  username: string;
  email: string;
}

@Component({
  selector: "app-save-dialog",
  templateUrl: "./save-dialog.component.html",
  styleUrls: ["./save-dialog.component.scss"],
})
export class SaveDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SaveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SaveDialogData,
    public form: FormBuilder
  ) {}

  saveForm: FormGroup;

  buildForm() {
    this.saveForm = this.form.group({
      username: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ],
      ],
      email: [
        "",
        [Validators.required, Validators.maxLength(70), Validators.email],
      ],
    });
  }

  /**
   * Closes the dialog without sending any value.
   */
  onAbortClick(): void {
    this.dialogRef.close();
  }

  /**
   * Shorten the access to the saveForm field controls.
   */
  get f() {
    return this.saveForm.controls;
  }

  ngOnInit() {
    this.buildForm();
  }
}
