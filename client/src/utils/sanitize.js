import DOMPurify from "dompurify";


const sanitize = (text) => {

    return DOMPurify.sanitize(text);

};


export default sanitize;