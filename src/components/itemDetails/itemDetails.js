import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import ErrorMessage from '../errorMessage';
import './itemDetails.css';

const Field = ({ item, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export { Field }

export default class ItemDetails extends Component {
    state = {
        item: null,
        isFetching: true,
        error: false
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.setState({ isFetching: true })
            this.updateItem();
        }
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    updateItem = () => {
        const { itemId, getData } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({ item, isFetching: false });
            })
    }
    // this.foo.bar = 0;

    render() {
        const { item, isFetching, error } = this.state;

        if (!item) {
            return <span className='select-error'>Please select a itemacter</span>
        }

        if (isFetching) {
            return <Spinner />
        }

        if (error) {
            return <ErrorMessage />
        }

        const { name } = item;

        return (
            <div className="char-details rounded" >
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item })
                        })
                    }
                </ul>
            </div>
        );
    }
}