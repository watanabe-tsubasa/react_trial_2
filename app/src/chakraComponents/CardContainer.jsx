import React, { useState, useEffect } from "react"
import { Box, Flex } from "@chakra-ui/react";
import { ModalCard } from "./chakraComponents/ModalCard";

export const CardContainer = () => {

  const [dataList, setDataList] = useState([]);

  const dataFetcher = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const json = await res.json();
    console.log(json);
    setDataList(json);
  }

  useEffect(() => {
    dataFetcher()
  }, [])

  return ( 
    dataList.length === 0 ? 
    <Box>
      <p>データ取得中</p>
    </Box> :
    <Box>
      <Flex flexWrap="wrap">
        {dataList.map((elem, idx) => {
          return (
            <ModalCard
             key={idx}
             title={elem.title}
             image={elem.thumbnailUrl}
             imageUrl={elem.url} // 大きな画像のURLをpropsで渡す
            />
          )
        })}
      </Flex>
    </Box>
  );
}