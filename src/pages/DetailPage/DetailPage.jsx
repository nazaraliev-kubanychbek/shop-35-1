import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './detail.scss';
import { cartStore } from "../../store/store";

const DetailPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const addCart = cartStore(s => s.addCart);

    useEffect(()=>{
        
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(({data})=> {
            setData(data)
        })
    },[params])
    return (
        <div className="detail">
           <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={data.image} alt="" className="detail-img" />
                </div>
                <div className="col-6">
                    <h2 className="detail-title">{data.title}</h2>
                    <p className="detail-text">{data.description}</p>
                    <p className="detail-text">{data.category}</p>
                    <div className="detail-block">
                        <p>${data.price}</p>
                        <div>
                            <button className="detail-btn" onClick={()=>{
                                addCart(data)
                            }}>buy</button>
                            <button className="detail-btn" onClick={()=>{
                                navigate(-1)
                            }}>go back</button>
                        </div>
                    </div>
                </div>
            </div>
           </div>
            
        </div>
    );
}

export default DetailPage;
