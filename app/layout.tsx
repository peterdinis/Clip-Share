import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/shared/Navbar";
import ThemeProvider from "./_components/shared/ThemeProvider";

export const metadata: Metadata = {
	title: "Clip-Share",
	description: "Application for editing sharing videos and other stuff",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>
				<ThemeProvider>
				<Navbar />
				{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
