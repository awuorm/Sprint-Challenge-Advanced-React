import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactDOM from 'react-dom';
import Player from './Player';

jest.mock('axios', () => {
    return {
      get: () => {
        return Promise.resolve({
          data: 
           [{ id: "0", name: "Alex Morgan", country: "United States", searches: 100 }],
        });
      },
    };
  });
  
  let tools;
  
  beforeEach(() => {
        rtl.cleanup();
    tools = rtl.render(<Player player={{ id: "0", name: "Alex Morgan", country: "United States", searches: 100 }}/>);
  });
  
  describe('Players component', () => {
    it('can render a player that comes from api', () => {
        rtl.act(() => {
            tools = rtl.render(<Player player={{ id: "0", name: "Alex Morgan", country: "United States", searches: 100 }} />);
        });
      const elementWithPlayer = tools.queryAllByText(/Alex/);
      expect(elementWithPlayer[0]).toBeInTheDocument();
    });
});