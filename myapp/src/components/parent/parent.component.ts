import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { SharedDataService } from '../../services/shared-data/shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  providers : [SharedDataService]
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  primitiveValue : number = 0;
  nonPrimitiveValue : {count :number} = {count : 0}
  message : string = '';

  constructor(private sharedDataService: SharedDataService) {
    this.message = this.sharedDataService.getMessage('Parent class service');
  }


  updatePrimitiveValue():void{
    this.primitiveValue += 1;
  }

  updateNonPrimitiveValue():void{
    // this.nonPrimitiveValue = Object.assign({},this.nonPrimitiveValue)
    this.nonPrimitiveValue.count += 1; 
  }

}
