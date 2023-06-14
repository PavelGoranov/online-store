import { useEffect, useState } from "react";



export default function ProductsTable({ userData }) {
    const[data, setData] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/getAllProducts', {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userData");
            setData(data.data);
        });
    }, []);


    

    return (
        <>
            <div className="auth-wrapper">
                <div className="auth-inner" style={{ width: "auto" }}>
                    <h3>Products</h3>

                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Currency
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((i) => {
                                    return (
                                        <tr>
                                            <td>{i.name}</td>
                                            <td>{i.primary_category_id}</td>
                                            <td>{i.price_max}</td>
                                            <td>{i.currency}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}