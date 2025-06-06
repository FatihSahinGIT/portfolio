import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
} from '@angular/core';
import { gsap } from 'gsap/gsap-core';
import { IntroductionComponent } from '../introduction/introduction.component';

@Component({
  selector: 'app-landing',
  imports: [IntroductionComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent  {}