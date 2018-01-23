import React from 'react';

export default class Form extends React.PureComponent {
    render() {
        return (
            <form method="POST" action="/submission">
                <div className="form-group">
                <label>Some label here</label>
                <select className="form-control" name="erin">
                    <option value="example_1">example_1</option>
                    <option value="example_2">example_2</option>
                    <option value="example_3">example_3</option>
                    <option value="example_4">example_4</option>
                </select>
                </div>
                <input type="submit" value="Add" className="btn btn-primary" />
            </form>
        );
    }
}
