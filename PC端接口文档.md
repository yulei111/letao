# 商城PC端管理系统接口文档

##员工模块
### employee-login

+ 接口名称
  登录接口
+ 接口地址
   /employee/employeeLogin
+ 请求方式
    POST
+ 参数说明
| 参数名称     | 是否必须 | 说明   |
| -------- | ---- | ---- |
| username | 是    | 用户名  |
| password | 是    | 用户密码 |
+ 示例
```javascript
{"username":"root","password","123456"}
```
+ 返回说明
| 参数      | 说明   |
| ------- | ---- |
| success | 注册状态 |
| error   | 操作失败 |
+ 示例
```javascript
//success
{"success":true}
//error 1000 用户名错误  1001 密码错误
```

### employee-logout
+ 接口名称
  登出接口
+ 接口地址
  /employee/employeeLogout
+ 请求方式
  GET
+ 参数说明
  无
+ 返回说明
| 参数      | 说明   |
| ------- | ---- |
| success | 注册状态 |
| error   | 操作失败 |
+ 示例
```javascript
//success
{"success":true}
```
 ### check-root-login
+ 接口名称
  判断管理员登录
+ 接口地址
   /employee/checkRootLogin
+ 请求方式
    GET
+ 参数说明
+ 返回说明
| 参数      | 说明   |
| ------- | ---- |
| success | 注册状态 |
| error   | 操作失败 |
+ 示例
```javascript
//success
{"success":true}
//error 
{ "error": 400, "message": "未登录！" }
```
##产品模块    
### add-product
+ 接口名称
  产品新增 （需要登录）
+ 接口地址
  /product/addProduct
+ 请求方式
  POST  
+ 参数说明
| 参数名称     | 是否必须 | 说明    |
| -------- | ---- | ----- |
| proName  | 是    | 产品名称  |
| oldPrice | 是    | 老价格   |
| price    | 是    | 价格    |
| proDesc  | 是    | 产品描述  |
| size     | 是    | 产品尺寸  |
| statu    | 是    | 产品上下架 |
| num      | 是    | 用户库存  |
| brandId  | 是    | 归属品牌  |
|          |      |       |
除了上述的参数列表外，还需要需要在参数的后面拼接上图片的名称和地址

```javascript
&picName1="1.jpg"&picAddr1="images/1.jpg"
&picName2="2.jpg"&picAddr2="images/2.jpg"
&picName3="3.jpg"&picAddr3="images/3.jpg"
```

完整版参数：

```javascript
brandId=9&proName=11&proDesc=22&num=33&size=44-55&oldPrice=55&price=66&statu=1&brandLogo=&picName1=d6509a60-d0c9-11e7-8835-a11e94d39747.jpg&picAddr1=/upload/product/d6509a60-d0c9-11e7-8835-a11e94d39747.jpg&picName2=d6509a61-d0c9-11e7-8835-a11e94d39747.jpg&picAddr2=/upload/product/d6509a61-d0c9-11e7-8835-a11e94d39747.jpg&picName3=d6509a62-d0c9-11e7-8835-a11e94d39747.jpg&picAddr3=/upload/product/d6509a62-d0c9-11e7-8835-a11e94d39747.jpg
```

+ 返回说明
| 参数      | 说明   |
| ------- | ---- |
| success | 注册状态 |
| error   | 操作失败 |
+ 示例
```javascript
//success
{"success":true}
```
### add-product-pic
+ 接口名称
  上传图片 （需要登录）
+ 接口地址
  /product/addProductPic
+ 请求方式
  POST
+ 参数说明

  | 参数名称 | 是否必须 | 说明          |
  | ---- | ---- | ----------- |
  | pic1 | 是    | 图片上传的name属性 |
+ 返回说明
| 参数      | 说明   |
| ------- | ---- |
| success | 注册状态 |
| error   | 操作失败 |
+ 示例
```javascript
//success
[{"picName":"24-1.png","picAddr":"product/24-1.png"},{"picName":"24-1.png","picAddr":"product/24-1.png"}]
```
### query-product-detail-list
+ 接口名称
  产品列表查询 （需要登录）
+ 接口地址
  /product/queryProductDetailList
+ 请求方式
  GET
+ 参数说明
| 参数名称     | 是否必须 | 说明   |
| -------- | ---- | ---- |
| page     | 是    | 页数   |
| pageSize | 是    | 每页条数 |

+ 返回说明
| 参数      | 说明   |
| ------- | ---- |
| success | 注册状态 |
| error   | 操作失败 |
+ 示例
```javascript
//success
[{
    "id": 1,
    "proName": '羽绒服',
    "oldPrice": 998,
    "price": 600,
    "proDesc": "质量好",
    "size": '170-195',
    "statu": 1,
    "updateTime": 2012-12-01T04:05:23.000Z,
    "num": 1,
    "brandId": 1 },
   {
    "id": 2,
    "proName": '羽绒服',
    "oldPrice": 998,
    "price": 599,
    "proDesc": '/样子新',
    "size": '170-195',
    "statu": 1,
    "updateTime": 2012-12-01T04:05:23.000Z,
    "num": 2,
    "brandId": 1 } ]
```
##分类模块
### add-top-category
+ 接口名称
  添加1级分类 （需要登录）
+ 接口地址
  /category/addTopCategory
+ 请求方式
  POST
+ 参数说明
| 参数名称         | 是否必须 | 说明   |
| ------------ | ---- | ---- |
| categoryName | 是    | 分类名称 |
+ 返回说明
| 参数      | 说明   |
| ------- | ---- |
| success | 注册状态 |
| error   | 操作失败 |
+ 示例
```javascript
//success
{"success":true}
```
### query-top-category-paging
+ 接口名称
  查询1级分类列表 （需要登录）
