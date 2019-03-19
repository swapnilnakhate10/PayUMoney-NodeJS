# PayUMoney Integration with NodeJS

Basic Starter Project for NodeJS with Typescript, Express, MongoDB with PayUMoney Integration

## Create Payment Request in Postman

```python
API : http://localhost:8080/api/payment/pay
```
```python
Type : POST
```

```python
Request Body :

{
    "firstname" : "Swapnil",
    "lastname" : "Nakhate",
    "email" : "swapnil@yopmail.com",
    "phone" : 9090909090,
    "amount" : 200,
    "productinfo" : "Just Test payment",
    "txnid" : "ABUCTGS56",
    "surl" : "http://localhost:8080/api/payment/success",
    "furl" : "http://localhost:8080/api/payment/failure"
  }
```

```python
Reponse :

https://www.payumoney.com/sandbox/citruspage/#/view/8AD609631052A5CC161C837C033EA983
```
