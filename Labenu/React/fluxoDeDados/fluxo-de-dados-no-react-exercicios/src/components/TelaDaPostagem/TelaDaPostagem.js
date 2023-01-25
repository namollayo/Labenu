import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = ({dataPhoto}) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{dataPhoto.title}</TitleHeader>
      <Image src={dataPhoto.photoPost} />
      <Description>{dataPhoto.description}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
