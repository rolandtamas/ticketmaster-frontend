import {Component, OnInit} from '@angular/core';
import {ContactService} from './contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  name:string;
  email:string;
  message:string;
  formData:string[] = new Array<string>(0);

  constructor(private contactservice:ContactService) {
    
   }

  ngOnInit() {

    
  }
  processForm(){
    if(!this.name && !this.email && !this.message)
      {
        alert("Cannot submit form");
      }
      else{
        this.formData.push(this.name);
        this.formData.push(this.email);
        this.formData.push(this.message);
        var formObject:ContactForm = {
            name:this.formData[0],
            email:this.formData[1],
            message:this.formData[2]
      };
      console.log(formObject);
      this.contactservice.postData(formObject).subscribe(arg => console.log(arg));
        alert("Form submitted");
    }
    interface ContactForm{
      name: string,
      email: string,
      message:string
    }
  }

  
}
