type MessageProps = {
    status: 'loading' | 'success' | 'error'
}

export const Message = ({ status }: MessageProps) => {
    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (status === 'success') {
        return <div>Success!</div>
    }

    if (status === 'error') {
        return <div>Error</div>
    }

    return null
};