import React from 'react';

const BuyingOption = ({
  option,
  releaseData,
  index,
  currentItemIndex,
  buyingOption,
}) => {
  const shouldNotAddCommaAfter =
    index === releaseData[currentItemIndex][buyingOption].length - 1;

  return (
    <span>
      <a href={`${option.link}`}>{`${option.name}`}</a>
      {`${shouldNotAddCommaAfter ? '' : ', '}`}
    </span>
  );
};

export default BuyingOption;
