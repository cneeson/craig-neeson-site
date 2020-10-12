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

            {/* <H4>Overview</H4>
            <P>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </P> */}
        </Fragment>
    );
};

export {
    JobSection
};
