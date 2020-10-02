import React from 'react'
import { Col, Row } from 'reactstrap';
import RandomChar from '../randomChar';

export default class CustomChar extends React.Component {
    state = {
        clicked: false
    }

    onRandomChar = () => {
        const { clicked } = this.state;
        !clicked ? this.setState({ clicked: true }) : this.setState({ clicked: false })
    }

    render() {
        return (
            <>
                {this.state.clicked ? (<Row>
                    <Col lg={{ size: 5, offset: 0 }}>
                        <RandomChar />
                    </Col>
                </Row>) : null}
                <div>
                    <button
                        className='btn btn-primary'
                        onClick={() => this.onRandomChar()} >Toggle</button>
                </div>
            </>
        )
    }
}
