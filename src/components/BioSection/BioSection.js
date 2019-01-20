import React from 'react'
import { Section, Header, Content, Visual, VisualWrapper } from './Styled';

function BioSection(props) {
    return (
        <Section>
            <VisualWrapper>
                {/* <Visual
                    fixed={props.visualSource}
                    alt={`${props.title} image`}
                /> */}
            </VisualWrapper>
            <Header>{props.title}</Header>
            <Content>{props.content}</Content>
        </Section>
    )
}

export default BioSection
