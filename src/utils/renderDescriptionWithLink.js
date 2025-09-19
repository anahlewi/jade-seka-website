// Utility to render a description with a link for the given text
import React from 'react';

export function renderDescriptionWithLink(text, url, description) {
  if (!description || !text || !url) return description || '';
  const parts = description.split(text);
  if (parts.length === 1) return description;
  return (
    <>
      {parts[0]}
      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>{text}</a>
      {parts[1]}
    </>
  );
}
