import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('aGroup') aGroup: IonAccordionGroup;
  constructor() { }

  collapse() {
    this.aGroup.value = undefined;
  }

  expand() {
    this.aGroup.value = ['numbers', 'shapes', 'colors'];
  }
}
