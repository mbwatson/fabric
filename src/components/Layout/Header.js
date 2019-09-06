import styled from 'styled-components'

export const Header = styled.header`
    // & * {border: 1px solid #f99;}
    // background-color: var(--color-dark);
    padding: 0;
    display: flex;
    justify-content: center;
    padding: 3rem;
    z-index: 2;
    background: repeating-linear-gradient(
        140deg,
        var(--color-black),
        var(--color-black) 50vmax,
        #000 50vmax,
        #000 150vmax
    );
    background-attachment: fixed;
`
