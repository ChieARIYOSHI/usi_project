import React from 'react';
import { Link } from 'react-router-dom';

import firebase, { db } from '../firebase';

class Shop extends React.Component {
    
    state = {
        list: [],
    }
    
    //データ取得
    getData = async () => {
        const colRef = db
        // .orderBy('createdAt', 'desc')
        .limit(10);
        const snapshots = await colRef.get();
        const docs = snapshots.docs.map(doc => doc.data());
        console.log(docs)
        await this.setState({
            list: docs,
        });
    }
    
    //更新時のcalback
    onCollectionUpdate = (querySnapshot) => {
        //変更の発生源を特定 local:自分, server:他人
        // const source = querySnapshot.metadata.hasPendingWrites ? "local" : "server";
        // if (source === 'local')  this.getData(); //期待した動きをしない
        this.getData();
    }
    
    componentDidMount = async () => {
        //普通に取得
        await this.getData();
        //collectionの更新を監視
        this.unsubscribe = db.onSnapshot(this.onCollectionUpdate);
    }
    
    //監視解除
    componentWillUnmount = () => {
        this.unsubscribe();
    }
    
    render() {
        return (
            <div className="container">
                <h3 className="text-center my-5">商品一覧</h3>
                <table className="table">
                    <tbody>
                        {
                            this.state.list.map(item => (
                                <tr key={item.docId}>
                                    <td className="farm">{item.farm}</td>
                                    <td>{item.product}</td>
                                    <td>{item.gram} グラム</td>
                                    <td>{item.price} 円</td>
                                    <td>{item.detail}</td>
                                    <td><Link to="/bought">購入</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Shop;