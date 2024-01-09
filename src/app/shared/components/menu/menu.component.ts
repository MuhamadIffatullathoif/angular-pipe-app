import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texts and Dates',
            icon: 'pi pi-align-left'
          },
          {
            label: 'Number',
            icon: 'pi pi-dollar'
          },
          {
            label: 'Not Common',
            icon: 'pi pi-globe'
          },
        ]
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Another Element',
            icon: 'pi pi-cog'
          }
        ]
      }
    ]
  }
}
