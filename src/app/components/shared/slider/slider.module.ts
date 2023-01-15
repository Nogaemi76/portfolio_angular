import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { ObjectEntriesPipe } from '../pipes/object.entries.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SliderComponent,
    ObjectEntriesPipe
  ],
  exports: [SliderComponent]
})
export class SliderModule { }
