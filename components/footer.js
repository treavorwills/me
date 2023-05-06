import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';


export default function Footer() {
    return (
        <>
        <p>FOOTER</p>
        <a className="mx-3" href='https://www.linkedin.com/in/treavorwills/' target="_blank">
                    <FaLinkedin size="3em" color="black" title="Linkedin icon link to Treavor's Linkedin profile" />
                </a>
                <a className="mx-3" href='https://github.com/treavorwills' target="_blank">
                    <FaGithub size="3em" color="black" title="Github icon link to Treavor's Github profile" />
                </a>
                <a className="mx-3" href='#' target="_blank">
                    <FaFileAlt size="3em" color="black" title="Envelop icon link to email Treavor" />
                </a>
        </>
    );
}