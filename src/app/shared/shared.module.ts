import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";




@NgModule({
    declarations: [
        InputComponent, 
        RadioComponent,
        RatingComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports:[
        InputComponent, 
        RadioComponent,
        RatingComponent,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ]
})

export class SharedModule { }