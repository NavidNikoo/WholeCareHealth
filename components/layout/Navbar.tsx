"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavItem = {
    label: string;
    href: string;
};

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const navItems: NavItem[] = useMemo(
        () => [
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            //{ label: "Conditions", href: "/conditions" },
            { label: "Insurance & Fees", href: "/insurance-fees" },
            { label: "New Patients", href: "/new-patients" },
            { label: "Contact", href: "/contact" },
        ],
        []
    );

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Close mobile menu on Escape
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    const isActive = (href: string) => pathname === href;

    const linkBase: React.CSSProperties = {
        textDecoration: "none",
        color: "var(--text)",
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 1,
        padding: "10px 6px",
        borderRadius: 10,
        transition: "background 150ms ease, color 150ms ease",
    };

    const activeLink: React.CSSProperties = {
        color: "var(--primary)",
        fontWeight: 800,
        background: "var(--accent-soft)",
    };

    return (
        <header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 50,
                background: "rgba(251, 251, 250, 0.92)",
                backdropFilter: "blur(10px)",
                borderBottom: "1px solid var(--border)",
            }}
        >
            {/* Main bar */}
            <div className="wc-container py-3 d-flex align-items-center gap-4">
                {/* Brand */}
                <Link
                    href="/"
                    aria-label="Go to homepage"
                    style={{
                        textDecoration: "none",
                        color: "var(--text)",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        flexShrink: 0,
                    }}
                >
                    <div
                        aria-hidden
                        style={{
                            width: 38,
                            height: 38,
                            borderRadius: 14,
                            background: "var(--accent-soft)",
                            display: "grid",
                            placeItems: "center",
                            color: "var(--primary)",
                            fontWeight: 900,
                            letterSpacing: 0.3,
                        }}
                    >
                        WC
                    </div>

                    <div style={{ lineHeight: 1.05 }}>
                        <div style={{ fontWeight: 900, fontSize: 18 }}>WholeCare Health</div>
                        <div style={{ color: "var(--muted)", fontSize: 12 }}>Psychiatry • Adults 18+</div>
                    </div>
                </Link>

                {/* Desktop nav (kept left, wraps nicely) */}
                <nav
                    className="d-none d-lg-flex align-items-center"
                    aria-label="Primary"
                    style={{
                        gap: 6,
                        flexWrap: "wrap",
                        marginLeft: 6,
                    }}
                >
                    {navItems.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={active ? "page" : undefined}
                                style={{
                                    ...linkBase,
                                    ...(active ? activeLink : null),
                                }}
                                onMouseEnter={(e) => {
                                    if (active) return;
                                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,0,0,0.04)";
                                }}
                                onMouseLeave={(e) => {
                                    if (active) return;
                                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                                }}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Spacer on desktop so nav stays left */}
                <div className="d-none d-lg-block" style={{ flex: 1 }} />

                {/* Mobile toggle (right side) */}
                <button
                    className="d-lg-none btn btn-wc-outline ms-auto"
                    type="button"
                    aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={open}
                    aria-controls="wc-mobile-nav"
                    onClick={() => setOpen((v) => !v)}
                    style={{ whiteSpace: "nowrap" }}
                >
                    {open ? "Close" : "Menu"}
                </button>
            </div>

            {/* Mobile menu + backdrop */}
            {open && (
                <>
                    {/* Backdrop (click to close) */}
                    <button
                        type="button"
                        aria-label="Close menu"
                        onClick={() => setOpen(false)}
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "rgba(0,0,0,0.25)",
                            border: "none",
                            padding: 0,
                            margin: 0,
                            zIndex: 40,
                        }}
                    />

                    {/* Panel */}
                    <div
                        id="wc-mobile-nav"
                        role="dialog"
                        aria-label="Navigation menu"
                        style={{
                            position: "relative",
                            zIndex: 60,
                            borderTop: "1px solid var(--border)",
                            background: "rgba(251, 251, 250, 0.98)",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <div className="wc-container py-3 d-flex flex-column gap-2">
                            {navItems.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        aria-current={active ? "page" : undefined}
                                        style={{
                                            textDecoration: "none",
                                            padding: "12px 12px",
                                            borderRadius: 12,
                                            background: active ? "var(--accent-soft)" : "transparent",
                                            color: active ? "var(--primary)" : "var(--text)",
                                            fontWeight: active ? 800 : 700,
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}

                            {/* Removed Call + Request Appointment per your request */}

                            <div
                                className="mt-2"
                                style={{
                                    fontSize: 12,
                                    color: "var(--muted)",
                                    padding: "0 2px",
                                }}
                            >
                                Telehealth &amp; in-person • Orange County • Adults 18+
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}
