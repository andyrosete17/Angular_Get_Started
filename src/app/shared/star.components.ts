import { Component } from '../../../node_modules/@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent {
    rating = 4;
    starWidth: number;

    constructor(parameters) {
    }
}
