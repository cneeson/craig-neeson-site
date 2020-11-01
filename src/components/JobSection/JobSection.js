import React, { Fragment } from 'react';
import { Flex } from '../Flex';
import { P } from '../P';
import { H4, H5 } from '../Typography';
import { Image } from '../Image';
import Link from '../Link';


const JobSection = (props) => {
    const {
        keyPoints,
        role,
        roleLength,
        employer,
        imgSrc,
        imgAlt,
        description,
        href
    } = props;

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
                    <P size='small' color='grey'>{roleLength}</P>
                </div>
            </Flex>

            {keyPoints && (
                <Fragment>
                    {/* <H4>Key Points</H4> */}
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
