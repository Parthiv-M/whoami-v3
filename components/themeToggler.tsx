import {
    StarFive,
    StarFour,
    StarOne,
    StarThree,
    StarTwo,
    Toggle,
    ToggleHandler,
    ToggleWrapper,
    Toggler,
} from '../styles/themetoggler'

export function ThemeToggler(props: any) {
    return (
        <ToggleWrapper>
            <Toggler
                type="checkbox"
                checked={props?.theme === 'light' ? false : true}
                className="dn"
                id="dn"
                onChange={props?.themeToggler}
            />
            <Toggle htmlFor="dn">
                <ToggleHandler />
                <StarOne />
                <StarTwo />
                <StarThree />
                <StarFour />
                <StarFive />
            </Toggle>
        </ToggleWrapper>
    )
}
