import React from 'react'
import { Spinner } from 'reactstrap';
import ErrorMessage from '../errorMessage';

const withData = (View, getData) => {
    return class extends React.Component {
        state = {
            data: null,
            error: false
        }

        componentDidMount() {
            getData()
                .then((data) => this.setState({
                    data
                }))
        }

        render() {
            const { data, error } = this.state;
            if (!data) {
                return <Spinner />
            }

            if (error) {
                return <ErrorMessage />
            }

            return <View {...this.props} data={data} />
        }
    }
}

export default withData;