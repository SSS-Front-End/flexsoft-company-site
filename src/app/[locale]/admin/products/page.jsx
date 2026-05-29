"use client";

import { useEffect, useState } from "react";

export default function AdminProductsPage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {

        const response = await fetch("/api/products");

        const data = await response.json();

        setProducts(data);
    }

    return (
        <div className="p-10">

            <h1 className="text-4xl font-bold mb-10">
                Products Admin
            </h1>

            <div className="space-y-4">

                {products.map((product) => (

                    <div
                        key={product.id}
                        className="border p-5 rounded-xl"
                    >
                        <h2 className="text-2xl font-semibold">
                            {product.title_ru}
                        </h2>

                        <p className="mt-2">
                            {product.description_ru}
                        </p>
                    </div>

                ))}

            </div>

        </div>
    );
}