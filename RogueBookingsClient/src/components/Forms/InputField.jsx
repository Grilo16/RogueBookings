
const InputField = ({placeholder, setState, state}) => {


    const handleUserInput = (e) => {
        setState(e.target.value)
    };

    return (
    <>
        <input onChange={handleUserInput} type="text" value={state} placeholder={placeholder} />
        <br />
    </>
    )
};

export default InputField;