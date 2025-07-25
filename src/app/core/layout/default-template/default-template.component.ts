import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ordem-servico-template',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './default-template.component.html',
  styleUrl: './default-template.component.scss',
})
export class DefaultTemplateComponent {}
