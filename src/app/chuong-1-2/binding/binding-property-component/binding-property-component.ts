import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  standalone: false,
  styleUrl: './binding-property-component.css',
  templateUrl: './binding-property-component.html',
})
export class BindingPropertyComponent {
  public name: string = "Võ Cát Tường"
  public email: string = "tuongvck24411@st.uel.edu.vn"
  public nameid: string = 'vct'
  public emailid: string = 'abc'
  public isDisabled: boolean = true
  public hello: string = "Hé lô"
}
