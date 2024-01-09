import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Muhamad Iffat';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    'male': 'Pria',
    'female': 'Wanita'
  };

  changePerson(): void {
    this.name = 'Mellisa';
    this.gender = 'female';
  }
}
