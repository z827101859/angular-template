/***********common module***************/
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharkModule } from '@ntesmail/shark-angular2';
import { TestService } from './test.service';
/***********common service***************/

let modules: Array<any> = [CommonModule, FormsModule, SharkModule];
let services: Array<any> = [TestService];
let directives: Array<any> = [];

@NgModule({
    imports: [],
    declarations: [...directives],
    providers: [...services],
    exports: [...modules, ...directives]
})
export class SharedModule { }