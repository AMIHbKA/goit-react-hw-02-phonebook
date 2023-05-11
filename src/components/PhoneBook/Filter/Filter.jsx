export const Filter = ({ value, onFilter }) => {
  return (
    <>
      <input
        name="filter"
        type="text"
        value={value}
        onChange={onFilter}
      ></input>
    </>
  );
};
