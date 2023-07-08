import { Field, ErrorMessage } from 'formik';
import React from 'react';
import TextError from '../Blog/TextError';

function input(props) {
    const { label, name, ...rest } = props
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default input