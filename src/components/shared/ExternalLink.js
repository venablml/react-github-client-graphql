import React from 'react';

const ExternalLink = ({ url, label }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
};

export default ExternalLink;
