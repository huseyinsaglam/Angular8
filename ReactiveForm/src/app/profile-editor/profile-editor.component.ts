import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  productForm = new FormGroup({
    name : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required),
    price : new FormControl('',Validators.required),
    imageUrl : new FormControl('',Validators.required)
})   


/*
productForm = this.fb.group({
  name: ['', Validators.required],
  description: ['',Validators.required],
  price: ['',Validators.required],
  imageUrl: ['',Validators.required]
})
*/
onSubmit() {
    console.log(this.productForm.value);
}
/*
updateProduct() {
  this.productForm.patchValue({
      name: 'IPhone X',
      price: 5000
  });
}
*/
}
