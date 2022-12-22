import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../model/Product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { productSlug } = req.query;
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  const products: Array<Product> = JSON.parse(fileContents);
  const foundProduct: Product | undefined = products.find(
    (product): boolean => product.slug === productSlug
  );

  if (foundProduct === undefined) {
    res.status(404);
  } else {
    res.status(200).json(foundProduct);
  }
}
