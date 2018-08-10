import { Component } from '../../../node_modules/@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './products-list.component.html'
})
export class ProductListComponent {
    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    products: any[] = [
        {
            'productId': 2,
            'productName' : 'Garden Cart',
            'code' : 'GDF-002',
            'releaseDate' : 'March 18, 2016',
            'description' : 'Crazy stupid shit',
            'price' : 35.99,
            'starRating' : 4.2,
            'imageUrl': 'https://images-na.ssl-images-amazon.com/images/I/7104mznFWcL._SL1500_.jpg'
        }
    ];
}
