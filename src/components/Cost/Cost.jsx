import React, { Component } from 'react';
import './Cost.css';

class Cost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dValue: 0,
            wValue: 0,
            value: 0
        }

        this.calculate = this.calculate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    calculate(event) {
        event.preventDefault();
        const { dValue, wValue } = this.state;
        console.log(dValue, wValue);

        const res = Math.PI * dValue * dValue * wValue / 4;
        this.setState({
            value: res
        });
    }

    handleChange(event) {
        const target = event.target;
        const value = +target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.calculate}>
                    <div className="form-group">
                        <label>D - діаметр гирла джерела викиду</label>
                        <input name="dValue" type="number" onChange={this.handleChange} value={this.state.dValue} />
                    </div>
                    <div className="form-group">
                        <label>w0 - середня швидкість виходу з гирла джерела викиду</label>
                        <input name="wValue" type="number" onChange={this.handleChange} value={this.state.wValue} />
                    </div>
                    <input type="submit" value="Calc" className="submit" />
                </form>
                <div>
                    Result: 
                    {this.state.value}
                </div>
            </div>
        )
    }
}

export { Cost };