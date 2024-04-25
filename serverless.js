module.exports = {
  org: 'kushaltalkinglands',
  app: 'aws-node-http-api-project',
  service: 'aws-node-http-api-project',
  frameworkVersion: '3',

  provider: {
    name: 'aws',
    runtime: 'nodejs20.x',
    environment: {
      S3_BUCKET_NAME: 'kushal-test-file-bucket',
    },
    region: 'ap-south-1',
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: ['s3:PutObject'],
        Resource: 'arn:aws:s3:::kushal-test-file-bucket/*',
      },
    ],
  },

  plugins: [
    'serverless-offline',
    // Add other plugins here if needed
  ],

  functions: {
    api: {
      handler: 'src/functions/client/handler/emptyRouteHandler.emptyhandler',
      events: [
        {
          httpApi: {
            path: '/',
            method: 'get',
          },
        },
      ],
    },

    postName: {
      handler: 'src/functions/client/handler/createNameHandler.postName',
      events: [
        {
          httpApi: {
            path: '/name',
            method: 'post',
          },
        },
      ],
    },

    getName: {
      handler: 'src/functions/client/handler/getNameHandler.getName',
      events: [
        {
          httpApi: {
            path: '/name',
            method: 'get',
          },
        },
      ],
    },
    fileUpload: {
      handler: 'src/functions/client/handler/uploadFileHandler.uploadFile',
      events: [
        {
          httpApi: {
            path: '/file',
            method: 'post',
          },
        },
      ],
    },
  },
};