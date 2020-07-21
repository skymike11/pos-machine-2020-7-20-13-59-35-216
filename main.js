const products = [
    {
        barcode: 'ITEM000000',
        name: 'Coca-Cola',
        price: 3
    },
    {
        barcode: 'ITEM000001',
        name: 'Sprite',
        price: 3
    },
    {
        barcode: 'ITEM000002',
        name: 'Apple',
        price: 5
    },
    {
        barcode: 'ITEM000003',
        name: 'Litchi',
        price: 15
    },
    {
        barcode: 'ITEM000004',
        name: 'Battery',
        price: 2
    },
    {
        barcode: 'ITEM000005',
        name: 'Instant Noodles',
        price: 4
    }
]

const productsMap = initMapData(products)

function initMapData (products) {
    let map = new Map()
    products.forEach(product => {
        map.set(product.barcode, product)
    })
    return map
}

function printReceipt(barcodes) {
    let barcodeNumberMap = createBarcodeNumMap(barcodes)
    let itemList = createItemList(barcodeNumberMap)
    let totalPirce = countTotalPrice(itemList)
    console.log(formatDetail(itemList, totalPirce))
}

function createBarcodeNumMap(barcodes) {
    let barcodeNumberMap = new Map()
    barcodes.forEach(barcode => {
        if (barcodeNumberMap.get(barcode) === undefined) {
            let product = findProductByCode(barcode)
            barcodeNumberMap.set(barcode, 1)
        } else {
            let currentNum = barcodeNumberMap.get(barcode)
            barcodeNumberMap.set(barcode, currentNum + 1)
        }
    })
    return barcodeNumberMap
}

function findProductByCode(barcode) {
    return productsMap.get(barcode)
}

function createItemList(barcodeNumberMap) {
    let itemList = []
    barcodeNumberMap.forEach((number, barcode)=> {
        let product = productsMap.get(barcode)
        itemList.push({
            'itemName' : product.name,
            'quantity' : number,
            'unitPrice' : product.price
        })
    })
    return itemList
}

function countTotalPrice(itemList) {
    let totalPrice = 0.0
    itemList.forEach(item => {
        totalPrice += item.unitPrice * item.quantity
    })
    return totalPrice
}

function formatDetail (itemList, totalPrice) {
    let detailInfo = ''
    detailInfo += '\n***<store earning no money>Receipt ***\n'
    itemList.forEach(item => {
      detailInfo +=  'Name: ' + item.itemName + ', Quantity: ' 
      + item.quantity + ', Unit price: ' + item.unitPrice +' (yuan), Subtotal: ' + (item.quantity * item.unitPrice) + ' (yuan)' + '\n'
    })
    detailInfo += '----------------------\n'
    detailInfo += 'Total: ' + totalPrice + ' (yuan)'
    detailInfo += '\n' + '**********************'
    return detailInfo
}
// const barcodes = [
//     'ITEM000000',
//     'ITEM000000',
//     'ITEM000000',
//     'ITEM000000',
//     'ITEM000000',
//     'ITEM000001',
//     'ITEM000001',
//     'ITEM000004'
// ]
// printReceipt(barcodes)
module.exports = {
    printReceipt
};