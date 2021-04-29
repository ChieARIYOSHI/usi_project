import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import firebase, {db} from '../firebase';

const UploadMeat = () => {
const [farm, setFarm] =useState()
const [product, setProduct] =useState()
const [gram, setGram] =useState()
const [price, setPrice] =useState()
const [detail, setDetail] =useState()

  function PushData() {
    db.add({ // dbが送信先 送信データはオブジェクトの形
        farm: farm,
        product: product,
        gram: gram,
        price: price,
        detail: detail,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
  return(
    <div>
      <p>牧場名</p>
      <input onChange={(e)=>{
        setFarm(e.target.value)
      }}></input>
      <p>商品名</p>
      <input onChange={(e)=>{
        setProduct(e.target.value)
      }}></input>
      <p>量（グラム）</p>
      <input onChange={(e)=>{
        setGram(e.target.value)
      }}></input>
      <p>価格（円）</p>
      <input onChange={(e)=>{
        setPrice(e.target.value)
      }}></input>
      <p>商品内容</p>
      <input onChange={(e)=>{
        setDetail(e.target.value)
      }}></input>
      <br/>
      <br/>
      <button onClick={()=>{
        PushData()
      }} >
        <Link to="/done">
          出　品
        </Link>
      </button>
    </div>
  );
};
export default UploadMeat