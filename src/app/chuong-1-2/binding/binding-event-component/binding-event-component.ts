import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component',
  standalone: false,
  styleUrl: './binding-event-component.css',
  templateUrl: './binding-event-component.html',
})
export class BindingEventComponent {
  public hsa: number = 5
  public hsb: number = 8

  giaipt(hsa: string, hsb: any, kq: HTMLElement) {
    let a = parseFloat(hsa)
    let b = parseFloat(hsb)
    if (a == 0 && b == 0) {
      kq.innerHTML = "Vô số nghiệm"
    }
    else if (a == 0 && b != 0) {
      kq.innerHTML = "<span style='color:red'>Vô nghiệm</span>"
    }
    else {
      kq.innerHTML = "x=" + (-b / a)
    }
  }

  reset(viewhsa: HTMLInputElement, viewhsb: HTMLInputElement, kq: HTMLElement) {
    viewhsa.value = '';
    viewhsb.value = '';
    kq.innerHTML = '';
  }
}
