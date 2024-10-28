import { getApi } from "@/services/genericApiCall";
import { ENDPOINT_COLLECTION } from "../constants/tmdbApi";
import { useDispatch } from 'react-redux';
import { set } from "@/store/store";

const FetchCarouselData = async () => {
    const dispatch = useDispatch(); 
    try {
        // eslint-disable-next-line no-unused-vars
        const { data, error } = await getApi(ENDPOINT_COLLECTION.carousel);
        console.log(data);
        dispatch(set({ carouselInfo: data?.results ? data?.results?.slice(13,19) : [] }));
      } catch (err) {
        console.error('Fetch error:', err);
      }
};

export {FetchCarouselData}