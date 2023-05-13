import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useMovie = (id?: string) => {
    const { 
        data, 
        error, 
        isLoading 
    } = useSWR(id ? `https://netflix-clone-final-lemon.vercel.app/api/movies/${id}` : null, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    return {
        data,
        error,
        isLoading,
    }
}

export default useMovie; 