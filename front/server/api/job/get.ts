import {DefaultApi} from "~/spec";
import type { IncomingMessage } from "http";

export default async (req: IncomingMessage) => {
    const url = new URL(req.url || "", `http://${req.headers.host}`)
    const page = url.searchParams.get("page")
    const api = new DefaultApi()
    const {data} = await api.apiJobGET({
        page: `${page}`
    })
    return data
}