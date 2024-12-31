type Address = {
    countryCode: string;
    country: {
      id: number;
      name: string;
    };
    city: {
      id: number;
      name: string;
    };
    area: {
      id: number;
      name: string;
    };
  };
  
  type BasicInfo = {
    hotelName: string;
    address: Address;
  };
  
  type GeoInfo = {
    latitude: number;
    longitude: number;
  };
  
  type Url = {
    key: string;
    value: string;
  };
  
  type hotelFacilityImages = {
    id: number;
    category: string;
    providerId: number;
    urls: Url;
  };
  
  type Feature = {
    id: number;
    title: string;
    category: string;
  };
  
  type Facilities = {
    features: Feature[];
  };
  
  type PriceDetails = {
    startsFrom: number;
  };
  
  type hotelBanner = {
      url: string
  }
  
  export type HotelDetailsType = {
    hotelId: number;
    basicInfo: BasicInfo;
    geoInfo: GeoInfo;
    hotelBanner: hotelBanner;
    hotelFacilityImages?: hotelFacilityImages[];
    facilities?: Facilities;
    priceDetails: PriceDetails;
  };
  