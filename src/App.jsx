import { useEffect, useState } from "react";
import { GiPartyPopper } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import "./App.css";

function App() {
  const [solvedBoard, setSolvedBoard] = useState([]);
  const [userValue, setUserValue] = useState([]);
  const [solution, setSolution] = useState([]);
  const [resultMessage, setResultMessage] = useState(null);
  const [difficulty, setDifficulty] = useState("");
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [loading, setLoading] = useState(false);

  async function fetchSudokuSolution(selectedDifficulty) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.api-ninjas.com/v1/sudokugenerate?difficulty=${selectedDifficulty}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "eNNGhjeghOiwSXT27DT4oQ==zQA18cLfYn2Ptick",
          },
        }
      );

      const result = await response.json();
      if (result && result.solution) {
        setSolvedBoard(result.puzzle);
        setSolution(result.solution);
        setResultMessage(null);
        setIsFirstLoad(false);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (solvedBoard.length > 0) {
      setUserValue(
        solvedBoard.map((row) =>
          row.map((item) => (item === null ? "" : item))
        )
      );
    }
  }, [solvedBoard]);

  function handleInputChange(rowIndex, colIndex, value) {
    setUserValue((prevValues) => {
      const updatedValues = prevValues.map((row) => [...row]);
      updatedValues[rowIndex][colIndex] = value;
      return updatedValues;
    });
  }

  function Submitsudoku() {
    let isCorrect = true;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (solvedBoard[i][j] === null) {
          if (userValue[i][j] !== solution[i][j].toString()) {
            isCorrect = false;
            break;
          }
        }
      }
    }
    setResultMessage(
      isCorrect ? (
        <span className="success-message">
          <GiPartyPopper /> Well Done!
        </span>
      ) : (
        <span className="error-message">
          <ImCross /> Incorrect, try again.
        </span>
      )
    );
  }

  return (
    <div className="app-container">
      {/* Overlay during loading */}
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
  
      <div className={`sudoku-container ${loading ? "blurred" : ""}`}>
        <h1 className="title">Sudoku</h1>
        <div className="difficulty-selector">
          <label>Select Difficulty:</label>
          <select
            value={difficulty}
            onChange={(e) => {
              const selectedDifficulty = e.target.value;
              setDifficulty(selectedDifficulty);
              fetchSudokuSolution(selectedDifficulty);
            }}
          >
            <option value="">Choose</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
  
        {solvedBoard.length > 0 && !loading && (
          <>
            <div className="sudoku-grid">
              <table>
                <tbody>
                  {solvedBoard.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((item, colIndex) => (
                        <td
                          key={colIndex}
                          className={item === null ? "editable-cell" : "fixed-cell"}
                        >
                          {item !== null ? (
                            item
                          ) : (
                            <input
                              type="text"
                              inputMode="numeric"
                              maxLength={1}
                              onChange={(e) => {
                                const value = e.target.value;
                                if (/^[1-9]?$/.test(value)) {
                                  handleInputChange(rowIndex, colIndex, value);
                                }
                              }}
                            />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="submit-button" onClick={Submitsudoku}>
              Submit
            </button>
          </>
        )}
  
        {resultMessage && <div className="result-message">{resultMessage}</div>}
      </div>
    </div>
  );
};  

export default App;
