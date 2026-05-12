import type { IncomingMessage, ServerResponse } from "node:http";
import { readProduct } from "../service/product.service";
import type { IProduct } from "../types/product.type";
import { parseBody } from "../utility/parseBody";

export const productController = async (req: IncomingMessage, res: ServerResponse) => {

    // console.log("Request", req); 
    const url = req.url
    const method = req.method

    const urlParts = url?.split("/");
    // console.log(urlParts);
    const id = urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;

    // console.log("this is the acutal  id : ", id)

    if (url === "/products" && method === "GET") {

        const products = readProduct()

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: "This is product Route", data: readProduct() }))

    } else if (method === "GET" && id !== null) {
        const products = readProduct();
        const product = products.find((p: IProduct) => p.id === id);
        //  console.log(product)

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: " product retrived successfully", data: product }))


    } else if (method === "POST" && url === "/products") {
        const body = await parseBody(req);
        // console.log("body",body);
        const newProduct = {
            id : Date.now(),
            ...body,
        }
        console.log(newProduct)
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            message: " product created successfully",
            // data: product
        }))
    }
}