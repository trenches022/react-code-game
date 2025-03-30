import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript"; 
import { dracula } from "@uiw/codemirror-theme-dracula"; 
import useStore from "../store/useStore";
import { useNavigate } from "react-router-dom";
import "../App.css";

const CodeEditor = ({ level }) => {
  const navigate = useNavigate();
  const { userCode, setUserCode, completeLevel, currentLevel, totalLevels } = useStore();
  const [code, setCode] = useState(userCode || "");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const initial = level.initialCode || "";
    setCode(initial);
    setUserCode(initial);
  }, [level]);

  const handleChange = (newCode) => {
    setCode(newCode);
    setUserCode(newCode);
  };

  const checkSolution = () => {
    if (!level || !level.solution) {
      setMessage("⚠️ No solution available for this level.");
      return;
    }

    const cleanedUserCode = code.replace(/\s+/g, "").trim();
    const cleanedSolution = level.solution.replace(/\s+/g, "").trim();

    console.log("Cleaned User Code:", cleanedUserCode);
    console.log("Cleaned Solution:", cleanedSolution);

    if (cleanedUserCode === cleanedSolution) {
      setMessage("✅ Correct! Moving to the next level...");
      setTimeout(() => {
        completeLevel(level.id);
        setMessage('');

        if (currentLevel + 1 <= totalLevels) {
          navigate(`/game/${currentLevel + 1}`);
        } else {
          navigate("/congratulations");
        }
      }, 1000);
    } else {
      setMessage("❌ Incorrect! Try again.");
    }
  };

  return (
    <>
      <div className="code-editor-container">
        <CodeMirror 
          value={code}
          height="300px"
          extensions={[javascript()]}
          theme={dracula}
          onChange={handleChange}
        />
      </div>
      <button className="check-button" onClick={checkSolution}>Check Solution</button>
      {message && <p className="check-message">{message}</p>}
    </>
  );
};

export default CodeEditor;