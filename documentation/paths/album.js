module.exports = {
  '/albums': {
    get: {
      tags: ['Album'],
      description: 'Get albums',
      operationId: 'getAlbums',
      responses: {
        200: {
          description: 'Albums were obtained',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Albums'
              }
            }
          }
        }
      }
    }
  },
  '/albums/{id}/photos': {
    get: {
      tags: ['Album'],
      description: 'Get photos by id',
      operationId: 'getPhotosByAlbum',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'ID of album to use',
          required: true
        }
      ],
      responses: {
        200: {
          description: 'Photos by user were obtained',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Photos'
              }
            }
          }
        }
      }
    }
  }
};
