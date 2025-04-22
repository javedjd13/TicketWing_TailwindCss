import axios from "axios";
import AxiosHeader from "../utilities/AxiosHeader";

const url = import.meta.env.VITE_PUBLIC_API_URL;

const rawData = {
    data: {
        langType: "1",
        limit: "14",
        page: "1",
        search: "",
        filterDate: "",
        latestFilterType: "1",
        filterType: "6",
        eventCategoryId: "",
        deviceId: "0389B882-5535-4361-8153-C2A03674BAD4",
        deviceType: "1",
        // token: getToken(),
        cityFilter: "",
    },
};

// API functions
export const get_carousel_list = async () => {
    try {
        const response = await axios.post(`${url}/event/get_event_list`, rawData, {
            headers: AxiosHeader(),
        });
        console.log(response.data.data, "event data");
        return response.data?.data;
    } catch (error) {
        console.log("error from card-data", error);
        throw error;
    }
};