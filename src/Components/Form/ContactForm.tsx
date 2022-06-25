/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';

import { useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import styled, { css } from 'styled-components';
import * as yup from 'yup';

import { ButtonType } from '../../utils/types';
import Button from '../Button/Button';
import SpinnerLoader from '../Loaders/SpinnerLoader';
import Column from '../Section/Column';

const FormWrapper = styled.div`
  position: relative;
  width: auto;
  height: 100%;
  @media only screen and (max-width: 576px) {
    width: 100%;
    height: auto;
    min-height: 8rem;
  }
`;
const success = css`
  color: #270;
  background-color: #dff2bf;
`;
const failed = css`
  color: #d8000c;
  background-color: #ffbaba;
`;
const FormMessage = styled.div<{ success?: boolean }>`
  text-align: center;
  padding: 10px;
  border-radius: 3px 3px 3px 3px;
  margin: auto;
  width: 100%;
  max-width: 200px;
  ${(props) => (props.success ? success : failed)}
`;
const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  .form-row {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    & > div {
      flex-basis: 50%;
      @media only screen and (max-width: 576px) {
        flex-basis: 100%;
      }
    }

    > div:nth-child(2) {
      @media only screen and (min-width: 576px) {
        padding-left: 5px;
      }
    }
    &.button-container {
      justify-content: flex-end;
      @media only screen and (max-width: 768px) {
        justify-content: center;
      }
    }
  }

  input,
  textarea {
    background-color: #fff;
    border: 1px solid #c2c2c2;
    border-radius: 2px;
    color: #000;
    font-size: ${(props) => props.theme.normalFontSize};
    padding: 13px 33px;
    transition: 0.2s border-color;
    &:focus {
      border-color: ${(props) => props.theme.firstColor};
    }
  }
`;
const Input = styled.input`
  width: 100%;
  @media only screen and (max-width: 576px) {
    margin-bottom: 10px;
  }
`;
const TextArea = styled.textarea`
  min-height: 150px;
  width: 100%;
  height: 100%;
`;

const ContactForm = () => {
  const { t } = useTranslation('common');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [failedMessage, setFailedMessage] = useState<string>('');

  const formik = useFormik({
    validateOnBlur: true,
    enableReinitialize: true,
    initialValues: {
      email: '',
      name: '',
      subject: '',
      message: '',
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const data = {
        email: values.email,
        name: values.name,
        subject: values.subject,
        message: values.message,
      };
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => {
        res.json().then((ress) => console.log('ress', ress));
        setSubmitting(false);
        if (res.status === 200) {
          setSuccessMessage(t('section-footer-form-success'));
        } else {
          setFailedMessage(t('form-failed'));
        }
        resetForm();
      });
    },
    validationSchema: yup.object({
      name: yup.string().trim().required(t('form-field-required')),
      email: yup
        .string()
        .email(t('form-field-invalid'))
        .required(t('form-field-required')),
      message: yup.string().trim().required(t('form-field-required')),
      subject: yup.string().trim().required(t('form-field-required')),
    }),
  });

  useEffect(() => {
    if (successMessage || failedMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
        setFailedMessage('');
        clearTimeout(timer);
      }, 3000);
    }
  }, [successMessage, failedMessage]);

  return (
    <FormWrapper>
      {formik.isSubmitting && <SpinnerLoader />}
      {(successMessage && (
        <FormMessage success>{successMessage}</FormMessage>
      )) ||
        (failedMessage && <FormMessage>{failedMessage}</FormMessage>) || (
          <Form onSubmit={formik.handleSubmit}>
            <div className="form-row">
              <Column type={2} style={{ justifyContent: 'space-between' }}>
                <Input
                  type="text"
                  name="name"
                  size={40}
                  placeholder={t('section-footer-form-name')}
                  required
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && (
                  <div className="text-danger">{formik.errors.name}</div>
                )}
                <Input
                  type="text"
                  name="subject"
                  size={40}
                  placeholder={t('section-footer-form-subject')}
                  required
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.subject && (
                  <div className="text-danger">{formik.errors.subject}</div>
                )}
                <Input
                  type="email"
                  name="email"
                  placeholder={t('section-footer-form-email')}
                  size={40}
                  required
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
              </Column>
              <Column type={2}>
                <TextArea
                  name="message"
                  cols={25}
                  rows={3}
                  placeholder={t('section-footer-form-message')}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.message && (
                  <div className="text-danger">{formik.errors.message}</div>
                )}
              </Column>
            </div>
            <div className="form-row button-container">
              <Button
                type="submit"
                buttonType={ButtonType.Light}
                style={{ textTransform: 'uppercase', borderRadius: 0 }}
                className="border-animation"
              >
                <span>{t('section-contact-form-send')}</span>
              </Button>
            </div>
          </Form>
        )}
    </FormWrapper>
  );
};

export default ContactForm;
