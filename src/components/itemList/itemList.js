import React from 'react';
import { Spinner } from 'reactstrap';
import ErrorMessage from '../errorMessage';
import './itemList.css';

export default class ItemList extends React.Component {
    state = {
        data: null,
        error: false
    }

    componentDidMount() {
        this.props.getData()
            .then((data) => this.setState({
                data
            }))
    }

    renderItems = (arr) => {
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
        const { data, error } = this.state;
        if (!data) {
            return <Spinner />
        }
        if (error) {
            return <ErrorMessage />
        }
        const items = this.renderItems(data);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}