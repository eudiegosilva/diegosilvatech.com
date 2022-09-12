// @ts-nocheck
import { useRef, useState } from 'react';

import { chatIcon, avatarIcon } from 'assets/icons';
import { Typography, Button, Toast } from 'components';
import Lottie from 'lottie-react';

import * as s from './section-bio.styles';

type SectionBioProps = {
  description: string;
};

const SectionBio = ({ description }: SectionBioProps) => {
  const [toastTitle, setToastTitle] = useState('');
  const [toastDescription, setToastDescription] = useState('');
  const [showToast, setShowToast] = useState(false);

  const copyBioRef = useRef();
  const downloadRef = useRef();
  const iconStyle = { width: 24, height: 24, marginRight: 8 };

  const copyBio = e => {
    e.preventDefault();
    navigator.clipboard.writeText(description);

    setToastTitle('Copied :D');
    setToastDescription('You can now paste it anywhere.');
    setShowToast(true);
  };

  const downloadPhoto = () => {
    setToastTitle('Downloading...');
    setToastDescription('You can now add this photo to your fancy site.');
    setShowToast(true);
  };

  return (
    <s.BioWrapper>
      <h2>Bio</h2>

      <div>
        <Typography.Paragraph>
          This content was made for organizers of events, interviews and talks.
          Just copy-and-paste.
        </Typography.Paragraph>
        <blockquote>
          <Typography.Paragraph>{description}</Typography.Paragraph>
        </blockquote>

        <s.ButtonsWrapper>
          <Button
            onClick={copyBio}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={() => copyBioRef.current?.play()}
            onMouseLeave={() => copyBioRef.current?.stop()}
          >
            <Lottie
              lottieRef={copyBioRef}
              style={iconStyle}
              animationData={chatIcon}
              loop={false}
              autoplay={false}
            />
            Copy Bio
          </Button>
          <Button
            as="a"
            download
            role="button"
            href="/assets/images/diegosilvatech.jpg"
            onClick={downloadPhoto}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={() => downloadRef.current?.play()}
            onMouseLeave={() => downloadRef.current?.stop()}
          >
            <Lottie
              lottieRef={downloadRef}
              style={iconStyle}
              animationData={avatarIcon}
              loop={false}
              autoplay={false}
            />
            Download photo
          </Button>
        </s.ButtonsWrapper>
      </div>
      <Toast
        title={toastTitle}
        description={toastDescription}
        variant="success"
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </s.BioWrapper>
  );
};

export { SectionBio };
