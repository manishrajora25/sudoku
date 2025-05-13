import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [solvedBoard, setSolvedBoard] = useState([]);
  const [userName, setUserValue] = useState([]);
  const [solution, setSolution] = useState([]);

  async function fetchSudokuSolution() {
    try {
      const response = await fetch(
        "https://api.api-ninjas.com/v1/sudokugenerate?difficulty=easy",
        {
          method: "GET",
          headers: {
            "X-Api-Key": "eNNGhjeghOiwSXT27DT4oQ==zQA18cLfYn2Ptick",
          },
        }
      );

      const result = await response.json();
      console.log(result);
      if (result && result.solution) {
        setSolvedBoard(result.puzzle);
        setSolution(result.solution);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    if (solvedBoard.length > 0) {
      setUserValue(
        solvedBoard.map((row) => row.map((cell) => (cell === null ? "" : cell)))
      );
    }
  }, [solvedBoard]);

  function handleInputChange(rowIndex, Index, updatevalue) {
    setUserValue((previtems) => {
      const userUpdateValue = previtems.map((row) => [...row]);
      userUpdateValue[rowIndex][Index] = updatevalue;
      return userUpdateValue;
    });
  }
  let Condition = true;

  function Nextsudoku() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (solvedBoard[i][j] == null) {
          if (userName[i][j] !== solution[i][j].toString()) {
            Condition = false;
            break;
            }
        }
      }
    }
    if (Condition) {
      console.log("Well Done");
    } else {
      console.log("Next Try");
    }
  }

  useEffect(() => {
    fetchSudokuSolution();
  }, []);

  return (
    <>
      <div>
        <div>
          <div >
            {solvedBoard.length > 0 ? (
              <table >
                <tbody>
                  {solvedBoard.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((item, Index) => (
                        <td
                          key={Index}
                          
                        >
                          {item !== null ? (
                            item
                          ) : (
                            <input
                              
                              onChange={(e) =>
                                handleInputChange(
                                  rowIndex,
                                  Index,
                                  e.target.value
                                )
                              }
                             
                            ></input>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <button
            onClick={Nextsudoku}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
export default App;