import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
/***********components***************/
import { ListComponent } from './list.component';
import { ListService } from './list.service';

const routes = [
    { path: 'list', component: ListComponent },
];

@NgModule({
    imports: [
        SharedModule, RouterModule.forChild(routes)
    ],
    providers: [],
    declarations: [ListComponent],
    exports: [ListComponent],
})
export class ListModule {
    static forRoot() {
        return {
            ngModule: ListModule,
            providers: [ListService],
        }
    }
}
