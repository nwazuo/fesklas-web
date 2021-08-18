import React from 'react';
import { Button } from 'antd';

// modifying this to a component that
// receives data for rendering
// a pricing tier

const PricingCard = ({
  isCurrent,
  isHighlightedDeal,
  price,
  tierName,
  features,
}) => {
  return (
    <div
      className={`gx-package ${
        isHighlightedDeal && `gx-bg-primary-light gx-highlight gx-border-0`
      } ${isCurrent && `current-subscription`}`}
    >
      <div className="gx-package-header gx-bg-primary gx-text-white">
        <h2 className="gx-price">
          <i className="icon icon-halfstar" />
          {price}
        </h2>
        <p className="gx-letter-spacing-base gx-text-white gx-text-uppercase gx-mb-0">
          {tierName}
        </p>
      </div>

      <div
        className={`gx-package-body ${isHighlightedDeal && `gx-text-white`}`}
      >
        <ul className="gx-package-items">
          {features.map((feature) => (
            <li>
              <i className="icon icon-sent"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="gx-package-footer">
          {!isCurrent ? (
            <Button
              type="primary"
              className={`${isHighlightedDeal && `gx-btn-primary`}`}
            >
              Subscribe
            </Button>
          ) : (
            <Button disabled>Subscribe</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
