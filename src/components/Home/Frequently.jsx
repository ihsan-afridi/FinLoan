import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import img3 from '../../assets/img3.jpg';

const Frequently = () => {
  const [open, setOpen] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
  });

  const toggle = (question) => {
    setOpen((prevState) => ({ ...prevState, [question]: !prevState[question] }));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
      }}
    >
      {/* Left Side: Image */}
      <div
        style={{
          flex: '1',
          maxWidth: '500px',
          margin: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={img3}
          alt="FAQ"
          style={{
            borderRadius: '10px',
            width: '100%',
            maxWidth: '500px',
            height: 'auto',
            maxHeight: '500px',
          }}
        />
      </div>

      {/* Right Side: FAQ Questions */}
      <div
        style={{
          flex: '1',
          maxWidth: '500px',
          margin: '10px',
        }}
      >
        <h1 style={{ marginBottom: '20px', fontSize: '30px', fontWeight: 'bold' }}>
          Frequently Ask
        </h1>

        {/* FAQ Items */}
        {[
          { key: 'question1', question: 'Adieus who esteem it luckily?', answer: 'Esteem spirit temper too say adieus who direct esteem, esteems luckily, or picture placing drawing.' },
          { key: 'question2', question: 'Who direct esteem it esteems?', answer: 'Spirit temper too, say adieus who direct esteem, esteems luckily, or picture placing drawing.' },
          { key: 'question3', question: 'Duis consectetur feugiat auctor?', answer: 'Esteem spirit temper too, say adieus who direct esteem, esteems luckily, or picture placing drawing.' },
          { key: 'question4', question: 'Consectetur feugiat auctor?', answer: 'Esteem spirit temper too, say adieus who direct esteem, esteems luckily, or picture placing drawing.' },
        ].map(({ key, question, answer }) => (
          <div key={key} style={{ marginBottom: '15px' }}>
            <div
              onClick={() => toggle(key)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                color: '#333',
                marginBottom: '5px',
              }}
            >
              <h5 style={{ margin: '0', fontSize: '18px', fontWeight: 'bold' }}>{question}</h5>
              <FaChevronDown
                style={{
                  transform: open[key] ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.3s',
                  fontSize: '18px',
                }}
              />
            </div>
            <div
              style={{
                overflow: 'hidden',
                maxHeight: open[key] ? '100px' : '0',
                transition: 'max-height 0.3s ease',
                color: '#555',
              }}
            >
              <p style={{ marginTop: '10px', marginBottom: '0', fontSize: '16px', lineHeight: '1.5' }}>{answer}</p>
            </div>
            <hr style={{ border: '1px solid #ddd', margin: '10px 0' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frequently;
