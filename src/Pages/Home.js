import React, { useState } from 'react'
import { useQuizContext } from '../Context/useContext'
import { useEffect } from 'react'
import QuizType from '../Components/QuizType'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyball, faRocket, faHourglassHalf, faUser, faAngleLeft, faLandmarkDome, faHippo, faSquareRootVariable, faPaintbrush, faMusic, faBook } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
export default function Home() {

    const { category, setCategory, quizQuestions, setQuizQuestions,setCorrectCount,setWrongCount,setCurrentQuestionIndex,name } = useQuizContext()
    const [categorySelected, setCategorySelected] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        // Fetch quiz questions when the component mounts
        fetchQuizQuestions(category);
        setCorrectCount(0);
        setWrongCount(0);
        setCurrentQuestionIndex(0)
    }, [category]);

    const fetchQuizQuestions = async (category) => {
        try {
            const response = await fetch(
                `https://opentdb.com/api.php?amount=10&category=${category}`
            );
            const data = await response.json();
            setQuizQuestions(data.results);
        } catch (error) {
            console.error('Error fetching quiz questions:', error);
        }
    };

    const handleClick = (categoryId) => {
        setCategory(categoryId);
        setCategorySelected(true)
    }



    return (
        <div className='max-w-sm m-auto h-screen shadow-md shadow-black '>
            <div className="flex max-w-sm ">
                <div className=" w-screen bg-gray-800  rounded-3xl pt-8 h-1/3 p-4 shadow-lg">
                    <div className="flex justify-between ">
                        <div className="text-2xl text-bold text-white">{<FontAwesomeIcon icon={faAngleLeft} size='lg' />}</div>
                        <div className="text-center text-white mt-1 font-bold">Hello {name}</div>
                        <div ><FontAwesomeIcon icon={faUser} size='lg' color='white' /></div>

                    </div>
                    <div className="mt-8 text-white">Popular</div>
                    <div className="flex justify-between   mt-4">
                        <div onClick={() => handleClick(21)} className={`cursor-pointer ${category === 21 ? 'border-orange-600 border-2 rounded-lg' : 'border-white border-2 rounded-lg'}`}>
                            <QuizType
                                name="Sports"
                                icon={<FontAwesomeIcon icon={faVolleyball} size="2xl" color="orange" />}
                            />
                        </div>
                        <div onClick={() => handleClick(23)} className={`cursor-pointer ${category === 23 ? 'border-orange-600 border-2 rounded-lg' : 'border-white border-2 rounded-lg'}`}>
                            <QuizType
                                name="History"
                                icon={<FontAwesomeIcon icon={faHourglassHalf} size="2xl" color="orange" />}
                            />
                        </div>
                        <div onClick={() => handleClick(17)} className={`cursor-pointer ${category === 17 ? 'border-orange-600 border-2 rounded-lg' : 'border-white border-2 rounded-lg'}`}>
                            <QuizType
                                name="Space"
                                icon={<FontAwesomeIcon icon={faRocket} size="2xl" color="orange" />}
                            />
                        </div>

                        {/* <QuizType name="History" icon={<FontAwesomeIcon icon={faRocket} size='2xl' color='orange' />} /> */}
                        {/* <QuizType name="Space" icon={<FontAwesomeIcon icon={faHourglassHalf} size='2xl' color='orange' />} /> */}
                    </div>

                </div>
            </div>
            <div className='flex flex-col mx-w-sm '>
                <div className="rounded-xl  h-1/3 p-4 mx-4">
                    <p className=' text-white '>Explore</p>
                    <div className="flex justify-between  mt-2">
                        <div onClick={() => handleClick(24)} className={`cursor-pointer ${category === 24 ? 'border-orange-600 border-2 rounded-lg' : 'border-white border-2 rounded-lg'}`}>
                            <QuizType
                                name="Poilitics"
                                // icon={<FontAwesomeIcon icon={faVolleyball} size="2xl" color="orange" />}
                                icon={<FontAwesomeIcon icon={faLandmarkDome} size="2xl" color="orange" />}
                            />
                        </div>
                        <div onClick={() => handleClick(17)} className={`cursor-pointer ${category === 17 ? 'border-orange-600 border-2 rounded-lg' : 'border-white border-2 rounded-lg'}`}>
                            <QuizType
                                name="Space"
                                icon={<FontAwesomeIcon icon={faRocket} size="2xl" color="orange" />}
                            />
                        </div>
                        <div onClick={() => handleClick(19)} className={`cursor-pointer ${category === 19 ? 'border-orange-600 border-2 rounded-lg' : 'border-white border-2 rounded-lg'}`}>
                            <QuizType

                                name="Maths"
                                icon={<FontAwesomeIcon icon={faSquareRootVariable} size="2xl" color="orange" />}
                            />
                        </div>
                    </div>
                    <div />
                </div>
                <div className="rounded-xl pt-4 h-1/3 p-4 mx-4 mx-w-sm">

                    <div className="flex justify-between  ">
                        <div onClick={() => handleClick(25)} className={`cursor-pointer ${category === 25 ? 'border-orange-600 border-2 rounded-lg' : 'border-white border-2 rounded-lg'}`}>
                            <QuizType
                                name="Art"
                                icon={<FontAwesomeIcon icon={faPaintbrush} size="2xl" color="orange" />}
                            />
                        </div>
                        <div onClick={() => handleClick(10)} className={`cursor-pointer ${category === 10 ? 'border-orange-600 border-2 rounded-lg' : 'border-white border-2 rounded-lg'}`}>
                            <QuizType
                                name="Books"
                                icon={<FontAwesomeIcon icon={faBook} size="2xl" color="orange" />}
                            />
                        </div>
                        <div onClick={() => handleClick(12)} className={`cursor-pointer ${category === 12 ? 'border-orange-600 border-2 rounded-lg' : 'border-white border-2 rounded-lg'}`}>
                            <QuizType
                                name="Music"
                                icon={<FontAwesomeIcon icon={faMusic} size="2xl" color="orange" />}
                            />
                        </div>
                    </div>
                    <div />
                </div>
                <div className="rounded-xl pt-4 h-1/3 p-4 mx-4 mx-w-sm">

                    <div className="flex justify-between  ">
                        <div onClick={() => handleClick(21)} className={`cursor-pointer ${category === 21 ? 'border-orange-600 border-2 rounded-lg' : 'border-white border-2 rounded-lg'}`}>
                            <QuizType
                                name="Sports"
                                icon={<FontAwesomeIcon icon={faVolleyball} size="2xl" color="orange" />}
                            />
                        </div>
                        <div onClick={() => handleClick(23)} className={`cursor-pointer ${category === 23 ? 'border-orange-600 border-2 rounded-lg' : 'border-white border-2 rounded-lg'}`}>
                            <QuizType
                                name="History"
                                icon={<FontAwesomeIcon icon={faHourglassHalf} size="2xl" color="orange" />}
                            />
                        </div>
                        <div onClick={() => handleClick(27)} className={`cursor-pointer ${category === 27 ? 'border-orange-600 border-2 rounded-lg' : 'border-white border-2 rounded-lg'}`}>
                            <QuizType
                                name="Animals"
                                icon={<FontAwesomeIcon icon={faHippo} size="2xl" color="orange" />}
                            />
                        </div>
                    </div>
                    <div />
                </div>
            </div>
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 border-4 border-red-400 bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer text-white mx-w-sm' onClick={() => { navigate("/quiz") }}>
                Start
            </div>
        </div>

    )
}


