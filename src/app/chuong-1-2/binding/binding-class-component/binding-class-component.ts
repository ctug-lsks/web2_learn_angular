import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-class-component',
  standalone: false,
  styleUrl: './binding-class-component.css',
  templateUrl: './binding-class-component.html',
})
export class BindingClassComponent {
  // Logic
  isSaved: boolean = false
  isActive: boolean = true

  //Event
  toggleSaveState() {
    this.isSaved = !this.isSaved
  }
}
