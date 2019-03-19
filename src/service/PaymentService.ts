const payUMoney = require("payumoney_nodejs");

class PaymentService {

    constructor() {
        // Set you MERCHANT_KEY, MERCHANT_SALT_KEY, PAYUMONEY_AUTHORIZATION_HEADER
        // for both Production and Sandox Account
        payUMoney.setProdKeys("MERCHANT_KEY", "MERCHANT_SALT", "PAYUMONEY_AUTHORIZATION_HEADER");
        payUMoney.setSandboxKeys("MERCHANT_KEY", "MERCHANT_SALT", "PAYUMONEY_AUTHORIZATION_HEADER");
        payUMoney.isProdMode(false);
    }

    public makePayment(paymentBody: any, callback: (error: any, response: any) => void) {
        payUMoney.pay(paymentBody, (error: any, response: any) => {
            if (error) {
                console.error("makePayment error : " + error);
                callback(error, null);
            } else {
                console.log("Payment Redirection link " + response);
                callback(error, response);
            }
        });
    }

    public paymentSuccess(callback: (error: any, response: any) => void) {
        console.log("Payment Success");
        // You can Update your user payment Success status here
        callback(null, {status : "Payment Success"});
    }

    public paymentFailure(callback: (error: any, response: any) => void) {
        console.log("Payment Failure");
        // You can Update your user payment Failure status here
        callback(null, {status : "Payment Failed"});
    }
}

Object.seal(PaymentService);
export = PaymentService;
