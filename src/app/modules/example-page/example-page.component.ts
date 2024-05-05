import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: "app-example-page",
    standalone: true,
    imports: [CommonModule, MatButtonModule, NgOptimizedImage],
    templateUrl: "./example-page.component.html",
    styleUrls: ["./example-page.component.scss"]
})
export class ExamplePageComponent {

}
