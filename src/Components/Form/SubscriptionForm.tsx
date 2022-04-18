import React, { useState } from 'react';

import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

import { ButtonType } from '../../utils/types';
import Button from '../Button/Button';

const FormWrapper = styled.div`
  width: auto;
  margin: auto 0;
`;
const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  .form-row {
    display: flex;
    flex-flow: row wrap;
    width: 100%;

    &.button-container {
      justify-content: flex-end;
      @media only screen and (max-width: 768px) {
        justify-content: center;
      }
    }
  }
`;
const Input = styled.input`
  background-color: transparent;
  border: 1px solid #c2c2c2;
  margin: 10px 0;
  color: #000;
  font-size: 14px;
  padding: 13px 33px;
  transition: 0.2s border-color;
  margin-right: -1px;
  &:focus {
    border-color: #707070;
  }
`;

const SubscriptionForm = () => {
  const [buttonFocus, setButtonFocus] = useState(false);
  const { t } = useTranslation('common');
  return (
    <FormWrapper>
      <Form>
        <div className="form-row button-container">
          <Input
            type="email"
            name="your-email"
            placeholder="Email*"
            required
            onFocus={() => setButtonFocus(true)}
            onBlur={() => setButtonFocus(false)}
          />
          <Button
            className={buttonFocus ? 'hover' : ''}
            buttonType={ButtonType.Light}
            style={{
              textTransform: 'uppercase',
              borderRadius: 0,
              borderColor: '#c2c2c2',
            }}
          >
            {t('section-footer-form-send')}
          </Button>
        </div>
      </Form>
    </FormWrapper>
  );
};

export default SubscriptionForm;
