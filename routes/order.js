const express = require("express");
const { getOrders, updateOrderStatus } = require("../handlers/order-handle");
const router = express.Router()

router.get("", async(req,res)=>{
    const orders = await getOrders();
    res.send(orders);
});


router.post("/:id", async(req,res)=>{
    const id = req.params.id;
    const status = req.body.status;
    await updateOrderStatus(id,status);
    res.send({
        message:"Modifié"
    });   
});
         

module.exports = router;