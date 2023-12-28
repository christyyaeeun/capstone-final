import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Page.module.scss';

const InputField = ({ label, type, id, placeholder, value, onChange, required, minLength, maxLength, options }) => (
    <div className='formField'>
        <label className='label' htmlFor={ id }>
            { label }
        </label>
        { type === 'select' ? (
            <select
                id={ id }
                value={ value }
                onChange={ onChange }
                className='input'
                required={ required }
            >
                { options.map(option => (
                    <option key={ option }>{ option }</option>
                )) }
            </select>
        ) : (
            <input
                type={ type }
                id={ id }
                placeholder={ placeholder }
                value={ value }
                onChange={ onChange }
                className='input'
                required={ required }
                minLength={ minLength }
                maxLength={ maxLength }
            />
        ) }
    </div>
);

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])),
};

export default InputField;