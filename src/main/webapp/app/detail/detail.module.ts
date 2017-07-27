import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ListModule } from '../list/list.module';
/***********components***************/
import { DetailComponent } from './detail.component';

const routes = [
    { path: '', component: DetailComponent },
];

@NgModule({
    imports: [
        SharedModule, ListModule, RouterModule.forChild(routes)
    ],
    declarations: [DetailComponent]
})
export class DetailModule { }
