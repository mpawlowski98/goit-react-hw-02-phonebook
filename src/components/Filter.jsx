import css from '../App.module.css';

function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default Filter;
