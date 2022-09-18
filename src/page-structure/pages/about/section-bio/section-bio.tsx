// @ts-nocheck
import { useRef, useState } from 'react';

import { chatIcon, avatarIcon } from 'assets/icons';
import { Text, Button, Toast } from 'components';
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

    setToastTitle('Copiado :D');
    setToastDescription('Você pode enviar o link para qualquer pessoa!');
    setShowToast(true);
  };

  const downloadPhoto = () => {
    setToastTitle('Baixando...');
    setToastDescription(
      'Você pode utilizar essa foto em qualquer material relacionado.'
    );
    setShowToast(true);
  };

  return (
    <s.BioWrapper>
      <Text as="h2">Biografia</Text>

      <div>
        <Text>
          Esse conteúdo foi criado para organizadores de eventos, entrevistas e
          palestras. É só copiar e colar.
        </Text>
        <Text as="blockquote">
          <Text>{description}</Text>
        </Text>

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
            Copiar Bio
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
            Baixar Foto
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
