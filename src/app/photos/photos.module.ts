import { NgModule } from '@angular/core';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { CardModule } from '../components/card/card.module';


@NgModule({
    declarations: [
    ],
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ],
    exports: [
    ]
})
export class PhotosModule {

}