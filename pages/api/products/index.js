import { productsData } from "../../../productsdata";
export default function handler(req, res) {
  if (req.method == "GET") {
    res.status(200).json(productsData);
  } else if (req.method == "POST") {
    const user = req.body.user;
    const newUser = {
      id: Date.now(),
      name: user,
    };

    productsData.push(newUser);
    res.status(201).json(newUser);
  }
}
