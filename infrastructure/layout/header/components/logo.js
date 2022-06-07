import { Logo } from '@svg'
import Link from 'next/link'

export default function LogoWrapper() {
    return (
        <div className='application-header-logo'>
            <Link href="/">
                <Logo />
            </Link>
        </div>
    )
}
