import React from 'react'
import axios from 'axios';
import {authHeader} from "../helpers/auth-header";

class DetailPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            is_public: ""

        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/post/' + this.props.match.params.id, {
            headers: authHeader()
        }).then(response => {
            console.log(response);
            this.setState({
                title: response.data.title,
                body: response.data.body,
                is_public: response.data.is_public,
            });
        })
            .catch(function (error) {
                console.log(error);
            })
    }


    render() {
        return (
            <div className="section">
                <div className="box">
                    <div className="content">
                        <h2> title: {this.state.title} </h2>
                        <p>body: {this.state.body}</p>
                        <p>public: {this.state.is_public.toString()}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailPost