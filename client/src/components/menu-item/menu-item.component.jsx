import React from 'react';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const { t } = useTranslation();

  return (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer className='content'>
      <ContentTitle>{t(`${title.toUpperCase()}`)}</ContentTitle>
      <ContentSubtitle>{t('shopNow')}</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);
}

export default withRouter(MenuItem);
