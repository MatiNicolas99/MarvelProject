import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css"

export const SearchCharacter = ({placeholder}) => {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searchedCharacter/' + input);
    };
    return (
        <>
            <form className="container" onSubmit={submitHandler}>
                <input 
                type="text" 
                placeholder={placeholder}
                onChange={(e) => setInput(e.target.value)} 
                typeof="text" 
                value={input} />
                <div className="search"></div>
            </form>
        </>
    )
}
