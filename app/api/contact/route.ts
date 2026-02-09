// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Body = {
    fullName: string;
    email: string;
    phone?: string;
    visitType?: string;
    message: string;
};

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as Body;

        const fullName = (body.fullName || "").trim();
        const email = (body.email || "").trim();
        const phone = (body.phone || "").trim();
        const visitType = (body.visitType || "Either").trim();
        const message = (body.message || "").trim();

        if (!fullName || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields." },
                { status: 400 }
            );
        }

        const SMTP_HOST = process.env.SMTP_HOST;
        const SMTP_PORT = process.env.SMTP_PORT;
        const SMTP_USER = process.env.SMTP_USER;
        const SMTP_PASS = process.env.SMTP_PASS;

        const CONTACT_TO = process.env.CONTACT_TO;
        const CONTACT_FROM = process.env.CONTACT_FROM; // should usually be SMTP_USER

        if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO || !CONTACT_FROM) {
            return NextResponse.json(
                { error: "Server email env vars are missing." },
                { status: 500 }
            );
        }

        const port = Number(SMTP_PORT);
        const secure = port === 465; // 465 = SSL, 587 = STARTTLS

        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port,
            secure,
            auth: { user: SMTP_USER, pass: SMTP_PASS },
        });

        const subject = `WCH Contact Form: ${fullName}`;

        const text = [
            `Name: ${fullName}`,
            `Email: ${email}`,
            `Phone: ${phone || "(not provided)"}`,
            `Preferred visit type: ${visitType}`,
            "",
            "Message:",
            message,
        ].join("\n");

        // IMPORTANT:
        // Many SMTP providers (especially Gmail) require "from" to match the authenticated mailbox.
        // So send FROM your SMTP_USER, and set replyTo to the visitor.
        await transporter.sendMail({
            to: CONTACT_TO,
            from: `"WholeCare Health" <${CONTACT_FROM}>`,
            subject,
            text,
            replyTo: email,
        });

        return NextResponse.json({ ok: true });
    } catch (err: any) {
        console.error("CONTACT API ERROR:", err);

        // This helps you see the real SMTP failure in the Network tab response too
        return NextResponse.json(
            { error: err?.message || "Failed to send message." },
            { status: 500 }
        );
    }
}
