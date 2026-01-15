export const useNotify = () => {
    const success = (msg: string) => alert(`✅ ${msg}`)
    const error = (msg: string) => alert(`❌ ${msg}`)

    return {success, error}
}