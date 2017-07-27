import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
    createTime;
    constructor() {
        this.createTime = Date.now();
        console.log('ListService constructor,create time:', this.createTime);
    }
    getInfo() {
        console.log('ListService getInfo,create time', this.createTime);
    }
}