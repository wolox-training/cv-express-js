const request = require('supertest');
const { User } = require('../../app/models');
const { app } = require('../../server');

const mockUser = {
  firstName: 'Cristian',
  lastName: 'Vega',
  password: 'myPassword',
  email: 'cristian.vega@wolox.co'
};

describe('User controller, Sign Up function', () => {
  it('should create a new user', async done => {
    const { status, body } = await request(app)
      .post('/user')
      .send(mockUser);

    expect(status).toBe(201);
    expect(body).toMatchObject({});
    const {
      dataValues: { email, id }
    } = await User.findOne({ where: { email: mockUser.email } });
    expect(id).toBeGreaterThanOrEqual(1);
    expect(email).toBe(mockUser.email);
    done();
  });

  it('should fail when email is registered', async done => {
    const { status, body } = await request(app)
      .post('/user')
      .send(mockUser);
    expect(status).toBe(500);
    expect(body).toHaveProperty('internal_code');
    expect(body).toEqual({ internal_code: 'exist_user' });
    done();
  });
});
