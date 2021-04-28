import React from 'react';
import { Link } from 'react-router-dom';

const Bought = () => {
  return (
    <div>
      <p>購入ありがとうございました！</p>
      <Link to="/sellmeat">一覧画面へ</Link>
    </div>
  )};

export default Bought