import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  ngOnInit() {}

  /**
   * Changes the language and stores it in the localStorage
   * @param language The language to show.
   */
  useLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem("language", language);
  }
}
