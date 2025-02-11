"use client";
import { Provider } from "react-redux";
import ThemeProviderWrapper from "@/theme/ThemeProviderWrapper";
import store from "@/store/store";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Provider store={store}>
                    <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
                </Provider>
            </body>
        </html>
    );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         {children}
//       </body>
//     </html>
//   );
// }
