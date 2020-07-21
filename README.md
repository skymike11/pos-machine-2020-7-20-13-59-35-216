# PDCA

|      | 统计每个item有多少                                           |
| ---- | ------------------------------------------------------------ |
| P    | 60min                                                        |
| D    | 90min                                                        |
| C    | 1. 期初在代码一些位置写的不够严谨，有一点bug，在调试程序上花费了一些时间             2. 在画图的时候和老师的做法换了一种思路，重新调整了一下流程结构 |
| A    | 继续熟悉一下vscode的debug界面                                |

# 任务分解
1. 将database的数据进行初始化整理，以key-value的形式保存barcode-object
2. 通过barcodes在database数据中找到对应的商品，并以barcode作为key，商品的数量作为value，若遇到相同商品，将其value 增加。
   - 输入barcodes: []
   - 输入: Map <barcode, number> 
3. 将数据进行包装
   - 输入 Map<barcode, number>
   - 输出 itemList [ {itemName:string, quantity: int, unitPrice: float}]

4. 计算总价
   - 输入Receipt [ {itemName:string, quantity: int, unitPrice: float}]
   - 输出totalPrice : float
5. 格式化数据
   - 输入：Receipt [ {itemName:string, quantity: int, unitPrice: float}]
   - totalPrice : float
   - 输出：receipt: String
6. 输出数据
   - 输入：string
   - 输出：打印到了控制台上
# 
# Requirement

A cash register (POS) system is used in the store for settlement of the store. This cashier will settle and print the receipt (Receipt) according to the item(Item) in the customer's shopping cart (Cart) at the time of settlement.

We need to implement a function called printReceipt, which can input the data of the specified format as a parameter and then output the text of the receipt in the browser console.

This time, the input will be an array of barcodes (string). For example:
```javascript
[
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000001',
  'ITEM000001',
  'ITEM000004'
]
```

Then the output should be 
```
***<store earning no money>Receipt ***
Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
----------------------
Total: 23 (yuan)
**********************
```

Suppose that our database is as follows:
```javascript
[
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
```

# Principal

1. Please draw context diagram.
2. Please declare all the methods according to your diagram.
3. Please implement the function according to the context diagram
4. Please repeat step 3 until all functions are implemented.
