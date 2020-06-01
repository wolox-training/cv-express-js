module.exports = {
  Book: {
    type: 'object',
    properties: {
      userId: {
        type: 'integer',
        example: 7
      },
      id: {
        type: 'integer',
        example: 2
      },
      title: {
        type: 'string',
        example: 'sunt qui excepturi placeat culpa'
      }
    }
  },
  Albums: {
    type: 'object',
    properties: {
      books: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/Book'
        }
      }
    }
  }
};
