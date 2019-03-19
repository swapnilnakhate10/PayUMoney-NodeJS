import * as express from "express";
import PaymentService = require("../service/PaymentService");

class PaymentController {
    private paymentService: PaymentService;
    constructor() {
        this.paymentService = new PaymentService();
    }

    public createPayment(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const paymentBody = req.body;
            const paymentService = new PaymentService();
            paymentService.makePayment(paymentBody, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(result);
                }
            });
        } catch (e) {
            console.log("Exception in creating User Data . ", e);
        }
    }

    public paymentSuccess(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const paymentService = new PaymentService();
            const paymentSuccessBody = req.body;
            paymentService.paymentSuccess(paymentSuccessBody, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    // Redirect to payment success page
                    const redirectUrl = "http://localhost:4200/payment/success";
                    res.redirect(redirectUrl);
                }
            });
        } catch (e) {
            console.log("Exception in creating User Data . ", e);
        }
    }

    public paymentFailure(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const paymentService = new PaymentService();
            const paymentFailureBody = req.body;
            paymentService.paymentFailure(paymentFailureBody, (error , result) => {
                if (error) {
                    res.send(error);
                } else {
                    // Redirect to payment failure page
                    const redirectUrl = "http://localhost:4200/payment/failure";
                    res.redirect(redirectUrl);
                }
            });
        } catch (e) {
            console.log("Exception in creating User Data . ", e);
        }
    }
}

export = PaymentController;
