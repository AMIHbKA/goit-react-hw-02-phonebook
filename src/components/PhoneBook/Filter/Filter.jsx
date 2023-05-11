import PropTypes from 'prop-types';

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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
