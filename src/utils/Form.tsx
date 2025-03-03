import { FC } from 'react';

interface FormProps {
  fields: { label: string; placeholder: string }[];
  submitText: string;
}

const Form: FC<FormProps> = ({ fields, submitText }) => (
  <form>
    {fields.map((field, index) => (
      <div key={index} style={{ marginBottom: '10px' }}>
        <label>{field.label}</label>
        <br />
        <input
          type="text"
          placeholder={field.placeholder}
          style={{ width: '320px' }}
        />
        <br />
      </div>
    ))}
    <button type="submit">{submitText}</button>
  </form>
);

export default Form;
