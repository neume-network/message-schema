// @format
export const https = {
  type: "object",
  properties: {
    type: {
      type: "string",
      enum: ["https"],
    },
    commissioner: {
      type: "string",
    },
    version: {
      type: "string",
    },
    options: {
      type: "object",
      properties: {
        timeout: {
          $comment: "temporal unit is milliseconds",
          type: "integer",
        },
        url: { type: "string" },
        method: { type: "string" },
        body: { type: "string" },
        headers: { type: "object" },
      },
      required: ["url", "method"],
    },
    results: {
      type: "object",
      nullable: true,
    },
    error: {
      type: "string",
      nullable: true,
    },
  },
  required: ["type", "commissioner", "version", "error", "results", "options"],
};

export const graphql = {
  type: "object",
  properties: {
    type: {
      type: "string",
      enum: ["graphql"],
    },
    commissioner: {
      type: "string",
    },
    version: {
      type: "string",
    },
    options: {
      type: "object",
      properties: {
        url: { type: "string" },
        body: { type: "string" },
        headers: { type: "object" },
      },
      required: ["url", "body"],
    },
    results: {
      type: "object",
      nullable: true,
    },
    error: {
      type: "string",
      nullable: true,
    },
  },
  required: ["type", "commissioner", "version", "options", "results", "error"],
};

export const jsonrpc = {
  type: "object",
  properties: {
    type: {
      type: "string",
      enum: ["json-rpc"],
    },
    commissioner: {
      type: "string",
    },
    version: {
      type: "string",
    },
    options: {
      type: "object",
      properties: {
        timeout: {
          $comment: "temporal unit is milliseconds",
          type: "integer",
        },
        url: { type: "string" },
      },
      required: ["url"],
    },
    method: {
      type: "string",
    },
    params: {
      type: "array",
    },
    results: {
      type: "object",
      nullable: true,
    },
    error: {
      type: "string",
      nullable: true,
    },
  },
  // TODO: Require `error`
  required: [
    "type",
    "commissioner",
    "method",
    "params",
    "results",
    "version",
    "options",
  ],
};

export const exit = {
  type: "object",
  required: ["type", "version"],
  properties: {
    type: {
      type: "string",
      enum: ["exit"],
    },
    version: {
      type: "string",
    },
  },
};

export const workerMessage = {
  oneOf: [https, graphql, jsonrpc, exit],
};

export const lifecycleMessage = {
  type: "object",
  required: ["type", "version", "name", "args"],
  properties: {
    type: {
      type: "string",
      enum: ["transformation", "extraction"],
    },
    version: {
      type: "string",
    },
    name: {
      type: "string",
    },
    args: {
      type: "array",
      nullable: true,
    },
  },
};
