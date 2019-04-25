import React from 'react';
import { Calculate } from './Calculate';
class Apps extends React.Component {
    state = {
        itemsBottles : 1,
        itemsPacks : 2,
        itemsBoxes : 3,
        piecesBottles : 1,
        piecesPacks : 2,
        piecesBox : 3,
        priceBottles : 1,
        pricePacks : 2,
        priceBoxes: 3
    }
   
    render() {

        const {itemsBottles, itemsPacks,itemsBoxes,piecesBottles,piecesPacks,piecesBox,priceBottles,pricePacks,priceBoxes} = this.state;
        let qty = [itemsBottles, itemsPacks, itemsBoxes];
        let price = [priceBottles,pricePacks,priceBoxes];
        let pieces = [piecesBottles, piecesPacks, piecesBox];
        const result = Calculate(qty, price, pieces);


        return (
            <div className = "ui container">
            <div>
            <h3>Order Quantity</h3>
            <label>Bottles</label>
                <input type = "number"
                value = {this.state.itemsBottles}
                onChange = {(e)=> this.setState({itemsBottles: e.target.value})}/>
                <label>Packs</label>
                <input type = "number"
                value = {this.state.itemsPacks}
                onChange = {(e)=> this.setState({itemsPacks: e.target.value})}/>
                <label>Boxes</label>
                <input type = "number"
                value = {this.state.itemsBoxes}
                onChange = {(e)=> this.setState({itemsBoxes: e.target.value})}/>
            </div>


            <div style = {{marginTop: 20}}>
            <h3>Set Pieces</h3>
            <label>Bottles</label>
                <input type = "number"
                value = {this.state.piecesBottles}
                onChange = {(e)=> this.setState({piecesBottles: e.target.value})}/>
                <label>Packs</label>
                <input type = "number"
                value = {this.state.piecesPacks}
                onChange = {(e)=> this.setState({piecesPacks: e.target.value})}/>
                <label>Boxes</label>
                <input type = "number"
                value = {this.state.piecesBox}
                onChange = {(e)=> this.setState({piecesBox: e.target.value})}/>
            </div>
            <div style = {{marginTop: 20}}>
            <h3>Set Price</h3>
            <label>Bottles</label>
                <input type = "number"
                value = {this.state.priceBottles}
                onChange = {(e)=> this.setState({priceBottles: e.target.value})}/>
                <label>Packs</label>
                <input type = "number"
                value = {this.state.pricePacks}
                onChange = {(e)=> this.setState({pricePacks: e.target.value})}/>
                <label>Boxes</label>
                <input type = "number"
                value = {this.state.priceBoxes}
                onChange = {(e)=> this.setState({priceBottles: e.target.value})}/>
            </div>
            <h1>{result}</h1>
            </div>
        );
    }
}

export default Apps;