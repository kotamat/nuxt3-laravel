import { DefaultRequestBody, MockedRequest, rest, RestHandler } from 'msw'
import { paths } from '../../back/storage/app/all.json'

type Schema = {
  type: "object",
  properties: { [key: string]: Schema },
  example?: object,
  required: string[],
  title?: string,
} | {
  type: "array",
  items: Schema
  example?: any[],
  required: string[],
  title?: string,
} | {
  type: "string",
  example: string,
  required?: string[],
  title?: string,
} | {
  type: "integer",
  example: number,
  required?: string[],
  itle?: string,
}

const convert = (s: Schema): object | string | number => {
  switch (s.type) {
    case "object":
      if (s.example) {
        return s.example
      }
      return Object.entries(s.properties).reduce((prev, [key, value]) => {
        prev[key] = convert(value)
        return prev
      }, {} as { [k: string]: object | string | number })
    case "array":
      if (s.example) {
        return s.example
      }
      return [convert(s.items)]
    case "string":
    case "integer":
      return s.example
  }
}


type Responses = typeof paths["/api/job/{job}"]["put"]

const pathResolver = (origin: string): string => 
  origin.replaceAll(/{(.*?)}/g, ":$1")


const exampleResponses = Object.entries(paths).flatMap(([path, value]) =>
  Object.entries(value).map(([k, v]) => {
    const happyResponse = Object.entries((v as Responses).responses).find(([status, response]) => 200 <= +status && +status < 300)
    if (!happyResponse) return
    const isRestMethod = (str: string): str is keyof typeof rest =>
      ["put", "get", "all", "head", "post", "delete", "patch", "options"].includes(str)
    if (!isRestMethod(k)) return
    return {
      path: "http://localhost" + pathResolver(path),
      method: k,
      status: +happyResponse[0], // 一旦200だけで
      examples: convert(happyResponse[1]?.content?.['application/json'].schema as Schema)
    }
  })
);

const handlers = exampleResponses
  .map(response => {
    if (!response) return
    return rest[response.method](response.path, (req, res, ctx) =>
      res(
        ctx.status(response.status),
        ctx.json(response.examples)
      )
    )
  })
  .filter((response): response is RestHandler<MockedRequest<DefaultRequestBody>> => !!response)
export { handlers }