"use client";

import Link from "next/link";
import Image from "next/image";
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
            { label: "Insurance & Fees", href: "/insurance-fees" },
            { label: "New Patients", href: "/new-patients" },
            { label: "Contact", href: "/contact" },
        ],
        []
    );

    useEffect(() => setOpen(false), [pathname]);

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
        fontWeight: 650,
        fontSize: 14,
        lineHeight: 1,
        padding: "10px 10px",
        borderRadius: 999,
        transition: "background 160ms ease, color 160ms ease",
    };

    const headerStyle: React.CSSProperties = {
        position: "sticky",
        top: 0,
        zIndex: 50,

        // match the logo white more closely
        background: "#fbfbfa",

        // turn off blur since we're now using a solid match color
        backdropFilter: "none",

        // subtle separation from page content
        borderBottom: "1px solid rgba(15, 23, 42, 0.08)",

        // optional: adds a “floating” premium feel
        boxShadow: "0 6px 18px rgba(15, 23, 42, 0.04)",
    };


    return (
        <header style={headerStyle}>
            <div className="wc-container py-3 d-flex align-items-center">
                {/* Brand */}
                <Link
                    href="/"
                    aria-label="Go to homepage"
                    className="wc-brand"
                    style={{
                        textDecoration: "none",
                        color: "var(--text)",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        flexShrink: 0,
                    }}
                >
                    {/* Transparent logo (controlled size) */}
                    <span className="wc-logo" aria-hidden>
            <Image
                src="/images/WCH-logo.png"
                alt=""
                width={64}
                height={64}
                priority
                style={{ objectFit: "contain", display: "block" }}
            />
          </span>

                    <div style={{ lineHeight: 1.05 }}>
                        <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: -0.2 }}>
                            WholeCare Health
                        </div>
                        <div style={{ color: "var(--muted)", fontSize: 12 }}>
                            Psychiatry
                        </div>
                    </div>
                </Link>

                {/* Desktop nav */}
                <nav
                    className="d-none d-lg-flex align-items-center"
                    aria-label="Primary"
                    style={{
                        gap: 6,
                        flexWrap: "wrap",
                        marginLeft: 18, // gives the brand some breathing room
                    }}
                >
                    {navItems.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={active ? "page" : undefined}
                                className="wc-navlink"
                                style={{
                                    ...linkBase,
                                    color: active ? "var(--primary)" : "var(--text)",
                                    background: active ? "var(--accent-soft)" : "transparent",
                                    fontWeight: active ? 800 : 650,
                                }}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Spacer pushes mobile button to right */}
                <div className="d-none d-lg-block" style={{ flex: 1 }} />

                {/* Mobile toggle */}
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

            {/* Clean hover effects */}
            <style>{`
        .wc-navlink:hover {
          background: rgba(0, 0, 0, 0.045);
        }

        .wc-logo {
          width: 52px;
          height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
          background: transparent; /* IMPORTANT: keeps logo truly transparent */
        }

        /* Hover: subtle lift + soft ring that matches your theme */
        .wc-brand:hover .wc-logo {
          transform: translateY(-1px) scale(1.03);
          box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.10); /* soft green ring */
        }

        .wc-brand:active .wc-logo {
          transform: translateY(0px) scale(0.99);
          box-shadow: none;
        }
      `}</style>

            {/* Mobile menu + backdrop */}
            {open && (
                <>
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
                            <div
                                className="d-flex align-items-center justify-content-between"
                                style={{ padding: "4px 2px 10px 2px" }}
                            >
                                <div className="d-flex align-items-center" style={{ gap: 10 }}>
                  <span className="wc-logo" aria-hidden style={{ width: 44, height: 44, borderRadius: 14 }}>
                    <Image
                        src="/images/WCH-logo.png"
                        alt=""
                        width={40}
                        height={40}
                        style={{ objectFit: "contain", display: "block" }}
                    />
                  </span>

                                    <div style={{ lineHeight: 1.05 }}>
                                        <div style={{ fontWeight: 900 }}>WholeCare Health</div>
                                        <div style={{ color: "var(--muted)", fontSize: 12 }}>
                                            Psychiatry • Adults 18+
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-sm btn-wc-outline"
                                    onClick={() => setOpen(false)}
                                    aria-label="Close navigation menu"
                                >
                                    Close
                                </button>
                            </div>

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
                                            borderRadius: 14,
                                            background: active ? "var(--accent-soft)" : "transparent",
                                            color: active ? "var(--primary)" : "var(--text)",
                                            fontWeight: active ? 800 : 700,
                                            border: active ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}

                            <div style={{ fontSize: 12, color: "var(--muted)", padding: "0 2px" }}>
                                Telehealth &amp; in-person • Orange County • Adults 18+
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}
