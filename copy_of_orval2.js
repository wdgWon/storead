module.exports = {
  storead: {
    input: {
      target: "./Storead.yaml",
    },
    output: {
      mode: "split",
      target: "./api/generated/domain.ts",
      schemas: "./api/generated/models",
      client: "react-query",
      override: {
        mutator: {
          path: "./api/custom-instance.ts",
          name: "customInstance",
        },
        query: {
          useQuery: true,
          useMutation: true,
          useInfinite: true,
        },
        requestOptions: true,
        useTypeOverInterfaces: true,
      },
    },
    hooks: {
      afterAllFilesWrite: "npx prettier ./api --write",
    },
  },
};
