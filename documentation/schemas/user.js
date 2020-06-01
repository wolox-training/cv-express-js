module.exports = {
  first_name: {
    type: 'string',
    example: 'Jhon'
  },
  last_name: {
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
      first_name: {
        $ref: '#/components/schemas/first_name'
      },
      last_name: {
        $ref: '#/components/schemas/last_name'
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
