import { Link, Outlet } from "react-router-dom";
import gsap from 'gsap'
import logo from './assets/coding-svgrepo-com.svg'


function AnimatedNavLink({ to, children }) {
    const text = typeof children === 'string' ? children : String(children)
    const letters = text.split('').map((ch) => (ch === ' ' ? '\u00A0' : ch))

    const handleEnter = (e) => {
        const spans = e.currentTarget.querySelectorAll('.nav-letter')
        gsap.killTweensOf(spans)
        gsap.to(spans, {
            y: -8,
            duration: 0.45,
            ease: 'power2.out',
            stagger: 0.05,
        })
    }

    const handleLeave = (e) => {
        const spans = e.currentTarget.querySelectorAll('.nav-letter')
        gsap.killTweensOf(spans)
        gsap.to(spans, {
            y: 0,
            duration: 0.45,
            ease: 'power2.in',
            stagger: { each: 0.05, from: 'end' },
        })
    }

    return (
        <Link
            to={to}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-red/10 transition overflow-visible"
        >
            {letters.map((ch, i) => (
                <span key={i} className="nav-letter inline-block leading-none">
                    {ch}
                </span>
            ))}
        </Link>
    )
}

export default function Navigation() {
    return (
    <>
        <div className="mainNavbar flex justify-between">
            <img src={logo} alt="logo" className="" />
            <nav className="">
                <div className="">
                    <div className="">
                        <AnimatedNavLink to="/">Home</AnimatedNavLink>
                        <AnimatedNavLink to="/about">About</AnimatedNavLink>
                        <AnimatedNavLink to="/cv">CV</AnimatedNavLink>
                        <AnimatedNavLink to="/contact">Contact</AnimatedNavLink>
                    </div>
                </div>
            </nav>
        </div>
            <main className="p-6">
                <Outlet />
            </main>
    </>
    );
}