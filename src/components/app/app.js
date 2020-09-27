import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage'
import CharacterPage from '../characterPage'
import ItemList from '../itemList';
import GotService from '../../services/gotService';
import CharDetails from '../charDetails';

class App extends React.Component {
    gotService = new GotService();

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
                    <Row>
                        <Col md='6'>
                            <ItemList
                                onItemSelected={this.onCharSelected}
                                getData={this.gotService.getAllBooks}
                                renderItem={(item) => item.name}
                            />
                        </Col>
                        <Col md='6'>
                            <CharDetails onItemSelected={this.onCharSelected} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList
                                onItemSelected={this.onCharSelected}
                                getData={this.gotService.getAllHouses}
                                renderItem={(item) => item.name}
                            />
                        </Col>
                        <Col md='6'>
                            <CharDetails onItemSelected={this.onCharSelected} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

export default App;