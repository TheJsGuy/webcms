import React from 'react';
import { css } from 'emotion';
import { Themed } from '../theme/Theme';
import wall from './wall.jpeg';

const styles = getStyles();

const Banner = ({ theme }) => (
  <div className={styles.wrapper(theme, wall)}>
    <h1 className={styles.h1(theme)}>Aman Kumar Saini</h1>
    <small>
      <em>The JavaScript Guy</em>
    </small>
  </div>
);

export default Themed(Banner);

function getStyles() {
  return {
    wrapper: (theme, wall) => css({
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      background: `url(${wall}) center no-repeat`,
      color: theme.colorWhite,
      padding: '10em 10em',
      minHeight: '20em'
    }),
    h1: theme => css({
      display: 'flex',
      width: '100%',
      fontFamily: theme.rubik
    })
  }
}