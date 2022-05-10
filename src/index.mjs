// @format
export const https = {
  type: "object",
  properties: {
    type: {
      type: "string",
      enum: ["https"],
    },
    version: {
      type: "string",
    },
    options: {
      type: "object",
      properties: {
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
  required: ["type", "version", "error", "results", "options"],
};

export const graphql = {
  type: "object",
  properties: {
    type: {
      type: "string",
      enum: ["graphql"],
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
  required: ["type", "version", "options", "results", "error"],
};

export const jsonrpc = {
  type: "object",
  properties: {
    type: {
      type: "string",
      enum: ["json-rpc"],
    },
    version: {
      type: "string",
    },
    options: {
      type: "object",
      properties: {
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
  required: ["type", "method", "params", "results", "version", "options"],
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
