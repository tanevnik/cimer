import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {CimerSharedModule} from '../shared';

import {HOME_ROUTE, HomeComponent} from './';
import {PostComponent} from '../entities/post';
import {PostFormComponent} from '../entities/post/post-form.component';

@NgModule({
    imports: [
        CimerSharedModule,
        RouterModule.forChild([ HOME_ROUTE ]),
    ],
    declarations: [
        HomeComponent,
        PostComponent,
        PostFormComponent
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CimerHomeModule {}
