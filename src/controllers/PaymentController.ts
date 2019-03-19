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
            paymentService.paymentSuccess((error , result) => {
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

    public paymentFailure(req: express.Request, res: express.Response, next: express.NextFunction): void {
        try {
            const paymentService = new PaymentService();
            paymentService.paymentFailure((error , result) => {
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
}

export = PaymentController;
