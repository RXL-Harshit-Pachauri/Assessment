import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  primitiveValue : number = 0;
  nonPrimitiveValue : {count :number} = {count : 0}

  updatePrimitiveValue():void{
    this.primitiveValue += 1;
  }

  updateNonPrimitiveValue():void{
    // this.nonPrimitiveValue = Object.assign({},this.nonPrimitiveValue)
    this.nonPrimitiveValue.count += 1; 
  }

}
