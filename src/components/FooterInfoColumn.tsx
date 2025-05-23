import React from 'react';

interface FooterInfoColumnProps {
  title: string;
  items: string[];
}

const FooterInfoColumn: React.FC<FooterInfoColumnProps> = ({ title, items }) => {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      {items.map((item, index) => (
        <p key={index} className="mb-4">{item}</p>
      ))}
    </div>
  );
};

export default FooterInfoColumn;
