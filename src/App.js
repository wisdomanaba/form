import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

    const [state, setState] = useState({
        type: "A",
        classSelected: "A",
        subject: "A",
        term: "A",
        week: "A",
        topic: "A",
        questions: [
            {   id: 1,
                question: "", 
                answerA: "", 
                answerB: "", 
                answerC: "", 
                answerD: "", 
                correctAnswer: "", 
                correction: "", 
                correctionImage: ""
            }
        ]
    })

    useEffect(() => {
        console.log(state)
    })

    const handleSubmit = (evt) => {
        evt.preventDefault()

        const { type, classSelected, subject, term, week, topic, questions } = state

        const data = { type, classSelected, subject, term, week, topic, questions }

        fetch('https://firstclassbrain-server.herokuapp.com/upload-test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const handleAddShareholder = () => {
        setState({...state, questions: state.questions.concat([{ id: state.questions.length + 1 }]) });
    }

    const handleRemoveShareholder = (idx) => () => {
        setState({...state, questions: state.questions.filter((s, qidx) => idx !== qidx) });
    }
  
    const onChangeEvent = (event) => {
        setState({...state, [event.target.name]: event.target.value })
    }

    const handleShareholderQuestionChange = (idx) => (evt) => {
        const newQuestions = state.questions.map((shareholder, qidx) => {
          if (idx !== qidx) return shareholder;
          return { ...shareholder, question: evt.target.value };
        });
        
        setState({...state, questions: newQuestions });
    }

    const handleShareholderAnsweraChange = (idx) => (evt) => {
        const newQuestions = state.questions.map((shareholder, qidx) => {
          if (idx !== qidx) return shareholder;
          return { ...shareholder, answerA: evt.target.value };
        });
        
        setState({...state, questions: newQuestions });
    }

    const handleShareholderAnswerbChange = (idx) => (evt) => {
        const newQuestions = state.questions.map((shareholder, qidx) => {
          if (idx !== qidx) return shareholder;
          return { ...shareholder, answerB: evt.target.value };
        });
        
        setState({...state, questions: newQuestions });
    }

    const handleShareholderAnswercChange = (idx) => (evt) => {
        const newQuestions = state.questions.map((shareholder, qidx) => {
          if (idx !== qidx) return shareholder;
          return { ...shareholder, answerC: evt.target.value };
        });
        
        setState({...state, questions: newQuestions });
    }

    const handleShareholderAnswerdChange = (idx) => (evt) => {
        const newQuestions = state.questions.map((shareholder, qidx) => {
          if (idx !== qidx) return shareholder;
          return { ...shareholder, answerD: evt.target.value };
        });
        
        setState({...state, questions: newQuestions });
    }

    const handleShareholderCorrectAnswerChange = (idx) => (evt) => {
        const newQuestions = state.questions.map((shareholder, qidx) => {
          if (idx !== qidx) return shareholder;
          return { ...shareholder, correctAnswer: evt.target.value };
        });
        
        setState({...state, questions: newQuestions });
    }

    const handleShareholderCorrectionChange = (idx) => (evt) => {
        const newQuestions = state.questions.map((shareholder, qidx) => {
          if (idx !== qidx) return shareholder;
          return { ...shareholder, correction: evt.target.value };
        });
        
        setState({...state, questions: newQuestions });
    }

    const handleShareholderCorrectionImageChange = (idx) => (evt) => {
        const newQuestions = state.questions.map((shareholder, qidx) => {
          if (idx !== qidx) return shareholder;
          return { ...shareholder, correctionImage: evt.target.value };
        });
        
        setState({...state, questions: newQuestions });
    }

    return (
        <form onSubmit={handleSubmit}>
          <h2>Set Test</h2>

            <div className="flex">
                <div>
                    <label>Type</label>
                    <br />
                    <select name="type" value={ state.type } onChange={ onChangeEvent }>
                            <option value={3}>Assignment</option>
                            <option value="2">Mid-Term test</option>
                            <option value="3">Examination</option>
                    </select>
                </div>
                <div>
                    <label>Class</label>
                    <br />
                    <input type="text" name="classSelected" value={ state.classSelected } onChange={ onChangeEvent } />
                </div>
            </div>

            <div className="flex">
                <div>
                    <label>Subject</label>
                    <br />
                    <input type="text" name="subject" value={ state.subject } onChange={ onChangeEvent } />
                </div>
                <div>
                    <label>Term</label>
                    <br />
                    <input type="text" name="term" value={ state.term } onChange={ onChangeEvent } />
                </div>
            </div>

            <div className="flex">
                <div>
                    <label>Week</label>
                    <br />
                    <input type="text" name="week" value={ state.week } onChange={ onChangeEvent } />
                </div>
                <div>
                    <label>Topic</label>
                    <br />
                    <input type="text" name="topic" value={ state.topic } onChange={ onChangeEvent } />
                </div>
            </div>


            <br />
            <div className="question">
                <label>Questions</label>
                <br />
                {state.questions.map((shareholder, idx) => (
                    <div className="shareholder">
                        <div className="quest">
                            <div className="quest-in">
                                <input
                                    type="text"
                                    key={idx + 1}
                                    placeholder={`question`}
                                    value={shareholder.question}
                                    onChange={handleShareholderQuestionChange(idx)}
                                />
                                <input
                                    type="text"
                                    key={idx + 1}
                                    placeholder={`answerA`}
                                    value={shareholder.answerA}
                                    onChange={handleShareholderAnsweraChange(idx)}
                                />
                                <input
                                    type="text"
                                    key={idx + 1}
                                    placeholder={`answerB`}
                                    value={shareholder.answerB}
                                    onChange={handleShareholderAnswerbChange(idx)}
                                />
                                <input
                                    type="text"
                                    key={idx + 1}
                                    placeholder={`answerC`}
                                    value={shareholder.answerC}
                                    onChange={handleShareholderAnswercChange(idx)}
                                />
                            </div>
                            <div className="quest-in">
                                <input
                                    type="text"
                                    key={idx + 1}
                                    placeholder={`answerD`}
                                    value={shareholder.answerD}
                                    onChange={handleShareholderAnswerdChange(idx)}
                                />
                                <input
                                    type="text"
                                    key={idx + 1}
                                    placeholder={`correctAnswer`}
                                    value={shareholder.correctAnswer}
                                    onChange={handleShareholderCorrectAnswerChange(idx)}
                                />
                                <input
                                    type="text"
                                    key={idx + 1}
                                    placeholder={`correction`}
                                    value={shareholder.correction}
                                    onChange={handleShareholderCorrectionChange(idx)}
                                />
                                <input
                                    type="text"
                                    key={idx + 1}
                                    placeholder={`correctionImage`}
                                    value={shareholder.correctionImage}
                                    onChange={handleShareholderCorrectionImageChange(idx)}
                                />
                            </div>
                        </div>
                        <button type="button" onClick={handleRemoveShareholder(idx)} className="small">-</button>
                    </div>
                ))}
                <button type="button" onClick={handleAddShareholder} className="small left">Add Question</button>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default App
