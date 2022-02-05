import Header from "./components/Header";
import styled from "@emotion/styled";
import FormComponent from "./components/FormComponent";
import { useState } from "react";
import Resume from "./components/Resume";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

const Container = styled.main`
    max-width: 600px;
    margin: 0 auto;
`;

const FormContainer = styled.section`
    background-color: #fff;
    padding: 3rem;
`;

const Message = styled.p`
    background-color: rgb(127 127 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

type Data = {
    brand: string;
    year: number;
    plan: string;
};

type ResumeType = {
    cotizacion: number;
    data: Data;
};

const App = () => {
    const [resume, setResume] = useState<ResumeType>({
        cotizacion: 0,
        data: {
            brand: "",
            year: 0,
            plan: "",
        },
    });

    const [loading, setLoading] = useState(false);

    const { data, cotizacion } = resume;
    return (
        <Container>
            <Header title="Cotizador de seguros" />
            <FormContainer>
                <FormComponent setResume={setResume} setLoading={setLoading} />
                {loading && <Spinner />}
                {data.brand !== "" && !loading && <Resume data={data} />}

                {cotizacion !== 0 && !loading && (
                    <Result cotizacion={cotizacion} />
                )}

                {!loading && cotizacion === 0 && (
                    <Message>Elige marca, año,y tipo de seguro</Message>
                )}
            </FormContainer>
        </Container>
    );
};

export default App;
