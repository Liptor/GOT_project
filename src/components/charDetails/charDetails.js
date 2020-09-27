import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import gotService from '../../services/gotService'
import ErrorMessage from '../errorMessage';
import './charDetails.css';

const Field = ({ char, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{char[field]}</span>
        </li>
    )
}

export { Field }

export default class CharDetails extends Component {
    gotService = new gotService();

    state = {
        char: null,
        isFetching: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.setState({ isFetching: true })
            this.updateChar();
        }
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    updateChar = () => {
        const { charId } = this.props;
        if (!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({ char, isFetching: false });
            })
    }
    // this.foo.bar = 0;

    render() {
        const { char, isFetching, error } = this.state;
        if (!char) {
            return <span className='select-error'>Please select a character</span>
        }

        if (isFetching) {
            return <Spinner />
        }

        if (error) {
            return <ErrorMessage />
        }

        const { name } = char;

        return (
            <div className="char-details rounded" >
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { char })
                        })
                    }
                </ul>
            </div>
        );
    }
}