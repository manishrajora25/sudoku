// import { useEffect, useState } from "react";
// import { GiPartyPopper } from "react-icons/gi";
// import { ImCross } from "react-icons/im";
// import "./App.css";

// function App() {
//   const [solvedBoard, setSolvedBoard] = useState([]);
//   const [userValue, setUserValue] = useState([]);
//   const [solution, setSolution] = useState([]);
//   const [resultMessage, setResultMessage] = useState(null);
//   const [difficulty, setDifficulty] = useState("");
//   const [isFirstLoad, setIsFirstLoad] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [showSudoku, setShowSudoku] = useState(true);

//   async function fetchSudokuSolution(selectedDifficulty) {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `https://api.api-ninjas.com/v1/sudokugenerate?difficulty=${selectedDifficulty}`,
//         {
//           method: "GET",
//           headers: {
//             "X-Api-Key": "eNNGhjeghOiwSXT27DT4oQ==zQA18cLfYn2Ptick",
//           },
//         }
//       );
      
      
//       const result = await response.json();
//       if (result && result.solution) {
//         console.log(result.solution);
//         setSolvedBoard(result.puzzle);
//         setSolution(result.solution);
//         setResultMessage(null);
//         setIsFirstLoad(false);
//         setShowSudoku(true); // Ensure the Sudoku grid is displayed when a new puzzle is loaded
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     if (solvedBoard.length > 0) {
//       setUserValue(
//         solvedBoard.map((row) =>
//           row.map((item) => (item === null ? "" : item))
//         )
//       );
//     }
//   }, [solvedBoard]);

//   function handleInputChange(rowIndex, colIndex, value) {
//     if(value === ""   (value === "1" && value <="9")){
//     setUserValue((prevValues) => {
//       const updatedValues = prevValues.map((row) => [...row]);
//       updatedValues[rowIndex][colIndex] = value;
//       return updatedValues;
//     });
//   } 
//   else {
//     alert("Please enter a number between 1 and 9.");
//    return;
//   }
// }

//   function Submitsudoku() {
//     let isCorrect = true;
//     for (let i = 0; i < 9; i++) {
//       for (let j = 0; j < 9; j++) {
//         if (solvedBoard[i][j] === null) {
//           if (userValue[i][j] !== solution[i][j].toString()) {
//             isCorrect = false;
//             break;
//           }
//         }
//       }
//     }
//     setResultMessage(
//       isCorrect ? (
//         <span className="success_message">
//           <GiPartyPopper /> Well Done!
//         </span>
//       ) : (
//         <span className="error_message">
//           <ImCross /> Incorrect, try again.
//         </span>
//       )
//     );
//     setShowSudoku(false); 
//   }

//   return (
//     <div className="app-container">
//       {loading && (
//         <div className="loading-overlay">
//           <div className="spinner"></div>
//         </div>
//       )}

//       {showSudoku ? (
//         <div className={`sudoku-container ${loading ? "blurred" : ""}`}>
//           <h1 className="title">Sudoku</h1>
//           <div className="difficulty-selector">
//             <label>Select Difficulty:</label>
//             <select
//               value={difficulty}
//               onChange={(e) => {
//                 const selectedDifficulty = e.target.value;
//                 setDifficulty(selectedDifficulty);
//                 fetchSudokuSolution(selectedDifficulty);
//               }}
//             >
//               <option value="">Choose</option>
//               <option value="easy">Easy</option>
//               <option value="medium">Medium</option>
//               <option value="hard">Hard</option>
//             </select>
//           </div>

//           {solvedBoard.length > 0 && !loading && (
//             <>
//               <div className="sudoku-grid">
//                 <table>
//                   <tbody>
//                     {solvedBoard.map((row, rowIndex) => (
//                       <tr key={rowIndex}>
//                         {row.map((item, colIndex) => (
//                           <td
//                             key={colIndex}
//                             className={item === null ? "editable-cell" : "fixed-cell"}
//                           >
//                             {item !== null ? (
//                               item
//                             ) : (
//                               <input
//                               type="number"
//                               inputMode="numeric"
//                               maxLength={1}
//                               onChange={(e) => {
//                                 const value = e.target.value;
//                                 if (/^[1-9]?$/.test(value)) {
//                                   handleInputChange(rowIndex, colIndex, value);
//                                 } else {
//                                   alert("Please enter a number between 1 and 9.");
//                                   return; // Stop further execution here if input is invalid
//                                 }
//                               }}
//                             />
                            
//                             )}
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <button className="submit-button" onClick={Submitsudoku}>
//                 Submit
//               </button>
//             </>
//           )}
//         </div>
//       ) : (
//         <div className="result-container">{resultMessage}</div>
//       )}
//     </div>
//   );
// }

// export default App;













// import { useEffect, useState } from "react";
// import { GiPartyPopper } from "react-icons/gi";
// import { ImCross } from "react-icons/im";
// import "./App.css";

// function App() {
//   const [solvedBoard, setSolvedBoard] = useState([]);
//   const [userValue, setUserValue] = useState([]);
//   const [solution, setSolution] = useState([]);
//   const [resultMessage, setResultMessage] = useState(null);
//   const [difficulty, setDifficulty] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showSudoku, setShowSudoku] = useState(true);

//   async function fetchSudokuSolution(selectedDifficulty) {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `https://api.api-ninjas.com/v1/sudokugenerate?difficulty=${selectedDifficulty}`,
//         {
//           method: "GET",
//           headers: {
//             "X-Api-Key": "eNNGhjeghOiwSXT27DT4oQ==zQA18cLfYn2Ptick",
//           },
//         }
//       );

//       const result = await response.json();
//       if (result && result.solution) {
//         console.log(result.solution);
//         setSolvedBoard(result.puzzle);
//         setSolution(result.solution);
//         setResultMessage(null);
//         setShowSudoku(true);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     if (solvedBoard.length > 0) {
//       setUserValue(
//         solvedBoard.map((row) =>
//           row.map((item) => (item === null ? "" : item))
//         )
//       );
//     }
//   }, [solvedBoard]);

//   function handleInputChange(rowIndex, colIndex, value) {
//     // Allow empty string or numbers 1-9 only
//     if (value === "" || (/^[1-9]$/.test(value) && value.length === 1)) {
//       setUserValue((prevValues) => {
//         const updatedValues = prevValues.map((row) => [...row]);
//         updatedValues[rowIndex][colIndex] = value;
//         return updatedValues;
//       });
//     } else {
//       alert("Please enter a number between 1 and 9.");
//       return;
//     }
//   }

//   function Submitsudoku() {
//     let isCorrect = true;
//     for (let i = 0; i < 9; i++) {
//       for (let j = 0; j < 9; j++) {
//         if (solvedBoard[i][j] === null) {
//           if (userValue[i][j] !== solution[i][j].toString()) {
//             isCorrect = false;
//             break;
//           }
//         }
//       }
//     }
//     setResultMessage(
//       isCorrect ? (
//         <span className="success_message">
//           <GiPartyPopper /> Well Done!
//         </span>
//       ) : (
//         <span className="error_message">
//           <ImCross /> Incorrect, try again.
//         </span>
//       )
//     );
//     setShowSudoku(false);
//   }

//   return (
//     <div className="app-container">
//       {loading && (
//         <div className="loading-overlay">
//           <div className="spinner"></div>
//         </div>
//       )}

//       {showSudoku ? (
//         <div className={`sudoku-container ${loading ? "blurred" : ""}`}>
//           <h1 className="title">Sudoku</h1>
//           <div className="difficulty-selector">
//             <label>Select Difficulty:</label>
//             <select
//               value={difficulty}
//               onChange={(e) => {
//                 const selectedDifficulty = e.target.value;
//                 setDifficulty(selectedDifficulty);
//                 fetchSudokuSolution(selectedDifficulty);
//               }}
//             >
//               <option value="">Choose</option>
//               <option value="easy">Easy</option>
//               <option value="medium">Medium</option>
//               <option value="hard">Hard</option>
//             </select>
//           </div>

//           {solvedBoard.length > 0 && !loading && (
//             <>
//               <div className="sudoku-grid">
//                 <table>
//                   <tbody>
//                     {solvedBoard.map((row, rowIndex) => (
//                       <tr key={rowIndex}>
//                         {row.map((item, colIndex) => (
//                           <td
//                             key={colIndex}
//                             className={item === null ? "editable-cell" : "fixed-cell"}
//                           >
//                             {item !== null ? (
//                               item
//                             ) : (
//                               <input
//                                 type="text"
//                                 inputMode="numeric"
//                                 maxLength={1}
//                                 value={userValue[rowIndex]?.[colIndex] || ""}
//                                 onChange={(e) => {
//                                   const value = e.target.value;
//                                   if (/^[1-9]?$/.test(value)) {
//                                     handleInputChange(rowIndex, colIndex, value);
//                                   } else {
//                                     alert("Please enter a number between 1 and 9.");
//                                     return;
//                                   }
//                                 }}
//                               />
//                             )}
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <button className="submit-button" onClick={Submitsudoku}>
//                 Submit
//               </button>
//             </>
//           )}
//         </div>
//       ) : (
//         <div className="result-container">{resultMessage}</div>
//       )}
//     </div>
//   );
// }

// export default App;






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
  const [loading, setLoading] = useState(false);
  const [showSudoku, setShowSudoku] = useState(true);

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
        console.log(result.solution);
        setSolvedBoard(result.puzzle);
        setSolution(result.solution);
        setResultMessage(null);
        setShowSudoku(true);
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
    if (value === "" || (/^[1-9]$/.test(value) && value.length === 1)) {
      setUserValue((prevValues) => {
        const updatedValues = prevValues.map((row) => [...row]);
        updatedValues[rowIndex][colIndex] = value;
        return updatedValues;
      });
    } else {
      alert("Please enter a number between 1 and 9.");
      return;
    }
  }

  function Submitsudoku() {
    let isCorrect = true;
  
    // Iterate over the rows and columns to compare user input with the solution
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const solutionValue = solution[i][j].toString(); // Convert solution to string
        const userInput = userValue[i][j];
  
        if (solvedBoard[i][j] === null) {
          // Only check editable cells
          if (userInput !== solutionValue) {
            isCorrect = false;
            break;
          }
        }
      }
    }
  
    // Set result message based on the comparison
    setResultMessage(
      isCorrect ? (
        <div className="result-message success">
          <GiPartyPopper className="icon" />
          <span>Well Done!</span>
        </div>
      ) : (
        <div className="result-message error">
          <ImCross className="icon" />
          <span>Incorrect, Try Again.</span>
        </div>
      )
    );
  
    setShowSudoku(false);
  }
  

  function handleRetry() {
    setSolvedBoard([]);
    setUserValue([]);
    setSolution([]);
    setResultMessage(null);
    setDifficulty("");
    setShowSudoku(true);
  }

  return (
    <div className="app_container">
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}

      {showSudoku ? (
        <div className={`sudoku_container ${loading ? "blurred" : ""}`}>
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
                                value={userValue[rowIndex]?.[colIndex] || ""}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  if (/^[1-9]?$/.test(value)) {
                                    handleInputChange(rowIndex, colIndex, value);
                                  } else {
                                    alert("Please enter a number between 1 and 9.");
                                    return;
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
        </div>
      ) : (
        <div className="result-container">
          {resultMessage}
          <button className="retry-button" onClick={handleRetry}>
            Retry
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
