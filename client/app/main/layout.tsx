import { Poppins } from "next/font/google"; 
import ResponsiveNav from "../component/Navigation/ResponsiveNav";

const poppins = Poppins ({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

export default function RootlLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <ResponsiveNav />
                {children}
            </body>
        </html>
    )
}