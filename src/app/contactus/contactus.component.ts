import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  form!: FormGroup
  
  get name() {
    return this.form.get('name') as FormControl
  }
  get message() {
    return this.form.get('message') as FormControl
  }

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }
}
