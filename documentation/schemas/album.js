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
  },
  Photo: {
    type: 'object',
    properties: {
      albumId: {
        type: 'integer',
        example: 2
      },
      id: {
        type: 'integer',
        example: 97
      },
      title: {
        type: 'string',
        example: 'labore magnam officiis nemo et'
      },
      url: {
        type: 'string',
        example: 'https://via.placeholder.com/600/e2223e'
      },
      thumbnailUrl: {
        type: 'string',
        example: 'https://via.placeholder.com/150/e2223e'
      }
    }
  },
  Photos: {
    type: 'object',
    properties: {
      photos: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/Photo'
        }
      }
    }
  }
};
