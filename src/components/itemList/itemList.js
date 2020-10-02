import React, { Component } from 'react';
import './itemList.css';
import withData from '../HOC/withData';
import GotService from '../../services/gotService';
class ItemList extends Component {
    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item, id) => {
            const label = this.props.renderItem(item);
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {
        const { data } = this.props;
        const items = this.renderItems(data);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

const { getAllCharacters, getAllBooks, getAllHouses } = new GotService();

export default withData(ItemList, getAllBooks);