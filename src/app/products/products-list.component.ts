import { Component, OnInit } from '../../../node_modules/@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './products-list.component.html',
    styleUrls : ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    listFilter = 'cart';
    products: IProduct[] = [
        {
            'productId': 2,
            'productName' : 'Garden Cart',
            'code' : 'GDF-002',
            'releaseDate' : 'March 18, 2016',
            'description' : 'Crazy stupid shit',
            'price' : 35.99,
            'starRating' : 4.2,
            'imageUrl': 'https://images-na.ssl-images-amazon.com/images/I/7104mznFWcL._SL1500_.jpg'
        },
        {
            'productId': 3,
            'productName' : 'Hammer',
            'code' : 'GDF-023',
            'releaseDate' : 'March 18, 2006',
            'description' : 'Crazy stupid shitty thing',
            'price' : 19.20,
            'starRating' : 3.7,
            'imageUrl': 'https://images-na.ssl-images-amazon.com/images/I/71%2Bj8wbkNWL._SL1500_.jpg'
        }
    ];

    toggleImage (): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('Method not implemented.');
    }
}
