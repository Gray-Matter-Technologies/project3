import React from "react";
import styled from "styled-components";

const Description = styled.p`
  margin-bottom: 25px;
  font-size: 18px;
  padding: 0 370px;

  @media (max-width: 768px) {
    padding: 0 35px;
  }

  @media (min-width: 768px) and (max-width: 1224px) {
    padding: 0 85px;
  }

  @media (min-width: 1224px) and (max-width: 1824px) {
    padding: 0 155px;
  }
`;

const TabDescription = () => (
  <div>
    <Description>
      Got a few boxes to shift, an apartment or entire house? Get your home
      moved just the way you want, by whom you want, when you want. Let
      Airtasker shoulder the load.
    </Description>
    <Description>
      Taking a big leap and need some expert advice or assistance? Airtasker can
      help you get some cracking marketing collateral, admin muscle or a few
      extra hands to help ease the burden.
    </Description>
    <Description>
      Do you have a hole in the wall that needs plugging? Perhaps a TV that
      needs mounting? Or maybe you have that perfect shade of green, but no time
      to paint? Get a Tasker to help.
    </Description>
    <Description>
      Got something to celebrate and the guest list all ready, but need
      everything else? Let Airtasker help you find the best bartenders, party
      planners, photographers and entertainment in the land.
    </Description>
    <Description>
      Got something to celebrate and the guest list all ready, but need
      everything else? Let Airtasker help you find the best bartenders, party
      planners, photographers and entertainment in the land.
    </Description>
  </div>
);

export default TabDescription;
