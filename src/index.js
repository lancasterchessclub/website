import React from 'react';
import { hydrate, render } from "react-dom";
import './index.css';
import Site from './App';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Site />, rootElement);
} else {
  render(<Site />, rootElement);
}
