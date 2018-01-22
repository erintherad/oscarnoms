import React from 'react';

export default class Form extends React.PureComponent {
    render() {
        return (
            <div className="col-6">
                <form method="POST" action="/">
                    <div className="form-group">
                    <label>Some label here</label>
                    <select className="form-control">
                        <option value="example_1">example_1</option>
                        <option value="example_2">example_2</option>
                        <option value="example_3">example_3</option>
                        <option value="example_4">example_4</option>
                    </select>
                    </div>
                    <input type="submit" value="Add" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}
