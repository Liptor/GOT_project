import React from 'react';
import style from './app.module.css'
import { Container } from 'reactstrap';
import Header from '../header';
import ErrorMessage from '../errorMessage'
import CharacterPage from '../characterPage'
import GotService from '../../services/gotService';
import HousesPage from '../pages/HousesPage/housesPage';
import BooksPage from '../pages/BooksPage/booksPage'
import CustomChar from '../customeChar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BooksItem from '../pages/BooksItem/booksItem';
import HousesItem from '../pages/HouseItem/housesItem';

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
            <Router>
                <div className='app'>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <CustomChar />
                        <Route path='/' exact component={() => <h1 className={style.text}>Welcome to GOT DB</h1>} />
                        <Route path='/character' component={CharacterPage} />
                        <Route path='/houses' exact component={HousesPage} />
                        <Route path='/houses/:id' render={
                            ({ match }) => {
                                const { id } = match.params;
                                return <HousesItem houseId={id} />
                            }
                        } />
                        <Route path='/books' exact component={BooksPage} />
                        <Route path='/books/:id' render={
                            ({ match }) => {
                                const { id } = match.params;
                                return <BooksItem bookId={id} />
                            }
                        } />
                    </Container>
                </div>
            </Router >
        );
    }
};

export default App;