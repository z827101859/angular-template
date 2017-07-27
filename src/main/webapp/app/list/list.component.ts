import { Component, ViewChild } from '@angular/core';
import { SharkToastrService } from '@ntesmail/shark-angular2';
import { TestService } from '../shared/test.service';
import { ListService } from './list.service';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    constructor(
        private testService: TestService,
        private listService: ListService
    ) {
        testService.getInfo();
        listService.getInfo();
    }
};
