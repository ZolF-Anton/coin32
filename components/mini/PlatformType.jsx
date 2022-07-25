import React from 'react';
import styled from 'styled-components';
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaLinux,
    FaApple,
    FaAndroid,
    FaFirefoxBrowser,
} from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';

const PlatformList = styled.span`
    display: inline-block;
    margin: 0 3px;
`;

export const PlatformType = ({ platformName }) => {
    const iconPicker = (name) => {
        switch (name) {
            case 'PC':
                return (
                    <PlatformList>
                        <FaWindows />
                    </PlatformList>
                );
            case 'PlayStation':
                return (
                    <PlatformList>
                        <FaPlaystation />
                    </PlatformList>
                );
            case 'Xbox':
                return (
                    <PlatformList>
                        <FaXbox />
                    </PlatformList>
                );
            case 'Linux':
                return (
                    <PlatformList>
                        <FaLinux />
                    </PlatformList>
                );
            case 'Nintendo':
                return (
                    <PlatformList>
                        <SiNintendoswitch />
                    </PlatformList>
                );
            case 'IOS':
                return (
                    <PlatformList>
                        <FaApple />
                    </PlatformList>
                );
            case 'Android':
                return (
                    <PlatformList>
                        <FaAndroid />
                    </PlatformList>
                );
            case 'Web':
                return (
                    <PlatformList>
                        <FaFirefoxBrowser />
                    </PlatformList>
                );
            case 'Apple Macintosh':
                return (
                    <PlatformList>
                        <FaApple />
                    </PlatformList>
                );

            default:
                return name;
        }
    };
    return <>{iconPicker(platformName)}</>;
};
