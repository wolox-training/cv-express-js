const request = require('supertest');
const app = require('../../app');
const { EXIST_REGISTER, SCHEMA_VALIDATION } = require('../../app/errors');
const { createUser } = require('../factory/user');
const { mockUser, wrongPassword } = require('../constants');

const server = request(app);

describe('User controller, POST /users', () => {
  let response = {};

  describe('create a new user', () => {
    beforeAll(async () => {
      try {
        response = await server.post('/users').send(mockUser);
      } catch (err) {
        throw err;
      }
    });

    it('should return 201 status code', () => {
      expect(response.status).toBe(201);
    });

    it('should not return password in body', () => {
      expect(response.body).not.toHaveProperty('password');
    });

    it('sould return email in body', () => {
      expect(response.body.email).toBe(mockUser.email);
    });
  });

  describe('create user with existed email', () => {
    beforeAll(async () => {
      try {
        await createUser();
        response = await server.post('/users').send(mockUser);
      } catch (err) {
        throw err;
      }
    });

    it('should return 409 status code', () => {
      expect(response.status).toBe(409);
    });

    it(`should return internal code ${EXIST_REGISTER}`, () => {
      expect(response.body).toMatchObject({ internal_code: EXIST_REGISTER });
    });
  });

  describe('create user with incorrect password', () => {
    beforeAll(async () => {
      try {
        response = await server.post('/users').send({ ...mockUser, password: wrongPassword });
      } catch (err) {
        throw err;
      }
    });

    it('should return 422 status code ', () => {
      expect(response.status).toBe(422);
    });

    it(`should return internal code ${SCHEMA_VALIDATION}`, () => {
      expect(response.body).toMatchObject({ internal_code: SCHEMA_VALIDATION });
    });
  });

  describe('create user with empty body', () => {
    beforeAll(async () => {
      try {
        response = await server.post('/users').send({});
      } catch (err) {
        throw err;
      }
    });

    it('should return 422 status code ', () => {
      expect(response.status).toBe(422);
    });

    it(`should return internal code ${SCHEMA_VALIDATION}`, () => {
      expect(response.body).toMatchObject({ internal_code: SCHEMA_VALIDATION });
    });
  });
});
