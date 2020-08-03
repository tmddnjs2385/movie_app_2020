import React, { Component } from 'react';
import "./Detail.css";
class Detail extends Component {


    componentDidMount() {
        const { location, history } = this.props;
        console.log(location);

        if (location.state === undefined) {
            history.push("/");
        }


    }

    render() {
        const { location } = this.props;
        console.log(location);
        if (location.state) {
            return (
                <div className="detail" >
                    {location.state.summary}
                </div>
            );
        } else {
            return null;
        }
    }
};

export default Detail;