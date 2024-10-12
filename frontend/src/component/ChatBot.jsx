import {React} from "react";
import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const ChatBot =() => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take upto 10 seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBDQoy9THsM6oN-RpJdkO-XydbMcCBPwPA`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return(
    <>
    <div className="chatbot-container">
    <div className="answer">
      <ReactMarkdown>{answer}</ReactMarkdown>
    </div>
    <form
      onSubmit={generateAnswer}
      className="chat-form"
    >
      <input
        required
        className="t1"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything"
      />
      <button
        type="submit"
        className="bsf"
        disabled={generatingAnswer}
      >
        Generate
      </button>
    </form>
  </div>
    </>
  )
}

export default ChatBot