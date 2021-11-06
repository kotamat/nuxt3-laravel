import { ApiJobJobPUTRequest, ApiJobJobPUTResponse403, ApiJobJobPUTResponse422, ApiJobPOSTResponse403, ApiJobPOSTResponse422, DefaultApi } from "~~/spec"

export default async () => {
    const api = new DefaultApi
    const param: ApiJobJobPUTRequest = {
        name: "",
        user_id: 0
    }
    const { data, status } = await api.apiJobJobPUT({
        job: 0,
        apiJobJobPUTRequest: param
    })
    // return {data,status}
    switch (status) {
        case 403:
            return { data: data as any as ApiJobJobPUTResponse403, status }
        case 422:
            return { data: data as any as ApiJobJobPUTResponse422, status }
        default:
            return { data: data, status: status as 200 }
    }
}