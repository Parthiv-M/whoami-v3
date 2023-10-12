import styled from 'styled-components'

const SkillsWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SkillCascadeCard = styled.div`
    p {
        @media only screen and (max-width: 768px) {
            margin-top: 16px;
        }
    }

    margin: 20px 0;
`

const IconsCascade = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 7px;

    h1 {
        display: inline;
        font-weight: light;
        font-size: 4rem;
        margin-right: 20px;
        font-weight: bold;

        ${SkillCascadeCard}:hover & {
            background-image: linear-gradient(220deg, #ff0844 0%, #ffb199 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        @media only screen and (max-width: 768px) {
            display: block;
            margin: 0;
        }
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
`

export { SkillsWrapper, SkillCascadeCard, IconsCascade }
