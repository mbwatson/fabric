import styled from 'styled-components'

export const MiniBrand = styled.div`
    font-family: var(--font-heading);
    font-weight: normal;
    font-size: 150%;
    letter-spacing: 5px;
    padding: 0 0 0 1rem;
    color: var(--color-light);
    transition: color 250ms, ${ props => props.visible
        ? 'transform 750ms, opacity 2000ms'
        : 'transform 2000ms, opacity 750ms'
    };
    position: absolute;
    right: 100%;
    transform: translateX(${ props => props.visible ? '100%' : '0%' });
    opacity: ${ props => props.visible ? 1.0 : 0.0 };
    &:hover {
        color: var(--color-dark);
    }
`
