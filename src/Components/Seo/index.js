// https://github.com/stereobooster/react-snap/blob/master/doc/recipes.md
// From https://github.com/stereobooster/an-almost-static-stack/blob/react-snap/src/components/Seo.js
import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";

const absoluteUrl = path => `https://kind-tesla-a088c1.netlify.app/${path}`;
const seoImageURL = file => `https://kind-tesla-a088c1.netlify.app/ogimages/${file}`;

const getMetaTags = ({
  title, description, url, contentType, published, updated, category, tags, twitter, image,
}) => {
  const metaTags = [
    { itemprop: 'name', content: title },
    { itemprop: 'description', content: description ? description : 'Online MFA show for 2020 DMA grads.'},
    { name: 'description', content: description ? description : 'Online MFA show for 2020 DMA grads.'},
    { name: 'twitter:site', content: twitter},
    { name: 'twitter:title', content: `${title} | NEARREST NEIGHBOR` },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: twitter},
    { name: 'og:title', content: `${title} | NEARREST NEIGHBOR` },
    { name: 'og:type', content: contentType }, //https://ogp.me/#types
    { name: 'og:url', content: url },
    { name: 'og:description', content: description },
    { name: 'og:site_name', content: 'NEARREST NEIGHBOR' },
    { name: 'og:locale', content: 'en_EN' },
    // { name: 'fb:app_id', content: '<FB App ID>' },
  ];

  if (published) metaTags.push({ name: 'article:published_time', content: published });
  if (updated) metaTags.push({ name: 'article:modified_time', content: updated });
  if (category) metaTags.push({ name: 'article:section', content: category });
  if (tags) metaTags.push({ name: 'article:tag', content: tags });
  if (image) {
    metaTags.push({ itemprop: 'image', content: seoImageURL(image) });
    metaTags.push({ name: 'twitter:image:src', content: seoImageURL(image) });
    metaTags.push({ name: 'og:image', content: seoImageURL(image) });
    metaTags.push({ name: 'twitter:card', content: 'summary_large_image' });
  } else {
    metaTags.push({ name: 'twitter:card', content: 'summary' });
  }

  return metaTags;
};

const getHtmlAttributes = ({
  schema
}) => {
  let result = {
    lang: 'en',
  };
  if (schema) {
    result = {
      ...result,
      itemscope: undefined,
      itemtype: `http://schema.org/${schema}`,
    }
  }
  return result;
}

getHtmlAttributes.propTypes = {
  schema: PropTypes.string,
};

const Seo = ({
  schema, title, description, path, contentType, published, updated, category, tags, twitter,
}) => (
  <Helmet
    htmlAttributes={getHtmlAttributes({
      schema,
    })}
    title={ `${title} | NEARREST NEIGHBOR`}
    link={[
      { rel: 'canonical', href: absoluteUrl(path) },
    ]}
    meta={getMetaTags({
      title,
      description,
      contentType,
      url: absoluteUrl(path),
      published,
      updated,
      category,
      tags,
      twitter,
    })}
  />
);

Seo.propTypes = {
  schema: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  contentType: PropTypes.string,
  published: PropTypes.string,
  updated: PropTypes.string,
  category: PropTypes.string,
  tags: PropTypes.array,
  twitter: PropTypes.string,
  image: PropTypes.string,
};

export default Seo;