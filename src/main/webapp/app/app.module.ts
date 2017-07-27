import { enableProdMode } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { SharedModule } from './shared/shared.module';
import { ListModule } from './list/list.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

import { ApplicationRef } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

console.log(ENV);
if (ENV === 'prod') {
    enableProdMode();
}

// 定义常量 路由
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    }
    , {
        path: 'detail',
        loadChildren: './detail/detail.module#DetailModule'
    }
];

@NgModule({
    imports: [BrowserModule, SharedModule, ListModule.forRoot(), RouterModule.forRoot(appRoutes, { useHash: true })],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(public appRef: ApplicationRef) { }
    hmrOnInit(store: any) {
    }
    hmrOnDestroy(store: any) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement)
        store.disposeOldHosts = createNewHosts(cmpLocation)
        removeNgStyles()
    }
    hmrAfterDestroy(store: any) {
        store.disposeOldHosts()
        delete store.disposeOldHosts
    }
}