import styled from 'styled-components'

export const Content = styled.div`
    padding: ${ props => props.compact ? '2rem' : '1rem' };
    line-height: ${ props => props.compact ? 3 : 2 };
    transition: padding 250ms;
    flex: 1;
    filter: ${ props => props.dimmed ? 'opacity(0.25)' : '' };
    transition: filter 250ms, padding 250ms;
    width: 100%;
    margin: 0 auto;
    a {
        color: var(--color-primary);
        border-bottom: 1px solid var(--color-primary);
        transition: filter 250ms;
        &:hover {
            filter: brightness(50%);
        }
    }
`
