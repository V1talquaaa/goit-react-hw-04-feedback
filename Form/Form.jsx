import { Component } from "react";
import { nanoid } from "nanoid";
import css from './Form.module.css'

const INITIAL_VALUES = {
    email: "",
    password: "",
    isChecked: false,
    gender: "male",
}

class Form extends Component {
    state ={...INITIAL_VALUES}


    handleInput = ({target}) => {
        this.setState({
            [target.name]: target.value,

        })
    }

    handleSubmit = (e) => {
       e.preventDefault();
        this.createUser({
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender,
        })
        this.reset();

    }

    createUser = (data) => {
        const newUser = {
            ...data,
            id: nanoid(),
        }

        console.log(newUser);
    }

    handleCheck = ({target}) => {
        this.setState({
            isChecked: target.checked,
        })

    }


    handleRadio = (e) => {
        this.setState({
            gender: e.target.value
        })

    }

    reset = () => {
        this.setState({...INITIAL_VALUES})
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}> 
                <label htmlFor="email" >Email</label>
                <input type="text" id="email" name="email" onChange={this.handleInput}/>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" onChange={this.handleInput}/>
                <div className={css.radio}>
                <input type="radio" id="male" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleRadio}/>
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleRadio}/>
                <label htmlFor="female">Female</label>
                </div>
                <div className={css.checkbox}>
                <input type="checkbox" id="checkbox" checked={this.state.isChecked} onChange={this.handleCheck}/>
                <label htmlFor="checkbox">Confirm registration</label>
                </div>
                <button disabled={!this.state.isChecked} type="submit">Send</button>
            </form>
        )
    }
}

export {Form}