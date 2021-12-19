import { ApiMasterGETResponse200Aa, DefaultApi } from "~/spec";

export default async () => {
    const api = new DefaultApi()
    const { data, status } = await api.apiMasterGET()
    return data
}