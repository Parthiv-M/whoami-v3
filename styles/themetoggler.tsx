import styled from 'styled-components'

const ToggleWrapper = styled.div`
    padding: 10px;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: 10;
`

const Toggler = styled.input`
    display: none;

    &:checked + .toggle {
        background-color: #272b30;
    }
    &:checked + .toggle:before {
        color: #749ed7;
    }
    &:checked + .toggle:after {
        color: #ffffff;
    }
    &:checked + .toggle .toggle__handler {
        background-color: white;
        transform: translate3d(40px, 0, 0) rotate(0);
    }
    &:checked + .toggle .star--1 {
        width: 2px;
        height: 2px;
        background-color: #ffffff;
    }
    &:checked + .toggle .star--2 {
        width: 4px;
        height: 4px;
        transform: translate3d(-5px, 0, 0);
        background-color: #ffffff;
    }
    &:checked + .toggle .star--3 {
        width: 2px;
        height: 2px;
        transform: translate3d(-7px, 0, 0);
        background-color: #ffffff;
    }
    &:checked + .toggle .star--4,
    input:checked + .toggle .star--5,
    input:checked + .toggle .star--6 {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    &:checked + .toggle .star--4 {
        transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    &:checked + .toggle .star--5 {
        transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    &:checked + .toggle .star--6 {
        transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
`

const Toggle = styled.label.attrs({
    className: 'toggle',
})`
    cursor: pointer;
    display: inline-block;
    position: relative;
    width: 85px;
    height: 40px;
    border-radius: 84px;
    transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
`

const ToggleHandler = styled.span.attrs({
    className: 'toggle__handler',
})`
    display: inline-block;
    position: relative;
    z-index: 1;
    top: 10px;
    left: 3px;
    width: 34px;
    height: 20px;
    background-color: #ff0844;
    border-radius: 50px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotate(0deg);
`

const Star = styled.span`
    position: absolute;
    background-color: #fefefe;
    transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    border-radius: 50%;
`

const StarOne = styled(Star).attrs({
    className: 'star--1',
})`
    top: 10px;
    left: 35px;
    z-index: 0;
    width: 30px;
    height: 3px;
    background-color: #171b1e;
`

const StarTwo = styled(Star).attrs({
    className: 'star--2',
})`
    top: 18px;
    left: 28px;
    z-index: 1;
    width: 30px;
    height: 3px;
    background-color: #171b1e;
`

const StarThree = styled(Star).attrs({
    className: 'star--3',
})`
    top: 27px;
    left: 40px;
    z-index: 0;
    background-color: #171b1e;
    width: 30px;
    height: 3px;
`

const StarFour = styled(Star).attrs({
    className: 'star--4',
})`
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
    top: 16px;
    left: 11px;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
`

const StarFive = styled(Star).attrs({
    className: 'star--5',
})`
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
    top: 30px;
    left: 17px;
    z-index: 0;
    width: 3px;
    height: 3px;
    transform: translate3d(3px, 0, 0);
`

export {
    ToggleWrapper,
    Toggler,
    Toggle,
    ToggleHandler,
    Star,
    StarOne,
    StarTwo,
    StarThree,
    StarFour,
    StarFive,
}
