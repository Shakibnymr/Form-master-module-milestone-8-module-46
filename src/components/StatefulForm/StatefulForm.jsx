import { useState } from "react";


const StatefulForm = () => {
const [name,setName] = useState('nymr')
const [email,setEmail] = useState(null);
const [password,setPassword] = useState(null);
const [error,setError]=useState('')

const handleSubmit = e => {
e.preventDefault();
if(password.length < 6){
    setError('Password must be 6 characters or longer')
} else {setError('')}
console.log(email,password)
}

const handleName = e => {
    setName(e.target.value)
}

const handleEmailChange = e => {
    console.log(e.target.value)
    setEmail(e.target.value)
}

const handlePasswordChange = e => {
    setPassword(e.target.value)
}

    return (
        <div>
                <form action="" onSubmit={handleSubmit}>
                <input 
                onChange={handleName}
                value={name}
                type="text" name="name" />
                <br />
                <input 
                onChange={handleEmailChange}
                type="email" name="email" />
                <br />
                <input
                onChange={handlePasswordChange}
                type="password" name="password" id="" required />
                <hr />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;