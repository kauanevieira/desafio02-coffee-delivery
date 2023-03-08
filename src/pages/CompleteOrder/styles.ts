import styled from 'styled-components'

export const CompleteOrderContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
