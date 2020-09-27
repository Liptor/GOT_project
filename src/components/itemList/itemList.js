import React, { Component } from 'react';
import './itemList.css';
import { Spinner } from 'reactstrap';
import ErrorMessage from '../errorMessage';

export default class ItemList extends Component {
    state = {
        itemList: null,
        error: false
    }

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then((itemList) => this.setState({
                itemList
            }))
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.renderItem(item);
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(41 + id)}>
                    {label}
                </li>
            )
        })
    }

    render() {
        const { itemList, error } = this.state;
        if (!itemList) {
            return <Spinner />
        }

        if (error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}