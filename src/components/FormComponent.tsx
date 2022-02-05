import styled from "@emotion/styled";
import {
    ChangeEvent,
    Dispatch,
    FormEvent,
    FormEventHandler,
    SetStateAction,
    useState,
} from "react";
import getDifferenceBetweenYears from "../helpers/getDifference";
import calculateBrand from "../helpers/calculateBrand";
import getPlan from "../helpers/getPlan";

type ResumeType = {
    cotizacion: number;
    data: {
        brand: string;
        year: number;
        plan: string;
    };
};

type FormProps = {
    setResume: Dispatch<SetStateAction<ResumeType>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
};

const Field = styled.section`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    gap: 1rem;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const Button = styled.button`
    background-color: #00838f;
    font-size: 1rem;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #26c6da;
    }
`;

const Error = styled.div`
    background-color: #dc143c;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
`;

const FormComponent = ({ setResume, setLoading }: FormProps) => {
    const [data, setData] = useState({
        brand: "",
        year: "",
        plan: "",
    });
    const [error, setError] = useState(false);

    const { brand, year, plan } = data;

    const handleChange = (
        e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
            setError(true);
            return;
        }
        setError(false);
        // base of 2000
        let result = 2000;

        // get difference between  the years
        let quantityOfYears = getDifferenceBetweenYears(Number(year));

        // for every year we need to decrement the 3%
        result -= (3 / 100) * result * quantityOfYears;

        // apply increment
        result *= calculateBrand(brand);

        result *= getPlan(plan);

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setResume({
                cotizacion: Number(result.toFixed(2)),
                data: {
                    brand,
                    year: Number(year),
                    plan,
                },
            });
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <Field>
                <Label>Marca</Label>
                <Select name="brand" value={brand} onChange={handleChange}>
                    <option value="">--Seleccione--</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Field>

            <Field>
                <Label>Año</Label>
                <Select name="year" value={year} onChange={handleChange}>
                    <option value="">-- Seleccione --</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <input
                    type="radio"
                    name="plan"
                    value="basic"
                    onChange={handleChange}
                    id="basic"
                />
                <label htmlFor="basic">Basico</label>
                <input
                    type="radio"
                    name="plan"
                    value="completo"
                    onChange={handleChange}
                    id="completo"
                />
                <label htmlFor="completo">Completo</label>
            </Field>

            <Button type="submit">Cotizar</Button>
        </form>
    );
};

export default FormComponent;
