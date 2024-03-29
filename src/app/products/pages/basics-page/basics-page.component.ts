import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'iffat';
  public nameUpper: string = 'IFFAT';
  public fullName: string = 'MuHaMaD IfFat';
  public customDate: Date = new Date();
}
