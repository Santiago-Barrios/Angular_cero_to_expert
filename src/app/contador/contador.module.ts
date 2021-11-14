import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ContadorComportent } from "./contador/contador.component";

@NgModule({
    declarations: [
        ContadorComportent
    ],
    exports: [
        ContadorComportent
    ]
})
export class ContadorModule {}