import useInputState from "../hooks/useInputState";


const HookForm = () => {
// const [name,handleNameChange] = useInputState('nymr')
const nameState = useInputState('nymr')
console.log(nameState)

const emailState = useInputState('skbnymr11@gmail.com')

const handleSubmit = e => {
    console.log('form data', emailState.value)
    e.preventDefault();
}

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" id="" />
                <hr />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;