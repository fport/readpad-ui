import Header from '@l/header'
import Navigator from '@l/navigator'
import Profile from '@c/profile'
import useAuth from '@hooks/useAuth'

export default function Profiles() {
    const [isAuthenticated] = useAuth()

    return (
        <div className="flex flex-col items-center">
            <Header />
            {isAuthenticated ? (
                <Profile />
            ) : (
                <div className="flex items-center justify-center w-5/10 alert alert-error shadow-lg">
                    <div className="flex items-center justify-center w-5/10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>Error! Task failed successfully.</span>
                    </div>
                </div>
            )}
            <Navigator />
        </div>
    )
}
