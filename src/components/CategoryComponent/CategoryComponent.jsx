import { useState, useEffect } from "react";
import axios from "axios";
import Card from '../Card/Card';
import { Link } from "react-router-dom";

const CategoryComponent = ({
    category='',
    limit=null,
}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
    setProducts([])
        axios(
            limit
            ? `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
            : `https://fakestoreapi.com/products/category/${category}/`
        )
        .then(({data})=> setProducts(data))
    },[category, limit])
    return (
        <div className="container">
            <h2><Link to={`/category/${category}`}>{category}</Link></h2>
            <div className="row">
                {
                    products.map(item =>{
                        return <div className="col-3" key={item.id}>
                                <Card item={item} />
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default CategoryComponent;
