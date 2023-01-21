import React from 'react';
import { cats } from './cats';
import Card from './components/Card';

const App = () => {
  return (
    <div className="app">
      <div className="cats">
        <div className="cats__container">
          <h1 className="cats__title">Ты сегодня покормил кота?</h1>
          <div className="cats__cards">
            {cats.map((cat) => (
              <Card {...cat} key={cat.with} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
