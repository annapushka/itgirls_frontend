import { User } from './classes/User.js'
import { Item } from './classes/Item.js'
import { ShopingCart } from './classes/ShopingCart.js'
import { Order } from './classes/Order.js'




const regDate = new Date('2022-12-17T03:24:00');
const user = new User('Banana', [], regDate);
const item = new Item('Banana', 9);
const shopingCart = new ShopingCart()
shopingCart.addToShopingCart(item)
user.registrationDate = new Date('2023')
alert(user.registrationDate)