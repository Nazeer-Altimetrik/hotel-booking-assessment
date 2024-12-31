import { axiosInstance } from "./config"

export const getRoomsList = async (hotelId : string) => {
    return axiosInstance.get(`rooms-list/hotel/${hotelId}`)
}