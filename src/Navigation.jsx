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
            className="h-full text-[#31473A] flex items-center px-3 rounded-md text-sm font-medium hover:bg-white/10 transition overflow-visible font-montserrat"
            style={{ fontFamily: "Montserrat, sans-serif" }}
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
            <div className="mainNavbar flex justify-between items-center px-4 w-full">
                <Link to="/" className="h-full flex items-center">
                    <img src={logo} alt="logo" className="h-full w-auto object-contain" />
                </Link>
                <nav className="flex items-center px-2 rounded-lg text-white">
                    <div className="flex items-center space-x-1 h-full">
                        <AnimatedNavLink to="/">Home</AnimatedNavLink>
                        <AnimatedNavLink to="/about">About</AnimatedNavLink>
                        <AnimatedNavLink to="/skills">Skills</AnimatedNavLink>
                        <AnimatedNavLink to="/contact">Contact</AnimatedNavLink>
                        <AnimatedNavLink to="/projects">Projects</AnimatedNavLink>
                    </div>
                </nav>
            </div>
            <main className="p-6">
                <Outlet />
            </main>
        </>
    );
}