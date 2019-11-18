import React from 'react'
import axios from 'axios';
import {authHeader} from "../helpers/auth-header";
import {toast} from "react-toastify";

class DetailPostPublic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            is_public: "",
            author: "",
            created_at: ""

        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/post/' + this.props.match.params.id + '/public_detail', {
            headers: authHeader()
        }).then(response => {
            this.setState({
                title: response.data.title,
                body: response.data.body,
                is_public: response.data.is_public,
                author: response.data.author,
                created_at: response.data.created_at,
            });
        }).catch(function (error) {
            toast.error(JSON.stringify(error.response.data));
        })
    }


    render() {
        return (
            <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <div className="section">
                        <div className="box">
                            <div className="content">
                                <p className="title is-4">{this.state.title}</p>
                                <p className="subtitle is-6">@{this.state.author} , {this.state.created_at}</p>
                                <p>
                                    {this.state.body}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default DetailPostPublic