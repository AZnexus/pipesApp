import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'alex';
  public nameUpper: string = 'ALEX';
  public fullName: string = 'alEX zETa';

  public customDate: Date = new Date();
}
