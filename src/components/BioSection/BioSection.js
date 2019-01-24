import React from 'react'
import { Section, Header, Content, Visual, VisualWrapper } from './Styled';

function BioSection(props) {
    const { visualSource, title, content } = props
    return (
        <Section>
            {visualSource && (
                <VisualWrapper>
                    <Visual
                        src={visualSource}
                        alt={`${title} image`}
                    />
                </VisualWrapper>
            )}
            <Header>{title}</Header>
            <Content>{content}</Content>
        </Section >
    )
}

export default BioSection
