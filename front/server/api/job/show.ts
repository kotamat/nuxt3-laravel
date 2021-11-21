import type { IncomingMessage } from "http";
import { ApiJobJobGETResponse404, DefaultApi } from "~~/spec";

export default async (req: IncomingMessage) => {
    const url = new URL(req.url || "", `http://${req.headers.host}`)
    const jobId = url.searchParams.get("job_id") || 0

    const api = new DefaultApi()
    const { data, status } = await api.apiJobJobGET({
        job: +jobId
    }, {
        validateStatus: status => (status >= 200 && status < 300) || status === 404
    })
    switch (status) {
        case 404:
            return {
                data: data as any as ApiJobJobGETResponse404,
                status
            }
        default:
            return {
                data,
                status: status as 200
            }
    }
}