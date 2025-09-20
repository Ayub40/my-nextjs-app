import ProductCard from "@/components/Products/ProductCard";
import { IProduct } from "@/type";


const ProductsPage = async () => {
    //  cache: "force-cache",--> dile data cache kore rakhbe,,,  cache: "no-store", ---> request dile data asbe,,,,, 

    const res = await fetch("http://localhost:5000/products", {
        // cache: "force-cache",
        cache: "no-store",
        // next: {
        //     revalidate: 30
        // }
    });
    const products = await res.json();
    // console.log(products);

    return (
        <div className="mx-auto">
            <h1 className='text-center text-4xl mt-3'>All Products</h1>
            <div className="grid grid-cols-3 gap-5 w-[90%] mx-auto">
                {products.map((product: IProduct) => (
                    <ProductCard key={product?.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;