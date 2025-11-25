import React from 'react';
import { words } from './data/Words';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className="container">
        <h1 className="title">Vocabulary List</h1>
        <div className="table-container">
          <table className='table'>
            <thead>
              <tr>
                <th>№</th>
                <th>Word (en)</th>
                <th>Word (uz)</th>
                <th>Definition (en)</th>
                <th>Definition (uz)</th>
              </tr>
            </thead>
            <tbody>
              {words.map((item, index) => {
                return (
                  <tr key={index}>
                    <td data-label="№">{item.id}</td>
                    <td data-label="Word (en)">{item.en.charAt(0).toUpperCase() + item.en.slice(1)}</td>
                    <td data-label="Word (uz)">{item.uz.charAt(0).toUpperCase() + item.uz.slice(1)}</td>
                    <td data-label="Definition (en)">{item.definition_en}</td>
                    <td data-label="Definition (uz)">{item.definition_uz}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App;