+ 接口地址
  /category/queryTopCategoryPaging
+ 请求方式
  GET
+ 参数说明
| 参数名称     | 是否必须 | 说明   |
| -------- | ---- | ---- |
| page     | 是    | 页数   |
| pageSize | 是    | 每页条数 |

+ 返回说明
| 参数      | 说明   |
| ------- | ---- |
| success | 注册状态 |
| error   | 操作失败 |
+ 示例
```javascript
[
  {
    "id": 1,
    "categoryName": "女装",
    "isDelete": 1
  },
  {
    "id": 2,
    "categoryName": "男装",
    "isDelete": 1
  },
  {
    "id": 3,
    "categoryName": "家电",
    "isDelete": 1
  },
  {
    "id": 4,
    "categoryName": "家具",
    "isDelete": 1
  },
  {
    "id": 5,
    "categoryName": "箱包",
    "isDelete": 1
  },
  {
    "id": 6,
    "categoryName": "珠宝",
    "isDelete": 1
  }
]
```
### add-second-category
+ 接口名称
  添加二级分类 （需要登录）
+ 接口地址
  /category/addSecondCategory
+ 请求方式
  POST 
+ 参数说明
| 参数名称       | 是否必须 | 说明         |
| ---------- | ---- | ---------- |
| brandName  | 是    | 品牌名称       |
| categoryId | 是    | 所属分类id     |
| brandLogo  | 是    | 品牌logo图片地址 |
| hot        | 是    | 火热的品牌      |
+ 返回说明
| 参数      | 说明   |
| ------- | ---- |
| success | 注册状态 |
| error   | 操作失败 |
+ 示例
```javascript
//success
{"success":true}
```
### add-second-category-pic
+ 接口名称
  上传品牌图片 （需要登录）
+ 接口地址
  /category/addSecondCategoryPic
+ 请求方式
  POST
+ 参数说明

  | 参数名称 | 是否必须 | 说明        |
  | ---- | ---- | --------- |
  | pic1 | 是    | 图片上传的name |
+ 返回说明
| 参数      | 说明   |
| ------- | ---- |
| success | 注册状态 |
| error   | 操作失败 |
+ 示例
```javascript
//success
{"picAddr":"product/24-1.png"}
```
### query-second-category-paging
+ 接口名称
  查询2级分类 （需要登录）
+ 接口地址
  /category/querySecondCategoryPaging
+ 请求方式
  GET
+ 参数说明
| 参数名称     | 是否必须 | 说明   |
| -------- | ---- | ---- |
| page     | 是    | 页数   |
| pageSize | 是    | 每页条数 |

+ 返回说明
| 参数      | 说明   |
| ------- | ---- |
| success | 注册状态 |
| error   | 操作失败 |
+ 示例
```javascript
{
  page: 1,
  size: 5,
  data: 
   [  {
       id: 1,
       brandName: '耐克',
       categoryId: 1,
       brandLogo: '/pic/1.jpg',
       isDelete: 1,
       hot: 1 },
      {
       id: 2,
       brandName: '阿迪',
       categoryId: 1,
       brandLogo: '/pic/2.jpg',
       isDelete: 1,
       hot: 1 },
      {
       id: 3,
       brandName: '新百伦',
       categoryId: 1,
       brandLogo: '/pic/3.jpg',
       isDelete: 1,
       hot: 1 },
      {
       id: 4,
       brandName: '哥伦比亚',
       categoryId: 1,
       brandLogo: '/pic/4.jpg',
       isDelete: 1,
       hot: 0 },
      {
       id: 5,
       brandName: '匡威',
       categoryId: 1,
       brandLogo: '/pic/5.jpg',
       isDelete: 1,
       hot: 1 } ],
  count: 9 }
```
##用户模块
### query-user
+ 接口名称
  查询用户 （需要登录）
+ 接口地址
  /user/queryUser
+ 请求方式
  GET
+ 参数说明
| 参数名称     | 是否必须 | 说明   |
| -------- | ---- | ---- |
| page     | 是    | 页码   |
| pageSize | 是    | 每页条数 |
+ 返回说明
| 参数      | 说明   |
| ------- | ---- |
| success | 注册状态 |
| error   | 操作失败 |
+ 示例
```javascript
//success   1.表示用户是正常  0表示用户是禁用
{
  page: 1,
  size: 5,
  data: 
   [  {
       id: 1,
       username: 'klt',
       password: '456',
       mobile: '13902060052',
       isDelete: 1 },
      {
       id: 2,
       username: 'zhoushugang',
       password: '4QrcOUm6Wau+VuBX8g+IPg==',
       mobile: '15102324243',
       isDelete: 1 },
      {
       id: 3,
       username: 'zhoushugang12',
       password: '4QrcOUm6Wau+VuBX8g+IPg==',
       mobile: '15102334243',
       isDelete: 1 } ],
  count: 3 }
```
### update-user
+ 接口名称
  产品修改 （需要登录）
+ 接口地址
  /user/updateUser
+ 请求方式
  POST
+ 参数说明
| 参数名称     | 是否必须 | 说明   |
| -------- | ---- | ---- |
| id       | 是    | 用户id |
| isDelete | 是    | 是否启停 |
+ 返回说明
| 参数      | 说明   |
| ------- | ---- |
| success | 注册状态 |
| error   | 操作失败 |
+ 示例
```javascript
//success
{"success":true}
```
