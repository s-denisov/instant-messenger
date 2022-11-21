import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import {loggedIn, login} from './userSlice';

interface ServerError {
  email?: string;
  password?: string;
}

export default function SignUp() {
  const {
    register, getValues, formState: { errors }, handleSubmit,
  } = useForm();
  const initialServerError: ServerError = {};
  const [serverError, setServerError] = useState(initialServerError);
  const dispatch = useDispatch();
  const userLoggedIn = useAppSelector(loggedIn);
  return (
    <Modal show={!userLoggedIn}>
      <Modal.Body>
        <Form onSubmit={handleSubmit((data) => {
          axios.post('/api/signup', data).then((res) => {
            console.log(res.data.message);
            axios.get('/api/username').then((res2) => {
              dispatch(login({ email: res2.data.username }));
            }).catch((err) => {
              console.log('2');
              console.log(err.response.data);
            });
          }).catch((err) => {
            const errMessage = err.response.data.message;
            if (errMessage !== undefined) setServerError(errMessage);
          });
        })}
        >
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className={errors.email || serverError.email ? 'is-invalid' : ''}
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
            />
            <div className="invalid-feedback">{serverError.email || 'Please enter a valid email'}</div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              className={errors.password || serverError.password ? 'is-invalid' : ''}
              {...register('password', { required: true, minLength: 6 })}
            />
            <div className="invalid-feedback">{serverError.password || 'Password must have at least length 6'}</div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Confirm Password
            </Form.Label>
            <Form.Control
              type="password"
              className={errors.confirmPassword ? 'is-invalid' : ''}
              {...register('confirmPassword', {
                required: true,
                validate: (value) => value === getValues('password'),
              })}
            />
            <div className="invalid-feedback">Passwords do not match</div>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
