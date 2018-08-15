import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

getProducts(): IProduct[] {
    return[
        {
            'productId': 1,
            'productName': 'Leaf Rake',
            'code': 'GDNs-0011',
            'releaseDate': 'March 19, 2016',
            'description': 'Leaf rake with 48-inch wooden handle.',
            'price': 19.95,
            'starRating': 3.2,
            'imageUrl': 'https://www.acerentalcars.com.au/assets/Uploads/61011dbad7/AU-Compact-Group-Image-v2.png'
          },
          {
            'productId': 2,
            'productName': 'Garden Cart',
            'code': 'GDN-0023',
            'releaseDate': 'March 18, 2016',
            'description': '15 gallon capacity rolling garden cart',
            'price': 32.99,
            'starRating': 4.2,
            'imageUrl': 'https://www.advantage.com/wp-content/plugins/advantage-vehicles/assets/SCAR_800x400.png'
          },
          {
            'productId': 5,
            'productName': 'Hammer',
            'code': 'TBX-0048',
            'releaseDate': 'May 21, 2016',
            'description': 'Curved claw steel hammer',
            'price': 8.9,
            'starRating': 4.8,
            'imageUrl':
            'https://cms.kelleybluebookimages.com/content/dam/kbb-editorial/make/lamborghini/lamborghini-other/2019-lambo-urus/01-2019-lamborghini-urus-oem.jpg'
          },
          {
            'productId': 8,
            'productName': 'Saw',
            'code': 'TBX-0022',
            'releaseDate': 'May 15, 2016',
            'description': '15-inch steel blade hand saw',
            'price': 11.55,
            'starRating': 3.7,
            'imageUrl': 'https://article.images.consumerreports.org/prod/content/dam/CRO%20Images%202018/Cars/March/CR-Cars-InlineHero-2018-Honda-CR-V-driving-3-18'
          },
          {
            'productId': 10,
            'productName': 'Video Game Controller',
            'code': 'GMG-0042',
            'releaseDate': 'October 15, 2015',
            'description': 'Standard two-button video game controller',
            'price': 35.95,
            'starRating': 4.6,
            'imageUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvyCK__VrCo2U0FKFSn1xLuX7vwM1Ns2KPeOQx8cbkUzZPgL-uQ'
          }
    ];
}
}
