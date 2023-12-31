import { Html, Head, Main, NextScript } from "next/document";
import { siteData } from "@/const/site";
export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta property="og:locale" content={siteData.lang} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteData.title} />
        <meta property="og:url" content={siteData.url} />
        <meta property="og:site_name" content={siteData.title} />
      </Head>
      <body className="text-primary-900 text-body16 font-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
