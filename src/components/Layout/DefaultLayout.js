import styled from 'styled-components'
import surface from '../../images/surface.svg'

export const DefaultLayout = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: repeating-linear-gradient(
        140deg,
        var(--color-whiter),
        var(--color-whiter) 50vmax,
        var(--color-white) 50vmax,
        var(--color-white) 150vmax
    );
`