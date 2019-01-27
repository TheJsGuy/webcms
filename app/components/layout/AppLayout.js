import React from 'react';
import Banner from '../banner/Banner';
import { css } from 'emotion';
import { Theme, Themed } from '../theme/Theme';

const styles = getStyles();

const AppLayout = Themed(
  ({ theme }) => (
    <div className={styles.wrapper(theme)}>
      <Banner />
    </div>
  )
);

const ThemedLayout = () => (
  <Theme>
    <AppLayout />
  </Theme>
);

export default ThemedLayout;

function getStyles() {
  return {
    wrapper: (theme) => css(`
    @import url('https://fonts.googleapis.com/css?family=Raleway|Rubik');
    font-family: ${theme.raleway};
    `)
  }
}