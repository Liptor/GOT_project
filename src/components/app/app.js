import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage'
import CharacterPage from '../characterPage'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
            error: false
        }
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    onRandomChar = () => {
        const { clicked } = this.state;
        !clicked ? this.setState({ clicked: true }) : this.setState({ clicked: false })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
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
                    <CharacterPage />
                </Container>
            </>
        );
    }
};

export default App;