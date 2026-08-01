import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
    return (
        <Layout title="Jumpedia Docs">
            <main
                style={{
                    padding: "4rem",
                    textAlign: "center",
                }}
            >
                <h1>Jumpedia Docs</h1>

                <p>
                    Documentation for Jumpedia.
                </p>

                <Link
                    className="button button--primary button--lg"
                    to="/intro"
                >
                    Read Documentation
                </Link>
            </main>
        </Layout>
    );
}