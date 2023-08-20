import React from 'react';
import { Box, Card, CardBody, Divider, Flex, Heading, Image, Stack } from "@chakra-ui/react"

export const ModalCard = (props) => {
  const { title, image, imageUrl } = props; // propsに追加で定義する

    // 画像を開く関数を定義する
  const onClickImage = () => {
    const newWindow = window.open(imageUrl, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }

  return (
    <Box m='0.5rem'>
      <Card width='250px' height='320px'>
        <CardBody>
          <Flex mb='0.5rem' justify='center' align='center'>
            <Image
              onClick={onClickImage}
              src={image}
              alt={title}
              borderRadius='lg'
            />
          </Flex>
          <Divider/>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}