function TextField({ fieldName }) {
  return (
    <>
    <label for={fieldName}>{fieldName}</label>
      <input
        type="text"
        id={fieldName}
        contentEditable
      ></input>
      
    </>
  );
}

export default TextField;
