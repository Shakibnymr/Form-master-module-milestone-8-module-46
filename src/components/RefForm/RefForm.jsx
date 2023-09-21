import { useEffect, useRef } from "react";


const RefForm = () => {

useEffect(()=>{
    nameRef.current.focus()
},[])

const nameRef = useRef(null)
const emailRef = useRef(null)
const passRef = useRef(null)

const handleSubmit = e => {
    e.preventDefault()
    console.log(nameRef.current.value,emailRef.current.value,passRef.current.value)
}

    return (
        <div>
                  <form action="" onSubmit={handleSubmit}>
                <input
                ref={nameRef}
                type="text" name="name" />
                <br />
                <input
                ref={emailRef} defaultValue={'gmail@.com'}
                type="email" name="email" /> <br />
                <input 
                ref={passRef}
                type="password" name="password" id="" />
                <hr />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;