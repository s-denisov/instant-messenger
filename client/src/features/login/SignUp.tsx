import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <Modal show>
      <Modal.Body>
        <Form id="sign-up-form">
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@email.com"
              required
              value={email}
              onChange={(event) => setEmail((event.target as HTMLInputElement).value)}
            />
            <div className="invalid-feedback">Email already taken</div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              value={password}
              required
              onChange={(event) => setPassword((event.target as HTMLInputElement).value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Confirm Password
            </Form.Label>
            <Form.Control
              value={confirmPassword}
              required
              onChange={(event) => setConfirmPassword((event.target as HTMLInputElement).value)}
              type="password"
              className={confirmPassword === '' ? '' : password === confirmPassword ? 'is-valid' : 'is-invalid'}
            />
            <div className="invalid-feedback">Passwords do not match</div>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={document.getElementsByClassName('is-invalid').length > 0}
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
