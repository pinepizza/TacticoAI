import React, { useState } from 'react';
import './App.css';

function App() {
  const [teamFormation, setTeamFormation] = useState('4-2-3-1');
  const [playingStyle, setPlayingStyle] = useState('Balanced');
  const [staminaLevel, setStaminaLevel] = useState(85);
  const [startersAvailability, setStartersAvailability] = useState(true);
  const [teamChemistry, setTeamChemistry] = useState(8.5);
  const [result, setResult] = useState(null);

  const calculateWinningChance = () => {
    if (startersAvailability) {
      if (staminaLevel >= 85) {
        if (teamChemistry >= 8.5) {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'Very very high chances of winning';
            else if (playingStyle === 'Balanced') return 'Very High chances of winning';
            else return 'High chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'Very very high chances of winning';
            else if (playingStyle === 'Attacking') return 'Very High chances of winning';
            else return 'Very High chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'Very very high chances of winning';
            else if (playingStyle === 'Balanced') return 'Very high chances of winning';
            else return 'High chances of winning';
          }
        } else if (teamChemistry >= 7) {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'Very High chances of winning';
            else if (playingStyle === 'Balanced') return 'High chances of winning';
            else return 'Moderate-High chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'Very High chances of winning';
            else if (playingStyle === 'Attacking') return 'High chances of winning';
            else return 'Moderate-High chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'Very High chances of winning';
            else if (playingStyle === 'Balanced') return 'High chances of winning';
            else return 'Moderate-High chances of winning';
          }
        } else {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'High chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate-High chances of winning';
            else return 'Moderate chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'High chances of winning';
            else if (playingStyle === 'Attacking') return 'Moderate-High chances of winning';
            else return 'Moderate-High chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'High chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate-High chances of winning';
            else return 'Moderate chances of winning';
          }
        }
      } else if (staminaLevel >= 70) {
        if (teamChemistry >= 8.5) {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'Very high chances of winning';
            else if (playingStyle === 'Balanced') return 'High chances of winning';
            else return 'Moderate-High chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'Very high chances of winning';
            else if (playingStyle === 'Attacking') return 'High chances of winning';
            else return 'High chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'Very high chances of winning';
            else if (playingStyle === 'Balanced') return 'High chances of winning';
            else return 'Moderate-High chances of winning';
          }
        } else if (teamChemistry >= 7) {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'High chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate-High chances of winning';
            else return 'Moderate chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'High chances of winning';
            else if (playingStyle === 'Attacking') return 'Moderate-High chances of winning';
            else return 'Moderate chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'High chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate-High chances of winning';
            else return 'Moderate chances of winning';
          }
        } else {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'Moderate-High chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate chances of winning';
            else return 'Moderate-Low chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'Moderate-High chances of winning';
            else if (playingStyle === 'Attacking') return 'Moderate chances of winning';
            else return 'Moderate-Low chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'Moderate-High chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate chances of winning';
            else return 'Moderate-Low chances of winning';
          }
        }
      } else {
        if (teamChemistry >= 8.5) {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'Very high chances of winning';
            else if (playingStyle === 'Balanced') return 'High chances of winning';
            else return 'Moderate-High chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'Very high chances of winning';
            else if (playingStyle === 'Attacking') return 'High chances of winning';
            else return 'Moderate-High chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'Very high chances of winning';
            else if (playingStyle === 'Balanced') return 'High chances of winning';
            else return 'Moderate-High chances of winning';
          }
        } else if (teamChemistry >= 7) {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'High chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate-High chances of winning';
            else return 'Moderate chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'High chances of winning';
            else if (playingStyle === 'Attacking') return 'Moderate-High chances of winning';
            else return 'Moderate chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'High chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate-High chances of winning';
            else return 'Moderate chances of winning';
          }
        } else {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'Moderate-High chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate chances of winning';
            else return 'Moderate-Low chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'Moderate-High chances of winning';
            else if (playingStyle === 'Attacking') return 'Moderate chances of winning';
            else return 'Moderate chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'Moderate-High chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate chances of winning';
            else return 'Moderate-Low chances of winning';
          }
        }
      }
    } else {
      if (staminaLevel >= 85) {
        if (teamChemistry >= 8.5) {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'High chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate-High chances of winning';
            else return 'Moderate chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'High chances of winning';
            else if (playingStyle === 'Attacking') return 'Moderate-High chances of winning';
            else return 'Moderate chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'High chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate-High chances of winning';
            else return 'Moderate chances of winning';
          }
        } else if (teamChemistry >= 7) {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'Moderate-High chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate chances of winning';
            else return 'Moderate-Low chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'Moderate-High chances of winning';
            else if (playingStyle === 'Attacking') return 'Moderate chances of winning';
            else return 'Moderate-Low chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'Moderate-High chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate chances of winning';
            else return 'Moderate-Low chances of winning';
          }
        } else {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'Moderate chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate-Low chances of winning';
            else return 'Low chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'Moderate chances of winning';
            else if (playingStyle === 'Attacking') return 'Moderate-Low chances of winning';
            else return 'Low chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'Moderate chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate-Low chances of winning';
            else return 'Low chances of winning';
          }
        }
      } else if (staminaLevel >= 70) {
        if (teamChemistry >= 8.5) {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'Moderate-High chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate chances of winning';
            else return 'Moderate-Low chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'Moderate-High chances of winning';
            else if (playingStyle === 'Attacking') return 'Moderate chances of winning';
            else return 'Moderate-Low chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'Moderate-High chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate chances of winning';
            else return 'Moderate-Low chances of winning';
          }
        } else if (teamChemistry >= 7) {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'Moderate chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate-Low chances of winning';
            else return 'Low chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'Moderate chances of winning';
            else if (playingStyle === 'Attacking') return 'Moderate-Low chances of winning';
            else return 'Low chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'Moderate chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate-Low chances of winning';
            else return 'Low chances of winning';
          }
        } else {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'Moderate-Low chances of winning';
            else if (playingStyle === 'Balanced') return 'Low chances of winning';
            else return 'Very Low chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'Moderate-Low chances of winning';
            else if (playingStyle === 'Attacking') return 'Low chances of winning';
            else return 'Very Low chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'Moderate-Low chances of winning';
            else if (playingStyle === 'Balanced') return 'Low chances of winning';
            else return 'Very Low chances of winning';
          }
        }
      } else {
        if (teamChemistry >= 8.5) {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'Moderate chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate-Low chances of winning';
            else return 'Moderate chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'Moderate chances of winning';
            else if (playingStyle === 'Attacking') return 'Moderate-Low chances of winning';
            else return 'Moderate chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'Moderate chances of winning';
            else if (playingStyle === 'Balanced') return 'Moderate-Low chances of winning';
            else return 'Moderate chances of winning';
          }
        } else if (teamChemistry >= 7) {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'Moderate-Low chances of winning';
            else if (playingStyle === 'Balanced') return 'Low chances of winning';
            else return 'Very Low chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'Moderate-Low chances of winning';
            else if (playingStyle === 'Attacking') return 'Low chances of winning';
            else return 'Very Low chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'Moderate-Low chances of winning';
            else if (playingStyle === 'Balanced') return 'Low chances of winning';
            else return 'Very Low chances of winning';
          }
        } else {
          if (teamFormation === '4-3-3') {
            if (playingStyle === 'Attacking') return 'Low chances of winning';
            else if (playingStyle === 'Balanced') return 'Very Low chances of winning';
            else return 'Very very Low chances of winning';
          } else if (teamFormation === '4-2-3-1') {
            if (playingStyle === 'Balanced') return 'Low chances of winning';
            else if (playingStyle === 'Attacking') return 'Very Low chances of winning';
            else return 'Very very Low chances of winning';
          } else {
            if (playingStyle === 'Defensive') return 'Low chances of winning';
            else if (playingStyle === 'Balanced') return 'Very Low chances of winning';
            else return 'Very very Low chances of winning';
          }
        }
      }
    }
  };

  const isGoodStrategy = () => {
    return startersAvailability && 
           staminaLevel >= 85 && 
           teamChemistry >= 8.5 && 
           ((teamFormation === '4-3-3' && playingStyle === 'Attacking') || 
            (teamFormation === '4-2-3-1' && playingStyle === 'Balanced') || 
            (teamFormation === '5-3-2' && playingStyle === 'Defensive'));
  };

  const handleAnalyze = () => {
    const chance = calculateWinningChance();
    const optimal = isGoodStrategy();
    setResult({ chance, optimal });
  };

  const getResultColor = (chance) => {
    if (chance.includes('Very very high') || chance.includes('Very High')) return 'green';
    if (chance.includes('High')) return 'lime';
    if (chance.includes('Moderate-High')) return 'yellow';
    if (chance.includes('Moderate-Low') || chance.includes('Low')) return 'orange';
    if (chance.includes('Very Low') || chance.includes('Very very Low')) return 'red';
    return 'gray';
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>⚽ Team Tactics Analyzer</h1>
          <p>Optimize your team strategy and predict match outcomes</p>
        </div>

        <div className="content">
          <div className="form-grid">
            <div className="form-group">
              <label>👥 Team Formation</label>
              <select 
                value={teamFormation}
                onChange={(e) => setTeamFormation(e.target.value)}
              >
                <option value="4-3-3">4-3-3 (Attacking)</option>
                <option value="4-2-3-1">4-2-3-1 (Versatile)</option>
                <option value="5-3-2">5-3-2 (Defensive)</option>
              </select>
            </div>

            <div className="form-group">
              <label>⚡ Playing Style</label>
              <select 
                value={playingStyle}
                onChange={(e) => setPlayingStyle(e.target.value)}
              >
                <option value="Attacking">Attacking</option>
                <option value="Balanced">Balanced</option>
                <option value="Defensive">Defensive</option>
              </select>
            </div>

            <div className="form-group">
              <label>🔋 Stamina Level: {staminaLevel}%</label>
              <input 
                type="range"
                min="0"
                max="100"
                value={staminaLevel}
                onChange={(e) => setStaminaLevel(parseInt(e.target.value))}
              />
              <div className="slider-labels">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
              </div>
            </div>

            <div className="form-group">
              <label>🏆 Team Chemistry: {teamChemistry.toFixed(1)}</label>
              <input 
                type="range"
                min="0"
                max="10"
                step="0.1"
                value={teamChemistry}
                onChange={(e) => setTeamChemistry(parseFloat(e.target.value))}
              />
              <div className="slider-labels">
                <span>0.0</span>
                <span>5.0</span>
                <span>10.0</span>
              </div>
            </div>
          </div>

          <div className="checkbox-container">
            <label>
              <input 
                type="checkbox"
                checked={startersAvailability}
                onChange={(e) => setStartersAvailability(e.target.checked)}
              />
              <span>Key Players Available (Starting XI)</span>
            </label>
          </div>

          <button onClick={handleAnalyze} className="analyze-btn">
            Analyze Strategy
          </button>

          {result && (
            <div className="results">
              <div className="result-card">
                <h3>🎯 Match Outcome Prediction</h3>
                <p className={`result-text ${getResultColor(result.chance)}`}>
                  {result.chance}
                </p>
              </div>

              <div className={`optimal-card ${result.optimal ? 'optimal' : 'not-optimal'}`}>
                <h3>⭐ Strategy Assessment</h3>
                {result.optimal ? (
                  <div className="optimal-indicator">
                    <div className="pulse"></div>
                    <p>Optimal Strategy Configuration!</p>
                  </div>
                ) : (
                  <div>
                    <div className="optimal-indicator warning">
                      <p>⚠️ Strategy can be optimized</p>
                    </div>
                    <div className="tips">
                      <strong>💡 Tip:</strong> For optimal results, ensure key players are available with stamina ≥85%, chemistry ≥8.5, and match formation with style:
                      <ul>
                        <li>4-3-3 + Attacking</li>
                        <li>4-2-3-1 + Balanced</li>
                        <li>5-3-2 + Defensive</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="footer">
          <p>Team Tactics Analyzer v1.0 | Data-driven football strategy optimization</p>
        </div>
      </div>
    </div>
  );
}

export default App;