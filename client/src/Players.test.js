import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactDOM from 'react-dom';

jest.mock('axios', () => {
    return {
      get: () => {
        return Promise.resolve({
  data = [
    { name: "Alex Morgan", country: "United States", searches: 100 },
    { name: "Megan Rapinoe", country: "United States", searches: 99 },
    { name: "Marta", country: "Brazil", searches: 18 },
    { name: "Rose Lavelle", country: "United States", searches: 11 },
    { name: "Carli Lloyd", country: "United States", searches: 9 }],
          });
        },
      };
    });
  
    let tools;
  
    beforeEach(() => {
      rtl.cleanup();
  tools = rtl.render();
    });