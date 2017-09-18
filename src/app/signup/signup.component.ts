import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {

    currentStep: string = '';
    email: string = '';
    codeObj: Object = {
        num1: '',
        num2: '',
        num3: '',
        num4: '',
        num5: '',
        num6: ''
    };
    codeChuck = [];
    code = '';

    constructor(
        private loaderService: LoaderService,
        private router:Router) {
    }

    regForm() {
        this.codeChuck = Object.values(this.codeObj);
        this.code = this.codeChuck.join('');
        this.loaderService.display(true);
        setTimeout(() => {
            this.loaderService.display(false);
            this.currentStep = 'personal_detail';
        }, 3000);
    }

    personalInfoForm() {
        this.loaderService.display(true);
        setTimeout(() => {
            this.loaderService.display(false);
            this.currentStep = 'set_password';
        }, 3000);
    }
    setPasswordForm() {
        this.loaderService.display(true);
        
        setTimeout(() => {
            this.loaderService.display(false);
            this.router.navigateByUrl('/login');
            
        }, 3000);
    }
    ngOnInit() {
        this.currentStep = 'reg';
        //this.currentStep='set_password';
    }
}
