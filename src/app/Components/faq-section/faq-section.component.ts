import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.css']
})
export class FaqSectionComponent {
  @Input() data: any; 
  
}







