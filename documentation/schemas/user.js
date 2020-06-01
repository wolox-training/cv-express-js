module.exports = {
  firstName: {
    type: 'string',
    example: 'Jhon'
  },
  lastName: {
    type: 'string',
    example: 'Doe'
  },
  email: {
    type: 'string',
    example: 'jhon.doe@wolox.com.ar'
  },
  password: {
    type: 'string',
    example: 'somePass123'
  },
  User: {
    type: 'object',
    properties: {
      firstName: {
        $ref: '#/components/schemas/firstName'
      },
      lastName: {
        $ref: '#/components/schemas/lastName'
      },
      email: {
        $ref: '#/components/schemas/email'
      },
      password: {
        $ref: '#/components/schemas/password'
      }
    }
  }
};
