import { useRef, useState } from "react";
import './Faq.css'; // Import your CSS file

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState('0px');
  const {faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="faq-card space-y-3 mt-5 overflow-hidden border-b faq"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between  text-gray-700 font-medium" style={{fontSize:'20px'}}>
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300 answer"
        style={state ? { height: answerH } : { height: '0px' }}
      >
        <div>
          <p className="text-gray-500" style={{fontSize:'15px'}}>
            {faqsList.a}
          </p>
        </div>
      </div>
    </div>
  );
};

const FaqsSection = () => {
  const faqsList = [
    {
      q: "What is AniLearn?",
      a: "AniLearn is an online platform offering visual learning videos. Students can suggest topics, and educators create videos based on those suggestions."
    },
    {
      q: "How does AniLearn work?",
      a: "Students submit topic suggestions, and educators create video content based on those suggestions. The platform serves as a collaborative space for learning through visual content."
    },
    {
      q: "What kind of subjects does AniLearn specialize in?",
      a: "AniLearn specializes in subjects like development, DevOps, cybersecurity, and data science, providing in-depth visual learning resources for each."
    },
    {
      q: "Can I find beginner-level content on AniLearn?",
      a: "Yes, AniLearn offers content tailored for beginners in each subject area, providing foundational knowledge and gradually progressing to more advanced topics."
    },
    {
      q: "Are AniLearn videos accessible to everyone?",
      a: "Yes, AniLearn videos are accessible to all registered users. Whether you're a student seeking knowledge or an educator sharing expertise, you can benefit from the platform's resources."
    }
  ];

  return (
    <section className="faq-section leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 faq_font" >
      
        <h1 className="title_heading_faq">
          Frequently Asked Questions
        </h1>
      
      <div className=" mx-auto" style={{marginTop:'50px',marginBottom:'50px',maxWidth:'72rem'}}>
        {faqsList.map((item, idx) => (
          <FaqsCard
            idx={idx}
            faqsList={item}
          />
        ))}
      </div>
    </section>
  );
};

export default FaqsSection;
