import path from "node:path";
import fs from "fs";
const filePath = path.join(process.cwd(), './src/database/db.json')


export const readProduct = () => {

    // console.log(process.Cwd())
    // console.log(filePath)
    const products = fs.readFileSync(filePath, "utf-8");
    // console.log(products.toString())
    // console.log(products)
    // console.log(JSON.parse(products))
    return JSON.parse(products);
};

export const insertProduct = (payLoad : any) =>{
    fs.writeFileSync()
}