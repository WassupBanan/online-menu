let orders = [];

export default function handler(req, res) {

  if (req.method === "POST") {

    const order = req.body;

    orders.push(order);

    return res.status(200).json({
      success: true,
      message: "Order received"
    });
  }

  if (req.method === "GET") {

    return res.status(200).json(orders);
  }
}
