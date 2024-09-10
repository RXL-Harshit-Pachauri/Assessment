import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SharedDataService } from '../../services/shared-data/shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() primitive: number = 0;
  @Input() nonPrimitive: { count: number } = {count:0};
  message : string = '';

  constructor(private sharedDataService: SharedDataService) {
    this.message = this.sharedDataService.getMessage('Child class service');
  }

}
