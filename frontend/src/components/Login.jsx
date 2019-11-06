import React from 'react'
class Login extends React.Component {
   render() {
        return (
            <div className="section columns">
                <div className="column is-half is-offset-one-quarter box">
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="email"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="password"/>
                        </div>
                    </div>
                    <div className="control">
                        <button className="button is-primary">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login