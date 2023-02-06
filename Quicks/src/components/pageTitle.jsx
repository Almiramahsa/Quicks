import React from 'react';

function pageTitle({ children, ...rest }) {
  return (
    <h1 className="text-center text-primary-blue font-black text-lg md:text-base" {...rest}>
      {children}
    </h1>
  );
}

export default pageTitle;
