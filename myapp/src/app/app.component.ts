import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from '../components/parent/parent.component';
import { RootService } from '../services/root/root.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ParentComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  message: string = '';
  title = 'myapp';

  constructor(private rootService: RootService) {
    this.message = this.rootService.getMessage('Inject in root');
  }
}
