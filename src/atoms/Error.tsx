import { useQueryClient } from "@tanstack/react-query";

export default function Error({errorMessage, userName} : {errorMessage: string, userName: string}) {
    const queryClient = useQueryClient();

    function onRetry() {
        queryClient.invalidateQueries({queryKey: ['users', userName]})
    }
    return (
        <div className='flex-1 grow grid place-items-center'>
            <div className='text-red-600 flex flex-col items-center gap-4'>
                <p className='border border-red-600 p-4 rounded-xl '>{errorMessage}</p>
                <button type="button" onClick={onRetry}>
                    Retry
                </button>
            </div>
        </div>
    );
}