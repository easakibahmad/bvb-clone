import React from 'react';
import './FlexOne.css';

const FlexOne: React.FC = () => {
  return (
    <div className="flex-one__container">
      <header className="flex-one__header">Header</header>
      <div className="flex-one__main-content">
        <aside className="flex-one__sidebar">Sidebar</aside>
        <section className="flex-one__content">
          <h1>Main Content</h1>
          <p>This is an example of a layout using advanced Flexbox techniques in React.</p>
        </section>
      </div>
      <footer className="flex-one__footer">Footer</footer>
    </div>
  );
};

export default FlexOne;
