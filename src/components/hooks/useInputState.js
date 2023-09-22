const { useState } = require("react")

const useInputState = (defaultValue = null) => {
    const [value,setValue] = useState(defaultValue);

    const handleChange = val => {
        setValue(val);

    }

    return[value, value]
}

export default useInputState