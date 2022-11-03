function TextField({ fieldName }) {
  return (
    <>
    <label htmlFor={fieldName}>{fieldName}</label>
      <input
        type="text"
        id={fieldName}
        contentEditable
      ></input>
      
    </>
  );
}

export default TextField;
