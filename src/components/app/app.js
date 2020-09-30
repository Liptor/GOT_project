import React from 'react';
import { Container } from 'reactstrap';
import Header from '../header';
import ErrorMessage from '../errorMessage'
import CharacterPage from '../characterPage'
import GotService from '../../services/gotService';
import HousesPage from '../pages/HousesPage/housesPage';
import BooksPage from '../pages/BooksPage/booksPage'
import CustomChar from '../customeChar';

class App extends React.Component {
    gotService = new GotService();

    constructor(props) {
        super(props)
        this.state = {
            error: false
        }
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
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
                    <CustomChar />
                    <CharacterPage />
                    <BooksPage />
                    <HousesPage />
                </Container>
            </>
        );
    }
};

export default App;