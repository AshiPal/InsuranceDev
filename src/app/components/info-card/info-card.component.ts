import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-info-card",
  templateUrl: "./info-card.component.html",
  styleUrls: ["./info-card.component.scss"],
})
export class InfoCardComponent implements OnInit {
  @Input() icon_name: string;
  @Input() text: string;

  constructor() {}

  ngOnInit() {
    console.log(this.icon_name);
    console.log(this.text);
  }
}
