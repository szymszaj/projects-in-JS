// let instance

// class ShoppingBag {
//     constructor() {
//         if (instance) {
//             throw new Error('This instance already exists')
//         }
//         this.bag = []
//         instance = this
//     }
//     getBag() {
//         console.log(this.bag);
//     }
//     addItem(item) {
//         this.bag.push(item)
//     }

// }

let shopping = []

const ShoppingBag = {
    getBag: () => console.log(`This item has ${shopping.length}`),
    addItem: (item) => shopping.push(item),
}

const singletonShopping = Object.freeze(ShoppingBag)
export default singletonShopping



