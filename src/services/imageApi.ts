import axios from "axios";

const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || "";
const UNSPLASH_API_URL = "https://api.unsplash.com";

export interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  description: string;
}

export const getSpaceHotelImage = async (): Promise<UnsplashImage> => {
  try {
    const response = await axios.get(`${UNSPLASH_API_URL}/photos/random`, {
      params: {
        query: "space hotel futuristic",
        orientation: "portrait",
        client_id: UNSPLASH_ACCESS_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching space hotel image:", error);
    throw new Error("Failed to fetch space hotel image");
  }
};
