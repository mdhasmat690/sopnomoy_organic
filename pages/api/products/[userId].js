import { productsData } from "../../../productsdata";

export default function handler(req, res) {
  const { userId } = req?.query;
  console.log(userId);
  const user = productsData.find((user) => user.id == parseInt(userId));
  res.status(200).json(user);
}
