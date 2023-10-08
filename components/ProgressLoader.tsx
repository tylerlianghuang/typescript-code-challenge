import { useRef, useEffect } from 'react';
import { Spinner } from 'spin.js';
import styled from 'styled-components';

const BackgroundCircle = styled.div`
  margin: auto;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: #3d3b40;
  opacity: 0.95;
  overflow: auto;
  position: absolute;
  top: 44vh;
  left: 46vw;

  @keyframes spinner-line-fade-default {
    0%,
    100% {
      opacity: 0.22;
    }
    1% {
      opacity: 1;
    }
  }
`;

const spinJsConfig = {
  lines: 11, // The number of lines to draw
  length: 0, // The length of each line
  width: 6, // The line thickness
  radius: 16, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  color: '#fff', // #rgb or #rrggbb
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  hwaccel: true, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: '50%', // Top position relative to parent in px
  left: '50%', // Left position relative to parent in px
  position: 'relative'
};

const spinnerObject = new Spinner(spinJsConfig);

export const ProgressLoader = (): JSX.Element => {
  const spinnerEl = useRef(null);

  useEffect(() => {
    spinnerObject.spin(spinnerEl.current || undefined);

    return () => {
      spinnerObject.stop();
    };
  });

  return (
    <BackgroundCircle ref={spinnerEl}>
      <span hidden>Loading</span>
    </BackgroundCircle>
  );
};
