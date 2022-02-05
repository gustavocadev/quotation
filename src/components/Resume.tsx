import styled from "@emotion/styled";

const ResumeComponent = styled.section`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

type Data = {
    brand: string;
    year: number;
    plan: string;
};

type ResumeProps = {
    data: Data;
};

const Resume = ({ data }: ResumeProps) => {
    console.log(data);
    const { brand, plan, year } = data;
    return (
        <ResumeComponent>
            <h2>Resumen de la cotización</h2>
            <ul style={{ textTransform: "capitalize" }}>
                <li>Marca: {brand}</li>
                <li>Plan: {plan}</li>
                <li>Año del auto: {year}</li>
            </ul>
        </ResumeComponent>
    );
};

export default Resume;
