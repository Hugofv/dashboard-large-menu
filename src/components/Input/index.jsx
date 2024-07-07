import './styles.css';

const Input = ({ label, type = 'text', value, name }) => {
  return (
    <div className='wrapper-input'>
      <input type={type} name={name} value={value} />
      <label>{label}</label>
    </div>
  );
};

export default Input;
