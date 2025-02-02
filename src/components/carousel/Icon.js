import PropTypes from 'prop-types';
import Iconify from '../iconify';

// ----------------------------------------------------------------------

LeftIcon.propTypes = {
  isRTL: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export function LeftIcon({ icon = 'eva:arrow-ios-forward-fill', isRTL }) {
  return (
    <Iconify
      icon={icon}
      sx={{
        width: 17,
        height: 26,
        transform: ' scaleX(-1)',
        ...(isRTL && {
          transform: ' scaleX(1)',
        }),
      }}
    />
  );
}

RightIcon.propTypes = {
  isRTL: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export function RightIcon({ icon = 'eva:arrow-ios-forward-fill', isRTL }) {
  return (
    <Iconify
      icon={icon}
      sx={{
        width: 17,
        height: 26,
        ...(isRTL && {
          transform: ' scaleX(-1)',
        }),
      }}
    />
  );
}
