import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
  ],
})
export class AppMaterialModule {}
