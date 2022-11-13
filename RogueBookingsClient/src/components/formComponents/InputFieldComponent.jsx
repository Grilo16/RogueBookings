import styled from "styled-components"

const InputStyled = styled.input`
height: 3.9vw;
border-radius: 25vw;
width: 23vw;
border-style: none;
margin-bottom: 1.2vw;
font-family: 'Jua', sans-serif;
font-size: 1.5vw;
text-indent: 2vw;
::placeholder {
    color: grey;
    opacity: 50%;
  };
  box-shadow: 0 0.5vh 0.5vh rgba(0,0,0,0.2);
`


const InputFieldComponent = ({placeholder, setState, state, type}) => {


    const handleUserInput = (e) => {
        setState(e.target.value)
    };

    return (
    <>
        <InputStyled onChange={handleUserInput} type={type? type : "text"} value={state} placeholder={placeholder} />
        <br />
    </>
    )
};

export default InputFieldComponent;