import type { IncomingMessage, ServerResponse } from "node:http";
import { insertProduct, readProduct } from "../service/product.service";
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
        if(!product){
            res.writeHead(404, { "content-type": "application/json" })
            res.end(JSON.stringify({
                message: " product not found",
                data: product,
            }))
        }

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: " product retrived successfully", data: product }))


    } else if (method === "POST" && url === "/products") {
        const products = readProduct()
        const body = await parseBody(req);
        // console.log("body",body);
        const newProduct = {
            id: Date.now(),
            ...body,

        }
        // console.log(newProduct)
        products.push(newProduct);
        insertProduct(products)
        console.log(products);
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            message: " product created successfully",
            data: newProduct,
        }))
    }
    else if (method === "PUT" && id !== null) {
        const body = await parseBody(req)

        const products = readProduct()

        const index = products.findIndex((p: IProduct) => p.id === id)
        // console.log(index)
        if (index < 0) {
            res.writeHead(404, { "content-type": "application/json" })
            res.end(JSON.stringify({
                message: " product not found",
                data: null,
            }))
        }
        products[index] = { id: products[index].id, ...body };

        insertProduct(products);

        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            message: " product Updated",
            data: products[index],
        }))


    } else if (method === "DELETE" && id !== null) {
        const products = readProduct()
        const index = products.findIndex((p: IProduct) => p.id === id)
        if (index < 0) {
            res.writeHead(404, { "content-type": "application/json" })
            res.end(JSON.stringify({
                message: " product not found",
                data: null,
            }))
        }

        // const arr = ["1","2","3","4"]
        // arr.splice(2,1);
        // console.log(arr)

        products.splice(index, 1);
        // console.log(products);
        insertProduct(products);
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            message: " product Deleted",
            data: null,
        }))


    }
}