import React from 'react';
import Header from '../../components/Header';
import Form from '../../components/Form';

export default class App extends React.Component {
    render () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <Header header="Test App" />
                        <Form />
                    </div>
                </div>
            </div>
        );
    }
}
