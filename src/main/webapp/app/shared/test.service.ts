import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
    createTime;
    constructor() {
        this.createTime = Date.now();
        console.log('TestService constructor,create time:', this.createTime);
    }
    getInfo() {
        console.log('TestService getInfo,create time', this.createTime);
    }
}