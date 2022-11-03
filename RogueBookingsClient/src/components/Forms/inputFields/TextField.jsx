function TextField({ fieldName }) {
  return (
    <>
    <label htmlFor={fieldName}>{fieldName}</label>
      <input
        type="text"
        id={fieldName}
        contentEditable
        hoooaahahaha
      ></input>
      
    </>
  );
}

export default TextField;
