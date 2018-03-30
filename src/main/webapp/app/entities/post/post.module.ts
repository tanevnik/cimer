import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {CimerSharedModule} from '../../shared';
import {CimerAdminModule} from '../../admin/admin.module';
import {
    PostDeleteDialogComponent,
    PostDeletePopupComponent,
    PostDetailComponent,
    PostDialogComponent,
    PostPopupComponent,
    postPopupRoute,
    PostPopupService,
    postRoute,
    PostService,
} from './';
import {PostComponent} from './post.component';

const ENTITY_STATES = [
    ...postRoute,
    ...postPopupRoute,
];

@NgModule({
    imports: [
        CimerSharedModule,
        CimerAdminModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        PostDetailComponent,
        PostDialogComponent,
        PostDeleteDialogComponent,
        PostPopupComponent,
        PostDeletePopupComponent,
    ],
    entryComponents: [
        PostComponent,
        PostDialogComponent,
        PostPopupComponent,
        PostDeleteDialogComponent,
        PostDeletePopupComponent,
    ],
    providers: [
        PostService,
        PostPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CimerPostModule {}
