import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

type ResultProps = {
    cotizacion: number;
};

const TextCotizacion = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;
const ResultCotizacion = styled.section`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #26c60a;
    background-color: rgb(127 224 237);
    margin-top: 1rem;
    position: relative;
`;

const Result = ({ cotizacion }: ResultProps) => {
    return (
        <ResultCotizacion>
            <TransitionGroup component="p" className="resultado">
                <CSSTransition
                    classNames="resultado"
                    key={cotizacion}
                    timeout={{ enter: 500, exit: 500 }}
                >
                    <TextCotizacion>El total es ${cotizacion} </TextCotizacion>
                </CSSTransition>
            </TransitionGroup>
        </ResultCotizacion>
    );
};

export default Result;
