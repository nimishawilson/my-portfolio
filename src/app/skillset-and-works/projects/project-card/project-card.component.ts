import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() projectHeading: string = 'Access Line Integrated Intake System';
  @Input()
  content: string = ` A system for recording the cases from clients and assign available attorneys to them.
 Integrated calendar component library that can display events on a month, week or day view.
 Created reusable custom components and implement custom validations`;
  @Input() technologiesUsed: string[] = [
    'Angular 13',
    'PrimeFlex',
    'PrimeNG',
    'PrimeNG',
    'Angular 13',
  ];
}
