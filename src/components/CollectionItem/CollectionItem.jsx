import React from 'react';
import './CollectionItem.scss';
import Button from '../Button/Button';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <Button inverted> Add to Cart</Button>
  </div>
);

export default CollectionItem;
