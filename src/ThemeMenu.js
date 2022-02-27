import styled from "styled-components";

function Menu({setTheme}) {
    
    return(
        <MenuStyled>
            <div className="buttons">
                <div className="button" onClick={()=>setTheme('light')}>
                    <div className="circlelight"/>
                </div>
                <div className="button" onClick={()=>setTheme('cosmic')}>
                    <div className="circlecosmic"/>
                </div>
                <div className="button" onClick={()=>setTheme('cottoncandy')}>
                    <div className="circlecottoncandy"/>
                </div>
                <div className="button" onClick={()=>setTheme('chocotree')}>
                    <div className="circlechocotree"/>
                </div>
                <div className="button" onClick={()=>setTheme('ocean')}>
                    <div className="circleocean"/>
                </div>

            </div>
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .buttons{
        padding: 10px 2rem;
        display: flex;
        align-items: center;
        background-color: var(--text1);
        border-radius: 10px;
        .button{
            display: flex;
            align-items: center;
            cursor: pointer;
            &:not(:last-child){
                margin-right: 2rem;
            }
            .circlelight{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 30%;
                background-color: #FFF8F3;
                margin-right: auto.3rem;
                display: flex;
                align-items: center;
            }
            .circlecosmic{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 30%;
                background-color: #1A1A40;
                margin-right: auto.3rem;
                display: flex;
                align-items: center;
            }
            .circlecottoncandy{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 30%;
                background-color: #FFAFAF;
                margin-right: auto.3rem;
                display: flex;
                align-items: center;
            }
            .circlechocotree{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 30%;
                background-color: #464E2E;
                margin-right: auto.3rem;
                display: flex;
                align-items: center;
            }
            .circleocean{
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 30%;
                background-color: #7C83FD;
                margin-right: auto.3rem;
                display: flex;
                align-items: center;
            }
            
        }
    }
`;

export default Menu;