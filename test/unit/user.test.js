const request = require('supertest');
const { app } = require('../../server');
const { User } = require('../../app/models');
const { createUser } = require('../../app/services/user');
const { invalid, required } = require('../../app/dictionary');
const { SCHEMA_VALIDATION, EXIST_REGISTER } = require('../../app/errors');

const mockUser = {
  firstName: 'Cristian',
  lastName: 'Vega',
  password: 'myPassword',
  email: 'cristian.vega@wolox.co'
};

const notAllowedEmail = 'cristian.vega@gmail.com';
const wrongEmail = 'thisIsNotaEmail';
const wronPassword = '$%%^&U*(IDSD';

describe('User controller, Post /users', () => {
  const makeRequest = data =>
    request(app)
      .post('/users')
      .send(data);

  describe('sign up', () => {
    it('should create a new user', async () => {
      const { status, body } = await makeRequest(mockUser);
      expect(status).toBe(201);
      expect(body).not.toHaveProperty('password');
      expect(body).toMatchObject({});

      const {
        dataValues: { email, id }
      } = await User.findOne({ where: { email: mockUser.email } });
      expect(id).toBeGreaterThanOrEqual(1);
      expect(email).toBe(mockUser.email);
    });

    it('should fail when email is already used', async () => {
      await createUser(mockUser);
      const { status, body } = await makeRequest(mockUser);
      expect(status).toBe(409);
      expect(body).toMatchObject({ internal_code: EXIST_REGISTER });
    });
  });

  describe('schema validation', () => {
    const validateRequestStructure = async (statusRef, codeRef, data = {}, errors = []) => {
      const { status, body } = await makeRequest(data);
      expect(status).toBe(statusRef);
      expect(body).toHaveProperty('internal_code');
      expect(body).toMatchObject({ internal_code: codeRef });

      if (errors.length) {
        errors.forEach(error => {
          expect(body.message).toContain(error);
        });
      }
    };

    it('should fail when send email with diferent domain', () =>
      validateRequestStructure(422, SCHEMA_VALIDATION, { ...mockUser, email: notAllowedEmail }, [
        invalid('email')
      ]));

    it('should fail when send incorrect email format', () =>
      validateRequestStructure(422, SCHEMA_VALIDATION, { ...mockUser, email: wrongEmail }, [
        invalid('email')
      ]));

    it('should fail when send empty body', () =>
      validateRequestStructure(422, SCHEMA_VALIDATION, {}, [
        required('first name'),
        required('last name'),
        invalid('password'),
        invalid('email')
      ]));

    it('should fail when send incorrect password', () =>
      validateRequestStructure(422, SCHEMA_VALIDATION, { ...mockUser, password: wronPassword }, [
        invalid('password')
      ]));
  });
});
