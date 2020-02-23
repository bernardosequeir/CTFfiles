/* eslint-disable react/display-name */
import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, Link, graphql } from 'gatsby';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div
      className="main"
      css={css`
        margin: 0 auto;
        max-width: 50%;

        back
      `}
    >
      <Link to="/">
        <h3
          className="display-1"
          css={css`
            display: inline-block;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        className="button"
        to="/about/"
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  );
};
