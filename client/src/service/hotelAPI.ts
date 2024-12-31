import { axiosInstance } from "./config"

export const getCityList = async () => {
    return axiosInstance.get('/city')
}

export const getHotelsList = async (city: string) => {
    return axiosInstance.get(`/hotel-list/city/${city}`)
}


export const getHotelDetail = async (hotelId : string) => {
    return axiosInstance.get(`/hotel-list/details/${hotelId}`)
}


export const bookHotel = async() => {
    return axiosInstance.post(`/book-hotel`)
}

export const fetchBookedHotels = async() => {
    return axiosInstance.get('/book-hotel')
}