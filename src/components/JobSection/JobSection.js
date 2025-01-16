import React, { Fragment } from 'react';
import humanizeDuration from 'humanize-duration';
import moment, { isMoment } from 'moment';
import { Flex } from '../Flex';
import { P } from '../P';
import { H4, H5 } from '../Typography';
import { Image } from '../Image';
import Link from '../Link';
import styled from "styled-components";


const Wrapper = styled.div`
    ${({ mb }) => mb ? `margin-bottom: ${mb};` : ''}
`;

const Ul = styled.ul`
    li {
        margin-bottom: .5rem;
    }
`;

const options = {
    units: ['y', 'mo'],
    round: true,
    delimiter: ' ',
    language: 'shortEn',
    languages: {
        shortEn: {
        y: (count) => `year${count > 1 ? 's' : ''}`,
        mo: (count) => `month${count > 1 ? 's' : ''}`,
        },
    },
};

const JobSection = (props) => {
    const {
        keyPoints,
        role,
        startDate,
        endDate,
        employer,
        imgSrc,
        imgAlt,
        description,
        href,
        mb
    } = props;

    const start = moment(startDate).valueOf();
    const end = moment(endDate).valueOf();
    const timeSinceStart = humanizeDuration(end - start, options);
    const startFormatted = moment(startDate).format('MMM YYYY');
    const endFormatted = moment(endDate).format('MMM YYYY');
    const isCurrent = !isMoment(endDate);

    return (
        <Wrapper mb={mb ? '1.5rem' : '2rem'}>
            <Flex alignItems='center' mb='1rem'>
                <Flex width='90px'>
                    <Image src={imgSrc} alt={imgAlt} borderRadius='4px' width='70px' />
                </Flex>
                <div>
                    <Link href={href} target='_blank' fancyHover>
                        <H4 mb='.75rem'>{employer}</H4>
                    </Link>
                    <H5 mb='0'>{role}</H5>
                    <P size='small' color='grey'>{`${startFormatted} - ${isCurrent ? 'Present' : endFormatted} | ${timeSinceStart}`}</P>
                </div>
            </Flex>

            {keyPoints && (
                <Fragment>
                    <Ul>
                        {keyPoints.map((point) => (
                            <li>
                                <P>
                                    {point}
                                </P>
                            </li>
                        ))}
                    </Ul>
                </Fragment>
            )}

            {description && (
                <P>
                    {description}
                </P>
            )}
        </Wrapper>
    );
};

export {
    JobSection
};
