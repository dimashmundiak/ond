import React, { Component } from 'react';
import './Concentration.css';

class Concentration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aValue: 0,
            mValue: 0,
            fValue: 0,
            msValue: 0,
            nsValue: 0,
            hValue: 0,
            nValue: 0,
            tValue: 0,
            vValue: 0,
            value: 0
        }

        this.calculate = this.calculate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    calculate(event) {
        event.preventDefault();
        const { aValue, mValue, fValue, msValue, nsValue, hValue, nValue, tValue, vValue } = this.state;

        const res = (aValue * mValue * fValue * msValue * nsValue * nValue) / ((hValue ** 2) * ((vValue * tValue) ** (1 / 3)));
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
                        <label>A - коефіцієнт, який залежить від температури атмосфери</label>
                        <input name="aValue" type="number" onChange={this.handleChange} value={this.state.aValue} />
                    </div>
                    <div className="form-group">
                        <label>М (г/с) - маса жкідливої речовини</label>
                        <input name="mValue" type="number" onChange={this.handleChange} value={this.state.mValue} />
                    </div>
                    <div className="form-group">
                        <label>F - безрозмірний коефіцієнт, який враховує швидкість осідання жкідливих речовин</label>
                        <input name="fValue" type="number" onChange={this.handleChange} value={this.state.fValue} />
                    </div>
                    <div className="form-group">
                        <label>m - коефіцієнт, який враховує умови виходу з джерела викиду</label>
                        <input name="msValue" type="number" onChange={this.handleChange} value={this.state.msValue} />
                    </div>
                    <div className="form-group">
                        <label>n - коефіцієнт, який враховує умови виходу з джерела викиду</label>
                        <input name="nsValue" type="number" onChange={this.handleChange} value={this.state.nsValue} />
                    </div>
                    <div className="form-group">
                        <label>H - висота джерела</label>
                        <input name="hValue" type="number" onChange={this.handleChange} value={this.state.hValue} />
                    </div>
                    <div className="form-group">
                        <label>n. - безрозмірний коефіцієнт, який враховує вплив рельєфу</label>
                        <input name="nValue" type="number" onChange={this.handleChange} value={this.state.nValue} />
                    </div>
                    <div className="form-group">
                        <label>T - різність між температурами</label>
                        <input name="tValue" type="number" onChange={this.handleChange} value={this.state.tValue} />
                    </div>
                    <div className="form-group">
                        <label>V</label>
                        <input name="vValue" type="number" onChange={this.handleChange} value={this.state.vValue} />
                    </div>

                    <input type="submit" value="Submit" className="submit" />
                </form>
                <div>
                    Result:
                    {this.state.value}
                </div>
            </div>
        )
    }
}

export { Concentration };