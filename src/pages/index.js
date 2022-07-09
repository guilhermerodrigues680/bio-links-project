import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { Layout } from "../components";
import * as styles from "../modules/home/home.module.css";
import logo from "../assets/images/icon.svg";
import "../styles/global.css";

console.debug({ styles });

const IndexPage = ({ data }) => {
  const bioLinks =
    data?.allMarkdownRemark?.edges?.[0]?.node?.frontmatter?.links;

  useEffect(() => {
    console.debug("data", data, bioLinks);
  }, [data, bioLinks]);

  return (
    <Layout>
      <div className={styles["indexPage"]}>
        <main className={styles["container"]}>
          <h1>
            <img className={styles["header__logo"]} alt="Logo" src={logo} />
            <br />
            <span>Gatsby site!&nbsp;</span>
            <span role="img" aria-label="Party popper emojis">
              🎉🎉🎉
            </span>
          </h1>

          <ul>
            {bioLinks
              .filter((link) => link.isenabled)
              .map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.icon && (
                      <img
                        className={styles["linkList__item__anchor__icon"]}
                        alt={`ícone ${link.name}`}
                        src={link.icon}
                      />
                    )}
                    {link.name}
                  </a>
                </li>
              ))}
          </ul>
        </main>

        <footer className={styles["footerContainer"]}>
          <img
            className={styles["footerContainer__logo"]}
            alt="Logo"
            src={logo}
          />
          &nbsp;Bio Links
        </footer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//bio-links.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            links {
              href
              icon
              isenabled
              name
            }
          }
          parent {
            ... on File {
              name
              sourceInstanceName
            }
            internal {
              description
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
`;

export default IndexPage;
