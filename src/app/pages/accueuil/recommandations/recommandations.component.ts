import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommandations',
  templateUrl: './recommandations.component.html',
  styleUrls: ['./recommandations.component.scss']
})
export class RecommandationsComponent implements OnInit {

  public fullText: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public getButtonTitle(): string {
    let result: string = 'voir plus';
    if (this.fullText) {
      result = 'voir moins';
    }
    return result;
  }

  public onButtonClicked() {
    this.fullText = !this.fullText;
  }

}
