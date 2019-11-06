import React from 'react'
import axios from 'axios';

class EditPost extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onChangePublic = this.onChangePublic.bind(this);


        this.state = {
            title: '',
            body: '',
            is_public: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/post/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
                this.setState({
                    title: response.data.title,
                    body: response.data.body,
                    is_public: response.data.is_public
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }


    onChangePublic(e) {
        const {is_public} = e.target;
        this.setState({
            is_public: !this.state.is_public
        });
    }

    onChangeBody(e) {
        this.setState({
            body: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            title: this.state.title,
            body: this.state.body,
            is_public: this.state.is_public
        };
        axios.put('http://localhost:8000/post/' + this.props.match.params.id + '/', obj)
            .then(res => console.log(res.data));

        this.props.history.push('/mypost');
    }

    render() {
        return (
            <div className="section columns">
                <div className="column is-4 box">
                    <form onSubmit={this.onSubmit}>
                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    value={this.state.title}
                                    onChange={this.onChangeTitle}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Body</label>
                            <textarea className="textarea" value={this.state.body} onChange={this.onChangeBody}/>
                        </div>

                        <label className="checkbox">
                            <input type="checkbox" value={this.state.is_public} onChange={this.onChangePublic}/>
                            Public (true if checked)
                        </label>

                        <div className="control">
                            <button className="button is-primary">Submit</button>
                        </div>

                    </form>

                </div>
            </div>
        )
    }
}

export default EditPost