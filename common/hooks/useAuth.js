import cookiesUtils from '@utils/cookies'

const useAuth = function () {
    const isAuthenticated = cookiesUtils.getAuthorisedUser() !== undefined
    return [isAuthenticated]
}

export default useAuth
