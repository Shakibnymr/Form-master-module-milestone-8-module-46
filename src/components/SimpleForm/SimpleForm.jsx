

const SimpleForm = () => {
    const handleSubmit = e => {
        console.log(e.target.name.value);
        console.log(e.target.email.value)
        e.preventDefault();
        console.log('submitted')
    }
    return (
        <div >
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <hr />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;