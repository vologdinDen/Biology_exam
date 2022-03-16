import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const first_question = Math.floor(Math.random() * 660);

export default function App(){

  const [currentValue, setValue] = useState(null)
  const [checked, setChecked] = useState([])
  
  const [currentQuestion, setCurrentQuestion] = useState(first_question);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const [question, setQuestion] = useState(null);
  const question_url = `http://127.0.0.1:8000/api/question/${currentQuestion}/`
  
  useEffect(() =>{
    axios.get(question_url)
    .then(result => {
      setQuestion(result.data)
  })  }, [question_url])

  const NextQuestionClick = (value, checked) => {
    
    if (checked.length > 0){
      let add_to_score = 0

      checked.map(el => {
        if (el.is_True){
          add_to_score++;         
        }
      })       
      setScore(score + add_to_score)
      add_to_score = 0;

      setChecked(checked.filter( (el) => !checked.includes(el)));
    }else if(typeof value === 'object' && value !== null){
      if (value.is_True){
        setScore(score + 1);
      }
      setValue(null);
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < first_question + 60){
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }
  };


  const add_to_checked = (value) =>{
    if (checked.includes(value)){
      setChecked(checked.filter(item => item !== value));      
    }else{
      setChecked(checked.concat(value));
    }
  };

  const reload_test = () =>{
    window.location.reload();
  }

  if (question){

    let true_answers = 0;

    question.answers.map((answer) =>{
      if (answer.is_True){
        true_answers = true_answers + 1;
      }
    })

    return (
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
            Решено правильно: {score / 60 * 100}%
            <div className='restart_button'>
              <button onClick={reload_test}>Начать заново?</button>
            </div>
          </div>
        ) : (
          <>
            <div className='question_section'>
              <div className='question_count'>
                <span>Вопрос номер {currentQuestion}</span>
              </div>
              <div className='question_text'>{question.question_text}</div>
            </div>
            {question.have_image ? (
                <div className='image_section'>
                  <img src={require(`./assets/images/${question.image_number}`)}/>
                </div>
              ) : (
                <></>
              )}
              {true_answers == 1 ? (
                <div className='answer_section'>
                  {question.answers.map((answer) => (
                    <div className='answer_choise' key={answer.id}>
                      <input type='radio' id={answer.id} className='radio_btn' value={answer.answer} name='radio_values' onChange={(e) => setValue(answer)}/>
                      <label for={answer.id}>{answer.answer}</label>
                    </div>
                ))}
                </div>
              ) : (
                <div className='answer_section'>
                  {question.answers.map((answer) => (
                    <div className='answer_choise' key={answer.id}>
                      <input type='checkbox' id={answer.id} className='checkbox_btn' value={answer.answer} onChange={(e) => add_to_checked(answer)} name='check_values'/>
                      <label for={answer.id}>{answer.answer}</label>
                    </div>
                  ))}
                </div>
              )}
              <button className='next_question_button' onClick={() => NextQuestionClick(currentValue, checked)}>Следующий вопрос</button>
          </>
        )}
      </div>
    )
  }else{
    return(
      <></>
    )
  }

};
