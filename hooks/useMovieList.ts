import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useMovieList = () => {
    const { data, error, isLoading } = useSWR('https://netflix-clone-final-lemon.vercel.app/api/movies', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading
    }
};

export default useMovieList;