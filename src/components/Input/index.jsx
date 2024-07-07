import './styles.css';

const Input = ({ label, value, name }) => {
  return (
    <div className='wrapper-input'>
      <input type='text' name={name} value={value} />
      <label>{label}</label>
    </div>
  );
};

export default Input;
