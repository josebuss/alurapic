import { NgModule } from "@angular/core";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { FilterByDescription } from "./filter-by-description.pipe";
import { CommonModule } from "@angular/common";
import { PhotosModule } from "../photos.module";
import { PhotoModule } from "../photo/photo.module";
import { CardModule } from "src/app/components/card/card.module";
import { SearchComponent } from "./search/search.component";

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    FilterByDescription,
    LoadButtonComponent,
    SearchComponent
  ],
  imports: [CommonModule, PhotoModule, CardModule]
})
export class PhotoListModule {}
