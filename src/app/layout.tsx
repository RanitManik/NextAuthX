import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "NextAuthX",
    description:
        "NextAuthX is a modern, full-stack authentication solution built using Next.js, Auth.js, ShadCN, TailwindCSS, Prisma, and PostgreSQL. This project provides a seamless and secure user authentication experience, with a focus on scalability and performance.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="grid min-h-svh place-items-center">
                {children}
            </body>
        </html>
    );
}
