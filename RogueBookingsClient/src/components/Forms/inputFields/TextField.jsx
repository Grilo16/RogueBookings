function TextField({ fieldName }) {
  return (
    <>
    <label htmlFor={fieldName}>{fieldName}</label>
      <input
        type="text"
        id={fieldName}
        contentEditable
        kakakakakaka
      ></input>
      
    </>
  );
}

export default TextField;
