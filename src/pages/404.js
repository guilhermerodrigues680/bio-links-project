import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "../components";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <Layout title="Página não encontrada">
      <main style={pageStyles}>
        <h1 style={headingStyles}>Página não encontrada</h1>
        <p style={paragraphStyles}>
          Desculpe&nbsp;
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>
          &nbsp;não encontramos o que você estava procurando.
          <br />
          {process.env.NODE_ENV === "development" && (
            <div>
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
            </div>
          )}
          <br />
          <Link to="/">Ir para links da bio</Link>.
        </p>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
