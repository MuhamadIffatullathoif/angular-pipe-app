import {Component} from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Muhamad Iffat';
  public gender: 'male' | 'female' = 'male';
  public clients: string[] = ['Goku', 'Freeza', 'Gohan', 'Picollo', 'Buu'];

  public invitationMap = {
    'male': 'Pria',
    'female': 'Wanita'
  };

  public clientsMap = {
    '=0': 'we don\'t have any clients waiting',
    '=1': 'we have a client waiting',
    '=2': 'we have 2 waiting',
    'other': 'we have # clients waiting'
  }

  public person = {
    name: 'Muhamad Iffat',
    age: 300,
    address: 'Central Java'
  }

  changePerson(): void {
    this.name = 'Mellisa';
    this.gender = 'female';
  }

  deleteClient(): void {
    this.clients.shift();
  }
}
