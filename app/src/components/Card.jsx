import React from 'react';

export const Card = (props) => {
  const { title, image, imageURL } = props;

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }

  const cardStyle = {
    flex: '0 0 calc(25% - 16px)',
    maxWidth: '25%',
    border: '1px solid #333',
    padding: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '8px',
    boxSizing: 'border-box',
    minHeight: '300px'
  };
  
  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  const titleStyle = {
    marginTop: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  return (
    <div style={cardStyle}>
      <img
       src={image}
       alt={title}
       style={imageStyle}
       onClick={() => {openInNewTab(imageURL)}}
      />
      <div style={titleStyle}>{title}</div>
    </div>
  );
}