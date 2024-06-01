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
          path: "./api/axios-instance.ts",
          name: "clientInstance",
        },
        query: {
          useQuery: true,
          useMutation: true,
          useInfinite: true,
          usePrefetch: true,
        },
        operations: {
          articles_list: {
            mutator: {
              path: "./api/axios-instance.ts",
              name: "baseInstance",
            },
          },
          auth_connections_github_retrieve: {
            mutator: {
              path: "./api/axios-instance.ts",
              name: "baseInstance",
            },
          },
          auth_connections_google_retrieve: {
            mutator: {
              path: "./api/axios-instance.ts",
              name: "baseInstance",
            },
          },
          auth_connections_kakao_retrieve: {
            mutator: {
              path: "./api/axios-instance.ts",
              name: "baseInstance",
            },
          },
          books_list: {
            mutator: {
              path: "./api/axios-instance.ts",
              name: "baseInstance",
            },
          },
          books_retrieve: {
            mutator: {
              path: "./api/axios-instance.ts",
              name: "baseInstance",
            },
          },
          comments_retrieve: {
            mutator: {
              path: "./api/axios-instance.ts",
              name: "baseInstance",
            },
          },
          comments_article_list: {
            mutator: {
              path: "./api/axios-instance.ts",
              name: "baseInstance",
            },
          },
          profiles_retrieve: {
            mutator: {
              path: "./api/axios-instance.ts",
              name: "baseInstance",
            },
          },
          search_articles_list: {
            mutator: {
              path: "./api/axios-instance.ts",
              name: "baseInstance",
            },
          },
          search_articles_retrieve: {
            mutator: {
              path: "./api/axios-instance.ts",
              name: "baseInstance",
            },
          },
          search_articles_suggest_retrieve: {
            mutator: {
              path: "./api/axios-instance.ts",
              name: "baseInstance",
            },
          },
        },
      },
    },
    hooks: {
      afterAllFilesWrite: "npx prettier ./api --write",
    },
  },
};
