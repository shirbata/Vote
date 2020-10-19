import React from 'react';
import './style.css';
class Language extends React.Component {
    state = { Amount: 0 };

    handleClick = () => {
        this.setState({ Amount: this.state.Amount + 1 });
    };
    render(props) {
        return (
            <div className="main-div">
                <div className="rectangle">
                    <button className="button" onClick={this.handleClick}>
                        Click Here
                    </button>
                    <div className="Language-type">{this.props.language}</div>
                    <div className="amount">{this.state.Amount}</div>
                </div>
            </div>
        );
    }
}
export default Language;
