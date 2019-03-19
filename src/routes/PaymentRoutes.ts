import express = require("express");
import PaymentController = require("../controllers/PaymentController");
const router = express.Router();

class PaymentRoutes {

    private paymentController: PaymentController;

    constructor() {
        this.paymentController = new PaymentController();
    }

    get routes(): express.Router {
        router.post("/pay", this.paymentController.createPayment);
        router.post("/success", this.paymentController.paymentSuccess);
        router.post("/failure", this.paymentController.paymentFailure);
        return router;
    }
}

Object.seal(PaymentRoutes);
export = PaymentRoutes ;
