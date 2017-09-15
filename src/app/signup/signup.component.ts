import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {
    email: string = '';
    password: Object = {
        num1:'',
        num2:'',
        num3:'',
        num4:'',
        num5:'',
        num6:''
    };
    passwordChuck=[];
    code='';
    submitForm() {
        this.passwordChuck= Object.values(this.password);
        this.code=this.passwordChuck.join('');
        alert('email : ' + this.email + '\ncode : ' + this.code)
    }
    ngOnInit() {
    }
}
