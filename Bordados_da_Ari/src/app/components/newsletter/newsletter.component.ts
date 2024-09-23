import { Component,OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {FormControl,FormGroupDirective,NgForm,Validators,ReactiveFormsModule} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css',
})
export class NewsletterComponent implements OnInit {
  newsForm!:FormGroup;

  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.newsForm = new FormGroup ({
      name: new FormControl('',[Validators.required]),
      mail: new FormControl('',[Validators.required, Validators.email]),
      tel: new FormControl('',[Validators.required])
    });

    
  }
    onSubmit(): void {
    if (this.newsForm.valid) {
      console.log('Formulário válido. Dados:', this.newsForm.value);
    } else {
      console.log('Formulário inválido. Por favor, corrija os erros.');
    }
  }

  


  
    
}
