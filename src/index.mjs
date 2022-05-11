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

export const transformation = {
  type: "object",
  required: ["type", "version", "name", "args", "results", "error"],
  properties: {
    type: {
      type: "string",
      enum: ["transformation"],
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
    results: {
      type: "object",
      nullable: true,
    },
    error: {
      type: "string",
      nullable: true,
    },
  },
};

export const extraction = {
  type: "object",
  required: ["type", "version", "name", "state", "results", "error"],
  properties: {
    type: {
      type: "string",
      enum: ["extraction"],
    },
    version: {
      type: "string",
    },
    name: {
      type: "string",
    },
    state: {
      type: "object",
      nullable: true,
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
};
