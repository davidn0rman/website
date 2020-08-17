import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './blogpreview.module.scss';

const BlogPreview = ({ slug, title, excerpt, date, key }): JSX.Element => {
  return (
    <article key={key} className={styles.article}>
      <header className={styles.header}>
        <h3>
          <Link className={styles.link} to={slug}>
            {title}
          </Link>
        </h3>
        <small>{date}</small>
        <p className={styles.excerpt}>{excerpt}</p>
      </header>
    </article>
  );
};

BlogPreview.propTypes = {
  slug: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default BlogPreview;
