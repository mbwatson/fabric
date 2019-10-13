import styled from 'styled-components'

export const DefaultLayout = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: repeating-linear-gradient(
        140deg,
        var(--color-white),
        var(--color-white) 50vmax,
        var(--color-light) 50vmax,
        var(--color-light) 150vmax
    );
    background-attachment: fixed;
`