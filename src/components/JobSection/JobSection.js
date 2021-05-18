import React, { Fragment } from 'react';
import humanizeDuration from 'humanize-duration';
import moment, { isMoment } from 'moment';
import { Flex } from '../Flex';
import { P } from '../P';
import { H4, H5 } from '../Typography';
import { Image } from '../Image';
import Link from '../Link';


const options = {
    units: ['y', 'mo'],
    round: true,
    delimiter: ' ',
    language: 'shortEn',
    languages: {
        shortEn: {
        y: () => 'yr',
        mo: () => 'mo',
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
        href
    } = props;

    const start = moment(startDate).valueOf();
    const end = moment(endDate).valueOf();
    const timeSinceStart = humanizeDuration(end - start, options);
    const startFormatted = moment(startDate).format('MMM YYYY');
    const endFormatted = moment(endDate).format('MMM YYYY');
    const isCurrent = !isMoment(endDate);

    return (
        <Fragment>
            <Flex alignItems='center'>
                <Flex width='140px'>
                    <Image src={imgSrc} alt={imgAlt} borderRadius='4px' width='95px' />
                </Flex>
                <div>
                    <Link href={href} target='_blank' fancyHover>
                        <H4 mb='.75rem'>{employer}</H4>
                    </Link>
                    <H5 mb='.75rem'>{role}</H5>
                    <P size='small' color='grey'>{`${startFormatted} - ${isCurrent ? 'Present' : endFormatted} | ${timeSinceStart}`}</P>
                </div>
            </Flex>

            {keyPoints && (
                <Fragment>
                    <ul>
                        {keyPoints.map((point) => (
                            <li>
                                <P>
                                    {point}
                                </P>
                            </li>
                        ))}
                    </ul>
                </Fragment>
            )}

            {description && (
                <P>
                    {description}
                </P>
            )}
        </Fragment>
    );
};

export {
    JobSection
};
