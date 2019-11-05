import { PhotoService } from './photo/photo.service';
import { PhotoComponent } from './photo/photo.component';
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        PhotoComponent
    ],
    imports: [
        HttpClientModule
    ],
    exports: [
        PhotoComponent
    ]
})
export class PhotosModule {

}