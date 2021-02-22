import { defaults, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

import '@pnotify/core/dist/Material.css';
// import 'material-design-icons/iconfont/material-icons.css';

defaults.styling = 'material';
defaults.icons = 'material';

const setNotification = (argument, amount) => {
  if (argument === 'success') {
    defaults.delay = 3000;
    return success({
      text: `Result: ${amount} images`,
    });
  }

  if (argument === 'error') {
    defaults.delay = 3000;
    return error({
      text: '! Incorrect query',
    });
  }
};

export default setNotification;
