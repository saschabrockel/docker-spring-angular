import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppMaterialModule } from "./app-material.module";
import { UserComponent } from "./user/user.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
