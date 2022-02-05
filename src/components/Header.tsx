import styled from "@emotion/styled";

type HeaderProps = {
    title: string;
};

const HeaderContainer = styled.header`
    background-color: #26c6da;
    padding: 10px;
    font-weight: bold;
    color: #fff;
`;

const HeaderText = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: "Slabo 27px";
    text-align: center;
`;

const Header = ({ title }: HeaderProps) => {
    return (
        <HeaderContainer>
            <HeaderText>{title}</HeaderText>
        </HeaderContainer>
    );
};

export default Header;
